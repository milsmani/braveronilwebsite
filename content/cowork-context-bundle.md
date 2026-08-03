# BRF Website — Context Bundle for Review (paste into any Claude)

> One-file bundle of the **decisions, rules, and punch list** for the Brave Ronil
> Foundation (BRF) website. This is the context that can't be derived from page HTML.
> Pair it with the actual staging-page view-source for a full assessment.
> (Confidential legal/financial terms are intentionally omitted.)

## BRF identity & compliance rules (must-follow)
- **BRF is a NEW, independent 501(c)(3)** founded by **Manisha & Milan Mehta**, separate
  from the former **Neev Kolte & Brave Ronil Foundation (NKBR)**. NKBR keeps the old
  EIN, name, logo, trademarks, social handles, and donor DB, and is rebranding to a new
  name. BRF gets its **own** new EIN, domain (**braveronil.org**), social handles, and logo.
- **Do NOT reuse** neevronil.org, the neevronil social handles, the old EIN, or the old logo.
- **BRF must not present itself as affiliated** with the former foundation and **must not
  claim the former foundation's accomplishments** as its own.
- **Co-founders MAY reference impact they personally helped achieve** during their tenure
  (research funded, families supported, legislation, awareness) — framed as **their prior
  / legacy work with the former foundation**, in past tense, never as "BRF did X."
- **No advocacy / lobbying / policy language** anywhere in BRF materials (deliberately removed).
- **Canonical tagline:** "Fund Research. Support Families. Fight Brain Cancer."
- **Milan Mehta = President & Co-Founder** (NOT "CEO" — that was the old NKBR role).
- Present BRF's **own future work in future tense**; keep any legacy achievements clearly
  attributed to the co-founders and visually separate from BRF's own plans.
- Logo direction: gold shield + ribbon + red accent + ocean wave (Ronil loved the ocean).

---

# ===== AGREED LANDING-PAGE FRAMEWORK (brief) =====

> and compares it against the site currently in this repo (the recreated static site
> built from the WP Engine staging source). Use this to answer "how is the site right
> now vs what was expected."
>
> **Reference sites named in the brief:** primary = https://www.ytfoundation.org/ ,
> secondary = chadtough.org

---

## PART 1 — THE BRIEF (as written)

**Goal:** Tell the story, explain the mission, and give visitors a clear path to learn
more, get involved, and donate. Sections flow top-to-bottom.

