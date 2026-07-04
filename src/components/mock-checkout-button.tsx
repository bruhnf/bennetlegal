"use client";

import * as React from "react";
import { toast } from "sonner";
import { CreditCard, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Mock Stripe checkout button.
 * Posts to /api/checkout, which is a stubbed endpoint wired for a future real
 * Stripe integration (see the route file for the swap-in point). For now it
 * simulates a successful Checkout Session hand-off.
 */
export function MockCheckoutButton({
  priceLabel = "Strategy Sprint",
  className,
}: {
  priceLabel?: string;
  className?: string;
}) {
  const [loading, setLoading] = React.useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ item: priceLabel }),
      });
      const body = (await res.json()) as { url?: string; mock?: boolean; error?: string };
      if (!res.ok) throw new Error(body.error || "Checkout failed");

      if (body.mock) {
        toast.info("Stripe checkout is in mock mode", {
          description:
            "Add your Stripe keys to enable live payments. See /api/checkout for the integration point.",
        });
      } else if (body.url) {
        window.location.href = body.url;
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Checkout failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      variant="outline"
      className={className}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? (
        <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />
      ) : (
        <CreditCard className="mr-1.5 h-4 w-4" />
      )}
      Reserve a {priceLabel}
    </Button>
  );
}
