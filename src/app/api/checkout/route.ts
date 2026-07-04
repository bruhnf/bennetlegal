import { NextResponse } from "next/server";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

/**
 * Mock Stripe Checkout endpoint.
 *
 * This is intentionally stubbed and safe to ship. To go live:
 *   1. `npm install stripe`
 *   2. Set STRIPE_SECRET_KEY (+ a Price ID) in the environment.
 *   3. Replace the mock block below with a real Checkout Session:
 *
 *      import Stripe from "stripe";
 *      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
 *      const session = await stripe.checkout.sessions.create({
 *        mode: "payment",
 *        line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
 *        success_url: `${origin}/portal?checkout=success`,
 *        cancel_url: `${origin}/#contact?checkout=cancel`,
 *      });
 *      return NextResponse.json({ url: session.url });
 */
export const runtime = "nodejs";

export async function POST(request: Request) {
  const ip = getClientIp(request.headers);
  const limit = rateLimit(`checkout:${ip}`, { limit: 10, windowMs: 60_000 });
  if (!limit.ok) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  const liveKey = process.env.STRIPE_SECRET_KEY;

  // ---- Mock mode (no Stripe key configured) ----
  if (!liveKey) {
    return NextResponse.json({
      mock: true,
      message:
        "Stripe is in mock mode. Set STRIPE_SECRET_KEY and a Price ID to enable live payments.",
    });
  }

  // ---- Live mode placeholder ----
  // Real Stripe wiring goes here (see the doc comment above). Until the SDK and
  // a Price ID are added, we return a clear signal rather than a broken redirect.
  return NextResponse.json(
    { error: "Stripe key present but live checkout is not wired yet. See src/app/api/checkout/route.ts." },
    { status: 501 },
  );
}
