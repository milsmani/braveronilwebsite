# Brave Ronil Foundation — Website

A faithful, self-contained recreation of the [Brave Ronil Foundation](https://braveronilfstg.wpenginepowered.com/) website — a nonprofit supporting children with **DIPG** (Diffuse Intrinsic Pontine Glioma) through research, family support, and awareness.

The original is a WordPress/Elementor site. This version is rebuilt as a **static HTML/CSS/JS** site with **no build step** — it runs by opening `index.html` in any browser and deploys to any static host (GitHub Pages, Netlify, Cloudflare Pages, WP Engine static, etc.).

## Structure

```
index.html            Homepage (hero, mission, Ronil's story, pillars,
                      DIPG stats, events, CTA, donation band)
about-us.html         Our story & mission
about-dipg.html       What DIPG is and why it matters
impact.html           Where support goes
family-support.html   Resources for families
get-involved.html     Donate / fundraise / events
contact.html          Contact form + details
privacy-policy.html   Legal
terms.html            Legal
css/styles.css        Design system + all styles
js/main.js            Mobile nav, scroll reveal, donation selector
assets/img/           Favicon + (swap in real photography here)
```

## Design system

Rebuilt from the live site's actual tokens:

| Token        | Value       |
|--------------|-------------|
| Brand green  | `#32C850`   |
| Button green | `#55D36E`   |
| Deep green   | `#219839`   |
| Accent (warm)| `#FF4405`   |
| Warm bg      | `#FFF7F5`   |
| Ink          | `#181D27`   |
| Display font | Bitter (serif) |
| Body font    | Inter Tight (sans) |

## Swapping in real images

The original site's photography lives on the staging host and wasn't accessible
during the build, so image areas currently use branded CSS placeholders
(`.hero-photo`, `.media-card`, `.event .thumb`). To use the real assets, drop the
files into `assets/img/` and replace the placeholder `<div>`s with `<img>` tags —
each placeholder is clearly labelled (e.g. "Ronil's photo", "Ronil's story").

## Local preview

Just open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Notes

- The contact form is a front-end demo (`data-demo`); wire it to your backend or a
  form service to receive submissions.
- Fonts load from Google Fonts; the site falls back to Georgia/system fonts offline.
- Event dates and some supporting copy are representative placeholders based on the
  original's "Community Fundraiser" listings.
