import Link from "next/link";
import { Calendar, Mail, MessageSquare, Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { MockCheckoutButton } from "@/components/mock-checkout-button";

const engageOptions = [
  {
    icon: MessageSquare,
    title: "Request Intelligence",
    body: "Send us the matter. We'll scope an engagement and respond within one business day.",
  },
  {
    icon: Calendar,
    title: "Book a Strategy Call",
    body: "A 30-minute working session with a senior analyst to pressure-test your approach.",
  },
  {
    icon: ShieldCheck,
    title: "Reserve a Sprint",
    body: "A fixed-scope intelligence sprint for time-critical matters — kickoff within 48 hours.",
  },
];

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Bold gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--brand-indigo)_20%,transparent),transparent_60%)]" />
      <div
        className="pointer-events-none absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-brand-teal/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Engage"
          title="Ready for intelligence that"
          highlight="wins?"
          description="Tell us what's at stake. We'll show you what a decisive information advantage looks like — fast, confidential, and built around your matter."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          {/* Left: ways to engage + contact details */}
          <div className="flex flex-col gap-4">
            {engageOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <Reveal key={opt.title}>
                  <div className="flex gap-4 rounded-2xl border border-border bg-card/60 p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold">{opt.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{opt.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}

            <Reveal>
              <div className="rounded-2xl border border-border bg-card/60 p-5">
                <div className="flex flex-col gap-3 text-sm">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="inline-flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail className="h-4 w-4 text-brand-teal" />
                    {siteConfig.contact.email}
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}`}
                    className="inline-flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Phone className="h-4 w-4 text-brand-teal" />
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-xs text-muted-foreground">
                    Prefer to secure a fixed-scope sprint now?
                  </span>
                  <MockCheckoutButton className="rounded-full" priceLabel="Strategy Sprint" />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: the form */}
          <Reveal direction="left">
            <ContactForm />
          </Reveal>
        </div>

        <Reveal>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs text-muted-foreground">
            Bennet Legal Research Group provides research and intelligence services only. We are
            not a law firm and do not provide legal advice or representation. Contacting us does
            not create an attorney-client relationship. For counsel, ask us about our{" "}
            <Link href="/#services" className="underline hover:text-foreground">
              Attorney Referral Network
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
