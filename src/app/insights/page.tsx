import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock } from "lucide-react";
import { insights } from "@/lib/content";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "White papers, data reports, and playbooks from Bennet Legal Research Group — thought leadership from the frontier of legal intelligence.",
};

export default function InsightsPage() {
  return (
    <div className="relative">
      {/* Page hero */}
      <section className="relative overflow-hidden pb-12 pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--brand-indigo)_16%,transparent),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.05]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
            Insights
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold sm:text-5xl">
            Intelligence from the <span className="text-gradient">frontier</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Data-driven reports, white papers, and playbooks from the team redefining how legal
            research gets done.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/40"
              >
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden bg-brand-navy-deep"
                  data-image-hint={post.imageHint}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,color-mix(in_oklab,var(--brand-teal)_28%,transparent),transparent_55%),radial-gradient(circle_at_80%_80%,color-mix(in_oklab,var(--brand-violet)_32%,transparent),transparent_55%)]" />
                  <div className="absolute inset-0 bg-dots opacity-30" />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="mt-3 font-heading text-lg font-bold leading-snug transition-colors group-hover:text-brand-teal">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-teal">
                    Read the report
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/">
                <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
