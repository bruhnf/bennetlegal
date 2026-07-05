import Image from "next/image";
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

        {/* Story image band */}
        <Reveal>
          <div className="relative mt-14 aspect-[21/9] w-full overflow-hidden rounded-xl border border-border">
            <Image
              src="/images/superior-court.jpg"
              alt="Attorneys at work in a superior court of justice"
              fill
              sizes="(min-width: 1280px) 72rem, 100vw"
              className="object-cover object-center"
            />
            <div className="photo-scrim-b absolute inset-0" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8">
              <p className="max-w-md font-heading text-lg font-semibold text-[#f7f1e3] sm:text-xl">
                Built for the room where it&apos;s decided.
              </p>
            </div>
          </div>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-6 md:grid-cols-3">
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

          <RevealGroup className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <RevealItem key={member.name}>
                <div className="group flex h-full flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/40">
                  <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-brand-teal/30 bg-brand-navy-deep shadow-md ring-2 ring-border">
                    <Image
                      src={member.image}
                      alt={`Portrait of ${member.name}, ${member.role}`}
                      fill
                      sizes="7rem"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: member.objectPosition ?? "50% 25%" }}
                    />
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
