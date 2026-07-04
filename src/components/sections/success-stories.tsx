import { successStories } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

export function SuccessStories() {
  return (
    <section
      id="success"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.04]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Success stories"
          title="Outcomes that move"
          highlight="the needle"
          description="Anonymized engagements, real impact. This is what happens when the right intelligence reaches the right team at the right time."
        />

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2">
          {successStories.map((story) => (
            <RevealItem key={story.title}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/40 hover:glow-teal">
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-brand-teal/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <Badge
                  variant="outline"
                  className="w-fit border-brand-teal/30 bg-brand-teal/5 text-brand-teal"
                >
                  {story.sector}
                </Badge>
                <h3 className="mt-4 font-heading text-xl font-bold sm:text-2xl">
                  {story.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {story.challenge}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-6">
                  {story.metrics.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="font-heading text-2xl font-bold text-gradient sm:text-3xl">
                        {m.value}
                      </div>
                      <div className="mt-1 text-[11px] leading-tight text-muted-foreground">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
