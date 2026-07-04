/**
 * Central site configuration.
 * Edit brand facts, navigation, and contact details here — everything else reads from this file.
 */

export const siteConfig = {
  name: "Bennet Legal Research Group",
  shortName: "Bennet Legal",
  tagline: "Intelligence That Wins",
  description:
    "Bennet Legal Research Group delivers AI-powered legal research, big-data intelligence, and predictive strategy to the enterprises and law firms that need a decisive edge. We are not a law firm — we are the research and intelligence powerhouse behind the win.",
  // Update to the production domain. Used for canonical URLs, sitemap, and Open Graph.
  url: "https://bennetlegalpartners.com",
  ogImage: "/og.png",
  // Public-facing contact details (placeholders — replace with real ones).
  contact: {
    email: "intelligence@bennetlegalpartners.com",
    phone: "+1 (212) 555-0142",
    address: "One Bryant Park, 42nd Floor, New York, NY 10036",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/bennet-legal-research-group",
    x: "https://x.com/bennetlegal",
  },
} as const;

/** Primary navigation shown in the sticky header. */
export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Insights", href: "/#insights" },
  { label: "About", href: "/#about" },
  { label: "Client Portal", href: "/portal" },
] as const;

export type NavLink = (typeof navLinks)[number];
