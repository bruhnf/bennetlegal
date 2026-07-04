"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

const offset = 28;
const directions: Record<Direction, { x?: number; y?: number }> = {
  up: { y: offset },
  down: { y: -offset },
  left: { x: offset },
  right: { x: -offset },
  none: {},
};

/**
 * Scroll-triggered reveal. Fades + slides children into view once when they
 * enter the viewport. Honors reduced-motion automatically via Framer Motion.
 */
export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  once = true,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  once?: boolean;
  as?: "div" | "span" | "li" | "section";
}) {
  const MotionTag = motion[as] as React.ElementType;
  const variants: Variants = {
    hidden: { opacity: 0, ...directions[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <MotionTag
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Staggered container — children wrapped in <RevealItem> animate in sequence.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.09,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
}) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, ...directions[direction] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
