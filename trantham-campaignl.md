# Claude Code: Samantha Trantham Campaign Website
## Complete Content, Strategy, and Narrative — v3 (March 2026) + v4 update (May 2026)

> **v4 UPDATE (May 14, 2026):** The deployed site at https://sam-trantham-campaign.codyboring.workers.dev has been rewritten to reflect a new finding from independent research: **the biosolids dumping at Copperhill Industries resumed in late November 2025** under a new TDEC "Exceptional Quality" classification (confirmed on the official tn.gov Copper Basin Mining District remediation page).
>
> The "she fought, she won" past-tense frame is now a **round-two** frame: she won round one, she warned in April 2024 that the agreement was fragile (using the words "unequivocal and permanent" on purpose), the dumping restarted 19 months later, and she is fighting again.
>
> **Specific copy changes shipped:**
> - Hero body now acknowledges the Nov 2025 restart and reframes the third-term ask as "finish the fight."
> - Republican / Two-Term Commissioner / Polk County · District 3 pill row added to hero (was missing the party signal).
> - TheFight section retitled: "She Fought for Two Years. She Won. Now They're Back." Timeline grew from 4 to 5 steps (added Nov 2025 "Round Two — They're Back" with a pulsing dot). Sam's prophetic April 2024 quote is featured as a callout.
> - WhyRunning third-term priorities reordered to: 01 Finish the Biosolids Fight · 02 Protect Tourism Economy · 03 Take Care of Seniors. (Original v3 plan had infrastructure first; biosolids round two is now the top priority.)
> - WhatElse expanded from 4 to 6 accomplishment cards: added "Brought Fiber to the Basin" (the $2M ETC Last Mile broadband grant covering 161 unserved Polk County locations) and "Showed Up for Seniors" (Pruitt Healthcare, Senior Center, 22% senior demographic explicitly cited).
> - CommunityVoices stats now anchored in real district data: 250K river visitors · 83% for Trump 2024 · 22% over 65 · 2 terms elected. Subtitle reframed to "A deeply conservative rural district. A tourism-driven economy. A senior population that built this place."
> - New `ShareCallout.tsx` component added between TheFight and WhatElse — copper accent band with Facebook / Twitter / SMS / Native Share API. Pitched as "the single highest-leverage thing you can do this week."
> - Connect section added a Donate-by-Mail card ("Make checks payable to Samantha Trantham for Polk County Commission District 3" plus phone fallback for treasurer address) with a TN campaign-finance footnote.
> - Voter information section now wires real Polk County Election Commission contact info: (423) 338-4531 · 6050 Hwy 411, Benton, TN 37307 · polk.commission@tn.gov · M–F 8:30 a.m.–4:30 p.m.
>
> **Counter-narrative implication:** The 2025 Governor's Environmental Stewardship Award to Copperhill Industries (noted in v3 strategy below) is now a stronger counter for the campaign — TDEC handed an award to the same site whose biosolids operation restarted weeks later under a friendlier classification. Use this for press/op-ed framing.
>
> **What stayed exactly the same from v3:**
> - Voice guide (sections 1–7 third person; sections 8–9 first person)
> - HerStory copy (with one new subhead surfacing the ER/COVID/Pruitt nurse fact early)
> - Visual identity (Forest Green primary + Burnished Copper accent + Cream surface)
> - Election logistics (Aug 6, 2026 Republican Primary; early voting July 17 – Aug 1)
>
> **Open campaign-team items (unchanged from v3 list at bottom):**
> 1. Real named testimonials for the From-the-Basin scaffold in CommunityVoices
> 2. Treasurer mailing address for the Donate-by-Mail card
> 3. Outdoor photo to replace the CSCC Spotlight headshot in the hero
> 4. Sam's sign-off on the three third-term priorities as reordered
> 5. Confirmation of the Sept 2020 chairmanship claim (still unsourced; not on the live site)
> 6. votetrantham.com DNS to point at the Worker
>
> The v3 strategy doc below is the historical foundation. Anything that conflicts with this v4 update is superseded by the deployed site.

---

## THE STORY

