import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import type { Detail } from "@/lib/details/types";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

/**
 * Shared layout for every interior detail page (service briefs, team bios,
 * insight articles, case studies, capability pages). Renders a Detail from
 * src/lib/details in the Walnut & Brass theme.
 */
export function DetailPage({
  detail,
  backHref,
  backLabel,
  image,
  imageAlt,
  imageRound = false,
  imagePosition = "50% 30%",
}: {
  detail: Detail;
  backHref: string;
  backLabel: string;
  image?: string;
  imageAlt?: string;
  imageRound?: boolean;
  imagePosition?: string;
}) {
  const cta = detail.cta ?? { label: "Request Intelligence", href: "/#contact" };

  return (
    <article className="relative">
      {/* Header band */}
      <section className="relative overflow-hidden pb-8 pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--brand-navy)_14%,transparent),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.04]" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-brand-teal"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>

          <div className={cn("mt-8 flex flex-col gap-6", imageRound && "sm:flex-row sm:items-center")}>
            {image && imageRound && (
              <Reveal>
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-brand-teal/30 shadow-md ring-2 ring-border sm:h-36 sm:w-36">
                  <Image
                    src={image}
                    alt={imageAlt ?? detail.title}
                    fill
                    sizes="9rem"
                    className="object-cover"
                    style={{ objectPosition: imagePosition }}
                  />
                </div>
              </Reveal>
            )}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                  {detail.category}
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="mt-4 max-w-3xl text-balance text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
                  {detail.title}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{detail.subtitle}</p>
              </Reveal>
              {detail.meta && (
                <Reveal delay={0.12}>
                  <p className="mt-3 font-mono text-xs uppercase tracking-wider text-brand-teal">
                    {detail.meta}
                  </p>
                </Reveal>
              )}
            </div>
          </div>

          {detail.tags && detail.tags.length > 0 && (
            <Reveal delay={0.15}>
              <ul className="mt-6 flex flex-wrap gap-2">
                {detail.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </section>

      {/* Banner image (non-round) */}
      {image && !imageRound && (
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl border border-border">
              <Image
                src={image}
                alt={imageAlt ?? detail.title}
                fill
                sizes="(min-width: 1024px) 64rem, 100vw"
                className="object-cover"
                style={{ objectPosition: imagePosition }}
              />
              <div className="photo-scrim-b absolute inset-0" aria-hidden="true" />
            </div>
          </Reveal>
        </section>
      )}

      {/* Body + sidebar */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_20rem] lg:px-8">
          <div className="min-w-0">
            <Reveal>
              <p className="text-lg leading-relaxed text-foreground/90 first-letter:float-left first-letter:mr-3 first-letter:font-heading first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-brand-teal">
                {detail.lead}
              </p>
            </Reveal>

            <div className="mt-10 flex flex-col gap-10">
              {detail.sections.map((section) => (
                <Reveal key={section.heading}>
                  <div>
                    <h2 className="font-heading text-2xl font-bold">
                      <span className="brass-rule mb-3 block" />
                      {section.heading}
                    </h2>
                    <div className="mt-4 flex flex-col gap-4">
                      {section.body.map((para, i) => (
                        <p key={i} className="leading-relaxed text-muted-foreground">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <Reveal direction="left">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-teal">
                  Key facts
                </h3>
                <dl className="mt-4 flex flex-col divide-y divide-border">
                  {detail.facts.map((fact) => (
                    <div key={fact.label} className="flex flex-col gap-0.5 py-3 first:pt-0 last:pb-0">
                      <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                        {fact.label}
                      </dt>
                      <dd className="text-sm font-semibold text-foreground">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-brand-teal/25 bg-brand-navy p-6 text-[#f3ecdd]">
                <Sparkles className="h-6 w-6 text-brand-teal-bright" />
                <p className="mt-3 font-heading text-lg font-bold">
                  Put this intelligence to work.
                </p>
                <p className="mt-1.5 text-sm text-[#d8c8a8]">
                  Tell us what&apos;s at stake and we&apos;ll scope an engagement within one
                  business day.
                </p>
                <Button
                  asChild
                  className="mt-4 w-full rounded-md bg-brand-gradient-warm font-semibold text-[#23180d]"
                >
                  <Link href={cta.href}>
                    {cta.label}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="mt-4 rounded-2xl border border-border bg-card/60 p-5">
                <p className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-brand-teal" />
                  Confidential &amp; conflict-checked
                </p>
                <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-brand-teal" />
                  Not a law firm; research &amp; intelligence only
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </article>
  );
}
