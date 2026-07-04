# TODOs — Bennet Legal Research Group

Living list of discussed-but-not-done work. Ranked by effort (H/M/L) and UX impact (big/moderate/low).

## Content & brand

- [ ] Replace all image placeholders with AI-generated art. Search `imageHint` / `data-image-hint`
      for the exact prompts. (Effort: M, Impact: big)
- [ ] Add a real logo SVG in `src/components/brand-logo.tsx` (currently a monogram). (L, moderate)
- [ ] Provide a real `public/og.png` (1200×630) social share image. (L, moderate)
- [ ] Replace placeholder contact details in `src/lib/site.ts` (email, phone, address). (L, moderate)
- [ ] Real headshots + bios for the team, or swap to "advisory" framing. (L, low)

## Functionality

- [ ] Client Portal: wire real auth (NextAuth / Supabase / AWS Cognito) into `app/portal`. (H, big)
- [ ] Persist contact submissions to a datastore (DynamoDB / Supabase) alongside the SES send. (M, moderate)
- [ ] Go live on Stripe: `npm install stripe`, set keys, finish `app/api/checkout/route.ts`. (M, moderate)
- [ ] Insights: turn cards into real MDX/CMS-backed article pages. (H, moderate)
- [ ] Swap in-memory rate limiter for Upstash Redis if running multi-instance. (M, low)
- [ ] Add an analytics provider (Plausible / GA4) + cookie/consent handling. (M, low)

## Polish

- [ ] Verify AAA color contrast on gradient text over busy backgrounds. (L, moderate)
- [ ] Add automated tests (Vitest + Testing Library) for the contact form + validation. (M, moderate)
- [ ] Lighthouse pass: audit LCP/CLS on mobile, lazy-load below-the-fold sections. (M, moderate)
- [ ] Verify legal disclaimers (`privacy`, `terms`, "not a law firm") with counsel. (L, big)

## Infra / deploy

- [ ] Verify SES domain identity for bennetlegalgroup.com so mail sends from an @-domain address. (L)
- [ ] Add CI (GitHub Actions): lint + build on PR, deploy on merge to `main`. (M, moderate)
- [ ] Set up branch protection on `main`/`develop` (require PR + passing CI). (L, moderate)
- [ ] Add SSL-expiry monitoring for bennetlegalgroup.com. (L, low)
