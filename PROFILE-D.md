# Boring Stack Profile D: Static / Marketing

**Claude Code reference. March 14, 2026.**

Campaign websites, product marketing pages, and any site that ships in a day with zero database and zero auth. Expo is the foundation so you never context switch between profiles.

## Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Expo SDK 55, web-only build target | `expo-server` for SSR (SEO) |
| Router | Expo Router v7 | File-based, same as Profile A/B |
| Styling | NativeWind v5 | Tailwind classes, matches A/B/assistant-ui/shadcn |
| Hosting | CF Workers with Static Assets | `wrangler deploy`, NOT CF Pages (deprecated Apr 2025) |
| Forms | Shared CF Worker | POST handler → writes to client's Directus instance (Profile C) |
| Content | Markdown files | Bio, issues, blog posts. No CMS. |
| Analytics | CF Web Analytics | Free, privacy-first, no JS tag required |
| Email | Resend | Contact form confirmations |
| Observability | Sentry + CF Workers Logpush | Crash reporting + structured logs |

## Kernel (shared with all profiles)

Zod, Drizzle ORM, TanStack Query, Zustand/Immer, TypeScript strict, Biome, Vitest, CF Workers, Sentry, Resend.

AI infrastructure available but typically unused in D: CF AI Gateway, CF Vectorize, Workers AI.

## Brand Token System

Each D site swaps a single config file to produce a unique brand:

```typescript
// brand.config.ts
export const brand = {
  name: "Joyce Crosswhite",
  tagline: "Sullivan County Commissioner",
  domain: "votejoyceforcommissioner.com",
  colors: {
    primary: "#1B2A4A",      // brand-navy equivalent
    accent: "#B8943E",       // brand-gold equivalent
    surface: "#FAF8F5",      // brand-cream equivalent
  },
  fonts: {
    display: "Cormorant Garamond",
    body: "Libre Franklin",
  },
  logo: "./assets/logo.svg",
  contact: {
    email: "info@votejoyceforcommissioner.com",
    formWorkerUrl: "https://forms.holstonpartners.com/submit",
  },
} as const;
```

Expo SDK 55 Color API handles adaptive platform colors from these tokens.

## Template Workflow

1. Clone the Boring Stack D template repo
2. Swap `brand.config.ts` (colors, fonts, logo, candidate name)
3. Drop in markdown content (`/content/bio.md`, `/content/issues/*.md`, `/content/blog/*.md`)
4. `wrangler deploy`
5. Site is live

Total time from clone to live: under 4 hours for a campaign site.

## Existing D Sites (deployed as CF Workers)

These six Workers are currently live on Cody's Cloudflare account:

| Worker Name | Purpose |
|---|---|
| `holston-partners` | Holston Partners marketing site (currently TanStack Start SSR, pending migration to Expo D) |
| `tennessee-starts-here-v2` | Tourism brand site |
| `sullivan-county-tn` | County tourism/info |
| `homefield-site` | Brand site |
| `where-tennessee-began` | Heritage tourism brand |
| `rocky-mount-app` | Rocky Mount State Historic Site |

## Migration: holston-partners (TanStack Start → Expo D)

The `holston-partners` Worker is currently a TanStack Start SSR build with:
- React 19.2.4 + React DOM Server (edge streaming)
- TanStack Router (file-based routing: root + index)
- Radix UI (Collapsible, Accordion) + lucide-react icons
- tailwind-merge + clsx
- Cormorant Garamond (display) + Libre Franklin (body)
- Brand tokens: `brand-navy`, `brand-gold`, `brand-cream`, `brand-surface`, `brand-navy-mid`, `brand-gold-muted`, `brand-gold-light`, `brand-navy-light`
- Components: Nav, Hero, Methodology, Services (4 capabilities), Products (3 tiers with accordion), About, Credibility, Contact form, Footer

**Migration steps:**
1. Init Expo SDK 55 project with web-only target
2. Port brand tokens to `brand.config.ts` format above
3. Port components (JSX is identical, swap Radix Accordion for Expo equivalent or keep via `use dom`)
4. Replace tailwind-merge with NativeWind v5 `cn()` utility
5. Move contact form POST to shared forms Worker
6. `wrangler deploy` to replace the existing `holston-partners` Worker

Design system colors already match. Fonts already match. The migration is mechanical.

## Planned D Sites

| Site | Client | Timeline |
|---|---|---|
| Joyce Crosswhite campaign | Holston Partners | Before Aug 2026 primary |
| Samantha Trantham campaign | Holston Partners | TBD |
| BoringWorks.com | Internal | Q2 2026 |
| privatebrain.org | Internal | Q2 2026 |
| Future HP campaign clients | Holston Partners | On-demand |

## Shared Forms Worker

A single CF Worker handles all D site form submissions:

```
POST https://forms.holstonpartners.com/submit
Content-Type: application/json

{
  "site": "joyce-crosswhite",
  "type": "contact",        // contact | volunteer | signup
  "name": "...",
  "email": "...",
  "message": "..."
}
```

The Worker:
1. Validates with Zod
2. Writes to the client's Directus instance (Profile C) via REST API
3. Sends confirmation email via Resend
4. Returns success/error JSON

One Worker, all campaign sites. No per-site backend.

## Upgrade Path: D → A

When a D client needs auth, a database, or interactivity beyond forms:

1. Same Expo codebase (no rewrite)
2. Add Supabase (auth + Postgres)
3. Add Mastra if agent features needed
4. Redeploy

Promoting D to A is adding dependencies, not starting over. This is why every profile uses Expo.

## What Profile D Does NOT Have

- No database (forms go to Profile C's Directus)
- No auth
- No Mastra / CF Agents SDK
- No Supabase
- No EAS Update / OTA (static sites don't need it)
- No expo-notifications (no push)
- No native mobile builds (web-only)

## Rejected for D

TanStack Start (orphaned, current holston-partners site is proof of concept but won't be repeated), Astro (consolidated to Expo), CF Pages (deprecated), Tamagui, Next.js, any SSG framework. Expo web-only with `expo-server` SSR handles everything D needs.
