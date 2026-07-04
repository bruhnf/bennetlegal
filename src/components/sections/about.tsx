import { Rocket, Target, Compass } from "lucide-react";
import { team } from "@/lib/content";
import { SectionHeading } from "@/components/section-heading";
import { RevealGroup, RevealItem, Reveal } from "@/components/reveal";

const pillars = [
  {
    icon: Rocket,
    title: "Our story",
    body: "Founded by litigators and data scientists who were tired of watching great cases lost to slow, shallow research. We built the intelligence engine we always wished we had.",
  },
  {
    icon: Target,
    title: "Our mission",
    body: "To give every serious legal team an unfair advantage — decisive intelligence, delivered at the speed the moment demands, without ever compromising rigor or confidentiality.",
  },
  {
    icon: Compass,
    title: "Our vision",
    body: "A world where the best argument wins because the best intelligence found it first. We're building the research layer for the next era of law.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About us"
          title="A fresh force in"
          highlight="legal intelligence"
          description="Bennet Legal Research Group is a startup with the ambition of an intelligence agency and the speed of a technology company. Young, hungry, and built for the way legal work is going — not the way it was."
        />

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <RevealItem key={pillar.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary/50 text-brand-teal">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.body}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        {/* Team */}
        <div className="mt-20">
          <Reveal>
            <h3 className="text-center font-heading text-2xl font-bold sm:text-3xl">
              The visionary team
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground sm:text-base">
              A rare blend of courtroom instinct and machine-learning depth.
            </p>
          </Reveal>

          <RevealGroup className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
            {team.map((member) => (
              <RevealItem key={member.name}>
                <div className="group flex h-full flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/40">
                  {/* Placeholder portrait — replace with AI headshot (see imageHint) */}
                  <div
                    className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border border-border bg-brand-navy-deep"
                    data-image-hint={member.imageHint}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,color-mix(in_oklab,var(--brand-indigo)_45%,transparent),transparent_65%)]" />
                    <span className="relative font-heading text-2xl font-bold text-white/80">
                      {member.name
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  </div>
                  <h4 className="mt-4 font-heading text-base font-bold">{member.name}</h4>
                  <p className="mt-0.5 text-xs font-semibold text-brand-teal">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
