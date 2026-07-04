"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, ShieldCheck, Sparkles, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCounter } from "@/components/stat-counter";
import { stats } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: 0.12 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/**
 * Hero — cinematic, full-bleed courtroom photograph with a left-weighted dark
 * scrim so the serif headline and CTAs stay legible. The image sits behind a
 * gradient that fades into the parchment page below.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      {/* Full-bleed courtroom photograph */}
      <Image
        src="/images/courtroom-argument.jpg"
        alt="An attorney addressing the court beneath an engraving that reads Justice"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      {/* Cinematic scrims for legibility + blend into the page */}
      <div className="photo-scrim absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-b from-transparent to-background"
        aria-hidden="true"
      />
      {/* Thin brass top-of-fold accent */}
      <div className="pointer-events-none absolute inset-x-0 top-16 -z-10 h-px bg-gradient-to-r from-transparent via-brand-teal/50 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-teal/40 bg-black/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#e7d4ab] backdrop-blur-sm">
              <Scale className="h-3.5 w-3.5" />
              The intelligence behind the verdict
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-balance font-heading text-4xl font-bold leading-[1.06] text-[#f7f1e3] sm:text-6xl lg:text-7xl"
          >
            Intelligence that <span className="text-gradient">wins</span> the case
            before it begins
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[#e8ddc8]/90 sm:text-xl"
          >
            Bennet Legal Research Group fuses proprietary AI, big-data analytics, and
            predictive strategy into decisive intelligence for the world&apos;s most
            demanding companies and law firms. We&apos;re not a law firm — we&apos;re the
            edge behind the win.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
          >
            <Button
              asChild
              size="lg"
              className="group h-12 rounded-md bg-brand-gradient-warm px-7 text-base font-semibold text-[#23180d] shadow-xl shadow-black/40 transition-all hover:brightness-105"
            >
              <Link href="/#contact">
                <Sparkles className="mr-1 h-4 w-4" />
                Request Intelligence
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-md border-[#e7d4ab]/50 bg-black/20 px-7 text-base text-[#f3ecdd] backdrop-blur-sm hover:bg-black/40 hover:text-white"
            >
              <Link href="/#contact">
                <PhoneCall className="mr-1.5 h-4 w-4" />
                Book a Strategy Call
              </Link>
            </Button>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#d8c8a8]"
          >
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-brand-teal-bright" /> Insight in hours, not weeks
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-brand-teal-bright" /> Bank-grade confidentiality
            </span>
          </motion.div>
        </div>

        {/* Stat band — glass strip over the photograph */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-[#e7d4ab]/20 bg-[#e7d4ab]/10 backdrop-blur-md md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-black/25 px-4 py-6 text-center"
            >
              <span className="font-heading text-3xl font-bold text-[#e7d4ab] sm:text-4xl">
                <StatCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </span>
              <span className="text-xs text-[#d8c8a8] sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
