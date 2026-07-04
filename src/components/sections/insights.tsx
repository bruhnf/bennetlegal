import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { insights } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Insights() {
  const featured = insights.find((i) => i.featured) ?? insights[0];
  const rest = insights.filter((i) => i !== featured);

  return (
    <section id="insights" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Insights"
            title="Thought leadership from the"
            highlight="frontier"
            description="White papers, data reports, and playbooks from the team redefining how legal intelligence gets done."
          />
          <Button
            asChild
            variant="outline"
            className="shrink-0 rounded-full border-border/80"
          >
            <Link href="/insights">
              View all insights
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Featured */}
          <RevealItem className="lg:row-span-2">
            <Link
              href="/insights"
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-navy-deep">
                <Image
                  src="/images/justice-collage.jpg"
                  alt="A collage of justice symbols — scales, a county courthouse, and the words Equal Justice Under Law"
                  fill
                  sizes="(min-width: 1024px) 40rem, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/40 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-brand-gradient-warm px-3 py-1 text-xs font-semibold text-[#23180d]">
                  {featured.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{featured.date}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {featured.readTime}
                  </span>
                </div>
                <h3 className="mt-3 font-heading text-2xl font-bold transition-colors group-hover:text-brand-teal sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {featured.excerpt}
                </p>
                <span className="mt-auto pt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-teal">
                  Read the report
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </RevealItem>

          {/* Secondary list */}
          <RevealGroup className="flex flex-col gap-6">
            {rest.map((post) => (
              <RevealItem key={post.title}>
                <Link
                  href="/insights"
                  className="group flex gap-5 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-teal/40"
                >
                  <div
                    className={cn(
                      "relative hidden aspect-square w-28 shrink-0 overflow-hidden rounded-xl bg-brand-navy-deep sm:block",
                    )}
                    data-image-hint={post.imageHint}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,color-mix(in_oklab,var(--brand-indigo)_35%,transparent),transparent_60%)]" />
                    <div className="absolute inset-0 bg-dots opacity-30" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="font-semibold text-brand-teal">{post.category}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-2 font-heading text-lg font-bold leading-snug transition-colors group-hover:text-brand-teal">
                      {post.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
