"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * HeroNetwork
 * A lightweight, GPU-friendly animated "data intelligence" network rendered on
 * a <canvas>. Nodes drift slowly and connect with fading lines when near each
 * other; the cursor gently attracts nearby nodes, evoking data being pulled
 * into focus. Designed to feel high-tech but restrained (not a noisy particle
 * storm). Fully self-contained — no external assets.
 *
 * Performance & accessibility:
 * - Scales node count to viewport size and caps device pixel ratio.
 * - Pauses when the tab is hidden.
 * - Renders a single static frame when the user prefers reduced motion.
 */
type Node = { x: number; y: number; vx: number; vy: number; r: number };

export function HeroNetwork({ className }: { className?: string }) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const ctx2d = canvasEl.getContext("2d");
    if (!ctx2d) return;
    // Explicit non-null-typed aliases so the nested closures below don't lose
    // TypeScript's narrowing across function boundaries.
    const canvas: HTMLCanvasElement = canvasEl;
    const ctx: CanvasRenderingContext2D = ctx2d;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Brand colors (kept in sync with globals.css).
    const TEAL = "45, 212, 191";
    const INDIGO = "99, 102, 241";
    const CYAN = "34, 211, 238";
    const palette = [TEAL, INDIGO, CYAN];

    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let raf = 0;
    const mouse = { x: -9999, y: -9999, active: false };

    const nodeColors = new Map<Node, string>();

    function build() {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density scales with area but is capped for perf.
      const target = Math.min(90, Math.max(28, Math.floor((width * height) / 16000)));
      nodes = Array.from({ length: target }, () => {
        const n: Node = {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          r: Math.random() * 1.6 + 1,
        };
        nodeColors.set(n, palette[Math.floor(Math.random() * palette.length)]);
        return n;
      });
    }

    const LINK_DIST = 140;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Update + draw connecting lines.
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        if (!reduceMotion) {
          a.x += a.vx;
          a.y += a.vy;

          // Cursor attraction.
          if (mouse.active) {
            const dx = mouse.x - a.x;
            const dy = mouse.y - a.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 180 && dist > 1) {
              a.x += (dx / dist) * 0.35;
              a.y += (dy / dist) * 0.35;
            }
          }

          // Wrap around edges.
          if (a.x < -20) a.x = width + 20;
          if (a.x > width + 20) a.x = -20;
          if (a.y < -20) a.y = height + 20;
          if (a.y > height + 20) a.y = -20;
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.5;
            ctx.strokeStyle = `rgba(${INDIGO}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes on top.
      for (const n of nodes) {
        const color = nodeColors.get(n) ?? TEAL;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, 0.9)`;
        ctx.shadowColor = `rgba(${color}, 0.8)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function loop() {
      draw();
      raf = requestAnimationFrame(loop);
    }

    function start() {
      cancelAnimationFrame(raf);
      if (reduceMotion) {
        draw();
        return;
      }
      raf = requestAnimationFrame(loop);
    }

    function onResize() {
      build();
      if (reduceMotion) draw();
    }
    function onVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        start();
      }
    }
    function onMove(e: PointerEvent) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    }
    function onLeave() {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    }

    build();
    start();

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    />
  );
}
