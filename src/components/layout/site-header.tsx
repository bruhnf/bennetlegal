"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Sparkles, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/brand-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

/**
 * Sticky top navigation.
 * - Transparent over the hero, then frosts into a solid bar once the user scrolls.
 * - Collapses into a slide-out sheet on mobile.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <BrandLogo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            variant="outline"
            className="hidden rounded-full border-border/80 md:inline-flex"
          >
            <Link href="/#contact">
              <PhoneCall className="mr-1.5 h-4 w-4" />
              Book a Strategy Call
            </Link>
          </Button>
          <Button
            asChild
            className="hidden rounded-full bg-brand-gradient text-white shadow-lg shadow-brand-indigo/25 transition-shadow hover:shadow-brand-indigo/40 sm:inline-flex"
          >
            <Link href="/#contact">
              <Sparkles className="mr-1.5 h-4 w-4" />
              Request Intelligence
            </Link>
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86%] max-w-sm border-border/80">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <BrandLogo />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-2 flex flex-col gap-1 px-4" aria-label="Mobile">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-xl px-4 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-secondary"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 p-4">
                <SheetClose asChild>
                  <Button
                    asChild
                    className="w-full rounded-full bg-brand-gradient text-white"
                  >
                    <Link href="/#contact">
                      <Sparkles className="mr-1.5 h-4 w-4" />
                      Request Intelligence
                    </Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild variant="outline" className="w-full rounded-full">
                    <Link href="/#contact">
                      <PhoneCall className="mr-1.5 h-4 w-4" />
                      Book a Strategy Call
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
