# KRISH — Framer Implementation Guide

A complete blueprint for rebuilding this site inside **Framer** with all the cinematic motion, copy, and structural decisions baked in. Use the local `index.html` as the visual + behavioral source of truth, and this doc as the Framer-specific translation.

---

## 1 · Brand Foundation

| Token | Value |
|---|---|
| Background (default) | `#F3EEE5` (warm cream) |
| Background (alt) | `#ECE5D7` |
| Background (dark) | `#0C0C0C` |
| Ink | `#0C0C0C` |
| Muted (on cream) | `rgba(12,12,12,.55)` |
| Muted (on dark) | `rgba(243,238,229,.62)` |
| Accent (single) | `#FF5B2E` cinematic warm orange |
| Hairline | `rgba(12,12,12,.12)` / `rgba(243,238,229,.14)` |

**Fonts** (load in Framer → Site Settings → Custom Fonts via Fontshare):
- Display headlines → **Clash Display** 700
- Body / sub → **Satoshi** 400 / 500
- Tags · labels · meta · UI → **Space Grotesk** 500 (mono-coded aesthetic)

**Grain texture**: drop in a 200×200 SVG fractal noise (or a PNG noise) as a fixed overlay layer with `multiply` blend, opacity ~8 %. In Framer use a top-level Component named `Grain` placed inside the page's `body` layer.

---

## 2 · Page Structure (Framer Pages & Sections)

