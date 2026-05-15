# Samantha Trantham for Polk County Commission, District 3

Campaign website and messaging strategy for Samantha Trantham (R), running for her third term as Polk County District 3 Commissioner in the Tennessee Republican Primary on Thursday, August 6, 2026.

## Status

**LIVE** — https://sam-trantham-campaign.codyboring.workers.dev
The custom domain `votetrantham.com` is wired in HEAD meta; DNS is not yet pointed at the Worker.

## What This Site Does

Single-page campaign site optimized for:

1. **Mobilization** — yard sign request, volunteer signup, donate-by-mail, "How to Vote" module
2. **Persuasion** — biosolids fight narrative, third-term promise list, six accomplishment cards
3. **Trust signals** — press coverage from WTVC/WDEF/Fox Chattanooga, U.S. Senator Hagerty acknowledgment, 83% Trump 2024 district anchoring

## Repository Layout

```
sam-trantham-campaign/
├── README.md                 you are here
├── STRATEGY.md               full content / narrative / voice strategy (v3 + v4 update)
└── Website/                  the deployed app
    ├── README.md             dev + deploy instructions
    ├── ARCHITECTURE.md       tech stack, brand tokens, breakpoints, voice rules, verified facts
    ├── index.html            head meta, OG/Twitter cards, JSON-LD Person schema
    ├── public/               static assets (image, manifest, sitemap, icons, sw.js)
    ├── src/
    │   ├── routes/           __root.tsx, index.tsx (composes all sections), $.tsx (404)
    │   ├── components/       14 section + UI components
    │   ├── router.tsx
    │   ├── app.tsx
    │   └── styles.css        tailwind + brand tokens + scroll-reveal
    ├── wrangler.toml         CF Worker config (name: sam-trantham-campaign)
    └── package.json
```

## The District

- **Polk County, TN** — 17,544 population, 83.67% for Trump in 2024
- **District 3 = Copper Basin** (Copperhill, Ducktown, Turtletown, Isabella, Reliance)
- **Tourism is the economy** — Ocoee River is the most rafted in America, 250K+ visitors per year
- 22% of Polk County is 65+
- Median household income $60,227, 13.9% poverty, 90.4% white, rural

## The Live Issue

The biosolids dumping at Copperhill Industries **resumed in late November 2025** under a new TDEC "Exceptional Quality" classification (confirmed on the official `tn.gov/environment` Copper Basin remediation page). Samantha's April 2024 quote demanded "unequivocal and permanent stoppage" — she warned this exact thing could happen. The site narrative is now **round two**, not a past-tense victory.

## Tech Stack

- TanStack Router (file-based) on a Vite SPA
- React 19 + Tailwind CSS v4
- TypeScript strict
- Cloudflare Workers (worker name: `sam-trantham-campaign`)

## Quick Start

```bash
cd Website
pnpm install
pnpm dev                # local dev at http://localhost:3000
pnpm build              # production build to dist/
pnpm deploy             # build + deploy to Cloudflare Workers
```

See `Website/README.md` for the full developer reference and `Website/ARCHITECTURE.md` for tech and brand conventions.

## Critical Voter Resources

| Resource | Detail |
|---|---|
| Polk County Election Commission | (423) 338-4531 · 6050 Hwy 411, Benton, TN 37307 · polk.commission@tn.gov · M-F 8:30 a.m. to 4:30 p.m. |
| Voter Registration Deadline | Tuesday, July 7, 2026 |
| Early Voting | July 17 to August 1, 2026 |
| Election Day | Thursday, August 6, 2026, 8 a.m. to 8 p.m. ET |
| TN Voter Lookup | https://tnmap.tn.gov/voterlookup/ |

## Samantha Trantham — Direct

- Phone: (706) 851-6623
- Email: samanthatranthamd3commissioner@gmail.com
- Facebook: https://www.facebook.com/samanthatranthamthirddistrictcountycommissioner/

## Repositories

- Primary: `getboring/sam-trantham-campaign` (remote: `origin`)
- Campaign org: `Boring-Works/sam-trantham-for-d3` (remote: `campaign`)

Both push targets stay in sync on each commit.

## Sources Used for Messaging Strategy

- Tennessee.gov Copper Basin Mining District remediation page (Nov 2025 restart confirmed)
- Wikipedia: Polk County, Tennessee (83.67% Trump 2024, tourism dominance)
- US Census QuickFacts: Polk County, TN (demographics)
- NewsChannel 9 (WTVC) biosolids coverage archive
- TNECD Polk County Last Mile broadband grant ($2M ETC fiber)
- mining.com — "From wasteland to wetland" (Copper Basin recovery context)
- Chattanoogan.com CSCC Alumna Spotlight, February 2026 (Sam's biography)
- TN Secretary of State Key Dates 2026 (election + early voting calendar)
- TN SoS Voter ID Requirements
- Polk County Election Commission (votepolktn.com)

## What Still Needs Sam's Input

- **Treasurer mailing address** for the Donate-by-Mail card
- **Real neighbor testimonials** from Copperhill / Ducktown / Turtletown / Isabella / Reliance (scaffolding ready in CommunityVoices)
- **Outdoor photo** to replace the CSCC Spotlight headshot
- **Cloudflare Web Analytics token** (paste into `CF_ANALYTICS_PLACEHOLDER` in `Website/index.html` after registering the site in the CF dashboard)
- **Sign-off on third-term priorities** (currently: 01 Biosolids · 02 Tourism · 03 Seniors)
- **`votetrantham.com` DNS** → point to `sam-trantham-campaign.codyboring.workers.dev` when ready
