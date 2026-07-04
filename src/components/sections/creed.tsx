import Image from "next/image";
import { Scale } from "lucide-react";
import { Reveal } from "@/components/reveal";

/**
 * A full-bleed cinematic band that breaks up the page with a justice-themed
 * pull quote over a courtroom photograph. Reinforces the law/justice tone.
 */
export function Creed() {
  return (
    <section aria-label="Our creed" className="relative overflow-hidden">
      <Image
        src="/images/justice-equal-exact.jpg"
        alt="An attorney at work in a courtroom beneath a plaque reading Justice, Equal and Exact"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="photo-scrim absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <Reveal>
          <Scale className="h-9 w-9 text-brand-teal-bright" />
        </Reveal>
        <Reveal delay={0.05}>
          <blockquote className="mt-6 max-w-3xl font-heading text-3xl font-semibold leading-tight text-[#f7f1e3] sm:text-4xl md:text-5xl">
            &ldquo;Justice is served when the right intelligence reaches the right
            advocate — <span className="text-gradient">equal and exact</span>, for
            every client we stand behind.&rdquo;
          </blockquote>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#d8c8a8]">
            The Bennet standard
          </p>
        </Reveal>
      </div>
    </section>
  );
}
