import { trustedBy } from "@/lib/content";

/**
 * Infinite marquee of (fictional) client names. Pure CSS animation via the
 * `animate-marquee` keyframe; the track is duplicated for a seamless loop.
 */
export function TrustedBy() {
  const items = [...trustedBy, ...trustedBy];
  return (
    <section aria-label="Trusted by" className="border-y border-border bg-card/30 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-7 text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Trusted by leading firms &amp; enterprises
        </p>
        <div className="mask-fade-edges overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-12 pr-12">
            {items.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap font-heading text-lg font-semibold text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
