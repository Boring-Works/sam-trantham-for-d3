# CLAUDE.md — Samantha Trantham Campaign Website

Read this first. It's the operating manual for any Claude session working on this project.

## What this is

A live campaign website for **Samantha Trantham (R)**, running for her third term as Polk County Commission District 3 in the Tennessee Republican Primary on Thursday, August 6, 2026.

**Live URL:** https://sam-trantham-campaign.codyboring.workers.dev

Single page. No database. No auth. The volunteer form posts to `forms.holstonpartners.com`.

## The single fact you must internalize

The biosolids dumping at Copperhill Industries **restarted in late November 2025** under a new TDEC "Exceptional Quality" classification. Confirmed on the official `tn.gov/environment/program-areas/rem-remediation/ongoing-projects/copper-basin.html` page.

Sam's April 2024 quote demanded "unequivocal and permanent stoppage" — she warned in writing this could happen. When it restarted 19 months later she was vindicated.

**The site narrative is "round two," not a past-tense victory.** If you find yourself writing "she won the biosolids fight" without "round one" or "they're back" qualifiers, stop and fix it.

## Tech stack

- TanStack Start v1.162.6 + TanStack Router (file-based)
- React 19 + Tailwind CSS v4 (`@theme` block, no separate config file)
- TypeScript strict
- Vite 6 + `@cloudflare/vite-plugin`
- Cloudflare Workers (worker name: `sam-trantham-campaign`)
- Biome (lint + format) · Vitest (test)

`wrangler.toml` has `[assets] not_found_handling = "single-page-application"` so deep links work.

## Brand tokens (in `src/styles.css`)

- Primary: Forest Green `#1B3A2A`
- Accent: Burnished Copper `#B87333`
- Surface: Cream `#FAF8F5`
- Display font: Libre Baskerville (Georgia fallback)
- Body font: Source Sans 3 (system fallback)
- 0px corner radius everywhere
- Section backgrounds alternate primary → surface → primary (ShareCallout uses accent as a deliberate disruption)

## Responsive breakpoints

Tailwind defaults:
- `sm` = 640
- `md` = 768
- `lg` = 1024

Hero stacks vertically (image on top, text below) at < lg. Side-by-side at lg+. Mobile hamburger menu active at < lg. Fixed bottom CTA bar hidden at lg+. This was tightened from an earlier `md`-based system that broke at tablet width.

## Scroll-reveal animations

`data-animate` is **purely additive**. Every element is visible by default. The animation only adds a subtle slide-up on top of visible content via the `.js-anim` class on `<html>` (set synchronously in `<head>` before paint).

Do NOT introduce CSS that hides `data-animate` content until the IntersectionObserver fires. That was a real bug — sections appeared empty in social previews, screenshots, and to bots.

## Section order (in `src/routes/index.tsx`)

1. Hero (primary)
2. HerStory (surface)
3. StandsFor (primary)
4. TheFight (surface)
5. **ShareCallout (accent)** ← intentional copper disruption at peak emotion
6. WhatElse (primary)
7. InTheNews (surface)
8. CommunityVoices (primary)
9. VoterInfo (surface)
10. WhyRunning (primary)
11. Connect (surface)
12. Footer (primary)

Preserve this rhythm. Don't insert a new primary-bg section between two primary-bg sections without testing.

## District 3 voter profile

- Polk County: 17,544 population · 83.67% Trump 2024
- District 3 = Copper Basin (Copperhill, Ducktown, Turtletown, Isabella, Reliance)
- 22% over 65 · median age 46.8 · median HH income $60,227 · 13.9% poverty · 90.4% white, rural
- Tourism is the economy — Ocoee = most rafted river in America, 250K+ visitors/yr

Voter persona: 40–70, homeowner, lifelong Basin resident or recent retiree, manufacturing/trades/healthcare/retired, Facebook is the internet, signal is spotty, remembers the biosolids smell, suspicious of Chattanooga interests and Nashville agencies.

## Voice rules (preserved from original v3 strategy)

