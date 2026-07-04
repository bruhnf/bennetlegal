"use client";

import * as React from "react";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactSchema, serviceOptions } from "@/lib/validation";

type FieldErrors = Partial<Record<string, string>>;

/**
 * Secure contact / proposal form.
 * - Client-side validation via the shared zod schema (same one the API uses).
 * - Includes a hidden honeypot field to deter bots.
 * - Posts JSON to /api/contact, which emails the team via AWS SES.
 */
export function ContactForm() {
  const [submitting, setSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState<FieldErrors>({});
  const [done, setDone] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };

      if (!res.ok) {
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setDone(true);
      form.reset();
      toast.success("Request received. Our intelligence team will be in touch shortly.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white">
          <Send className="h-6 w-6" />
        </div>
        <h3 className="mt-5 font-heading text-xl font-bold">Request received</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thank you. A member of our intelligence team will reach out within one business day to
          scope your engagement.
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-full"
          onClick={() => setDone(false)}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 sm:p-8"
      noValidate
    >
      {/* Honeypot: hidden from users, catnip for bots. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name" error={errors.name}>
          <Input id="name" name="name" placeholder="Jane Doe" autoComplete="name" />
        </Field>
        <Field label="Work email" htmlFor="email" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jane@firm.com"
            autoComplete="email"
          />
        </Field>
        <Field label="Company / firm" htmlFor="company" error={errors.company} optional>
          <Input id="company" name="company" placeholder="Meridian & Cole LLP" autoComplete="organization" />
        </Field>
        <Field label="Service of interest" htmlFor="service" error={errors.service} optional>
          <select
            id="service"
            name="service"
            defaultValue=""
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            <option value="">Select a service…</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="How can our intelligence help?" htmlFor="message" error={errors.message}>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about the matter, the stakes, and your timeline…"
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-xs text-muted-foreground">
          Encrypted in transit. We never share your details.
        </p>
        <Button
          type="submit"
          disabled={submitting}
          className="w-full rounded-full bg-brand-gradient text-white shadow-lg shadow-brand-indigo/25 sm:w-auto"
        >
          {submitting ? (
            <>
              <Loader2 className="mr-1.5 h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              <Send className="mr-1.5 h-4 w-4" /> Request Intelligence
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={htmlFor} className="text-sm">
        {label}
        {optional && <span className="ml-1 text-xs text-muted-foreground">(optional)</span>}
      </Label>
      {children}
      {error && (
        <p className="text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
