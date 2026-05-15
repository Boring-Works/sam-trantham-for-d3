# Samantha Trantham Campaign — Website

The deployed campaign site for Samantha Trantham (R), running for her third term as Polk County Commission District 3 in the Tennessee Republican Primary on Thursday, August 6, 2026.

**Live:** https://sam-trantham-campaign.codyboring.workers.dev

## Stack

- TanStack Router (file-based routing) on a Vite SPA
- React 19 + Tailwind CSS v4
- TypeScript strict
- Vite 6 + `@cloudflare/vite-plugin`
- Cloudflare Workers (worker name: `sam-trantham-campaign`)

Single page. No database. No auth. No API. The volunteer form posts to the shared `forms.holstonpartners.com` Worker.

## Commands

```bash
pnpm install        # one-time setup
pnpm dev            # local dev at http://localhost:3000
pnpm build          # production build to dist/
pnpm preview        # preview production build locally
pnpm deploy         # build + deploy to Cloudflare Workers (requires wrangler auth)
```

## Deploy

Wrangler is OAuth-authenticated. To deploy:

```bash
pnpm deploy
```

The Vite Cloudflare plugin generates `dist/wrangler.json` at build time. The static asset config in `wrangler.toml` sets `not_found_handling = "single-page-application"` so deep links and the 404 catch-all route work correctly.

## Component tree

```
src/
├── routes/
│   ├── __root.tsx          Layout: skip link -> Countdown -> Nav -> Outlet -> MobileCTA
│   ├── index.tsx           Home: composes all sections in order
│   └── $.tsx               404 catch-all
├── components/
│   ├── Countdown.tsx       Orange banner: "N days until the August 6 Primary"
│   ├── Nav.tsx             Sticky nav. 5 anchor links + copper "Yard Sign" CTA pill. Mobile hamburger menu (below lg breakpoint).
│   ├── Hero.tsx            Republican / Two-Term Commissioner / D3 pill row, name, tagline, body, 2 CTAs, countdown row, portrait
│   ├── HerStory.tsx        "Born Here. Raised Here. Fighting for Here." Subhead: "Commissioner by day. ER nurse during COVID. Every commission meeting in between."
│   ├── StandsFor.tsx       4 beliefs (Basin Gets Its Share / Polk County Decides for Polk County / Children, Seniors, and the Land / Show Up Every Time) + closing "Straight Talk, Always" quote
│   ├── TheFight.tsx        5-step biosolids timeline (Aug 2022 to Nov 2025 Round Two) + full prose narrative + prophetic April 2024 quote
│   ├── ShareCallout.tsx    Copper accent band. "Send this story to one neighbor." Facebook / X / SMS / Native Share.
│   ├── WhatElse.tsx        6 accomplishment cards: BGC site safety, Fiber to the Basin, Quarry jobs, Rivers, Crypto preemption, Showed Up for Seniors
│   ├── InTheNews.tsx       6 press cards with outlet monogram tiles (WTVC / WDEF / FOX / CHA)
│   ├── CommunityVoices.tsx Stats (250K / 83% / 22% / 2) + Hagerty quote + outlet badges + neighbor-endorsement scaffold
│   ├── VoterInfo.tsx       3 steps (Am I in D3? / When to Vote / Where to Vote) + Polk County Election Commission contact strip
│   ├── WhyRunning.tsx      Third-term priorities (01 Biosolids, 02 Tourism, 03 Seniors) + first-person close
│   ├── Connect.tsx         3 help cards (01 Yard Sign, 02 Volunteer, 03 Donate) + 3 direct-contact buttons + Donate-by-Mail card + form
│   ├── MobileCTA.tsx       Fixed bottom bar (Call Samantha, Get a Yard Sign), hidden at lg+
│   └── Footer.tsx          Three-column. Paid-for disclaimer. Republican Candidate label.
├── styles.css              Tailwind + brand tokens + scroll-reveal (additive, never hides content)
└── app.tsx                 Entry: hydrates the router
```

