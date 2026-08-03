# BRF Landing Page — Original Brief + Current-vs-Expected Analysis

> Captures the original **Brave Ronil Foundation landing-page brief** (owner-provided)
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