**Landing page flow:**
1. **Header** — BRF logo left · nav buttons across the middle · **"Donate Now"** button anchored far right.
2. **Tagline / Hero** — short, powerful statement of what BRF is/does; first thing below the header; immediate emotional + informational impact. Open to presentation (text over image, bold text on background, etc.).
3. **About the Foundation** — brief intro **with photos**; who we are, why we exist, how we started, what drives us; button → full **About Us** page. (Ref: YT Foundation's foundation intro.)
4. **Meet Ronil** — brief section **with his photo**; short emotional summary of his story, personality, battle, legacy; button → dedicated page ("About Us > Meet Ronil"). (Ref: YT's "person behind the foundation.")
5. **Our Mission + Three Pillars** — brief mission statement, then three categories each with short description + link:
   - **Research Funding** → Impact page
   - **Family Support** → Family Support page
   - **Raising Awareness** → Awareness section
   (Ref: YT Foundation's mission categories layout/feel.)
6. **What is DIPG** — brief section with key numbers + short description of what DIPG is and why it matters; optional infographic/images; button → full **About DIPG** page. Stats to consider: *every 2 minutes a child is diagnosed with cancer; cancer is the #1 disease-related cause of death in children; less than 1% survival for aggressive pediatric brain cancer.*
7. **Get Involved / Stay Connected** — how to support, volunteer, stay in touch; **social media links**; **email address**. Open to layout ideas.
8. **Footer** — foundation name, **address, EIN**; social icons; quick links to key pages; legal/copyright; **donate button or link**.

**Donate button:** present on **every page**, woven naturally into the story — accessible but not aggressive.

**Navigation (minimum):** About Us · About DIPG · Impact · Family Support · Get Involved · *(Events — later, not needed for initial launch)*. Order TBD.

**Logo direction (not finalized):** shield shape in **gold**; **ribbon** element center; **red** accent center; **wave** element at bottom (Ronil loved the ocean); possible tagline in logo (may be too large — TBD). Open to variations.

---

## PART 2 — CURRENT SITE vs BRIEF (section-by-section)

Current site = `index.html` + interior pages in this repo. Legend: ✅ matches · 🟡 partial · ❌ missing/differs.

| # | Brief section | Current site | Status |
|---|---|---|---|
| 1 | Header: logo L, nav center, **"Donate Now"** far right | Logo L, nav center, **"Make an Impact"** button far right | 🟡 button label differs ("Make an Impact" not "Donate Now") |
| 2 | Tagline / Hero — powerful statement, emotional | Hero: "Bringing hope to children fighting DIPG" + subtext + 2 CTAs + trust stats | ✅ present (wording is ours, not final copy) |
| 3 | About the Foundation **with photos** + About Us button; who/why/how we started | "Mission" section: "Supporting Children and Families Facing DIPG Together" + CEO quote; links to About Us | 🟡 reads as mission, not origin story ("how we started"); photos are placeholders |
| 4 | Meet Ronil **with photo** + button to dedicated page | "The Brave Journey of Ronil…" section → about-us.html | ✅ present; photo is a placeholder; links to About Us (not a separate "Meet Ronil" page) |
| 5 | Mission + 3 pillars: Research Funding→Impact, Family Support→Family Support, **Raising Awareness→Awareness** | 3 cards: "DIPG Trials…"→Impact, "Helping Families…"→Family Support, "Building Awareness…"→**About DIPG** | 🟡 present but pillar names differ and Awareness links to About-DIPG (no dedicated Awareness section) |
| 6 | What is DIPG + key numbers + About DIPG button | Dark stats band: "Why DIPG Demands Immediate Research…" + 3 stat boxes (2 min / #1 / <1%) + Learn More → About DIPG | ✅ present; stats match the brief's suggested numbers |
| 7 | **Get Involved / Stay Connected** — social links + **email** on the landing page | No dedicated section; social only in footer; **no email/newsletter capture**; there is a big CTA + donation band instead | ❌ missing as its own section |
| 8 | Footer: name, **address, EIN**, social, quick links, legal, donate | Footer has brand blurb, social, Quick Links/Resources/Legal, copyright | ❌ no address, **no EIN**, no donate link in footer |

**Cross-cutting items**
- **Donate on every page, woven in:** Present as "Make an Impact" + a donation band, but labeled differently than "Donate Now" and not on *every* page's flow consistently. 🟡
- **Navigation vs brief:** Brief wants About Us · About DIPG · Impact · Family Support · **Get Involved**. Current nav = Home · About Us · About DIPG · Impact · Family Support · **Contact** (Get Involved lives only in the button; **Contact** is extra, not in the brief). 🟡
- **Logo:** Brief = **gold shield + ribbon + red accent + ocean wave**. Current = **green heart** mark. ❌ completely different direction.
- **Color / brand feel:** Brief references **YT Foundation** (navy + gold) and a gold/red/ocean logo. Current site is **green** (`#32C850`), inherited from the actual WP Engine staging source. ⚠️ Possible mismatch between the *intended* gold/navy/ocean palette and the *built* green palette — worth confirming which is canonical.
- **Reference alignment:** Brief leans on YT Foundation's landing-page patterns (foundation intro, person-behind-the-foundation, mission categories). The current build follows the staging site's structure, which is close in spirit but not modeled on YT.

---

## PART 3 — BIGGEST GAPS (if aligning the build to this brief)
1. **Logo & palette:** green heart → gold shield with ribbon/red/ocean-wave; possibly shift palette toward YT-style navy+gold. (Biggest visual divergence.)
2. **"Donate Now"** as the explicit header CTA (currently "Make an Impact"), plus a donate link in the footer.
3. **Get Involved / Stay Connected section** on the landing page — social links **and an email/newsletter capture** (currently absent).
4. **Footer completeness** — add **address + EIN** (real values in `legacy-site-content.md`: 3677 Dunsmuir Circle, Pleasanton CA 94588; info@neevronil.org — note the legacy joint-foundation EIN isn't in our notes yet).
5. **About the Foundation** origin story ("how we started") vs the current mission-only framing.
6. **Nav:** add **Get Involved**; decide whether **Contact** stays (not in the brief).
7. **Real photos** everywhere (currently placeholders).

## PART 4 — OPEN QUESTIONS TO RESOLVE WITH OWNER
- Is the canonical brand **green** (staging site) or the **gold/navy/ocean** direction (this brief + YT reference)?
- Is this the **Brave Ronil Foundation** (single-child) brand, or the **Neev Kolte & Brave Ronil Foundation** (joint) per the legacy site? The brief says BRF only.
- Final header CTA wording: "Donate Now" vs "Make an Impact."
- Does the landing page need the email/newsletter capture at launch?
- EIN and the address to publish for BRF specifically.

---

# ===== RUNNING DEVELOPER PUNCH LIST =====

> the bottom** under "Open items," keeping the numbering sequential. Move finished
> items to "Completed" with a date. Each item notes the page, the change, and (where
> relevant) the reason / brief reference so the developer has full context.
>
> Context references (in this repo, `content/`):
> `landing-page-brief.md` (the agreed framework) · `legacy-site-content.md` (full NKBR
> content) · `dipg-knowledge.md` (DIPG facts). Last updated: 2026-07-14.

---

## Open items

### 1. Hero — collapse the 4 identical slides into a single static hero
- **Page:** Landing / Home
- **What it is now:** The hero is a 4-slide carousel where **all four slides are identical** — the same headline ("Bringing hope to children fighting DIPG") and the same tagline repeat 4×.
- **Change:** Replace the carousel with **one static hero** (single headline + tagline + primary CTA). No rotation.
- **Why:** Brief §2 calls for *one short, powerful statement* for "immediate emotional and informational impact." A carousel that repeats the same slide four times dilutes that impact and adds needless page weight. If a carousel is ever wanted later, each slide must carry distinct content — not duplicates.

### 2. Remove the Events section from the landing page
- **Page:** Landing / Home
- **What it is now:** The landing page includes an Events section with four "Community Fundraiser" cards (currently identical placeholders).
- **Change:** **Remove the Events section from the landing page** for the initial launch.
- **Why:** Brief states Events are *"will be added later, not needed for initial launch."* (The current cards are also duplicate placeholders.) Events can return as its own page/section post-launch.

### 3. About Us — use a real mission statement (adapted for BRF, not the old org's)
- **Page:** About Us
- **What it is now:** The mission slot reads as an emotional beat ("Turning Grief Into Purpose" + CEO quote) rather than an actual mission statement.
- **Change:** Put a proper mission statement in that section. **Do not copy the legacy statement verbatim** — that wording belongs to the *old joint organization* (Neev Kolte & Brave Ronil Foundation). Reword it so it's distinct and specific to the **Brave Ronil Foundation**.
- **Suggested BRF draft (for owner review/approval):**
  > *"The Brave Ronil Foundation supports children and families facing DIPG/DMG pediatric brain cancer. We fund cutting-edge research and clinical trials, advocate for pediatric cancer at every level of government, raise awareness in our communities, and help families access the care and support they need — so future families have hope where today there is none."*
- **Why:** A mission statement should state who we serve, what we do, and why (see brief §3 / §5). The legacy version (in `legacy-site-content.md`) covers the right substance but is the old org's phrasing; BRF needs its own voice. The draft keeps the same commitments (research, advocacy, awareness, family/care access) and ties to the BRF tagline theme ("hope where today there is none").
- **Note:** Final wording is the owner's call — this is a starting point, not locked copy.

### 4. About Us page — remove these sections
- **Page:** About Us
- **Remove from the About Us page:**
  - ❌ **Events**
  - ❌ **Our Impact**
  - ❌ **Board Members / Board of Directors**
- **Note:** Only listing what to remove — leave the remaining sections as they are.

### 5. Impact page — attribute all impact to the co-founders' prior work, not to BRF
- **Page:** Impact
- **Problem:** The Impact page currently presents families supported, research funded, and community/awareness events as if they are **Brave Ronil Foundation's** accomplishments. They are **not**. The Brave Ronil Foundation is a **new, independent organization** and has not yet done these things. This work was achieved by BRF's **co-founders, Manisha and Milan Mehta, during their tenure with the former Neev Kolte & Brave Ronil Foundation.**
- **Why this matters (compliance):** Per the foundation transition agreement, BRF must **not** claim these accomplishments as its own and must **not** imply affiliation with the former foundation. The co-founders **may** reference impact they personally helped achieve during their tenure (research funded, families supported, legislation, awareness) — but it must be framed as **their prior/legacy work**, not BRF's record.
- **Required change:** Reframe the entire Impact page so every accomplishment is clearly attributed to the co-founders' prior work with the former foundation. Use **past tense**, name the **former** foundation (or "in their prior roles"), and never say "BRF funded / BRF supported / we funded" for work done before BRF existed.
- **Add a short attribution line at the top of the page**, e.g.:
  > *"The impact below reflects the work our co-founders, Manisha and Milan Mehta, helped achieve during their tenure with the former Neev Kolte & Brave Ronil Foundation. The Brave Ronil Foundation is a new, independent organization and does not claim these accomplishments as its own — we share them to show the experience and commitment we build on."*
- **Suggested hero rewrite** (the current *"Advancing Hope Through Action and Research / Through research funding, awareness events, and community support, we're helping bring hope…"* implies BRF did the work):
  > **Headline:** "Built on a Proven Commitment to Children with DIPG"
  > **Sub:** "Before founding the Brave Ronil Foundation, Manisha and Milan Mehta spent years helping fund pediatric brain cancer research, support affected families, and raise awareness. That experience is the foundation we carry forward."
- **Going forward:** BRF's *own* future impact can be shown separately and clearly labeled as BRF's (e.g., "What we're working toward" / "Our first initiatives"), kept distinct from the legacy/co-founder achievements.
- **Specific edits requested on the Impact page:**
  - **Research grants → future tense.** Present research grants as something BRF **will** do going forward ("we will fund research grants to…"), NOT as past grants already awarded. Do not list the old foundation's funded grants as BRF accomplishments.
  - **Remove BrainStorm Summit references** — delete "BrainStorm Summit 2022" and "BrainStorm Summit 2023" entirely.
  - **Remove events and gatherings** from the Impact page. *(Interpreting "fathering" as "gatherings" — confirm if different.)*
- **Note:** Final wording is the owner's call; drafts above are starting points.

### 6. Family Support page — remove "Expert Guidance"
- **Page:** Family Support
- **Remove:** the **"Expert Guidance"** section.

### 7. Hero — use the canonical tagline
- **Page:** Landing / Home (hero)
- **Problem:** The finalized tagline is not on the site. The hero reads "Bringing hope to children fighting DIPG" with a subhead about "research, advocacy, and care."
- **Change:** Use the canonical tagline **"Fund Research. Support Families. Fight Brain Cancer."** in the hero.

### 8. Remove all "advocacy" / "lobbying" / "policy" language sitewide
- **Pages:** all (spotted in the hero subhead and the Awareness card)
- **Problem:** Advocacy/lobbying language is back — e.g., hero subhead "research, advocacy, and care" and the awareness card "Support research and policy advocacy." Advocacy/lobbying was **deliberately removed** from all BRF materials.
- **Change:** Remove "advocacy," "lobbying," and "policy advocacy" everywhere. Reframe those pillars around **research funding, family support, and awareness** (canonical wording — confirm exact phrasing with owner; the mission cards currently say "Research Funding / Family Support / Raising Awareness," which is close but confirm).

### 9. Fix Milan's title — President & Co-Founder (not CEO)
- **Pages:** anywhere Milan appears (e.g., the homepage pull-quote "Milan Mehta, CEO")
- **Change:** Change "CEO" to **"President & Co-Founder"** wherever Milan is credited.
- **Note:** Legacy NKBR content lists him as "CEO" — that's the old role; BRF title is President & Co-Founder.

### 10. "$100,000 in Research Grants" stat — remove or reframe (legacy-framing rule)
- **Page:** Home / Impact (stat tied to a DDRFA funding-partner logo)
- **Problem:** If "$100,000 in Research Grants" is presented as a **BRF** achievement, it violates the legacy rule — BRF is brand new; the $300K+ track record belongs to the **founding team / NKBR era**, not BRF.
- **Change:** Do **not** present this as BRF's achievement. Either remove it, or reframe it as the co-founders' prior work with the former foundation (see item 5). Confirm what the $100K figure actually represents before launch.

### 11. Events — replace placeholders with real events (Blackhawk gala headlines)
- **Pages:** Events section/page (and per item 2, keep Events **off** the landing page at launch)
- **Problem:** Events are all placeholder — four identical "Community Fundraiser / Support Session, Pleasanton, CA" cards reusing the "Every two minutes…" line.
- **Change:** Replace with **real events**; the **Nov 21 Blackhawk gala** should headline.

### 12. Technical launch-blockers
- **Page:** site-wide (head/meta)
- **A — noindex/nofollow:** The page is set to `noindex, nofollow` (fine for staging). **Must be removed at launch** so search engines can index the site.
- **B — Broken og:image:** The Open Graph image points to a broken local dev URL (`brave-ronil.local/...burst.svg`). **Fix to a real hosted image** or social shares won't render a preview.

---

## Completed
_(none yet — move items here with a completion date as they're done)_

---

## Parking lot / to discuss (not yet finalized requests)
_Use this area for things still being decided before they become firm dev requests._
- Header CTA wording: "Donate Now" (brief) vs "Make an Impact" (current). — decide
- Logo & palette direction: gold shield + ribbon + red + ocean wave (brief) vs green heart (current). — decide canonical brand
- Brand identity: "Brave Ronil Foundation" only vs joint "Neev Kolte & Brave Ronil Foundation." — confirm
