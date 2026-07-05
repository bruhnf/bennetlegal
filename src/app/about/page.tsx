import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Compass, Rocket, Scale, Target } from "lucide-react";
import { team } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, mission, and vision behind Bennet Legal Research Group — a fresh force in legal intelligence, and the leadership team building it.",
};

const pillars = [
  {
    id: "story",
    icon: Rocket,
    eyebrow: "Our Story",
    title: "Founded at the counsel's table",
    body: [
      "Bennet Legal Research Group began with a frustration shared across countless late nights: the best argument was almost always out there, buried somewhere in the record — and finding it depended on how many associates you could afford and how many hours the clock would allow. Robert and Dr. Olivia Bennet had watched strong cases turn on nothing more than who had the time and the reach to read further. They set out to remove that ceiling entirely.",
      "Pairing Olivia's background in data science with Robert's years alongside high-stakes litigation teams, the two built the research partner they always wished they had — one that could read millions of documents in the time it takes to brief a partner, and surface the precedent, the pattern, and the exposure that manual review would never reach. What started as a proprietary model and a single anxious pilot engagement is now the intelligence layer behind some of the most consequential matters in the market.",
      "We are deliberately not a law firm. We are the research and intelligence powerhouse that sits behind the firms and enterprises who win — a specialist partner engaged precisely because our only product is a decisive information advantage.",
    ],
  },
  {
    id: "mission",
    icon: Target,
    eyebrow: "Our Mission",
    title: "Give every serious team an unfair advantage",
    body: [
      "Our mission is simple to state and demanding to deliver: put a decisive information advantage in the hands of every serious legal and business team — at the speed the moment demands, and without ever compromising rigor or confidentiality.",
      "That means research delivered in hours instead of weeks, analysis that goes past the first page of results to the full picture, and intelligence assembled to a standard that holds up under the most adversarial scrutiny. We measure ourselves not by the volume of data we process but by the quality of the decision we enable.",
      "Every engagement is conflict-checked, encrypted end to end, and handled by a team that treats your strategy as if the outcome were our own. The advantage we deliver is only worth having if it is also completely safe.",
    ],
  },
  {
    id: "vision",
    icon: Compass,
    eyebrow: "Our Vision",
    title: "The research layer for the next era of law",
    body: [
      "We are building toward a world where the best argument wins because the best intelligence found it first — where the decisive edge belongs to the team with the sharpest insight, not merely the deepest bench.",
      "As artificial intelligence reshapes how legal work is done, we intend to remain the standard for what rigorous, defensible, machine-scale research looks like: proprietary models tuned to the law, human experts who know how to interrogate them, and an operating discipline that turns raw data into recommendations leadership can act on immediately.",
      "The firms and enterprises that adopt this way of working are already pulling ahead. Our vision is to make that advantage the expectation, not the exception — and to be the intelligence partner the market reaches for when the stakes are highest.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden pb-10 pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--brand-navy)_16%,transparent),transparent_55%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.04]" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-brand-teal"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            <Scale className="h-3.5 w-3.5" />
            About Bennet
          </span>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-bold leading-[1.1] sm:text-5xl md:text-6xl">
            A fresh force in <span className="text-gradient">legal intelligence</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Bennet Legal Research Group is a startup with the ambition of an intelligence agency and
            the speed of a technology company — young, exacting, and built for the way legal work is
            going, not the way it was.
          </p>
          <nav className="mt-8 flex flex-wrap gap-2" aria-label="On this page">
            {pillars.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-brand-teal/40 hover:text-brand-teal"
              >
                {p.eyebrow}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto flex max-w-5xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.id}>
                <div id={pillar.id} className="scroll-mt-24">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-teal">
                      {pillar.eyebrow}
                    </span>
                  </div>
                  <h2 className="mt-4 max-w-3xl font-heading text-3xl font-bold sm:text-4xl">
                    {pillar.title}
                  </h2>
                  <div className="mt-4 flex max-w-3xl flex-col gap-4">
                    {pillar.body.map((para, i) => (
                      <p key={i} className="leading-relaxed text-muted-foreground">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-border py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-center font-heading text-3xl font-bold sm:text-4xl">
              The leadership team
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
              A rare blend of courtroom instinct and machine-learning depth. Read each leader&apos;s
              full profile.
            </p>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <RevealItem key={member.slug}>
                <Link
                  href={`/team/${member.slug}`}
                  className="group flex h-full flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/40"
                >
                  <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-brand-teal/30 shadow-md ring-2 ring-border">
                    <Image
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      fill
                      sizes="7rem"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: member.objectPosition ?? "50% 25%" }}
                    />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold">{member.name}</h3>
                  <p className="mt-0.5 text-xs font-semibold text-brand-teal">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-foreground/80 transition-colors group-hover:text-brand-teal">
                    Full profile
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal>
            <div className="mt-14 flex flex-col items-center gap-4 text-center">
              <p className="text-muted-foreground">
                Want to see what a decisive information advantage looks like on your matter?
              </p>
              <Button asChild className="rounded-md bg-brand-gradient-warm font-semibold text-[#23180d]">
                <Link href="/#contact">Request Intelligence</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
