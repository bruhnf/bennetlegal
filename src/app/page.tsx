import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Services } from "@/components/sections/services";
import { WhyBennet } from "@/components/sections/why-bennet";
import { Insights } from "@/components/sections/insights";
import { SuccessStories } from "@/components/sections/success-stories";
import { Creed } from "@/components/sections/creed";
import { About } from "@/components/sections/about";
import { CTA } from "@/components/sections/cta";

/**
 * Single-page landing experience.
 * Each section is self-contained under src/components/sections and reads its
 * content from src/lib/content.ts, so copy/imagery is easy to swap.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <WhyBennet />
      <Insights />
      <SuccessStories />
      <Creed />
      <About />
      <CTA />
    </>
  );
}
