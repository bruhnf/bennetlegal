"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroNetwork } from "@/components/hero-network";
import { StatCounter } from "@/components/stat-counter";
import { stats } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      {/* Layered background: deep navy gradient + animated network + glow blobs */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_color-mix(in_oklab,var(--brand-indigo)_18%,transparent),transparent_55%),radial-gradient(ellipse_at_bottom_right,_color-mix(in_oklab,var(--brand-teal)_14%,transparent),transparent_50%)]" />
      <div className="absolute inset-0 -z-10 opacity-70">
        <HeroNetwork />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.06] mask-fade-b" />
      <div
        className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-brand-teal/20 blur-[120px] animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 -z-10 h-[26rem] w-[26rem] rounded-full bg-brand-indigo/25 blur-[130px] animate-float"
        aria-hidden="true"
      />
      {/* Fade the network into the page below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur-md sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-teal opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-teal" />
              </span>
              The intelligence layer for elite legal teams
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-balance text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Intelligence that <span className="text-gradient">wins</span> the case
            before it begins
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl"
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
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="group h-12 rounded-full bg-brand-gradient px-7 text-base text-white shadow-xl shadow-brand-indigo/30 transition-all hover:shadow-brand-indigo/50"
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
              className="h-12 rounded-full border-border/80 bg-background/40 px-7 text-base backdrop-blur-md"
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
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-brand-teal" /> Insight in hours, not weeks
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-brand-teal" /> Bank-grade confidentiality
            </span>
          </motion.div>
        </div>

        {/* Stat band */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border/60 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-card/60 px-4 py-6 text-center backdrop-blur-sm"
            >
              <span className="font-heading text-3xl font-bold text-gradient sm:text-4xl">
                <StatCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </span>
              <span className="text-xs text-muted-foreground sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
