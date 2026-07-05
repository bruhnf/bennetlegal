/**
 * Marketing content for the landing page.
 * All copy here is mock/demo content for Bennet Legal Research Group.
 * Icons are referenced by lucide-react component so sections stay data-driven.
 */
import {
  BrainCircuit,
  Database,
  LineChart,
  Search,
  ShieldCheck,
  Users,
  FileBarChart,
  Zap,
  Layers,
  Lightbulb,
  Lock,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  /** Placeholder art hint — describes the AI image to drop in later. */
  imageHint: string;
};

export const services: Service[] = [
  {
    id: "ai-research",
    icon: BrainCircuit,
    title: "AI-Powered Legal Research",
    tagline: "Exhaustive answers in minutes, not weeks",
    description:
      "Our proprietary models read millions of cases, statutes, and briefs to surface the precedent that matters — with citations you can trust and a clear line of reasoning behind every result.",
    highlights: ["Proprietary legal LLMs", "Citation-verified output", "Jurisdiction-aware"],
    imageHint:
      "Abstract neural network scanning glowing legal documents, teal-to-indigo gradient, dark background",
  },
  {
    id: "big-data",
    icon: Database,
    title: "Big Data Intelligence & Analytics",
    tagline: "Signal mined from the world's legal data",
    description:
      "We fuse case law, regulations, contracts, patents, and market data into a single intelligence layer — then mine it for the patterns, exposures, and opportunities your competitors never see.",
    highlights: ["Cross-corpus mining", "Contract & patent analytics", "Live market signals"],
    imageHint:
      "3D data lake with streams of documents flowing into a glowing core, indigo and cyan particles",
  },
  {
    id: "predictive",
    icon: LineChart,
    title: "Predictive Legal Strategy",
    tagline: "See the outcome before you commit",
    description:
      "Forecast litigation outcomes, regulatory shifts, and risk exposure with models trained on decades of docket data — so every decision is made with the odds in front of you.",
    highlights: ["Outcome probability modeling", "Judge & venue analytics", "Risk exposure scoring"],
    imageHint:
      "Futuristic dashboard with probability curves and scales of justice made of light, coral accents",
  },
  {
    id: "due-diligence",
    icon: Search,
    title: "Investigative Due Diligence",
    tagline: "Know exactly who you're dealing with",
    description:
      "Advanced background research and competitive intelligence that goes deep — entities, ownership, litigation history, and reputation — assembled into a clear, defensible picture.",
    highlights: ["Entity & ownership mapping", "Competitive intelligence", "Reputation analysis"],
    imageHint:
      "Investigator's network graph connecting people and companies, magnifying glass of light nodes",
  },
  {
    id: "compliance",
    icon: ShieldCheck,
    title: "Regulatory & Compliance Intelligence",
    tagline: "Global complexity, made clear",
    description:
      "Navigate a shifting regulatory landscape with confidence. We track, interpret, and translate complex global rules into clear guidance mapped to your exact operations.",
    highlights: ["Multi-jurisdiction tracking", "Change alerts", "Actionable interpretation"],
    imageHint:
      "Holographic world map with regulatory zones lighting up, shield emblem, teal glow",
  },
  {
    id: "referral",
    icon: Users,
    title: "Attorney Referral Network",
    tagline: "The right counsel, matched to the case",
    description:
      "A curated network of high-caliber attorneys, matched to your matter by specialty, jurisdiction, and track record — vetted and ranked by our intelligence engine.",
    highlights: ["Vetted specialists", "Track-record ranked", "Precision matching"],
    imageHint:
      "Elegant grid of attorney profile cards connecting to a central case node, indigo gradient",
  },
  {
    id: "reports",
    icon: FileBarChart,
    title: "Custom Intelligence Reports",
    tagline: "Executive-ready, beautifully delivered",
    description:
      "Board-ready deliverables that turn dense analysis into clarity — rich data visualizations, executive summaries, and recommendations your leadership can act on immediately.",
    highlights: ["Executive summaries", "Data visualizations", "Actionable recommendations"],
    imageHint:
      "Sleek report on a tablet with charts and scales of justice, premium dark-mode UI mockup",
  },
];

export type Differentiator = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const differentiators: Differentiator[] = [
  {
    icon: Zap,
    title: "Speed of Insight",
    description:
      "What used to take an army of associates weeks, we deliver in hours. Momentum is a competitive advantage — we give it back to you.",
  },
  {
    icon: Layers,
    title: "Depth of Analysis",
    description:
      "We go past the first page of results. Every corpus, every jurisdiction, every angle — mined until the full picture is undeniable.",
  },
  {
    icon: Lightbulb,
    title: "Creative Problem-Solving",
    description:
      "Data is the start, not the answer. Our analysts pair machine scale with human ingenuity to find the argument no one else saw.",
  },
  {
    icon: Lock,
    title: "Ironclad Confidentiality",
    description:
      "Bank-grade encryption, strict access controls, and airtight protocols. Your strategy never leaves the vault.",
  },
];

export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 98, suffix: "%", label: "Outcome-prediction accuracy" },
  { value: 40, suffix: "x", label: "Faster than manual research" },
  { value: 12, suffix: "M+", label: "Documents in our corpus" },
  { value: 250, suffix: "+", label: "Enterprise engagements" },
];

export type Insight = {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  imageHint: string;
  featured?: boolean;
};

