import { NextResponse } from "next/server";

/** Lightweight health check for Docker/load-balancer probes. */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({ status: "ok", service: "bennet-legal-web" });
}