A woman from a tiny mountain community, cut off from the county seat by a river gorge, saw her neighbors getting ignored. She ran for county commissioner. Then outside interests started trucking sewage waste into her backyard. The state said her community's ban didn't count. She fought for two years. She won. Then she kept going.

The site tells her story in third person, like a neighbor vouching for her at a church supper. Then, at the end, Samantha steps forward and speaks directly to the voter. That shift from "she" to "I" is where the emotional ask lives.

---

## STRATEGIC CONTEXT

### The District: Polk County District 3 (Copper Basin)

**Geography matters more than demographics here.** District 3 is physically cut off from the county seat in Benton by the Ocoee River Gorge and Chilhowee Mountain. You drive through a mountain gorge to get to the courthouse. This isn't metaphor. "Our side of Polk County" means something concrete. When the county makes decisions in Benton, District 3 feels it last and least. That isolation is why Samantha ran, and it's what her voters feel every day.

**Demographics:**
- Polk County: ~17,900 people. District 3 is roughly a quarter.
- Median age: 46.9 (older than state/national)
- 90.4% White
- 20.7% aged 65+
- Median household income: $62,500
- 83.5% homeowners. Median home value: $169,900
- 47.4% high school educated, 8.1% bachelor's degree
- Top employment: manufacturing, healthcare, retail
- 14% poverty rate
- Average commute: 31 minutes (people drive to Cleveland or Chattanooga for work)
- Deep red: Trump won TN 64.2% in 2024. Polk County runs higher.
- Tourism is the #1 economic sector: 250,000+ annual visitors to the Ocoee (most rafted river in America, 1996 Olympic venue) and Hiwassee Rivers
- The Blue Ridge Scenic Railway brings visitors from Georgia directly into Copperhill

**The voter who decides this race:**
- 40 to 70, homeowner, has lived in the Basin most of their life or retired there
- Manufacturing, trades, healthcare, or retired
- Probably knows Samantha personally or is one degree removed
- Facebook is their internet. Phone is their device. Signal is spotty.
- They remember the biosolids smell. They know someone who complained about it.
- Values: plain talk, showing up, protecting what's theirs, being one of them
- Suspicious of: Chattanooga interests dumping on them, government agencies ignoring them, the county seat forgetting them, politicians who only show up at election time
- This voter does NOT read policy platforms. They share a Facebook post that says "she fought for us" and that settles it.

### Counter-Narrative Prep

Copperhill Industries won the 2025 Governor's Environmental Stewardship Award from TDEC for reclamation work at the site. Campaign response: Samantha never opposed land reclamation. She opposed the lack of transparency, the unpermitted transport, the odors destroying businesses, PFAS exposure risks, and a process that treated her community like a dumping ground. TDEC themselves found pH violations in the biosolids in late 2023, validating every concern the community raised.

---

## SITE SECTIONS AND COPY

