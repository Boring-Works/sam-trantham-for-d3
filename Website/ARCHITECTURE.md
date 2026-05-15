# Website Architecture

Single-page campaign site for Samantha Trantham, Polk County Commission District 3, Republican Primary August 6, 2026.

**Live:** https://sam-trantham-campaign.codyboring.workers.dev

## The single fact every contributor must internalize

The biosolids dumping at Copperhill Industries **restarted in late November 2025** under a new TDEC "Exceptional Quality" classification. Confirmed on the official `tn.gov/environment/program-areas/rem-remediation/ongoing-projects/copper-basin.html` page.

Samantha's April 2024 quote demanded "unequivocal and permanent stoppage." When it restarted 19 months later she was vindicated. **The site narrative is "round two," not a past-tense victory.** If a draft says "she won the biosolids fight" without "round one" or "they're back" qualifiers, stop and fix it.

## Tech stack

- TanStack Router (file-based routing) on a Vite SPA
- React 19 + Tailwind CSS v4 (`@theme` block in `src/styles.css`, no separate config file)
- TypeScript strict
- Cloudflare Workers (worker name: `sam-trantham-campaign`)
- Static assets served from `dist/` with `not_found_handling = "single-page-application"` for SPA deep links

The volunteer form posts to the shared `forms.holstonpartners.com` Worker. No database, no auth, no API in this repo.

## Brand tokens (in `src/styles.css`)

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#1B3A2A` Forest Green | Primary surface, headings |
| `--color-accent` | `#B87333` Burnished Copper | CTAs, accents, eyebrows |
| `--color-surface` | `#FAF8F5` Cream | Alternating section backgrounds |
| `--color-text` | `#1A1A1A` | Body text on cream |
| `--color-muted` | `#5A6B5A` | Secondary text |
| `--font-display` | Libre Baskerville (Georgia fallback) | Headlines, tagline |
| `--font-body` | Source Sans 3 (system fallback) | Body |

0px corner radius everywhere. No rounded corners. The visual language is institutional, not SaaS.

## Section background rhythm

The home route composes 12 sections in this order. Background alternates primary -> surface -> primary, with `ShareCallout` using accent as a deliberate copper disruption at peak emotion:

```
Hero            primary
HerStory        surface
StandsFor       primary
TheFight        surface
ShareCallout    accent   <-- intentional break
WhatElse        primary
InTheNews       surface
CommunityVoices primary
VoterInfo       surface
WhyRunning      primary
Connect         surface
Footer          primary
```

Preserve this rhythm. Inserting a new primary-bg section between two primary-bg sections is a visual mistake.

## Responsive breakpoints

Tailwind defaults: `sm` = 640, `md` = 768, `lg` = 1024.

- Hero stacks vertically at < lg (image on top, text below) and goes side-by-side at lg+.
- Mobile hamburger menu active at < lg.
- Fixed bottom CTA bar hidden at lg+.

This was tightened from an earlier `md`-based system that broke at tablet width.

## Scroll-reveal animations

`data-animate` is **purely additive**. Every element is visible by default. The animation only adds a subtle slide-up on top of visible content via the `.js-anim` class on `<html>` (set synchronously in `<head>` before paint).

Do NOT introduce CSS that hides `data-animate` content until the IntersectionObserver fires. That was a real bug found in audit: sections appeared empty in social previews, screenshots, and to bots.

## District 3 voter profile (research-confirmed)

- Polk County: 17,544 population, 83.67% for Trump in 2024
- District 3 = Copper Basin (Copperhill, Ducktown, Turtletown, Isabella, Reliance)
- 22% over 65, median age 46.8, median HH income $60,227, 13.9% poverty, 90.4% white, rural
- Tourism is the economy. Ocoee River is the most rafted in America, 250K+ visitors per year.

Voter persona: 40 to 70, homeowner, lifelong Basin resident or recent retiree, manufacturing/trades/healthcare/retired, Facebook is their internet, signal is spotty, remembers the biosolids smell, suspicious of Chattanooga interests and Nashville agencies.

