import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--brand-indigo)_16%,transparent),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.05]" />
      <div className="flex max-w-md flex-col items-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-xl shadow-brand-indigo/30">
          <Search className="h-7 w-7" />
        </span>
        <h1 className="mt-6 font-heading text-6xl font-bold text-gradient">404</h1>
        <p className="mt-2 text-lg font-semibold">This intelligence isn&apos;t in our corpus</p>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Button asChild className="mt-7 rounded-full bg-brand-gradient text-white">
          <Link href="/">
            <ArrowLeft className="mr-1.5 h-4 w-4" /> Back to home
          </Link>
        </Button>
      </div>
    </div>
  );
}
