---
version: alpha
name: pray chamber
description: Dark chamber landing for pray.kisko.dev. Monumental display type, parchment ink on void, single brass accent, no cards.
---

# pray chamber

Visual identity for the pray public landing. Agents must read this file before changing UI. Format follows [Google Labs DESIGN.md](https://github.com/google-labs-code/design.md) (alpha). Browse related templates at [getdesign.md](https://getdesign.md/); this file is original to pray, not a catalog clone.

## Overview

Chamber, not dashboard. Quiet museum label meets terminal rite. The first viewport is brand-led: the word `pray`, one italic subtitle, one CTA pair. Atmosphere comes from void, moisture haze, vignette, and a pinned backdrop glyph — not from cards, stat strips, or pill clusters.

Audience: developers adopting Prayfile. Tone: solemn, precise, slightly liturgical metaphor kept out of install and code blocks. Prefer fewer sections with stronger hierarchy over catalog density.

The HTML landing is a one-screen composition (`body.screen-fit`, `.chamber--screen`): brand, one signal, install rite, collapsed prompt veil, repo and outbound links. The closed state must fit a typical desktop viewport without scrolling; opening animates height instead of jumping.

## Colors

Void canvas. Parchment ink at stepped opacities. One brass accent for signals, links, and the backdrop word. No second brand hue. No purple-indigo marketing gradients. No cream paper light theme.

```yaml
colors:
  primary: "#c9a87c"
  secondary: "rgba(236, 228, 218, 0.62)"
  tertiary: "#e0c9a0"
  void: "#060608"
  ink: "rgba(236, 228, 218, 0.88)"
  ink-soft: "rgba(236, 228, 218, 0.62)"
  ink-faint: "rgba(236, 228, 218, 0.38)"
  ink-ghost: "rgba(236, 228, 218, 0.1)"
  accent: "#c9a87c"
  accent-bright: "#e0c9a0"
  accent-deep: "#8b6914"
  link-glow: "rgba(201, 168, 124, 0.22)"
  moisture-cool: "rgba(186, 206, 232, 0.08)"
  moisture-warm: "rgba(201, 168, 124, 0.06)"
```

## Typography

Two families only. Newsreader (OFL, Production Type) for brand voice, signals, body, and subtitles; use optical sizing (`opsz`) so display cuts stay open and text cuts stay sturdy on screen. IBM Plex Mono for nav, thresholds, commands, and ledger labels. Body copy may justify; code never does.

```yaml
typography:
  display:
    fontFamily: Newsreader
    fontSize: 80px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.04em
    opticalSizing: 72
  signal:
    fontFamily: Newsreader
    fontSize: 26px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0.02em
    opticalSizing: 36
  body:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.72
    opticalSizing: auto
  subtitle:
    fontFamily: Newsreader
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
    fontStyle: italic
  label:
    fontFamily: "IBM Plex Mono"
    fontSize: 9px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.28em
  code:
    fontFamily: "IBM Plex Mono"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.55
```

## Layout

Single centered column. Measure stays near 34rem for prose. Sections are plinths separated by hairline dividers and large vertical gaps. Nav is fixed, uppercase mono, sparse. Hero is full-bleed atmosphere behind type — not an inset media card.

```yaml
spacing:
  xs: 0.5rem
  sm: 1rem
  md: 1.8rem
  lg: 3.5rem
  xl: 7rem
  measure: 34rem
  chamber-pad-x: 1.25rem
  chamber-pad-top: 6.5rem
```

## Elevation & Depth

Depth is atmospheric, not material. Moisture field and vignette sit fixed behind content. The backdrop `pray` glyph scales and blurs on scroll. Soft brass glow on focus and hover for links only. Prefer opacity and blur over drop shadows and stacked cards.

## Shapes

Nearly no radius. No stadium pills. Dividers are thin horizontal rules. Copy controls stay quiet mono buttons, not floating badges.

```yaml
rounded:
  none: 0px
  control: 2px
```

## Components

Landing primitives map to CSS in `assets/landing.css`:

- **plinth** — section block with museum label and optional roman glyph
- **signal** — display-face quote; optional `data-echo` ghost layer
- **rite** — numbered install step with copyable `incantation` shell
- **triad** — three labeled lines for ownership zones
- **whisper** — small centered aside under a rite
- **threshold-link** — uppercase mono CTA in the hero
- **veil** — animated collapse for the agent prompt; closed by default; bar holds prompt show/hide, copy, and `llms.txt`

Do not introduce card grids, feature icon rows, or marketing stat strips.

```yaml
components:
  site-top:
    backgroundColor: "{colors.void}"
    textColor: "{colors.ink-faint}"
    typography: "{typography.label}"
  signal:
    textColor: "{colors.primary}"
    typography: "{typography.signal}"
  incantation:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    typography: "{typography.code}"
  copy-rite:
    textColor: "{colors.ink-faint}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
  pray-voice:
    textColor: "{colors.ink}"
    typography: "{typography.display}"
  prose:
    textColor: "{colors.secondary}"
    typography: "{typography.body}"
```

## Do's and Don'ts

Do:

- Keep brand `pray` as the strongest first-viewport signal
- Keep the default closed landing inside one viewport on desktop
- Put install early; keep the prompt behind the veil with copy and an `llms.txt` link
- Preserve reduced-motion paths for vibe, backdrop, and morse drift
- Match HTML presentation and `index.md` content when both change

Don't:

- Restyle toward purple-on-white, cream-serif-terracotta, or broadsheet newspaper skins
- Add cards, hero media insets, floating badges, or pill clusters
- Expand the prompt by default or restack long start rites onto the first screen
- Invent a second accent color or a light theme without an explicit product decision