Build as **one long landing page** with anchor scroll between sections (use Framer's Smart Components for repeating modules):

```
1. Nav           (sticky, mix-blend-mode: difference)
2. Hero
3. Marquee Ticker
4. Featured Work        → 01 / WORK
5. Podcast (dark)       → 02 / PODCAST
6. Metrics              → 03 / IMPACT
7. Skills (alt cream)   → 04 / OPERATING SYSTEM
8. About (dark)         → 05 / ABOUT
9. Journey timeline     → 06 / JOURNEY
10. Testimonials (alt cream) → 07 / SIGNAL
11. Contact (dark)      → 08 / CONTACT
```

Alternate **cream → dark → cream → dark** to keep the editorial rhythm. Every section opens with a **section index label** in mono and an oversized display headline. This is the single most important pattern that makes the site feel like a media studio rather than a portfolio.

---

## 3 · Hero — The Statement

**Headline (3 lines, stacked, animated rise):**
> Attention
> is the new
> *currency.*

- Font: Clash Display 700, `clamp(64px, 14vw, 240px)`, line-height `0.9`, tracking `-0.04em`.
- Each line wrapped in a clipping mask; the inner `<span>` rises from `translateY(110%)` to `0` over 1.1 s, staggered 150 ms.
- Last line gets a horizontal gradient from `#0C0C0C → #FF5B2E` clipped to text. In Framer use a Text layer + Linear Gradient fill on the character.

**Sub-headline:**
> I build content that people actually stop scrolling for —
> *podcasting, editing, storytelling & founder branding*
> at the intersection of **internet psychology** and **creator growth**.

**Floating UI** (3 layers, absolute, with mouse-parallax + float-Y loop):
1. Reel frame card (REC ● + animated audio bars + 00:42 / 01:18) — top-right, `rotate(-6deg)`
2. Stat card "1.4M dashboard views" — middle-right, `rotate(5deg)`
3. Waveform pill "EP 07 — On Storytelling" — top-right inner, `rotate(4deg)`

In Framer: use **Effects → Parallax** + a **Loop variant** (Float-Y ±14 px, 7–9 s, ease-in-out). Apply different durations per element so they breathe asynchronously.

**Tag chip**: `● LIVE — Open for collabs · 2026` — small pill with backdrop-blur. The dot pulses.

**CTAs:** *View Work* (filled black), *Podcast Work* (ghost), *Let's Talk* (ghost). All magnetic.

**Scroll cue (bottom-left)**: vertical line that scales from top to bottom in a 2 s loop, with the word "scroll" above.

---

## 4 · Marquee Ticker

Between hero and work. A horizontal infinite marquee of the operating-system keywords:

```
STORYTELLING ✺ RETENTION EDITING ✺ HOOK ENGINEERING ✺
PODCAST PRODUCTION ✺ FOUNDER BRANDING ✺ INTERNET CULTURE ✺
```

- Clash Display 700, `clamp(32px, 5vw, 72px)`.
- Stars (`✺`) in accent orange, smaller (0.6em).
- In Framer use the **Ticker** component, speed ~40 s, direction left.

---

## 5 · Featured Work Grid

A 12-column grid with mixed card sizes — **never a uniform grid**. That's what kills portfolio sites.

| Card | Span | Aspect | Vibe |
|---|---|---|---|
| Angry Birds CMO clip | 8 cols | 16/10 | Long-form podcast hero |
| "Nobody tells you this about virality" | 6 cols | 4/5 | Short-form hook |
| Founder Brand System | 6 cols | 4/5 | Series cover |
| 1.4M views meme card | 8 cols | 16/10 | Huge number flex |
| Filmfare director clip | 6 cols | 4/5 | Cinematic clip |
| Brand × Creator | 6 cols | 4/5 | Collab |

Each card:
- Cinematic gradient background (no stock photos — pure typographic posters).
- Overlay gradient bottom-to-top for legibility.
- Big display headline on the thumbnail (the **content is the thumbnail**).
- Top-right: format · duration. Bottom: category + numbered index.
- **Play button** appears center on hover, scales to `1.1` and shifts to accent.
- Mouse-tilt: subtle 3D rotateX/Y up to 4°.
- Magnetic micro-translation on hover (parent translateY -6 px).

Framer: build a `WorkCard` Smart Component with variants (`Default`, `Hover`) and a `Format` enum prop (`PODCAST`, `SHORT`, `REEL`, `MEME`, `BRAND`).

---

## 6 · Podcast Section — The Centerpiece

This is **the section that closes the deal**. Treat it like a media studio launch page, not a portfolio item.

**Layout:**
- Dark background `#0C0C0C`.
- Section index `02 / PODCAST` in muted cream mono.
- Headline: `Perspective.` outlined-stroke style → next line `A media project, built *solo*.`
- Lede positions it as: written, scripted, produced, hosted, edited, shipped end-to-end.

**Stage row (2 columns on desktop, stacked on mobile):**
- **Left**: CSS-built podcast microphone illustration (no stock photo) — body uses linear gradients on `#2A2A2A → #0C0C0C`, grill is a tiny 8-col grid of soft cream squares. Below it an `ON AIR ●` pill in accent orange.
- **Right**: large waveform — 44 bars, each animating with `bigWave` keyframe (height 6 % → 88 %, 2 s ease-in-out). Stagger via `:nth-child(3n)`, `(5n)`, `(7n)`, `(11n)` rules with different durations to feel organic. Below: meta line `● REC · 48kHz / 24-bit · EP 07 · 01:42:18`.

**Guest list (4 rows):**
A clean table with columns: `EP NUMBER` (accent orange mono) · `GUEST NAME` (display) · `TAGLINE`. On hover the row indents `24 px` and an accent arrow slides in from the right.

| EP | Guest | Tagline |
|---|---|---|
| EP 01 | CMO — Angry Birds | On building IP that survives generations. |
| EP 02 | Filmfare-winning Director · Gullak | On storytelling that feels like home. |
| EP 03 | CNBC Anchor | On signal, noise & narrative in markets. |
| EP 04 | Pogo FAQ Show Host | On entertaining a generation, one episode at a time. |

**The "media stack" — 3 columns** below the guest list explaining process:
1. **Writing & Scripting** — Story arcs designed for retention, not just runtime.
2. **Production & Hosting** — Pre-interview research, founder-grade questioning.
3. **Post & Clip Extraction** — One conversation → 1 long-form, 1 YT cut, 8 shorts.

> **Why this works:** It re-frames Krish as a *one-person media operation*. Not "I made a podcast" — "I run the entire pipeline."

---

## 7 · Metrics — Big Numbers, No Charts

A 4-column row with hairline borders between cells, top + bottom hairlines bounding the whole strip.

| Metric | Label |
|---|---|
| **1.4M** | Dashboard views · 30 days · IG |
| **04** | Notable guests hosted on Perspective |
| **50+** | Edits shipped — shorts · reels · podcasts |
| **06** | Months inside a fast-moving startup *(re-framing of the BDE role)* |

- Numbers in Clash Display 700, `clamp(56px, 8vw, 120px)`.
- On scroll into view, each number **counts up** from 0 with a cubic ease-out (1.6 s).
- Small note bottom-right in mono: `※ Numbers update as the work compounds. The internet rewards consistency.`

---

## 8 · Skills — The Operating System

> "Not a skillset. *An operating system* for the internet."

10 rows, each a 3-column line:

```
[01] [Retention Editing]          [Cutting on motion, emotion, and curiosity gaps.]
[02] [Hook Engineering]           [The first 3 seconds is a product.]
[03] [Internet Psychology]        [Why people stop, save, share — and why most content doesn't.]
[04] [Founder Branding]           [Operators as the most credible distribution channel they own.]
[05] [Creator Growth]             [Audience as a compounding system, not a viral lottery.]
[06] [Podcast Production]         [End-to-end: research, scripting, hosting, post, distribution.]
[07] [Thumbnail Psychology]       [Faces, contrast, curiosity. The thumbnail is the trailer.]
[08] [Meme Culture Fluency]       [Native, not imitative. The language of the feed.]
[09] [Content Systems]            [One idea → 10 formats. Assembly line, shipped like an artist.]
[10] [Technical × Marketing]      [Engineering mind. Creator instinct. The hybrid teams are quietly hiring for.]
```

Each row hairline-separated. On hover the row indents `30 px` and the background shifts to a warmer cream. **No progress bars. Ever.**

---

## 9 · About — Internet-native Tone

> I'm *Krish* — a creator/operator hybrid who spent four years decoding how *attention* actually moves on the internet.

Then 4 short paragraphs in a 2-column grid:
1. Started inside a CS degree at Nirma — engineering taught me how systems compound.
2. 6 months inside **Aubergine Solutions** — *not as a salesperson*, but close to founders and products. Learned how operators think.
3. Picked up a camera, opened a timeline, never put it down. Tech background didn't disappear — it compounded.
4. Today: storytelling, internet culture, creator economy, founder branding. Content that people actually stop scrolling for.

**Tone rules:**
- Never the word "passionate."
- Never "results-driven."
- Never list the BDE role as sales.
- Use lowercase casual conjunctions ("→", em-dashes).
- Italic display font for emphasis — feels editorial.

---

## 10 · Journey Timeline

A vertical timeline with `YEAR | TITLE + DESC` rows, hairline-separated.

| Year | Title | Note |
|---|---|---|
| 2021 | B.Tech CSE — Nirma University | First lines of code; saw the internet as a system. |
| 2022 | Web Dev Freelancing & Hackathons | Built, broke, shipped under pressure. |
| 2023 | Internships · Startup Exposure | Product, people, the gap between idea and shipped business. |
| 2024 | Aubergine Solutions · BDE (6 mo) | Strategic communication at startup speed. |
| 2024 | Perspective · Solo Podcast Build | Across the table from people I grew up watching. |
| 2025 | Editing Freelancing · Creator Work | Retention edits, founder content, short-form systems. |
| 2026 → | Building. Editing. Operating. | Founder content + podcast production + the edge of tech & media. |

The last row's year gets the accent-orange pill background — it's the "now" anchor.

Hover state: row indents both sides + warm-cream background.

---

## 11 · Testimonials — Quote Cards

2×2 grid of premium quote cards on cream-2. Each has a `“` quote mark in accent orange, Clash Display body, mono signature. Cards lift on hover with a soft shadow `0 30px 60px rgba(0,0,0,.06)`.

Keep them anonymous-ish (role + sector) — feels credible without overclaiming.

---

## 12 · Contact — The Close

Dark section. Huge headline:

> If you want content
> that *actually performs* —
> **let's talk.**

- One email link in display font, `clamp(28px, 4vw, 56px)`, with an animated arrow that slides right on hover.
- Below: 4 social channel pills (Instagram · YouTube · LinkedIn · X). Each magnetic.
- Footer hairline + two micro-mono lines: `© 2026 Krish · Built like a media studio.` and `Made with intent — designed for attention.`

---

## 13 · Motion Library (Framer Settings)

| Element | Effect | Easing | Duration |
|---|---|---|---|
| Hero headline lines | Mask-rise from below | `cubic-bezier(.16,1,.3,1)` | 1.1 s, staggered 150 ms |
| Section headlines | Word-by-word fade + 20 px rise | `(.2,.8,.2,1)` | 0.9 s |
| Cards on scroll | Opacity 0→1, Y 40→0 | `(.16,1,.3,1)` | 0.9 s |
| Magnetic buttons | Translate to cursor (× 0.35) | `(.2,.8,.2,1)` | 0.3 s |
| Cursor | Lag-follow with linear interpolation `0.18` | — | continuous |
| Hero floats | Float-Y loop ±14 px + mouse parallax | ease-in-out | 7–9 s |
| Marquee | Translate -50 % loop | linear | 40 s |
| Counters | Number tween with ease-out cubic | — | 1.6 s |
| Card tilt | Perspective 1000, rotateXY ±4° | spring | 0.4 s |
| Row hover (skills/timeline/guests) | Padding + bg shift | `(.2,.8,.2,1)` | 0.4 s |

**Reduced motion:** every animation gracefully degrades to a static or 1-ms transition. Framer has a built-in "respect reduced motion" toggle — enable it on every interaction.

---

## 14 · Responsive Behavior

**Breakpoints:**
- ≥ 1200 px — full editorial grid.
- 900–1200 — work cards collapse from 8/6 to 6/6.
- 600–900 — single column for podcast stage, metrics → 2×2, skills → 2-column.
- < 600 — full single column. Hero floats hidden. Cards 100 % width. Nav collapses to logo + CTA only (hamburger optional but the site is so short you can skip the menu).

**Mobile rules:**
- Headlines never break awkwardly — set explicit `<br/>` per breakpoint in Framer.
- Cursor is hidden on touch devices.
- All tilts and parallaxes disabled below 720 px.
- Magnetic buttons still work via touch — replaced with subtle press-state.

---

## 15 · Microinteractions Checklist

- [ ] Logo dot pulses (1.4 s).
- [ ] Nav uses `mix-blend-mode: difference` so it stays legible over cream + dark.
- [ ] Nav links underline draws from left on hover.
- [ ] Tag chip uses backdrop-blur for a premium glass feel.
- [ ] Highlight markup behind keywords (60 % offset accent underline).
- [ ] Every CTA has both a hover state AND a magnetic state.
- [ ] Card thumbnails play-button scales + recolors on hover.
- [ ] Podcast row arrow slides in from right on hover.
- [ ] Counter only fires once (IntersectionObserver, `unobserve` after).
- [ ] Cursor expands when hovering anything interactive.

---

## 16 · Content Strategy Notes

**Re-framing the BDE role.** Anywhere it appears, position it as:
- "Months inside a fast-moving startup."
- "Strategic communication at startup speed."
- "Close to founders, products, and the messy reality of building tech businesses."

**Never** use:
- "Sales", "lead generation", "client acquisition" (kills the creator brand).
- "Aspiring", "looking for opportunities", "fresher".
- Buzzwords: "synergy", "passionate", "results-oriented".

**Always** use:
- "Built", "shipped", "produced", "hosted", "operated".
- First-person, lowercase confidence.
- Specific numbers (1.4M, 04, 06, 50+).
- Specific guest descriptors (Filmfare-winning, Angry Birds CMO).

---

## 17 · Inspiration Anchors

When something feels off in Framer, A/B test against these reference patterns:
- **Apple editorial** — for whitespace and headline rhythm.
- **A24 site** — for cinematic dark sections + italic display.
- **Stripe Press** — for the way long-form content meets bold typography.
- **Mr. Beast Studios / Colin & Samir** — for how creator-operators present themselves seriously.
- **Linear's launch pages** — for hairline borders and mono UI labels.

---

## 18 · Deployment

Two paths:

**A. Use the static site directly.**
`index.html` + `styles.css` + `script.js` is a complete deployable site. Push to Vercel / Netlify / Cloudflare Pages. Custom domain. Done in 5 minutes.

**B. Rebuild in Framer using this doc.**
Use the static site as the live design comp (run it in a side tab while you build). Recreate sections as Framer Smart Components. Keep tokens identical. Match motion via Framer's built-in interactions + Effects panel.

Either way: the **storytelling, hierarchy, and tone** are the moat. The pixels are negotiable.
