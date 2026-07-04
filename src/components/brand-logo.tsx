import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Text-based brand logo mark: a stylized "B" monogram inside a gradient badge,
 * plus the wordmark. Replace the SVG mark with a real logo asset when ready.
 */
export function BrandLogo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <Link
      href="/#home"
      aria-label="Bennet Legal Research Group — home"
      className={cn("group flex items-center gap-2.5", className)}
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-brand-gradient shadow-lg shadow-brand-indigo/30 transition-transform duration-300 group-hover:scale-105">
        {/* Monogram mark — swap for real logo SVG later */}
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-white"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 4h7a4 4 0 0 1 0 8H6V4Zm0 8h8a4 4 0 0 1 0 8H6v-8Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
        <span className="pointer-events-none absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.45),transparent)] bg-[length:200%_100%]" />
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-heading text-[15px] font-bold tracking-tight text-foreground">
            Bennet Legal
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Research Group
          </span>
        </span>
      )}
    </Link>
  );
}