- Sections 1–7 are **third person**, like a trusted neighbor vouching for her
- Sections 8–9 (WhyRunning + Connect) shift to **first person**, where Sam speaks directly to the voter
- Sam's direct quotes (sourced) are woven in naturally
- Short sentences. Plain words.
- "Her community" not "the constituency." "Showed up" not "demonstrated leadership." "Fought for" not "advocated on behalf of." "Said no" not "expressed opposition."
- "Government agencies in Nashville" not "the state" (avoids friendly fire on Republican state leadership)
- **Never:** em dashes, en dashes, or hyphens as dashes. "stakeholder," "leverage," "synergy," "moving forward." Hashtags. Emoji in body copy.

## Voter-facing facts (verified)

| Fact | Source |
|---|---|
| Polk County 83.67% Trump 2024 | Wikipedia · Census |
| 22% over 65 | US Census QuickFacts |
| 250K+ Ocoee visitors/year | TVA · Wikipedia |
| Ocoee = most rafted river in America | Wikipedia |
| 2018 + 2022 elections won outright | Cleveland State CC Alumna Spotlight |
| BS Healthcare Professional Studies from MTSU | Cleveland State CC Spotlight |
| ER work during COVID, 2.5 yrs at Pruitt Healthcare | Cleveland State CC Spotlight |
| Biosolids stopped April 2024 (TDEC pH violations) | NewsChannel 9 (Apr 30, 2024) |
| **Biosolids RESTARTED late Nov 2025** | tn.gov Copper Basin remediation page |
| Hagerty "tracking it closely" Jun 2023 | NewsChannel 9 (Jun 29, 2023) |
| Crypto mining resolution passed 9-0 May 2025 | County minutes ⚠️ verify number with clerk |
| $2M ETC fiber Last Mile grant, 161 unserved locations | TNECD announcement |

## Open items (Sam must provide)

- Treasurer mailing address for the Donate-by-Mail card
- Real neighbor testimonials for the From-the-Basin scaffold in CommunityVoices
- Outdoor photo to replace CSCC headshot
- CF Web Analytics token (paste into `CF_ANALYTICS_PLACEHOLDER` in `index.html`)
- Sign-off on third-term priorities (01 Biosolids · 02 Tourism · 03 Seniors)
- `votetrantham.com` DNS to the Worker

## Commands

```bash
pnpm install
pnpm dev            # local dev at http://localhost:3000
pnpm build          # production build
pnpm deploy         # build + deploy to CF Workers (wrangler OAuth already done)
pnpm lint           # biome
pnpm test           # vitest
```

## Repositories

Two remotes always synced:
- `origin` → `getboring/sam-trantham-campaign`
- `campaign` → `Boring-Works/sam-trantham-for-d3`

## When making changes

1. Read the relevant component first. Tightly scoped Edits, not Writes, unless you're rewriting a whole component.
2. Preserve the bg-rhythm and the voice (third → first person at WhyRunning).
3. Verify TS + build before claiming work is done: `pnpm exec tsc --noEmit && pnpm build`.
4. Commit with a descriptive message. Push to both remotes. Deploy if shipping-ready.
5. After deploy, curl the live URL and grep the bundled JS for any new copy strings to confirm they made it through.
6. If you touched anything in the head meta, sitemap, or routes, re-test SPA fallback (`curl -sI .../this-page-does-not-exist` should return 200).
7. Update this file if you change a convention or learn something future-Claude should know.

## Counter-narrative prep

- **Copperhill Industries won the 2025 Governor's Environmental Stewardship Award from TDEC** for reclamation work at the same site. With the dumping restart in late Nov 2025, this is now a stronger counter for Sam's side — TDEC handed an award to a site whose biosolids operation restarted weeks later under a friendlier classification. Use for press/op-ed framing.
- Sam never opposed land reclamation. She opposed the lack of transparency, the unpermitted transport, the odors destroying businesses, the PFAS exposure risks, and a process that treated her community like a dumping ground.
