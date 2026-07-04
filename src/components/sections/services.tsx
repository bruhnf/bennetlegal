import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { services } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="A full-spectrum"
          highlight="intelligence arsenal"
          description="Seven capabilities that turn oceans of legal data into the decisive advantage your matter demands — engineered for speed, depth, and defensibility."
        />

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Make the first card span two columns on large screens for a dynamic layout.
            const featured = index === 0;
            return (
              <RevealItem
                key={service.id}
                className={cn(featured && "lg:col-span-2")}
              >
                <article
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-xl hover:shadow-brand-indigo/10 sm:p-7",
                    featured && "lg:flex-row lg:items-center lg:gap-8",
                  )}
                >
                  {/* Hover glow */}
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-teal/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <div className={cn(featured && "lg:flex-1")}>
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-brand-gradient/10 text-brand-teal ring-1 ring-inset ring-brand-teal/20 [background:color-mix(in_oklab,var(--brand-teal)_10%,var(--card))]">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-brand-teal">
                        {service.tagline}
                      </span>
                    </div>

                    <h3 className="mt-5 font-heading text-xl font-bold sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {service.description}
                    </p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.highlights.map((h) => (
                        <li
                          key={h}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          <Check className="h-3 w-3 text-brand-teal" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Placeholder visual — replace with AI-generated art (see imageHint) */}
                  {featured && (
                    <div
                      className="relative mt-6 hidden aspect-[4/3] w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-brand-navy-deep lg:mt-0 lg:flex lg:w-72"
                      data-image-hint={service.imageHint}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,color-mix(in_oklab,var(--brand-teal)_25%,transparent),transparent_60%),radial-gradient(circle_at_70%_70%,color-mix(in_oklab,var(--brand-indigo)_30%,transparent),transparent_60%)]" />
                      <div className="absolute inset-0 bg-dots opacity-30" />
                      <span className="relative z-10 px-4 text-center text-xs text-muted-foreground">
                        [ AI visual placeholder ]
                      </span>
                    </div>
                  )}

                  <Link
                    href="/#contact"
                    className={cn(
                      "mt-6 inline-flex items-center gap-1 text-sm font-semibold text-foreground/80 transition-colors hover:text-brand-teal",
                      featured && "lg:hidden",
                    )}
                  >
                    Explore this service
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
