"use client";

import * as React from "react";
import Link from "next/link";
import { toast } from "sonner";
import { ArrowLeft, Fingerprint, Lock, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BrandLogo } from "@/components/brand-logo";

/**
 * Client Portal — login *teaser*.
 * A polished, secure-feeling sign-in screen that isn't wired to real auth yet.
 * Submitting shows a "launching soon" message. Swap in NextAuth / Supabase /
 * Cognito here when the portal backend is ready (see DEPLOYMENT.md).
 */
export default function PortalPage() {
  const [loading, setLoading] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.info("The Client Portal is launching soon", {
        description: "Existing clients: your account team will send secure access shortly.",
      });
    }, 700);
  }

  return (
    <div className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 py-24">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--brand-indigo)_18%,transparent),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.05]" />
      <div
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-teal/20 blur-[120px]"
        aria-hidden="true"
      />

      <div className="w-full max-w-md">
        <div className="mb-6 flex justify-center">
          <BrandLogo />
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/70 p-8 backdrop-blur-xl">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold text-brand-teal">
            <ShieldCheck className="h-3.5 w-3.5" /> Encrypted client access
          </span>

          <h1 className="font-heading text-2xl font-bold">Client Portal</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Secure access to your intelligence reports, live dashboards, and engagement team.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="portal-email">Email</Label>
              <Input
                id="portal-email"
                type="email"
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="portal-password">Password</Label>
                <button
                  type="button"
                  className="text-xs text-muted-foreground hover:text-foreground"
                  onClick={() => toast.info("Password reset will be available at launch.")}
                >
                  Forgot?
                </button>
              </div>
              <Input
                id="portal-password"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="mt-1 w-full rounded-full bg-brand-gradient text-white shadow-lg shadow-brand-indigo/25"
            >
              <Lock className="mr-1.5 h-4 w-4" />
              {loading ? "Verifying…" : "Sign in"}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full rounded-full"
              onClick={() => toast.info("Single sign-on (SSO) arrives with the portal launch.")}
            >
              <Fingerprint className="mr-1.5 h-4 w-4" />
              Continue with SSO
            </Button>
          </form>

          <div className="mt-6 rounded-xl border border-brand-teal/20 bg-brand-teal/5 p-4 text-center">
            <p className="text-sm font-medium text-foreground">Not a client yet?</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Start an engagement and we&apos;ll provision your secure workspace.
            </p>
            <Button asChild size="sm" className="mt-3 rounded-full bg-brand-gradient text-white">
              <Link href="/#contact">
                <Sparkles className="mr-1.5 h-3.5 w-3.5" />
                Request Intelligence
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
