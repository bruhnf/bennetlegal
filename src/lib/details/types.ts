/**
 * Shared shape for every interior "detail" page (service briefs, team bios,
 * insight articles, case studies, capability pages). Content lives in the
 * sibling data files (services.ts, team.ts, insights.ts, caseStudies.ts,
 * advantages.ts) and is rendered by <DetailPage>.
 */

export type DetailSection = {
  heading: string;
  /** Each string is one paragraph. */
  body: string[];
};

export type DetailFact = {
  label: string;
  value: string;
};

export type Detail = {
  slug: string;
  /** Small uppercase eyebrow, e.g. "Service Brief", "Case Study", "Leadership". */
  category: string;
  title: string;
  /** One-line supporting statement under the title. */
  subtitle: string;
  /** Optional small meta line (e.g. "White Paper · 14 min read · Jun 2026"). */
  meta?: string;
  /** Lead / standfirst paragraph. */
  lead: string;
  /** Main body, split into headed sections. */
  sections: DetailSection[];
  /** Sidebar "key facts" list. */
  facts: DetailFact[];
  /** Optional pill tags shown near the header. */
  tags?: string[];
  /** Optional custom call-to-action; defaults to "Request Intelligence" -> /#contact. */
  cta?: { label: string; href: string };
};

export type DetailMap = Record<string, Detail>;
