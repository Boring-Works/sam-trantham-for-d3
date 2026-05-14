# Samantha Trantham for Polk County Commission, District 3

Campaign website and messaging strategy for Samantha Trantham (R), running for her third term as Polk County District 3 Commissioner in the Tennessee Republican Primary on Thursday, August 6, 2026.

## Status

**LIVE** — https://sam-trantham-campaign.codyboring.workers.dev
Custom domain `votetrantham.com` configured in HEAD meta; DNS not yet pointed to the Worker.

## What This Site Does

Single-page campaign site optimized for:
1. Mobilization — yard sign request, volunteer signup, donate-by-mail, "How to Vote" module
2. Persuasion — biosolids fight narrative, third-term promise list, six accomplishment cards
3. Trust signals — press coverage from WTVC/WDEF/Fox Chattanooga, U.S. Senator Hagerty acknowledgment, 83% Trump 2024 district anchoring

## The District (research-confirmed)

- **Polk County, TN** — population 17,544, 83.67% for Trump in 2024
- **District 3 = Copper Basin** (Copperhill, Ducktown, Turtletown, Isabella, Reliance)
- **Tourism is the economy** — Ocoee River is the most rafted in America (250K+ visitors/year)
- 22% of Polk County is 65+ (heavy senior vote)
- Median household income $60,227 · 13.9% poverty · 90.4% white, rural

## The Live Issue

The biosolids dumping at Copperhill Industries **resumed in late November 2025** under a new TDEC classification ("Exceptional Quality"). Samantha's April 2024 quote demanded "unequivocal and permanent stoppage" — she warned this could happen. Site narrative is now framed as round two of the fight, not a past victory.

## Tech Stack

- TanStack Start (v1.162.6) + TanStack Router (file-based routing)
- React 19 + Tailwind CSS v4
- Vite 6 + Cloudflare Vite Plugin
- TypeScript strict
- Biome (lint + format)
- Vitest (testing)
- Deployed on Cloudflare Workers (worker name: `sam-trantham-campaign`)

## Commands

```bash
cd Website
pnpm install
pnpm dev            # local dev at http://localhost:3000
pnpm build          # production build to dist/
pnpm preview        # preview production build locally
pnpm deploy         # deploy to Cloudflare Workers (requires wrangler auth)
pnpm lint           # biome lint
pnpm test           # vitest
```

## Repository Topology

```
/                              this README, strategy notes
Website/                       the deployed app
├── index.html                 head meta, OG/Twitter cards, JSON-LD Person schema
├── public/
│   ├── samantha-trantham.jpg  hero portrait (1080x675, 75KB)
│   ├── samantha-trantham.webp hero portrait (35KB, 53% smaller)
│   ├── sitemap.xml
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Countdown.tsx      orange banner, dynamic day-counter
│   │   ├── Nav.tsx            sticky nav, mobile menu, yard sign CTA pill
│   │   ├── Hero.tsx           party pill row, name, tagline, two CTAs, countdown
│   │   ├── HerStory.tsx       "Born Here. Raised Here. Fighting for Here."
│   │   ├── StandsFor.tsx      4 beliefs with track-record proof lines
│   │   ├── TheFight.tsx       5-step biosolids timeline + prose + Nov 2025 update
│   │   ├── ShareCallout.tsx   copper accent share strip (FB/X/SMS/native)
│   │   ├── WhatElse.tsx       6 accomplishment cards (BGC, fiber, quarry, rivers, crypto, seniors)
│   │   ├── InTheNews.tsx      6 press cards with outlet monograms
│   │   ├── CommunityVoices.tsx stats + Hagerty quote + outlet badges + neighbor scaffold
│   │   ├── VoterInfo.tsx      3-step voter info + PCEC contact strip
│   │   ├── WhyRunning.tsx     third-term priorities (biosolids/tourism/seniors)
│   │   ├── Connect.tsx        3 help cards + donate-by-mail + form
│   │   ├── MobileCTA.tsx      fixed bottom CTA bar (call + yard sign)
│   │   └── Footer.tsx         three-column, paid-for disclaimer
│   ├── routes/
│   │   ├── __root.tsx         layout (skip link, Countdown, Nav, Outlet, MobileCTA)
│   │   ├── index.tsx          home — composes all sections
│   │   └── $.tsx              404 catch-all
│   └── styles.css             tailwind + brand tokens (forest green, copper, cream) + scroll-reveal
├── wrangler.toml              CF Worker config (name: sam-trantham-campaign)
└── package.json
```

## Brand System

- **Forest Green** `#1B3A2A` (primary)
- **Burnished Copper** `#B87333` (accent)
- **Cream** `#FAF8F5` (surface)
- **Libre Baskerville** (display/serif), **Source Sans 3** (body)
- 0px corner radius throughout (institutional, not SaaS)
- Section bg alternates primary → surface → primary (… ShareCallout uses accent as a deliberate disruption)

## Critical Voter Resources

- **Polk County Election Commission** — (423) 338-4531 · 6050 Hwy 411, Benton, TN 37307 · polk.commission@tn.gov · M–F 8:30 a.m.–4:30 p.m.
- **Voter Registration Deadline** — Tuesday, July 7, 2026
- **Early Voting** — July 17 – August 1, 2026
- **Election Day** — Thursday, August 6, 2026 · 8 a.m.–8 p.m. ET
- **TN Voter Lookup** — https://tnmap.tn.gov/voterlookup/

## Samantha Trantham — Direct

- Phone — (706) 851-6623
- Email — samanthatranthamd3commissioner@gmail.com
- Facebook — https://www.facebook.com/samanthatranthamthirddistrictcountycommissioner/

## Repositories

- Primary: `getboring/sam-trantham-campaign` (remote: `origin`)
- Campaign org: `Boring-Works/sam-trantham-for-d3` (remote: `campaign`)

Both push targets stay in sync on each commit.

## Sources Used for Messaging Strategy

- Tennessee.gov Copper Basin Mining District remediation page (Nov 2025 restart confirmed)
- Wikipedia: Polk County, Tennessee (83.67% Trump 2024, tourism dominance)
- US Census QuickFacts: Polk County, TN (demographics)
- NewsChannel 9 (WTVC) biosolids coverage archive (Sam's quotes, fight timeline)
- TNECD Polk County Last Mile broadband grant ($2M ETC fiber expansion)
- Mining.com — "From wasteland to wetland" (Copper Basin recovery context)
- Chattanoogan.com CSCC Alumna Spotlight, February 2026 (Sam's biography)
- TN Secretary of State Key Dates 2026 (election + early voting calendar)
- TN SoS Voter ID Requirements
- Polk County Election Commission (votepolktn.com)

## What Still Needs Sam's Input

- **Treasurer mailing address** for the Donate-by-Mail card
- **Real neighbor testimonials** from Copperhill / Ducktown / Turtletown / Isabella / Reliance (scaffolding ready in CommunityVoices)
- **Outdoor photo** to replace the CSCC Spotlight headshot
- **Cloudflare Web Analytics token** (paste into `CF_ANALYTICS_PLACEHOLDER` in `Website/index.html` once site is registered in CF dashboard)
- **Sign-off on third-term priorities** (currently: 01 Finish the Biosolids Fight · 02 Protect Tourism Economy · 03 Take Care of Seniors)
- **votetrantham.com DNS** — point to the Worker when ready
