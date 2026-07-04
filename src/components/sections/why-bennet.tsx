import { differentiators } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem, Reveal } from "@/components/reveal";

export function WhyBennet() {
  return (
    <section
      id="why"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* Ambient gradient wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--brand-indigo)_10%,transparent),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Bennet"
              title="The unfair advantage,"
              highlight="engineered"
              description="Great research is table stakes. We built Bennet to deliver something rarer: intelligence fast enough to change the outcome, deep enough to be trusted, and creative enough to surprise the other side."
            />
            <Reveal delay={0.15}>
              <div className="mt-8 rounded-2xl border border-border bg-card/60 p-6">
                <p className="font-heading text-lg font-semibold">
                  &ldquo;We don&apos;t hand you data. We hand you the decision.&rdquo;
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  The operating principle behind every engagement.
                </p>
              </div>
            </Reveal>
          </div>

          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <RevealItem key={item.title}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-indigo/40">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-lg shadow-brand-indigo/25">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
