# hannanlabs — Carousel Design System

The locked visual language for **hannanlabs** carousels. Reuse this for every new carousel so the
feed stays consistent. Built in the Paper MCP design tool, exported as 2× PNG.

> **One-line vibe:** *Inky editorial.* A gallery wall in pure ink with bone-white gallery-label type.
> Premium, quiet, sharp. Contrast is the accent. **No glow. No gradients. No cheap effects.**

---

## Formats (export both)

| Format   | Size (px)   | Use                         | Export      | Output (2×)   |
|----------|-------------|-----------------------------|-------------|---------------|
| Portrait | 1080 × 1350 | Instagram feed (4:5)        | PNG @ 2×    | 2160 × 2700   |
| Square   | 1080 × 1080 | LinkedIn / general (1:1)    | PNG @ 2×    | 2160 × 2160   |

Export destination: `<project>/<topic-slug>/portrait/` and `<project>/<topic-slug>/square/`,
named `slide-01-<name>.png` … `slide-NN-<name>.png` (zero-padded).

---

## Palette (monochrome + one spark)

| Role              | Value                          | Notes                                    |
|-------------------|--------------------------------|------------------------------------------|
| Background (ink)  | `#0B0B0C`                      | Near-black, matte. The ground.           |
| Raised surface    | `#141416`                      | Image-frame fallback only.               |
| Primary text      | `#F4F1EA`                      | Warm bone white (NOT pure #FFF).         |
| Muted body text   | `rgba(244,241,234,0.82)`       | Body copy.                               |
| Caption / meta    | `rgba(244,241,234,0.55–0.58)`  | Eyebrow labels, index.                   |
| Faint / footer    | `rgba(244,241,234,0.45)`       | Footer handle, "swipe".                  |
| Hairline rules    | `rgba(244,241,234,0.14–0.16)`  | Top + bottom divider lines.              |
| Teal spark        | `#3FD0C0`                      | **One tiny 8px dot only**, on the `HANNANLABS.` wordmark. Lifted from the logo. Nothing else is colored. |

Image treatment: `filter: grayscale(100%) brightness(0.6–0.72) contrast(1.05–1.08)` + a
`rgba(11,11,12,0.28)` scrim. Keeps every photo mono and matte so it never fights the type.

---

## Type

| Token     | Font            | Weight | Size              | Tracking      | Case      |
|-----------|-----------------|--------|-------------------|---------------|-----------|
| Display   | **Anton**       | 400    | 92–132px (portrait), 90–120px (square) | -0.02em | UPPERCASE |
| Eyebrow   | **Inter**       | 600    | 20px              | 0.24em        | UPPERCASE |
| Index     | **Inter**       | 500    | 20px              | 0.18em        | UPPERCASE |
| Body      | **Inter**       | 400    | 30–33px / 44–48px line-height | normal | sentence |
| Footer @  | **Inter**       | 500    | 22px              | 0.02em        | lowercase |

**Signature move:** each Anton headline is two lines — line 1 **solid** bone, line 2 **outline**
(`color: transparent; -webkit-text-stroke: 1.4–1.6px #F4F1EA`). The solid-vs-outline pairing carries
the build-vs-create / engineer-vs-creative duality. Keep headlines short (≤ ~15 condensed chars/line).

> Note: Anton lowercase and Inter are required. Paper's `update_styles` does **not** reliably change
> `textTransform` on cloned nodes — to force lowercase, replace the text node via `write_html` instead.

---

## Layout system (every slide)

```
┌ padding 84px (portrait) / 72–84px (square) ────────────┐
│  EYEBROW LABEL                    NN  /  10   ← top meta│
│  ───────────────────────────────────────────  hairline │
│                                                         │
│        (generous negative space)                        │
│                                                         │
│  Anton headline line 1 (solid)                          │
│  Anton headline line 2 (outline)                        │
│  Body copy, max-width ~840px, muted bone                │
│                                                         │
│  ───────────────────────────────────────────  hairline │
│  HANNANLABS·(teal dot)              @hannanlabs  footer │
└─────────────────────────────────────────────────────────┘
```

- Artboard: `display:flex; flex-direction:column; justify-content:space-between`.
- Three groups: **top meta**, **hero (headline + body)**, **bottom (hairline + footer)**.
- Asymmetric, left-aligned. Big scale contrast (huge Anton next to small muted Inter). White space is a feature.
- **Index** uses an em dash on the cover (`01—10`), slash on inner slides (`02 / 10`).

### Image slides (use sparingly — 2–4 per deck)
- Full-bleed grayscale photo **band** at the top (portrait ~740px, square ~470px), top meta overlaid in white.
- Hard architectural seam (a 1px bone hairline `border-top`) between photo and the ink text section below — **no gradient fade**.
- Text section holds headline + body + footer on solid ink.

### Cover (slide 1)
- Top-left = `HANNANLABS` wordmark, top-right = `INTRO / 01—10`.
- Hero kicker "Hi, I'm Hannan." + the signature solid/outline headline. Footer right = `SWIPE →`.

### CTA (last slide)
- Top label `STAY IN TOUCH` + `NN / NN`.
- Identity row: line-art **portrait** in a ringed circle (`border:1.5px rgba(244,241,234,0.22)`, on `#000`) + name (Anton) + one-line bio.
- Big `FOLLOW / ALONG.` headline + short subtext.
- Contact rows with **inline SVG icons** (Instagram, envelope, LinkedIn) — crisper than hotlinked logos:
  - Instagram: `@hannanlabs`
  - Email: `hannanbutt.dev@gmail.com`
  - LinkedIn: `linkedin.com/in/hannan-butt`
- Footer right = `BUILD & CREATE`.
- Portrait asset: `hannan-portrait-removebg-preview.png`. Paper's desktop sandbox will not load it via
  `paper-asset://`; embed it as a base64 data-URI `<img>` (or fill the node manually in Paper).

---

## Build workflow (Paper MCP)

1. `get_guide` → `get_basic_info` → `get_font_family_info(["Anton","Inter"])`.
2. Build **slide 1** fully to lock the system; screenshot and confirm.
3. Build a content **template** (slide 2), then `duplicate_nodes` it for the other text slides and swap
   copy with `set_text_content` (cheap + perfectly consistent).
4. Image slides: clone the first image slide, then `write_html` replace the `<img>` node to swap the photo.
5. For the **square set**, duplicate the whole portrait deck, set artboard `height:1080`, shrink image
   bands (+ their absolute `<img>`/overlay) to ~470px, and tighten the CTA (smaller portrait/headline/gaps).
6. **Rename every artboard** before export (duplicates inherit the source name → wrong filenames).
7. Export PNG @ `2x`; organize into `portrait/` and `square/`.

## Imagery sourcing (Firecrawl)
- Use **Pexels** or standard **Unsplash** (`images.unsplash.com`) — directly hotlinkable, watermark-free.
- **Avoid** Dreamstime / Shutterstock / Alamy / iStock (watermarks) and `plus.unsplash.com` (Unsplash+ watermark).
- Prefer dark, moody, already-grayscale-friendly shots; the grayscale filter does the rest.

## Voice
Confident, human, builder + creator. Short and sharp. **No em dashes in prose.** Periods over commas
for punch. Don't repeat the "build with AI / create with AI" line on every slide — it's the cover's signature.
