import type { DetailMap } from "@/lib/details/types";

export const serviceDetails: DetailMap = {
  "ai-research": {
    slug: "ai-research",
    category: "Service Brief",
    title: "AI-Powered Legal Research",
    subtitle: "Exhaustive answers in minutes, not weeks — every citation verified before it reaches you.",
    lead: "When the question is consequential, an answer that is merely fast is not enough — it must be complete, current, and defensible. Bennet's AI-Powered Legal Research fuses proprietary legal language models with a citation-verification layer that refuses to let a single unsupported proposition leave the building. The result is research of a depth that once consumed teams of associates for weeks, delivered in the span of a working afternoon, and built to withstand the scrutiny of the most demanding tribunals and boardrooms.",
    sections: [
      {
        heading: "What it is",
        body: [
          "AI-Powered Legal Research is Bennet's flagship intelligence service: an end-to-end system that ingests a client's question, decomposes it into its constituent legal issues, and reconstructs a jurisdiction-aware answer supported entirely by verified authority. It is not a chatbot pointed at a search index. It is a governed research pipeline in which every step is instrumented, logged, and reviewable.",
          "The engine is our proprietary family of legal language models, collectively branded LEXICON, trained and continuously fine-tuned on curated primary law, secondary commentary, and de-identified engagement history. Unlike general-purpose models, LEXICON is architected to treat a citation as a claim requiring proof rather than a stylistic flourish.",
          "Critically, this is a research and intelligence product — not legal advice. We deliver the authorities, the analysis, and the confidence signals; the client's counsel retains judgment and representation. That separation is deliberate, and it is what allows us to be exhaustive without ever crossing the line into practice."
        ]
      },
      {
        heading: "How it works",
        body: [
          "Every engagement begins in our Issue Decomposition stage, where the LEXICON orchestration layer parses the presenting question into a directed graph of sub-issues, each tagged with the governing jurisdiction, the relevant temporal window, and the standard of proof at play. This graph becomes the scaffold for everything that follows.",
          "Retrieval runs across our VERIDICT corpus — a continuously refreshed index spanning federal and state case law, statutes and regulations, administrative decisions, and vetted secondary sources across more than sixty jurisdictions. A first-pass model drafts candidate propositions; a second, adversarial model is then instructed to attack each proposition, hunting for contrary authority, superseded holdings, and jurisdictional mismatch. Only propositions that survive this internal cross-examination advance.",
          "The surviving draft passes through our CITE-LOCK verification layer, which resolves every citation against the primary source, confirms it stands for the proposition asserted, checks its subsequent history for negative treatment, and assigns a confidence score. Anything CITE-LOCK cannot corroborate is quarantined and flagged for human review rather than silently dropped. A senior research analyst conducts final adjudication before release, so the human sign-off is a feature of the pipeline, not an afterthought."
        ]
      },
      {
        heading: "What you receive",
        body: [
          "The core deliverable is a structured research memorandum: a crisp answer to the presenting question, followed by issue-by-issue analysis, each proposition footnoted to verified primary authority with its confidence tier and treatment status displayed inline.",
          "Accompanying the memorandum is an authority table — every case, statute, and regulation relied upon, with pinpoint citations, currency dates, and negative-treatment flags — plus a dissent-and-tension appendix that surfaces the strongest contrary positions we encountered, so nothing is hidden behind a confident tone.",
          "Clients may take the deliverable as a formatted PDF, a structured data export for ingestion into their own knowledge systems, or a secure interactive workspace where the underlying authorities can be inspected at the source."
        ]
      },
      {
        heading: "Who it's for",
        body: [
          "The service is built for elite law firms facing compressed timelines on high-stakes matters, and for corporate legal departments that must reach a defensible position faster than a traditional research cycle allows.",
          "It is particularly valuable where a question spans multiple jurisdictions, where the law is unsettled or rapidly evolving, or where the cost of an overlooked authority is measured in millions rather than billable hours.",
          "It is not for clients seeking a legal opinion or representation. We equip decision-makers and their counsel; we do not replace them."
        ]
      },
      {
        heading: "Why Bennet",
        body: [
          "Speed without verification is a liability, and verification without speed is a bottleneck. Bennet's distinctive value is that CITE-LOCK collapses that tradeoff — you receive research at machine speed that has nonetheless passed a standard of citation integrity most human teams never reach.",
          "Our adversarial architecture means the system is engineered to argue against its own conclusions before you ever see them, which is precisely the discipline you want when the stakes are highest.",
          "And because every engagement is logged end to end, the work is not a black box. It is an auditable record you can stand behind long after the answer is delivered."
        ]
      }
    ],
    facts: [
      { label: "Typical turnaround", value: "4 to 24 hours for standard scope; expedited same-day available" },
      { label: "Data sources", value: "VERIDICT corpus — primary law, regulations, administrative decisions, vetted secondary commentary" },
      { label: "Coverage", value: "60+ US and international jurisdictions, refreshed continuously" },
      { label: "Confidentiality tier", value: "Tier III — encrypted, access-logged, engagement-siloed" },
      { label: "Deliverable format", value: "Structured memorandum (PDF), authority table, secure interactive workspace, or data export" },
      { label: "Ideal engagement", value: "Multi-jurisdiction or time-compressed research on high-consequence matters" },
      { label: "Accuracy / QA", value: "CITE-LOCK citation verification plus senior analyst adjudication on every release" }
    ],
    tags: ["AI research", "citation-verified", "jurisdiction-aware", "LEXICON", "rapid turnaround"],
    cta: { label: "Commission a research engagement", href: "/contact" }
  },

  "big-data": {
    slug: "big-data",
    category: "Service Brief",
    title: "Big Data Intelligence & Analytics",
    subtitle: "Signal mined from the world's legal data — patterns no single reader could ever see.",
    lead: "The most valuable insight in law rarely sits in a single document. It lives in the aggregate — in the drift of thousands of holdings, the correlation between a regulatory shift and a wave of filings, the quiet pattern in a competitor's patent portfolio. Bennet's Big Data Intelligence & Analytics practice mines that aggregate at scale, converting oceans of unstructured legal text into structured, queryable, decision-grade intelligence. Where others read documents, we read entire corpora.",
    sections: [
      {
        heading: "What it is",
        body: [
          "Big Data Intelligence & Analytics is Bennet's cross-corpus mining discipline: a program that systematically extracts, normalizes, and correlates signal across case law, statutes and regulations, contracts, patents, litigation dockets, and public market data to reveal patterns invisible at the level of any individual document.",
          "The practice is powered by CONFLUENCE, our proprietary data-fusion platform, which unifies heterogeneous legal and financial sources into a single analytical fabric with a common entity and event model.",
          "This is intelligence, not advocacy. We surface the patterns, quantify their strength, and hand you the evidence. What you do with that edge is yours to decide."
        ]
      },
      {
        heading: "How it works",
        body: [
          "Ingestion begins with our extraction stack, which parses documents of wildly different structure — a court opinion, a merger agreement, a patent claim set, an SEC filing — into a normalized schema of entities, events, obligations, and outcomes. Named parties are resolved and disambiguated so that the same actor is recognized across millions of records regardless of naming variation.",
          "The normalized data flows into CONFLUENCE, where our correlation engine runs graph analytics, temporal trend detection, and anomaly scoring across the unified corpus. This is where isolated facts become patterns: a cluster of similar clauses migrating across an industry, a venue quietly shifting its posture on a doctrine, a competitor accelerating filings in a technology adjacency.",
          "Every candidate signal is then subjected to our SIGNAL-GRADE validation protocol, which tests each finding for statistical robustness, guards against spurious correlation, and stress-tests it against out-of-sample data before it earns a place in the deliverable. A quantitative analyst reviews the methodology and assumptions before release, so the numbers you receive are ones we are prepared to defend."
        ]
      },
      {
        heading: "What you receive",
        body: [
          "The centerpiece is an analytics dossier: the questions you posed answered with quantified patterns, trend lines, and correlation strengths, each accompanied by the evidentiary basis and a plain-language interpretation of what it means for your position.",
          "Alongside the narrative you receive an interactive analytics workspace — filterable dashboards, entity graphs, and time-series views — that lets your team interrogate the underlying data directly rather than taking our conclusions on faith.",
          "For clients integrating our work into their own systems, we provide structured data exports and, on standing engagements, a live feed that keeps the analysis current as new documents and filings enter the corpus."
        ]
      },
      {
        heading: "Who it's for",
        body: [
          "The service is designed for large enterprises and elite firms making decisions where scale changes the picture — portfolio-level litigation strategy, competitive positioning, market-entry analysis, or contract-standard benchmarking across an industry.",
          "It is especially powerful for clients who suspect a pattern exists but lack the instrumentation to prove it, and for those who need to quantify an intuition before committing capital or strategy to it.",
          "It is a poor fit for a one-document question; the value here compounds with the size and heterogeneity of the data in play."
        ]
      },
      {
        heading: "Why Bennet",
        body: [
          "Anyone can run a keyword search across a database. Bennet's edge is the fusion layer — CONFLUENCE resolves entities and events across sources that were never designed to talk to one another, which is the precondition for genuine cross-corpus insight rather than siloed reporting.",
          "Our SIGNAL-GRADE protocol means we distinguish real patterns from statistical noise before you build a decision on them. In an age of abundant data and abundant false positives, that discipline is the difference between an edge and an embarrassment.",
          "And we deliver transparency by design: you do not just get our conclusion, you get the workspace to test it yourself."
        ]
      }
    ],
    facts: [
      { label: "Typical turnaround", value: "1 to 3 weeks depending on corpus scope; standing feeds available" },
      { label: "Data sources", value: "Case law, statutes, regulations, contracts, patents, dockets, public market data" },
      { label: "Coverage", value: "Global corpora across multiple industries and jurisdictions" },
      { label: "Confidentiality tier", value: "Tier III — encrypted, access-logged, engagement-siloed" },
      { label: "Deliverable format", value: "Analytics dossier, interactive dashboards, entity graphs, data exports" },
      { label: "Ideal engagement", value: "Portfolio-scale strategy, competitive intelligence, industry benchmarking" },
      { label: "Accuracy / QA", value: "SIGNAL-GRADE statistical validation with quantitative analyst review" }
    ],
    tags: ["big data", "cross-corpus", "CONFLUENCE", "analytics", "pattern mining"],
    cta: { label: "Explore an analytics engagement", href: "/contact" }
  },

  "predictive": {
    slug: "predictive",
    category: "Service Brief",
    title: "Predictive Legal Strategy",
    subtitle: "See the outcome before you commit — probability, not guesswork, behind every move.",
    lead: "The most expensive decisions in litigation and dealmaking are made in fog: proceed or settle, this venue or that, hold firm or fold. Bennet's Predictive Legal Strategy replaces intuition with instrumentation. By modeling outcome probabilities against the historical behavior of judges, venues, and matter types, we let you weigh a course of action against a quantified forecast — before you have committed a dollar or a day to it. You still make the call. You just make it with the odds in view.",
    sections: [
      {
        heading: "What it is",
        body: [
          "Predictive Legal Strategy is Bennet's outcome-modeling practice: a quantitative service that estimates the probable trajectory and result of a matter, scores its risk exposure, and profiles the decision-makers who will shape it.",
          "At its core is ORACLE, our proprietary predictive modeling suite, which combines judge and venue analytics, matter-type base rates, and case-specific features into calibrated probability estimates rather than false-precision single-number predictions.",
          "This is forecasting, not fortune-telling — and emphatically not legal advice. We deliver probabilities, confidence intervals, and the drivers behind them, so that you and your counsel can make a better-informed strategic decision."
        ]
      },
      {
        heading: "How it works",
        body: [
          "Each engagement opens with feature extraction, where our team and the ORACLE pipeline distill a matter into the variables that historically move outcomes: the legal issues at stake, the procedural posture, the parties and their representation, the forum, and the assigned decision-maker where known.",
          "These features are scored against our behavioral models. Our judge and venue analytics draw on years of docket history to characterize how a given judge or court has ruled on comparable motions, doctrines, and matter types, including tendencies on timing, settlement pressure, and dispositive rulings. Matter-type base rates anchor the estimate in reality, and case-specific features adjust it up or down.",
          "The models are wrapped in our CALIBRATE validation regime, which back-tests every model against held-out historical outcomes, reports its demonstrated accuracy honestly, and expresses predictions as probabilities with explicit confidence intervals. A senior strategist reviews each forecast for context the model cannot see, so you receive a number and the judgment to interpret it."
        ]
      },
      {
        heading: "What you receive",
        body: [
          "The primary deliverable is a strategy forecast: the probability of key outcomes — dismissal, summary judgment, settlement, trial result — each with a confidence interval and a breakdown of the factors driving it up or down.",
          "You also receive a decision-maker profile characterizing the relevant judge and venue's historical tendencies, and a risk exposure score that translates the forecast into quantified downside so it can be weighed against cost, time, and reputational stakes.",
          "Where the engagement calls for it, we model alternative strategies side by side — proceed versus settle, one venue versus another — so the deliverable becomes a comparative decision aid rather than a single static prediction."
        ]
      },
      {
        heading: "Who it's for",
        body: [
          "The service is built for litigators and general counsel facing bet-the-company decisions, for those weighing settlement against trial, and for teams choosing among venues or strategies where the wrong path is costly and hard to reverse.",
          "It is equally valuable to corporate decision-makers who must translate legal risk into business terms — an expected-value figure a board can act on rather than a lawyer's qualitative hedge.",
          "It is not appropriate where a matter is genuinely unprecedented and no comparable history exists; in those cases we will say so plainly rather than manufacture confidence."
        ]
      },
      {
        heading: "Why Bennet",
        body: [
          "Many will offer a prediction. Bennet's distinction is calibration — through CALIBRATE we report the demonstrated, back-tested accuracy of our models rather than asking you to trust an unmeasured hunch dressed up in a percentage.",
          "Our forecasts come with their drivers exposed, so you understand not only what is likely but why, and can pressure-test the assumptions yourself.",
          "And we are candid about uncertainty. A confidence interval is not a weakness; it is the honest shape of the future, and pretending otherwise is how expensive mistakes get made."
        ]
      }
    ],
    facts: [
      { label: "Typical turnaround", value: "1 to 2 weeks; rapid preliminary read in 48 hours" },
      { label: "Data sources", value: "Docket histories, judicial rulings, matter-type outcome records, case-specific features" },
      { label: "Coverage", value: "Federal and state courts with sufficient historical depth for modeling" },
      { label: "Confidentiality tier", value: "Tier III — encrypted, access-logged, engagement-siloed" },
      { label: "Deliverable format", value: "Strategy forecast, decision-maker profile, risk exposure score, comparative scenarios" },
      { label: "Ideal engagement", value: "Settlement-versus-trial, venue selection, bet-the-company litigation decisions" },
      { label: "Accuracy / QA", value: "CALIBRATE back-testing against held-out outcomes with reported model accuracy" }
    ],
    tags: ["predictive", "ORACLE", "outcome modeling", "judge analytics", "risk scoring"],
    cta: { label: "Model your matter", href: "/contact" }
  },

  "due-diligence": {
    slug: "due-diligence",
    category: "Service Brief",
    title: "Investigative Due Diligence",
    subtitle: "Know exactly who you're dealing with — before the ink dries, not after.",
    lead: "A counterparty is only as trustworthy as what you can prove about them. Bennet's Investigative Due Diligence turns names on a term sheet into fully mapped entities — their true ownership, their affiliations, their litigation footprint, their reputation, and the risks that never appear in a pitch deck. We assemble the complete picture from open, licensed, and specialized sources, verify it rigorously, and hand you a clear-eyed assessment before you commit. The surprises should be ours to find, not yours to discover later.",
    sections: [
      {
        heading: "What it is",
        body: [
          "Investigative Due Diligence is Bennet's entity-intelligence practice: a structured investigation that maps who a party truly is — their corporate structure, beneficial ownership, affiliations, financial and litigation history, and reputational profile — and flags the risks material to your decision.",
          "The work is organized around SENTINEL, our proprietary entity-resolution and mapping framework, which reconstructs ownership graphs and affiliation networks across jurisdictions and corporate veils.",
          "This is investigative research, not a legal opinion. We deliver verified facts and a calibrated risk assessment; the judgment about whether to proceed remains with you and your advisors."
        ]
      },
      {
        heading: "How it works",
        body: [
          "An engagement begins with scoping and entity seeding, where we establish the subjects of inquiry and the risk questions that matter to your transaction. SENTINEL then resolves each subject across corporate registries, filings, and licensed data, disambiguating common names and piercing layered holding structures to establish true ownership and control.",
          "From the resolved entities we build the affiliation graph — directors, officers, related companies, and known associates — and overlay the record: litigation history, regulatory actions, adverse media, sanctions and watchlist exposure, and financial-distress signals. Where the mandate allows, we augment open-source findings with discreet human-source and specialist inquiry.",
          "Every material finding passes through our CORROBORATE protocol, which requires independent confirmation from at least two sources before a fact is asserted, grades each finding by reliability, and separates confirmed fact from unverified allegation in the record. A senior investigator reviews the file for gaps and overreach before it is released, so what you receive is both complete and disciplined."
        ]
      },
      {
        heading: "What you receive",
        body: [
          "The core deliverable is a due-diligence report: an executive risk verdict up front, followed by the full entity and ownership map, the affiliation network, and a documented record of the subject's litigation, regulatory, financial, and reputational history.",
          "Findings are presented with source provenance and a reliability grade, and material red flags are elevated into a dedicated risk register with severity ratings so nothing consequential is buried in the detail.",
          "Visual ownership and network graphs accompany the narrative, and clients may receive the underlying structured data for integration into their own risk and compliance systems."
        ]
      },
      {
        heading: "Who it's for",
        body: [
          "The service is built for acquirers, investors, and lenders evaluating counterparties; for firms onboarding significant clients or partners; and for any organization entering a relationship where the true nature of the other side carries material risk.",
          "It is especially valuable in cross-border transactions, in dealings with privately held or opaquely structured entities, and where reputational exposure is as consequential as financial exposure.",
          "It is not a commodity background check. The value lies in resolution and corroboration at a depth that a surface search cannot reach."
        ]
      },
      {
        heading: "Why Bennet",
        body: [
          "Ownership is where diligence usually fails, and it is exactly where Bennet is strongest: SENTINEL is engineered to see through layered structures that defeat a conventional registry lookup.",
          "Our CORROBORATE standard means we never launder allegation as fact. Every material claim carries its sourcing and its reliability grade, which is precisely what makes the report usable in a decision you may later have to defend.",
          "And we calibrate to your risk appetite. The deliverable is not an undifferentiated data dump but a prioritized verdict that tells you what actually matters before you sign."
        ]
      }
    ],
    facts: [
      { label: "Typical turnaround", value: "1 to 3 weeks by depth; expedited executive read available" },
      { label: "Data sources", value: "Corporate registries, court and regulatory records, licensed data, adverse media, discreet human sources" },
      { label: "Coverage", value: "Domestic and cross-border, including opaque and multi-jurisdiction structures" },
      { label: "Confidentiality tier", value: "Tier IV — heightened confidentiality, need-to-know access, engagement-siloed" },
      { label: "Deliverable format", value: "Risk-graded report, ownership and network graphs, red-flag register, structured data" },
      { label: "Ideal engagement", value: "M&A, investment, lending, and high-value onboarding diligence" },
      { label: "Accuracy / QA", value: "CORROBORATE two-source confirmation with reliability grading and investigator review" }
    ],
    tags: ["due diligence", "SENTINEL", "ownership mapping", "reputation", "risk"],
    cta: { label: "Request a diligence engagement", href: "/contact" }
  },

  "compliance": {
    slug: "compliance",
    category: "Service Brief",
    title: "Regulatory & Compliance Intelligence",
    subtitle: "Global complexity, made clear — every change that matters, the moment it matters.",
    lead: "Regulation does not wait, and it does not arrive in one place. For an organization operating across borders, the obligations shift constantly and asymmetrically — a rule tightens here, an interpretation loosens there, a deadline appears without warning. Bennet's Regulatory & Compliance Intelligence gives you a single, clear line of sight across that fragmented landscape: continuous multi-jurisdiction tracking, alerts calibrated to what actually affects you, and interpretation that translates dense regulatory text into decisions your teams can act on.",
    sections: [
      {
        heading: "What it is",
        body: [
          "Regulatory & Compliance Intelligence is Bennet's monitoring and interpretation service: a program that tracks the regulatory environment relevant to your operations across every jurisdiction you touch, detects material changes as they occur, and translates them into actionable guidance mapped to your obligations.",
          "It runs on MERIDIAN, our proprietary regulatory-tracking platform, which maintains a living map of rules, guidance, and enforcement posture across jurisdictions and continuously reconciles it against your defined compliance profile.",
          "We provide intelligence and interpretation, not legal advice or representation. We tell you what changed, what it likely means, and what it touches; your compliance and legal teams decide how to respond."
        ]
      },
      {
        heading: "How it works",
        body: [
          "The service begins with profiling, where we build your regulatory footprint — the jurisdictions, sectors, activities, and obligation categories that define your exposure. This profile becomes the filter through which all monitoring is tuned, so you hear about what matters to you and not the rest.",
          "MERIDIAN then ingests primary regulatory sources, official guidance, enforcement actions, and legislative pipelines on a continuous basis. A change-detection layer compares each new state of the world against the prior baseline, isolates genuine substantive change from cosmetic revision, and routes material changes into our interpretation workflow.",
          "In interpretation, an analyst assesses each material change for impact, maps it to the specific obligations in your profile it affects, and drafts a plain-language read of what it means and what action it may warrant. Every interpretation clears our CLARITY review — a second-analyst check for accuracy, scope, and the crucial line between describing a requirement and advising on compliance — before it reaches you."
        ]
      },
      {
        heading: "What you receive",
        body: [
          "You receive a continuous alert stream calibrated to your profile: each material change delivered with a severity rating, the obligations it affects, effective dates and deadlines, and a plain-language interpretation of its significance.",
          "Underpinning the alerts is a living compliance dashboard — a current-state view of your regulatory landscape across all tracked jurisdictions, with change history, upcoming deadlines, and obligation mapping in one place.",
          "On a defined cadence you also receive a horizon report synthesizing emerging developments and legislative pipelines, so your teams can prepare for what is coming rather than only reacting to what has arrived."
        ]
      },
      {
        heading: "Who it's for",
        body: [
          "The service is built for multinational enterprises, financial institutions, and any regulated organization whose obligations span multiple jurisdictions and change faster than an internal team can track by hand.",
          "It is especially valuable to general counsel and chief compliance officers who need one authoritative, filtered view rather than a dozen fragmented feeds, and who must brief boards on regulatory exposure with confidence.",
          "It is less suited to a single-jurisdiction operation with a stable rulebook, where the continuous-monitoring model offers less marginal value."
        ]
      },
      {
        heading: "Why Bennet",
        body: [
          "The failure mode of regulatory monitoring is noise — too many alerts, too little relevance, until the team stops reading. MERIDIAN's profile-tuned filtering is engineered to solve exactly that, surfacing what touches you and suppressing what does not.",
          "Our CLARITY review means every alert arrives interpreted, not merely forwarded. You get the meaning and the impact, not a link to a hundred pages you still have to decode.",
          "And by holding a disciplined line between interpretation and advice, we give you intelligence you can act on while keeping the ultimate compliance judgment — properly — inside your own house."
        ]
      }
    ],
    facts: [
      { label: "Typical turnaround", value: "Continuous monitoring; material-change alerts within hours of publication" },
      { label: "Data sources", value: "Primary regulations, official guidance, enforcement actions, legislative pipelines" },
      { label: "Coverage", value: "Multi-jurisdiction across the regions and sectors in your compliance profile" },
      { label: "Confidentiality tier", value: "Tier III — encrypted, access-logged, engagement-siloed" },
      { label: "Deliverable format", value: "Calibrated alert stream, living compliance dashboard, periodic horizon reports" },
      { label: "Ideal engagement", value: "Standing subscription for multi-jurisdiction regulated operations" },
      { label: "Accuracy / QA", value: "CLARITY second-analyst review for accuracy, scope, and advice-line integrity" }
    ],
    tags: ["compliance", "MERIDIAN", "multi-jurisdiction", "change alerts", "interpretation"],
    cta: { label: "Start a monitoring engagement", href: "/contact" }
  },

  "referral": {
    slug: "referral",
    category: "Service Brief",
    title: "Attorney Referral Network",
    subtitle: "The right counsel, matched to the case — vetted, ranked, and precisely fit.",
    lead: "The difference between the right lawyer and a merely available one can decide a matter before it begins. Bennet's Attorney Referral Network replaces the guesswork of reputation and referral-by-rolodex with a rigorous, evidence-based match. We maintain a vetted roster of specialists ranked by demonstrated track record, and we fit counsel to case on the specifics that actually predict fit — the jurisdiction, the issue, the posture, the opposing side. You get a shortlist you can trust, not a favor being repaid.",
    sections: [
      {
        heading: "What it is",
        body: [
          "The Attorney Referral Network is Bennet's counsel-matching service: a curated, continuously vetted roster of specialist attorneys and firms, paired with a precision matching engine that recommends the counsel best fit to a specific matter.",
          "It is powered by COMPASS, our proprietary matching framework, which scores fit across jurisdiction, practice specialization, matter type, demonstrated track record, and situational factors such as the forum and the opposing party.",
          "Bennet is an independent intelligence firm, not a law firm, and we do not practice law or take a stake in the representation. We identify and rank suitable counsel on the evidence; the engagement is entirely between you and the attorney you choose."
        ]
      },
      {
        heading: "How it works",
        body: [
          "Every attorney and firm enters the network through our vetting protocol, which verifies credentials and standing, confirms genuine specialization rather than self-described breadth, and assembles a documented track record from outcomes, matter history, and structured references. Vetting is not a one-time gate — the roster is periodically re-reviewed to keep standing current.",
          "When you bring a matter, we capture its defining parameters: the jurisdiction, the substantive issues, the procedural posture, the stakes, the timeline, and any conflicts or sensitivities. COMPASS scores the roster against these parameters, weighting demonstrated track record in comparable matters far more heavily than reputation or tenure alone.",
          "The ranked candidates pass through our FITCHECK review, in which a senior advisor screens for conflicts, confirms current availability and capacity, and pressure-tests each recommendation against the nuances of your matter before it is presented. The result is a short, defensible shortlist rather than a long directory dump."
        ]
      },
      {
        heading: "What you receive",
        body: [
          "You receive a ranked shortlist of recommended counsel — typically a focused set rather than a long list — each with a clear rationale for the match, their relevant specialization, and a summary of the track record that supports the recommendation.",
          "Each candidate profile documents demonstrated experience in comparable matters, jurisdictional fit, and any situational advantages, so the ranking is transparent and you understand why one name sits above another.",
          "Where useful, we facilitate a warm, conflict-cleared introduction, and we remain available to support the selection decision without ever inserting ourselves into the representation itself."
        ]
      },
      {
        heading: "Who it's for",
        body: [
          "The service is built for corporate legal departments and businesses that must retain outside counsel in an unfamiliar jurisdiction or specialty, and for firms seeking co-counsel or specialist support outside their core practice.",
          "It is especially valuable where the matter is high-stakes or highly specialized and the cost of the wrong choice is severe, and where the client lacks a trusted local network to draw on.",
          "It is not a lead-generation directory. The value is in curation and evidence-based ranking, not in the breadth of the list."
        ]
      },
      {
        heading: "Why Bennet",
        body: [
          "Most referrals run on relationships and reciprocity. Bennet's COMPASS matching runs on evidence — demonstrated outcomes in comparable matters — which is a far better predictor of fit than a familiar name.",
          "Because we are independent and take no stake in the representation, our recommendation is unconflicted. We are matching you to the best counsel for the matter, not steering you toward a partner who owes us one.",
          "And FITCHECK means every name that reaches you has already been cleared for conflicts and confirmed for availability, so the shortlist is one you can act on immediately rather than a starting point for more work."
        ]
      }
    ],
    facts: [
      { label: "Typical turnaround", value: "48 to 72 hours for a vetted shortlist; expedited same-day available" },
      { label: "Data sources", value: "Vetted attorney roster, verified track records, structured references, matter outcomes" },
      { label: "Coverage", value: "Specialists across jurisdictions and practice areas, continuously re-vetted" },
      { label: "Confidentiality tier", value: "Tier III — encrypted, access-logged, engagement-siloed" },
      { label: "Deliverable format", value: "Ranked shortlist with match rationale and track-record profiles; optional introductions" },
      { label: "Ideal engagement", value: "Retaining counsel in an unfamiliar jurisdiction or specialty on a consequential matter" },
      { label: "Accuracy / QA", value: "Credential and track-record vetting plus FITCHECK conflict and availability screening" }
    ],
    tags: ["referral", "COMPASS", "vetted counsel", "precision matching", "track record"],
    cta: { label: "Request a counsel match", href: "/contact" }
  },

  "reports": {
    slug: "reports",
    category: "Service Brief",
    title: "Custom Intelligence Reports",
    subtitle: "Executive-ready, beautifully delivered — rigor a board can read in ten minutes.",
    lead: "Intelligence that cannot be understood at the top is intelligence that goes unused. Bennet's Custom Intelligence Reports translate the full depth of our research and analytics into a deliverable built for the people who decide: a crisp executive summary, data visualizations that make the complex legible at a glance, and a concrete set of recommendations. The rigor underneath is uncompromising; the presentation is unmistakably executive-grade. This is where our analysis becomes your decision.",
    sections: [
      {
        heading: "What it is",
        body: [
          "Custom Intelligence Reports is Bennet's synthesis and presentation practice: a bespoke reporting service that packages research, analytics, diligence, or forecasting — from a single Bennet service or several combined — into a single, decision-ready document tailored to a specific audience and question.",
          "It is produced through ATELIER, our proprietary reporting studio, which pairs analytical synthesis with a disciplined visual system so that every report is both rigorous and immediately legible.",
          "The report presents intelligence and options; it does not render legal advice. We frame the findings, quantify the tradeoffs, and recommend a course on the evidence, while the decision and any legal judgment remain with you and your counsel."
        ]
      },
      {
        heading: "How it works",
        body: [
          "Each report begins with a framing session in which we define the decision the report must serve, the audience who will read it, and the questions it must answer. That brief governs every subsequent choice of content, depth, and emphasis, so the deliverable is built around a decision rather than around whatever data happened to be available.",
          "Our analysts then synthesize the underlying intelligence — pulling from the relevant Bennet engagements and sources — distilling volumes of research into the essential findings and the tension points that matter. ATELIER's visualization layer renders quantitative findings into charts, maps, and network graphics engineered for clarity and accessibility in both print and screen contexts.",
          "The draft passes through our POLISH quality regime: an accuracy check that reconciles every figure and claim against its source, an editorial pass for narrative clarity, and a design review against our visual standards. A principal reviews the final report for executive readiness before delivery, ensuring the summary genuinely stands alone for a reader who never turns past the first page."
        ]
      },
      {
        heading: "What you receive",
        body: [
          "The deliverable is a fully designed intelligence report: a standalone executive summary with a clear bottom line, followed by the supporting analysis, the evidence, and a prioritized set of actionable recommendations.",
          "Throughout, findings are rendered as purpose-built visualizations — trend lines, comparison matrices, ownership and network graphs, risk heat maps — designed so a reader grasps the picture in seconds and can go deeper where they wish.",
          "Reports are delivered as a print-ready and screen-optimized document, and, where the engagement warrants, as an accompanying executive briefing deck and a secure interactive version for readers who want to explore the underlying data."
        ]
      },
      {
        heading: "Who it's for",
        body: [
          "The service is built for boards, C-suites, and senior partners who must make a consequential decision from complex underlying intelligence and have neither the time nor the mandate to wade through raw analysis.",
          "It is especially valuable when findings must be communicated upward or across an organization — to a board, an investment committee, or a client — where clarity and credibility of presentation are as important as the substance.",
          "It is not for a reader who wants the raw data set and nothing else; the value here is in synthesis, framing, and executive-grade presentation."
        ]
      },
      {
        heading: "Why Bennet",
        body: [
          "Rigor and readability are usually a tradeoff, and most intelligence products sacrifice one for the other. Bennet's ATELIER studio is built to deliver both — analysis that would satisfy a specialist, presented so a non-specialist decides with confidence.",
          "Our POLISH regime means every number in the report reconciles to its source and every claim survives scrutiny, so the polish is never a veneer over soft analysis.",
          "And because each report is framed around your specific decision and audience, you receive a document engineered to be acted upon — not an archive to be filed and forgotten."
        ]
      }
    ],
    facts: [
      { label: "Typical turnaround", value: "1 to 2 weeks from source material; expedited briefings available" },
      { label: "Data sources", value: "Synthesized from Bennet engagements — research, analytics, diligence, forecasting" },
      { label: "Coverage", value: "Any subject and audience within Bennet's intelligence scope" },
      { label: "Confidentiality tier", value: "Tier III to IV, matched to the underlying engagement" },
      { label: "Deliverable format", value: "Designed print and screen report, executive briefing deck, secure interactive version" },
      { label: "Ideal engagement", value: "Board, C-suite, or investment-committee decisions from complex intelligence" },
      { label: "Accuracy / QA", value: "POLISH source reconciliation, editorial review, and principal sign-off" }
    ],
    tags: ["reports", "ATELIER", "executive summary", "data visualization", "recommendations"],
    cta: { label: "Commission a custom report", href: "/contact" }
  }
};