Voice guide: Sections 1 through 7 are third person. Like a trusted neighbor telling you about Samantha. Her direct quotes are woven in where they exist. Section 8 (Why I'm Running) shifts to first person. That's where Samantha steps forward and talks directly to the voter. Section 9 (Connect) stays first person.

---

### SECTION 1: HERO

**Name:** Samantha Trantham

**Office:** District 3 County Commissioner

**Location:** Copper Basin, Polk County, Tennessee

**Tagline:** A Voice for the Copper Basin

**Subtext:** She fought for two years to stop the biosolids dumping in her community. She won. Now she's running for her third term, because there's more to protect and more to build.

**Photo direction:** Outdoors. Mountains or porch. Natural light. Looking at camera. Warmest, most genuine smile. "Neighbor" not "politician."

---

### SECTION 2: HER STORY

**Heading:** Born Here. Raised Here. Fighting for Here.

**Copy:**

Samantha Trantham graduated from Copper Basin High School at 17 in a class of 54 students. She went to Cleveland State Community College, then to Middle Tennessee State University, where she earned her Bachelor of Science in Healthcare Professional Studies. She studied science and public health because she's always cared about what keeps a community healthy and safe.

But she kept looking across the mountain at how decisions were being made in Benton, and she realized nobody was speaking up for the east side of the county. The Copper Basin needed a voice.

"I really wasn't going to get into politics, because I don't like politics. But I realized that we needed someone to be a voice for our side of Polk County. That's what really led me to do it."

She ran in 2018. She won. She won again. And between elections, she didn't disappear.

While serving as commissioner, Samantha worked in an emergency room during COVID. She spent two and a half years at Pruitt Healthcare caring for seniors. "I absolutely loved it," she said. "I had a whole building full of grandparents, and I loved every one of them."

She also helped physically clean out a cluttered office at the Copper Basin Senior Center to make more space for activities. She showed up for the center's renovated facility open house. She was there when the Basin fire department got improvements. She attended the swearing-in for Copperhill's new mayor alongside the County Executive and the Industrial and Economic Development Board. She's been at every commission meeting, every community event she could get to, and she's donated to local causes including the Copper Basin Baptist Association Office and Crisis Center.

This isn't a commissioner who shows up once a month. This is someone who lives the job every day.

She currently works in marketing for Brown Haven Homes. But the commission seat isn't a side job for Samantha. It's the reason she came home.

**Source notes:** Bio from Cleveland State CC Alumna Spotlight (Feb 2026), also published by Chattanoogan.com (Feb 18, 2026). Senior center, fire department, and community involvement from The News Observer (Aug 2024, paywalled), public Facebook page, commission records. Swearing-in confirmed by The News Observer ("Copperhill leaders take office, Hatcher urges cooperation").

---

### SECTION 3: WHAT SHE STANDS FOR

**Heading:** What Samantha Believes

**Copy:**

She believes the Copper Basin deserves the same attention the west side of the county gets. Every road. Every service. Every dollar.

She believes that when government agencies in Nashville make decisions that affect this community, someone from this community needs to be in the room pushing back.

She believes children's safety comes before politics, that the rivers and mountains are worth protecting, and that seniors deserve better than being forgotten.

She believes that if you're going to hold this office, you'd better show up. Not just at election time. Every meeting. Every time.

And she believes in being straightforward and transparent, because the people of the Copper Basin deserve to know exactly where their commissioner stands.

"I think I keep getting elected because I am so straightforward and transparent."

---

### SECTION 4: THE FIGHT THAT DEFINED HER TENURE

**Heading:** She Fought for Two Years. She Won.

**Copy:**

In 2022, companies started trucking treated sewage waste into the Copper Basin from Chattanooga and Cobb County, Georgia. The material contained PFAS, the "forever chemicals" linked to cancer. The smell hit local businesses and drove away tourists. The scenic train from Blue Ridge brings visitors right into Copperhill, and people were saying "It smells really bad here" and "Does it always smell like this around here?" Those complaints were cited directly in the county resolution. In a community where tourism is the biggest part of the economy, this was an economic attack as much as an environmental one.

Samantha and her fellow commissioners passed a resolution banning the dumping. Government agencies in Nashville told them the resolution didn't count. They'd approved the project as a "pilot program" without even requiring a permit. When commissioners asked where the waste was coming from, they were told to file an open records request.

The trucks kept coming. Police bodycam footage from McCaysville, Georgia showed drivers using back roads to avoid detection, overloading a bridge rated for 25 tons with trucks weighing over 67,000 pounds, and leaking waste out the back. Drivers told officers their bosses instructed them not to go through town.

Samantha didn't stop. She confirmed to NewsChannel 9 that Georgia and Tennessee regulators were both investigating. She helped organize a town hall in June 2023 that brought together officials from two states. She went back to every commission meeting. She kept talking to every reporter who would listen. She kept demanding transparency from agencies that didn't want to give it.

The issue got big enough that U.S. Senator Bill Hagerty said publicly he was "tracking it closely." A Bradley County commissioner came to the town hall because the concern was spreading to neighboring counties and their water supply.

By April 2024, it was over. TDEC confirmed the dumping had stopped permanently. The last delivery was March 25, 2024. TDEC had found pH level violations in the biosolids.

Samantha's words: "The biosolids application has wreaked havoc on our businesses, schools, and community. I look forward to the day TDEC confirms that it will no longer be an issue for the community I proudly represent."

That day came. Because she didn't quit.

**Source notes:** NewsChannel 9 (WTVC): May 24, 2023; May 25/26, 2023 (bodycam); June 11, 2023 (town hall); June 29, 2023 (TDEC meeting); April 30, 2024 (stoppage). Fox Chattanooga (April 2024). WDEF (May 2023).

---

### SECTION 5: WHAT ELSE SHE'S DONE

**Heading:** Every Meeting. Every Issue. Every Time.

**Card 1: Protected the Basin's Children (June 2024)**

After the biosolids fight, officials proposed relocating the Boys and Girls Club to a site next to Copperhill Industries, within the EPA-designated Copper Basin Mining District Superfund site. Samantha looked at the EPA data herself. The site wasn't ready. The buildings had asbestos and lead paint. She introduced a commission resolution to find a safer location.

"There are plenty of alternatives to place a Boys and Girls Club that do not have any of these factors, which should be automatically disqualifying."

When Samantha cites EPA data and building hazards, she knows what she's reading. Her degree is in Healthcare Professional Studies. She was studying public health before she came home to serve.

*Source: NewsChannel 9 (June 21, 2024). EPA Copper Basin Mining District Superfund site profile.*

**Card 2: Brought Jobs and Scholarships to the Basin**

Samantha was there for the Copperhill Quarry grand opening alongside State Representative Dan Howell and Hedrick Industries CEO Joe Lordi. New jobs. Construction materials for local contractors. And a $2,500 scholarship for Copper Basin High School students. She works with the Industrial and Economic Development Board because the east side of this county shouldn't have to beg for investment.

*Source: The News Observer, "Copperhill Quarry unveiled."*

**Card 3: Protected the Basin's Rivers (June 2020)**

Samantha voted with the full commission to demand the Tennessee Wildlife Resources Agency fix overcrowding and safety problems at Patty Bridge on the Hiwassee River. The Ocoee and Hiwassee draw over 250,000 visitors a year. The Ocoee is the most rafted river in America. Protecting access to those rivers means protecting the livelihoods of the Basin's families.

*Source: The News Observer (June 25, 2020).*

**Card 4: Got Ahead of the Next Threat (2025)**

Samantha brought a crypto mining regulation resolution to the commission floor in May 2025. It passed 9-0. Across rural Tennessee in 2025, crypto mining operations were moving into small communities, bringing industrial noise and massive power consumption. Samantha saw what was happening in Johnson County and Hawkins County and got ahead of it before it reached the Basin. She also placed a nuisance regulation resolution on the county agenda.

The lesson she took from the biosolids fight: don't wait for the problem to show up. Stop it before it starts.

*Sources: Polk County commission agenda and meeting records, May 2025. Verify resolution number with county clerk. Context: WUOT, WJHL, LPM News coverage of Tennessee crypto mining disputes (2025).*

---

### SECTION 6: IN THE NEWS

**Heading:** Don't Take Our Word for It

These aren't campaign talking points. Click through and see what the reporters covered.

- "Biosolid delivery to Copperhill stops after TDEC finds violations" — NewsChannel 9, April 2024
- "Polk County debates safety of moving Boys and Girls Club next to controversial site" — NewsChannel 9, June 2024
- "Bodycam reveals trucks cited for using back roads to deliver biosolids to Polk Co." — NewsChannel 9, May 2023
- "Despite county ordinance, state OK's biosolids trucked in Polk County without permit" — NewsChannel 9, May 2023
- "Polk County Commissioners Suing over Biowaste Disposal" — WDEF, May 2023
- "CSCC Alumna Spotlight: Samantha Trantham" — Chattanoogan.com, February 2026

Every link is third-party validation from a TV station voters already watch.

---

### SECTION 7: COMMUNITY VOICES

**Heading:** What Her Neighbors Say

<!-- CAMPAIGN NOTE: This section needs 3-5 real, named quotes from community members. Generic Facebook praise is weaker than having no testimonials at all. Ask 3-5 people to give a one-sentence quote with their name and community. Examples:

"Samantha was the only commissioner who showed up to our town hall about the biosolids." — [Name], Copperhill

"She fought for our kids when nobody else would." — [Name], Ducktown

"Every time I've called her, she's called me back." — [Name], Turtletown

Until real quotes are secured, DO NOT publish this section. The press links in Section 6 carry more weight than anonymous praise. -->

**Institutional recognition (use as supplement once named quotes are secured):**
- Cleveland State Community College Alumna Spotlight (February 2026)
- Quoted by name across NewsChannel 9, Fox Chattanooga, and WDEF across multiple years
- U.S. Senator Bill Hagerty publicly acknowledged the biosolids issue in June 2023

---

### SECTION 8: WHY SHE'S RUNNING AGAIN

**⬇️ THE VOICE SHIFTS TO FIRST PERSON HERE. This is the turn. Samantha steps forward and talks directly to the voter. ⬇️**

**Heading:** There's More Work to Do

**Copy:**

The Copper Basin sits on the other side of a mountain gorge from the county seat. When decisions get made in Benton, we feel it last and get the least. If we don't have a commissioner who shows up and speaks up, we get forgotten. That's just how it is.

I've spent two terms making sure that doesn't happen. But there's more to do.

I want to keep pushing for the east side to get the same infrastructure investment the west side gets. Our roads, our emergency services, and our public facilities need to match what Benton has. I want to make sure our tourism economy stays protected, because the Ocoee and Hiwassee are what keep this community going. And I want to keep bringing economic development to the Basin so our young people have a reason to stay here instead of driving to Chattanooga.

<!-- CAMPAIGN NOTE: Ask Samantha for 1-2 specific priorities. Broadband? A road project? Water infrastructure? A fire station? Concrete items are more powerful than general statements. Add a sentence or two here. -->

I think I keep getting elected because I am so straightforward and transparent. I'm not going to change that.

This job is personal to me. The Copper Basin is my home. I'm asking for your vote so I can keep fighting for it.

---

### SECTION 9: LET'S TALK

**Still first person. She's talking directly to the voter now.**

**Heading:** I'm Always Available

**Copy:**

Have a concern? Want to talk? That's what I'm here for. Call me, email me, or reach out on Facebook. I'll get back to you.

**Phone:** (706) 851-6623
**Email:** samanthatranthamd3commissioner@gmail.com
**Facebook:** Samantha Trantham - 3rd District County Commissioner

<!-- CAMPAIGN NOTE: Her home address (677 Airport Road, Copperhill) is in county records. Including it on a public campaign website is a personal safety decision. Only add if Samantha specifically requests it. -->

---

### FOOTER

Paid for by Samantha Trantham for Polk County Commission District 3

<!-- LEGAL: Verify required disclaimer language with Tennessee campaign finance rules before publishing -->

---

## FACEBOOK OPEN GRAPH

```
og:title = "Samantha Trantham — A Voice for the Copper Basin"
og:description = "She fought for two years to stop the biosolids dumping in the Copper Basin. She won. Now she's running for her third term as District 3 Commissioner."
og:image = [1200x630 campaign photo]
```

## SEO

```
<title>Samantha Trantham | District 3 Commissioner | Polk County TN</title>
<meta name="description" content="Samantha Trantham fought for two years to stop biosolids dumping in the Copper Basin and won. Running for her third term as Polk County District 3 Commissioner.">
```

---

## FACEBOOK LAUNCH POSTS

**Version 1: The Story (recommended)**

Eight years ago, Samantha Trantham ran for County Commissioner because the Copper Basin needed a voice on the other side of that mountain.

Then companies started trucking sewage waste into the community from Chattanooga and Georgia. The state said the county's ban didn't count. Trucks were sneaking down back roads, leaking waste, blowing past bridge weight limits. The smell was killing local businesses and the chemicals were putting families at risk.

She fought it for two years. Every meeting. Every town hall. Every phone call. In April 2024, it stopped for good.

That's one of the things she's been working on. The full story is here: [LINK]

She's running for her third term because there's more to protect and more to build. Share this with your neighbors.

**Version 2: What She's Done**

Here's what Samantha Trantham has been doing as your District 3 Commissioner:

Led the fight that permanently stopped the biosolids dumping. TDEC confirmed it in April 2024.

Introduced a resolution to keep the Boys and Girls Club off contaminated Superfund land with asbestos and lead paint.

Supported the Copperhill Quarry opening, new jobs, and a $2,500 scholarship for Copper Basin High School.

Passed a crypto mining regulation 9-0 before it could become a problem here.

Worked in an ER during COVID and cared for seniors at Pruitt Healthcare for two and a half years, all while serving as commissioner.

Full story: [LINK]

**Version 3: The Personal Ask (this one is from Samantha, first person)**

The Copper Basin is my home. I graduated from CBHS. My neighbors are the people I grew up with and the people I serve.

When I ran in 2018, I said I'd be a voice for our side of Polk County. Two terms later, I hope my record speaks for itself.

I'm running again because there's more work to do. I put together a website so you can see what I've been working on and where we're headed: [LINK]

I'd love to hear from you. Call me anytime. That's what I'm here for.

---

## COPY RULES

- Sections 1 through 7: Third person. Like a neighbor vouching for her.
- Samantha's direct quotes (sourced) are woven in naturally.
- Section 8 (Why I'm Running) and Section 9 (Connect): First person. The shift is the emotional turn.
- Facebook posts: Versions 1 and 2 in third person. Version 3 is first person as the personal ask.
- Short sentences. Plain words.
- "Her community" not "the constituency"
- "Showed up" not "demonstrated leadership"
- "Fought for" not "advocated on behalf of"
- "Said no" not "expressed opposition"
- "Government agencies in Nashville" not "the state" (avoids friendly fire on Republican state leadership)
- Never: "stakeholder," "leverage," "synergy," "moving forward"
- Never mention CDC or WHO in voter-facing copy
- Contractions always fine
- NEVER use em dashes, en dashes, or hyphens as dashes
- No hashtags. No emoji in body copy.
- Thread the east vs. west tension throughout
- Every factual claim verified through independent public sources

---

## PHOTO GUIDE

**Hero headshot (required):** Outdoors. Mountains, Basin, porch. Natural light. Warm smile at camera. NOT in front of a government building. Min 600x600. "Neighbor" not "politician."

**Facebook share image (required):** 1200x630. Her at a community event, or Basin landscape with name overlaid. Must look good as a thumbnail.

**Community photos (3 to 5):**
- Commission meeting or town hall (ideally biosolids era)
- Copperhill Quarry opening with Dan Howell
- Community event in the Basin (candid, not posed)
- Senior center or with first responders
- Scenic Copper Basin (optional, for backgrounds)

**Rules:** Real photos only. No AI. No stock. Landscape orientation. Under 500KB. Compress at squoosh.app.

---

## CAMPAIGN TEAM ACTION ITEMS

1. **Named testimonials (Section 7).** Get 3 to 5 real quotes with names and communities. Do not publish this section without them.
2. **Forward-looking priorities (Section 8).** What specific things does Samantha want to accomplish in a third term? One or two concrete items.
3. **Home address decision (Section 9).** Include or exclude. Her call.
4. **Legal disclaimer (Footer).** Verify Tennessee campaign finance disclosure requirements.
5. **Chairmanship claim.** If she was elected chairman in September 2020, produce the article or minutes. It would go in Section 2 and the hero. Do not publish without documentation.
6. **Verify ⚠️ items with county clerk.** Crypto mining resolution number, nuisance resolution, quarry job count.

---

## FULL SOURCE TABLE

| Claim | Source | Status |
|-------|--------|--------|
| First elected 2018, third term | Cleveland State CC Spotlight (Feb 2026) | ✅ |
| CBHS grad (class of 54), Cleveland State, MTSU BS Healthcare | Cleveland State CC Spotlight | ✅ |
| Master's program public health | Cleveland State CC Spotlight | ✅ |
| "Voice for our side" quote | Cleveland State CC Spotlight | ✅ |
| "Straightforward and transparent" quote | Cleveland State CC Spotlight | ✅ |
| COVID ER work, 2.5 years Pruitt Healthcare | Cleveland State CC Spotlight | ✅ |
| "Building full of grandparents" quote | Cleveland State CC Spotlight | ✅ |
| Brown Haven Homes current role | Cleveland State CC Spotlight | ✅ |
| Spotlight also on Chattanoogan.com | Chattanoogan.com (Feb 18, 2026) | ✅ |
| Biosolids resolution Sept 2022 | NewsChannel 9, WDEF | ✅ |
| "Unique land situation" cited in resolution | NewsChannel 9 (May 2023) | ✅ |
| TDEC approved without permit | NewsChannel 9 (May 25, 2023) | ✅ |
| TDEC said resolution "not binding" | NewsChannel 9 (June 29, 2023) | ✅ |
| Bodycam: trucks on back roads, overweight, leaking | NewsChannel 9 (May 26, 2023) | ✅ |
| Drivers told to avoid going through town | NewsChannel 9 bodycam report | ✅ |
| Bridge weight limit 25 tons, trucks 67,000+ lbs | NewsChannel 9 bodycam report | ✅ |
| Biosolids from Cobb County GA and Chattanooga | NewsChannel 9 (May 2023) | ✅ |
| PFAS "forever chemicals" in biosolids | NewsChannel 9 (May 2023) | ✅ |
| Trantham confirmed GA/TN investigations | NewsChannel 9 (May 24, 2023) | ✅ |
| Town hall June 2023, multi-state officials | NewsChannel 9 (June 11, 2023) | ✅ |
| Senator Hagerty "tracking closely" | NewsChannel 9 (June 29, 2023) | ✅ |
| Bradley County commissioner attended | NewsChannel 9 (June 12, 2023) | ✅ |
| Tourist complaints in resolution ("smells bad") | WDEF (May 2023) | ✅ |
| TDEC found pH violations Nov/Dec 2023 | NewsChannel 9 (June 21, 2024) | ✅ |
| Permanent stoppage, last delivery March 25, 2024 | NewsChannel 9 (April 30, 2024) | ✅ |
| "Wreaked havoc" quote | NewsChannel 9 (April 30, 2024) | ✅ |
| Boys & Girls Club resolution June 2024 | NewsChannel 9 (June 21, 2024) | ✅ |
| "Plenty of alternatives" quote | NewsChannel 9 (June 21, 2024) | ✅ |
| EPA data, asbestos, lead paint cited | NewsChannel 9 (June 21, 2024) | ✅ |
| Copper Basin Mining District = EPA Superfund site | EPA profile (cumulis.epa.gov) | ✅ |
| Copperhill Quarry, Dan Howell, Joe Lordi | The News Observer | ✅ |
| $2,500 Hedrick scholarship to CBHS | The News Observer | ✅ |
| TWRA/Patty Bridge unanimous vote June 2020 | The News Observer | ✅ |
| Copperhill swearing-in, Hatcher, Farrow/IEDB | The News Observer | ✅ |
| 250,000+ annual visitors, Ocoee most rafted | Wikipedia (Polk County, TN) | ✅ |
| Blue Ridge Scenic Railway to Copperhill | Wikipedia (Copper Basin) | ✅ |
| FY2022 and FY2023 audit listings | Tennessee Comptroller | ✅ |
| Crypto mining resolution 9-0, May 2025 | County agenda/minutes | ⚠️ Verify |
| Nuisance resolution, May 2025 | County agenda | ⚠️ Verify |
| Senior center cleanup, Aug 2024 | News Observer (paywalled) | ⚠️ Verify |
| Fire department improvements, late 2024 | News Observer/Facebook | ⚠️ Verify |
| Baptist Association $2,500 donation | Public Facebook | ⚠️ Verify |
| Quarry job count (9 jobs) | Chamber/community sources | ⚠️ Verify |
| Chairmanship Sept 2020 | News Observer (paywalled) | ❌ Do not use without source doc |
| Nashville Voyager Rising Star | Not found | ❌ Removed |
