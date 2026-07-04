# Bennet Legal Research Group — Website

Marketing site for **Bennet Legal Research Group** — _Intelligence That Wins_. A bold,
high-energy legal-tech landing experience: AI-powered legal research, big-data intelligence, and
predictive strategy for enterprises and law firms.

> Bennet Legal is **not** a law firm. It's the research and intelligence powerhouse behind the win.

## Tech stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (base-nova / Base UI + Radix primitives)
- **Framer Motion** — scroll-triggered reveals, animated hero
- **AWS SES** — contact / proposal form email
- **next-themes** — dark by default, elegant light mode
- **Canvas** — bespoke animated data-network hero (no external assets)

## Project structure

```
bennetapp/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx            # Root layout: fonts, theme provider, header/footer, SEO
│  │  ├─ page.tsx              # Single-page landing (assembles all sections)
│  │  ├─ globals.css           # Design system: brand tokens, utilities, keyframes
│  │  ├─ not-found.tsx         # Branded 404
│  │  ├─ robots.ts / sitemap.ts
│  │  ├─ insights/             # Insights listing page
│  │  ├─ portal/               # Client Portal login teaser
│  │  ├─ privacy/ · terms/     # Legal templates
│  │  └─ api/
│  │     ├─ contact/route.ts   # Validates + emails via SES (rate-limited)
│  │     ├─ checkout/route.ts  # Mock Stripe checkout (ready to wire live)
│  │     └─ health/route.ts    # Healthcheck for Docker/monitoring
│  ├─ components/
│  │  ├─ sections/             # hero, services, why-bennet, insights,
│  │  │                        #   success-stories, about, cta, trusted-by
│  │  ├─ layout/               # site-header (sticky nav), site-footer
│  │  ├─ ui/                   # shadcn/ui components
│  │  ├─ hero-network.tsx      # Animated canvas data-network
│  │  ├─ contact-form.tsx      # Secure form (client)
│  │  ├─ reveal.tsx            # Framer Motion scroll-reveal helpers
│  │  └─ ...                   # brand-logo, theme-toggle, stat-counter, etc.
│  └─ lib/
│     ├─ site.ts               # Brand facts, nav, contact details  <- edit me
│     ├─ content.ts            # All marketing copy/data            <- edit me
│     ├─ validation.ts         # Shared zod schema (client + API)
│     ├─ mailer.ts             # AWS SES sender
│     └─ rate-limit.ts         # In-memory rate limiter
├─ Dockerfile · docker-compose.yml · .dockerignore
├─ .env.example
├─ DEPLOYMENT.md               # Full server deploy runbook
└─ TODOS.md
```

## Getting started (local)

```bash
# From the project root (e:/Projects/BennetLegal/bennetapp)
npm install
cp .env.example .env        # fill in values (or leave SES blank — form logs instead)
npm run dev                 # http://localhost:3000
```

Scripts:

| Command         | What it does                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start the dev server                  |
| `npm run build` | Production build (standalone output)  |
| `npm run start` | Serve the production build            |
| `npm run lint`  | Lint with ESLint (Next config)        |

## Editing content & brand

- **Copy / data:** `src/lib/content.ts` (services, stories, insights, team, stats).
- **Brand facts / nav / contact:** `src/lib/site.ts`.
- **Colors / fonts / effects:** `src/app/globals.css` (`--brand-*` tokens near the top).

## Placeholder imagery

Image placeholders carry a `data-image-hint` attribute (and a `[ AI visual placeholder ]`
label) describing the art to generate and drop in. Search the codebase for `imageHint` to find
them all. Replace each placeholder block with an `<Image>` or `<img>` when assets are ready.

## Contact form (AWS SES)

The form posts to `/api/contact`, which validates with zod, rate-limits by IP, and emails via
AWS SES. If SES env vars are absent, submissions are logged (never fail the UX). See `.env.example`
and `DEPLOYMENT.md` for the least-privilege IAM setup.

## Payments (mock Stripe)

`/api/checkout` is stubbed in safe "mock mode." To go live: `npm install stripe`, set
`STRIPE_SECRET_KEY` + a Price ID, and follow the inline instructions in
`src/app/api/checkout/route.ts`.

## Deployment

Dockerized and served behind Caddy on AWS Lightsail. See **[DEPLOYMENT.md](./DEPLOYMENT.md)**.

## Future backend integration

- **Client Portal auth:** wire NextAuth / Supabase / AWS Cognito into `src/app/portal/page.tsx`.
- **Persistence / CRM:** store contact submissions (DynamoDB / Supabase / Postgres) in
  `src/app/api/contact/route.ts` alongside the SES send.
- **Rate limiting at scale:** swap the in-memory limiter for Upstash Redis.
