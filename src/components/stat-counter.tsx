"use client";

import * as React from "react";
import { useInView } from "framer-motion";

/**
 * Counts up from 0 to `value` the first time it scrolls into view.
 * Uses an ease-out curve for a snappy, premium feel.
 */
export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1600,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    let frame = 0;
    let startTs: number | null = null;
    const tick = (ts: number) => {
      if (startTs === null) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setDisplay(value * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  const rounded = Number.isInteger(value) ? Math.round(display) : Math.round(display * 10) / 10;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {rounded.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
