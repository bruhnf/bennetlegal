import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

/**
 * Consistent section header: a small eyebrow chip, a large heading (with an
 * optional gradient-highlighted word), and a supporting sub-line.
 */
export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "max-w-3xl text-balance text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl",
            align === "center" && "mx-auto",
          )}
        >
          {title}
          {highlight && (
            <>
              {" "}
              <span className="text-gradient">{highlight}</span>
            </>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
