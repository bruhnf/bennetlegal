import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { isMailerConfigured, sendContactEmail } from "@/lib/mailer";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

// Contact form runs on the Node.js runtime (AWS SDK needs Node APIs).
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  // Rate limit: 5 requests / minute / IP.
  const ip = getClientIp(request.headers);
  const limit = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 60_000 });
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // Honeypot tripped — pretend success so bots don't learn anything.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  try {
    if (isMailerConfigured()) {
      await sendContactEmail(parsed.data);
    } else {
      // Dev / not-yet-configured fallback: log instead of failing the UX.
      console.warn(
        "[contact] SES not configured — logging submission instead of emailing:",
        JSON.stringify(parsed.data),
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return NextResponse.json(
      { error: "We couldn't send your request. Please email us directly." },
      { status: 502 },
    );
  }
}