export const insights: Insight[] = [
  {
    category: "White Paper",
    title: "The 2026 State of AI in Legal Research",
    excerpt:
      "How large firms are compressing months of discovery into days — and the intelligence gap opening between those who adopt and those who don't.",
    readTime: "14 min read",
    date: "Jun 2026",
    imageHint: "Cover art: glowing AI brain over legal library, teal-indigo gradient, report cover",
    featured: true,
  },
  {
    category: "Data Report",
    title: "Predicting Circuit Splits: A Machine-Learning Study",
    excerpt:
      "We trained a model on 40 years of appellate decisions. Here's what it reveals about where the next circuit split will emerge.",
    readTime: "9 min read",
    date: "May 2026",
    imageHint: "Data visualization of US circuit courts with predictive heat map",
  },
  {
    category: "Analysis",
    title: "Regulatory Whiplash: Navigating 2026's Compliance Storm",
    excerpt:
      "Cross-border regulation is changing faster than legal teams can track. Our framework for staying ahead of the next shift.",
    readTime: "7 min read",
    date: "May 2026",
    imageHint: "Stormy world map with regulatory zones and a clear path through, coral highlights",
  },
  {
    category: "Playbook",
    title: "Due Diligence at Deal Speed",
    excerpt:
      "A field guide to running exhaustive background intelligence on a target company without slowing the transaction.",
    readTime: "11 min read",
    date: "Apr 2026",
    imageHint: "Corporate network graph with due-diligence checklist overlay, indigo palette",
  },
];

export type SuccessStory = {
  sector: string;
  title: string;
  challenge: string;
  metrics: { value: string; label: string }[];
};

export const successStories: SuccessStory[] = [
  {
    sector: "AmLaw 100 Firm",
    title: "Turning a losing case into a landmark win",
    challenge:
      "A high-stakes IP dispute looked unwinnable. Our AI surfaced an overlooked line of precedent across three jurisdictions.",
    metrics: [
      { value: "$180M", label: "Judgment secured" },
      { value: "72 hrs", label: "To full precedent map" },
      { value: "3", label: "Jurisdictions unified" },
    ],
  },
  {
    sector: "Fortune 500 Enterprise",
    title: "De-risking a multinational acquisition",
    challenge:
      "A $2B acquisition hinged on hidden regulatory and litigation exposure across 14 countries. We found it before signing.",
    metrics: [
      { value: "14", label: "Countries analyzed" },
      { value: "$310M", label: "Exposure identified" },
      { value: "5 days", label: "Full diligence" },
    ],
  },
  {
    sector: "Global Investment Bank",
    title: "Forecasting a regulatory shift ahead of the market",
    challenge:
      "Our predictive models flagged an incoming compliance change months before it was announced, protecting a key trading desk.",
    metrics: [
      { value: "4 mo", label: "Early warning" },
      { value: "94%", label: "Forecast confidence" },
      { value: "$0", label: "Compliance penalties" },
    ],
  },
  {
    sector: "Biotech Scale-Up",
    title: "Building a patent moat from raw data",
    challenge:
      "A fast-growing biotech needed to understand its patent landscape. We mapped every adjacent claim and white-space opportunity.",
    metrics: [
      { value: "1.2M", label: "Patents analyzed" },
      { value: "17", label: "White-space filings" },
      { value: "6 wks", label: "To strategy" },
    ],
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** Path to a headshot under /public. */
  image: string;
  /** CSS object-position for the round avatar crop (bias toward the face). */
  objectPosition?: string;
};

export const team: TeamMember[] = [
  {
    name: "Robert Bennet",
    role: "Co-Founder & Chief Executive Officer",
    bio: "Robert set out to build the research partner he could never find at the counsel's table. He steers Bennet's vision, culture, and client relationships around a single mandate: deliver the decisive edge, every time.",
    image: "/images/team/robert-bennet.png",
    objectPosition: "50% 30%",
  },
  {
    name: "Dr. Olivia Bennet",
    role: "Co-Founder & Chief Intelligence Officer",
    bio: "Olivia pairs a doctorate in data science with a decade inside high-stakes litigation. She architects the proprietary models and analytical rigor that turn oceans of legal data into answers you can act on.",
    image: "/images/team/olivia-bennet.png",
    objectPosition: "50% 28%",
  },
  {
    name: "Alex Barzane",
    role: "V.P. & Chief Legal Officer",
    bio: "A former appellate litigator, Alex keeps every engagement airtight — governing methodology, privilege, and compliance so Bennet's intelligence is not just powerful, but defensible.",
    image: "/images/team/alex-barzane.png",
    objectPosition: "50% 25%",
  },
  {
    name: "Becky Delgado",
    role: "V.P. & Chief Financial Officer",
    bio: "Becky brings decades of financial stewardship to Bennet, aligning disciplined growth with the resources our analysts need. She makes certain that ambition and accountability always move in step.",
    image: "/images/team/becky-delgado.png",
    objectPosition: "50% 28%",
  },
  {
    name: "James Morris",
    role: "V.P. & Chief Operating Officer",
    bio: "James turns strategy into execution. He runs the operating engine behind every engagement, ensuring intelligence is delivered on time, at scale, and to an exacting standard.",
    image: "/images/team/james-morris.jpg",
    objectPosition: "50% 18%",
  },
  {
    name: "Cora Frost",
    role: "V.P., Marketing & Strategy",
    bio: "Cora shapes how the world understands Bennet. She leads brand, market strategy, and client storytelling — translating complex intelligence into a message that lands in the boardroom.",
    image: "/images/team/cora-frost.png",
    objectPosition: "50% 42%",
  },
];

/** Names shown in the 'trusted by' marquee (fictional). */
export const trustedBy = [
  "Meridian & Cole LLP",
  "Vanguard Capital",
  "Nexus Biotech",
  "Sterling Global",
  "Atlas Industries",
  "Harbor & Finch",
  "Quantum Ventures",
  "Ironclad Legal",
];