## Brand tokens

```css
--color-primary: #1B3A2A;   /* Forest Green */
--color-accent:  #B87333;   /* Burnished Copper */
--color-surface: #FAF8F5;   /* Cream */
--color-text:    #1A1A1A;
--color-muted:   #5A6B5A;

--font-display:  'Libre Baskerville', Georgia, serif;
--font-body:     'Source Sans 3', system-ui, sans-serif;
```

0px corner radius everywhere. Section backgrounds alternate primary -> surface -> primary (with `ShareCallout` using accent as a deliberate disruption).

See [`ARCHITECTURE.md`](./ARCHITECTURE.md) for the full breakdown of conventions, voice rules, breakpoints, scroll-reveal pattern, voter profile, and verified-facts table.

## Critical messaging context

**The biosolids dumping at Copperhill Industries restarted in late November 2025** under a new TDEC "Exceptional Quality" classification. This is the central campaign fact. The site narrative is now "round two" — Samantha won the first fight in April 2024, warned in writing that the agreement was fragile (she used the words "unequivocal and permanent" on purpose), the dumping restarted 19 months later, and she is fighting again. Verify on the official `tn.gov/environment/program-areas/rem-remediation/ongoing-projects/copper-basin.html` page before any messaging update.

## Election logistics

- **Voter registration deadline:** Tuesday, July 7, 2026
- **Early voting:** July 17 to August 1, 2026
- **Election Day:** Thursday, August 6, 2026, 8 a.m. to 8 p.m. ET
- **Polk County Election Commission:** (423) 338-4531 · 6050 Hwy 411, Benton, TN 37307 · polk.commission@tn.gov · M-F 8:30 a.m. to 4:30 p.m.

## Samantha Trantham — Direct

- Phone: (706) 851-6623
- Email: samanthatranthamd3commissioner@gmail.com
- Facebook: https://www.facebook.com/samanthatranthamthirddistrictcountycommissioner/

## What still needs Sam's input

- **Treasurer mailing address** for the Donate-by-Mail card (Connect section)
- **Real neighbor testimonials** for the From-the-Basin scaffold in CommunityVoices
- **Outdoor photo** to replace the CSCC Spotlight headshot in the hero
- **Cloudflare Web Analytics token** — paste into the `CF_ANALYTICS_PLACEHOLDER` comment in `index.html` after registering the site in the CF dashboard
- **Sign-off on third-term priorities** (currently: 01 Biosolids, 02 Tourism, 03 Seniors)
- **`votetrantham.com` DNS** -> point to `sam-trantham-campaign.codyboring.workers.dev` when ready

## Conventions

- TypeScript strict everywhere
- Tailwind v4 with `@theme` block in `styles.css` for tokens (no separate Tailwind config file)
- Responsive breakpoints used: `sm` (640), `md` (768), `lg` (1024). The Hero stacks at < lg (image on top, text below) and goes side-by-side at lg+. The mobile menu is active at < lg.
- Scroll-reveal animations are **purely additive** — every element is visible by default. The `data-animate` system only adds a slide-up on top of visible content. No element is ever hidden waiting for the IntersectionObserver to fire.
- All external links use `rel="noopener noreferrer"`
- All `tel:` and `mailto:` links use international format
- WebP hero served via `<picture>` with JPG fallback, preloaded
- Never use em dashes, en dashes, or hyphens as dashes in voter-facing copy

## Repositories

- Primary: `getboring/sam-trantham-campaign` (remote: `origin`)
- Campaign org: `Boring-Works/sam-trantham-for-d3` (remote: `campaign`)

Both push targets stay in sync on each commit.

## Strategy documents

- [`../README.md`](../README.md) — project overview
- [`../STRATEGY.md`](../STRATEGY.md) — full content / narrative / voice strategy (v3 March 2026 + v4 update May 2026)
- [`ARCHITECTURE.md`](./ARCHITECTURE.md) — tech and brand conventions for contributors
