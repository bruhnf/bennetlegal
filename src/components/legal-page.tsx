import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

/** Shared shell for simple legal/content pages. */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <section className="relative overflow-hidden pb-8 pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--brand-indigo)_14%,transparent),transparent_50%)]" />
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>
        </div>
      </section>
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose-legal flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground [&_h2]:mt-4 [&_h2]:font-heading [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-foreground [&_a]:text-brand-teal [&_a]:underline">
            {children}
          </div>
          <div className="mt-12">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/">
                <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