## Voice rules (preserved from v3 strategy)

- Sections 1 through 7 are **third person**, like a trusted neighbor vouching for her.
- Sections 8 and 9 (WhyRunning, Connect) shift to **first person**, where Sam speaks directly to the voter.
- Sam's direct quotes (sourced) are woven in naturally.
- Short sentences. Plain words.
- "Her community" not "the constituency." "Showed up" not "demonstrated leadership." "Fought for" not "advocated on behalf of." "Said no" not "expressed opposition."
- "Government agencies in Nashville" not "the state" (avoids friendly fire on Republican state leadership).
- **Never** use em dashes, en dashes, or hyphens as dashes. The build is clean of em dashes in voter-facing copy; keep it that way.
- **Never** use: "stakeholder," "leverage," "synergy," "moving forward." No hashtags. No emoji in body copy.

## Voter-facing facts (verified)

| Fact | Source |
|---|---|
| Polk County 83.67% Trump 2024 | Wikipedia, Census |
| 22% over 65 | US Census QuickFacts |
| 250K+ Ocoee visitors per year | TVA, Wikipedia |
| Ocoee is the most rafted river in America | Wikipedia |
| 2018 and 2022 elections won outright | CSCC Alumna Spotlight |
| BS Healthcare Professional Studies from MTSU | CSCC Spotlight |
| ER work during COVID, 2.5 years at Pruitt Healthcare | CSCC Spotlight |
| Biosolids stopped April 2024 (TDEC pH violations) | NewsChannel 9, April 30, 2024 |
| Biosolids RESTARTED late November 2025 | tn.gov Copper Basin remediation page |
| Hagerty "tracking it closely" June 2023 | NewsChannel 9, June 29, 2023 |
| Crypto mining resolution passed 9-0 May 2025 | County minutes (verify resolution number with clerk) |
| $2M ETC fiber Last Mile grant, 161 unserved locations | TNECD announcement |

## Open items (Sam to provide)

- Treasurer mailing address for the Donate-by-Mail card in Connect
- Real neighbor testimonials for the From-the-Basin scaffold in CommunityVoices
- Outdoor photo to replace the CSCC headshot in the hero
- Cloudflare Web Analytics token (paste into `CF_ANALYTICS_PLACEHOLDER` in `index.html`)
- Sign-off on third-term priorities (currently: 01 Biosolids, 02 Tourism, 03 Seniors)
- `votetrantham.com` DNS to the Worker

## Commands

```bash
pnpm install
pnpm dev            # local dev at http://localhost:3000
pnpm build          # production build to dist/
pnpm preview        # preview production build locally
pnpm deploy         # build + deploy to Cloudflare Workers (requires wrangler auth)
```

## Repositories

Two remotes always synced:

- `origin` -> `getboring/sam-trantham-campaign`
- `campaign` -> `Boring-Works/sam-trantham-for-d3`

## When making changes

1. Read the relevant component first. Prefer scoped edits over rewrites unless replacing a whole component.
2. Preserve the section bg rhythm and the voice (third to first person at WhyRunning).
3. Verify TS and build before claiming work is done: `pnpm exec tsc --noEmit && pnpm build`.
4. Commit with a descriptive message. Push to both remotes. Deploy if shipping-ready.
5. After deploy, curl the live URL and grep the bundled JS for any new copy strings to confirm they made it through.
6. If you touched anything in the head meta, sitemap, or routes, re-test SPA fallback (`curl -sI .../this-page-does-not-exist` should return 200).
7. Update this file if you change a convention or learn something the next contributor should know.

## Counter-narrative prep

Copperhill Industries won the 2025 Governor's Environmental Stewardship Award from TDEC for reclamation work at the same site. With the dumping restart in late November 2025, this is now a stronger counter for Sam's side: TDEC handed an award to a site whose biosolids operation restarted weeks later under a friendlier classification. Use this framing for press and op-eds.

Sam never opposed land reclamation. She opposed the lack of transparency, the unpermitted transport, the odors destroying businesses, the PFAS exposure risks, and a process that treated her community like a dumping ground.
