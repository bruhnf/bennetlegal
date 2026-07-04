# Agent / contributor guide — Bennet Legal Research Group site

Concise orientation for anyone (human or AI) working in this repo.

## Stack

- Next.js **15** (App Router) + TypeScript, Tailwind CSS **v4**, shadcn/ui, Framer Motion.
- Pinned to Next 15 deliberately (see git history) — do not bump to 16 without a reason.
- Dark mode is the default (next-themes, `class` strategy). Light mode is a toggle.

## Where things live

- **Marketing copy/data:** `src/lib/content.ts`. **Brand facts/nav/contact:** `src/lib/site.ts`.
- **Design tokens** (`--brand-*`), utilities, keyframes: `src/app/globals.css`.
- **Sections:** `src/components/sections/*`. **shadcn primitives:** `src/components/ui/*`.
- **APIs:** `src/app/api/{contact,checkout,health}/route.ts`.

## Conventions

- Prefer editing `content.ts` / `site.ts` over hardcoding copy in components.
- Keep contact-form validation in `src/lib/validation.ts` (shared by client + API).
- `asChild` works on our `Button` and `Sheet` (Radix Slot / Radix Dialog). Other shadcn
  components here are base-nova (Base UI) and use a `render` prop instead — don't add `asChild`.
- Image placeholders carry `data-image-hint`; keep that pattern when adding new ones.
- Respect `prefers-reduced-motion` (the reveal + hero helpers already do).

## Before committing

```bash
npm run build   # type-checks + lints + builds
```

See `README.md` for structure and `DEPLOYMENT.md` for shipping to the Lightsail host.
