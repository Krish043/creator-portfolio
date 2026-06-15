# Krish — Portfolio

A cinematic editorial portfolio site for **Krish** — creator/operator hybrid working at the intersection of storytelling, internet culture, podcasting, and founder branding.

> "Attention is the new currency."

## What's inside

| File | Purpose |
|---|---|
| [index.html](index.html) | Full single-page site — 9 sections, all copy baked in |
| [styles.css](styles.css) | Editorial design system — cream/black palette, Clash Display + Satoshi + Space Grotesk |
| [script.js](script.js) | Motion layer — magnetic buttons, scroll reveals, custom cursor, counters, card tilt |
| [FRAMER-GUIDE.md](FRAMER-GUIDE.md) | Full Framer rebuild instructions — tokens, motion specs, copy strategy |

## Run it locally

Open `index.html` directly in any browser, or serve it:

```powershell
# from this folder
python -m http.server 8080
# then visit http://localhost:8080
```

## Deploy

Drop the folder into Vercel / Netlify / Cloudflare Pages — it's a static site, no build step.

## Sections

1. **Hero** — `Attention is the new currency.` with floating reel / stat / waveform UI
2. **Marquee ticker** — operating-system keywords scrolling
3. **Featured Work** — mixed-grid card system (podcast, shorts, founder content, meme ops, brand)
4. **Podcast — "Perspective"** — dark cinematic section, mic + waveform, 4 notable guests, 3-column media stack
5. **Metrics** — 1.4M / 04 / 50+ / 06 with scroll-triggered counters
6. **Skills** — 10-row operating system (no progress bars, ever)
7. **About** — internet-native bio, BDE role re-framed as startup exposure
8. **Journey** — 2021 → 2026 non-linear timeline with "now" anchor
9. **Testimonials + Contact** — closer with `let's talk.`

## Brand rules

- Never call the Aubergine role "sales" — it's strategic communication / startup exposure.
- Never use "passionate", "results-driven", "fresher", or any SaaS-corporate buzzword.
- Always lead with specific numbers and specific guest descriptors.
- Single accent color (warm cinematic orange `#FF5B2E`). No gradients beyond text-clip + section overlays.

See [FRAMER-GUIDE.md](FRAMER-GUIDE.md) for the full breakdown.
