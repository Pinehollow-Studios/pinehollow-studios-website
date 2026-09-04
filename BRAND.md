# Pinehollow Studios — Brand & Colour Reference

The design system used across the Pinehollow Studios website. Palette name: **Glacial**.
Source of truth: `app/globals.css` (`:root` tokens), `components/mark.tsx`,
and the icon files in `app/`.

---

## Logo-ready shortlist

The minimum working set for the app logo / mark:

| Use | Hex |
|---|---|
| Mark beam — gradient start (hot ice) | `#B0F1FF` |
| Mark beam — gradient end (mist) | `#D6F5FF` |
| Background — page base | `#060A0F` |
| Background — deepest | `#04080D` |
| Background — gradient depth | `#15293A` |
| Text on an ice fill | `#06181F` |
| Off-white text | `#F1F5F2` |

---

## Full palette

### The signal (primary accent)
| Token | Hex | Role |
|---|---|---|
| Ice / pine-glow | `#7FE4FF` | Primary accent — the brand "signal" (buttons, dots, selection, loader). |
| Ice (hot) | `#B0F1FF` | Brighter ice — mark beam gradient start; hover / emphasis |
| Mist | `#D6F5FF` | Light tint — mark beam gradient end, lowercase type accents |

### Backgrounds (dark)
| Token | Hex | Role |
|---|---|---|
| Page base (`--ph-base`) | `#060A0F` | The actual site/page background |
| Base (`--lp-base`) | `#070C12` | Near-black blue |
| Base deep (`--lp-base-deep`) | `#04080D` | Deepest — footer, recessed sections |
| Base raised (`--lp-base-raised`) | `#101822` | Slightly lifted surfaces |

### Slate / pine (mid-tones)
| Token | Hex | Role |
|---|---|---|
| Pine (`--lp-pine`) | `#2A4A5E` | Muted slate-blue |
| Pine deep (`--lp-pine-deep`) | `#15293A` | Icon gradient top, depth |

### Text / foreground
| Token | Value | Role |
|---|---|---|
| Foreground (`--lp-fg`) | `#F1F5F2` | Off-white (slight green tint) — primary text |
| Muted (`--lp-fg-mute`) | `rgba(241, 245, 242, 0.62)` | Secondary text |
| Dim (`--lp-fg-dim`) | `rgba(241, 245, 242, 0.38)` | Labels |
| Faint (`--lp-fg-faint`) | `rgba(241, 245, 242, 0.18)` | Very subtle |
| Ice-ink (`--lp-ice-ink`) | `#06181F` | Dark text on top of ice fills (e.g. button labels) |

### Vestige accent (product palette — only on controls that lead to Vestige)
| Token | Hex | Role |
|---|---|---|
| Mint (`--v-mint`) | `#5BE4C3` | Gradient start |
| Lime (`--v-lime`) | `#8FE85B` | Gradient end — `linear-gradient(135deg, mint, lime)` |
| Vestige ink (`--v-ink`) | `#0A1A22` | Text on the gradient |

### Warm / paper (used sparingly)
| Token | Hex | Role |
|---|---|---|
| Paper (`--ph-paper`) | `#EEE7D8` | Cream paper surface (the "letter") |
| Paper ink (`--ph-paper-ink`) | `#1A1813` | Text on cream |
| Ember (`--lp-ember`) | `#FF9560` | Warm accent (rare) |
| Sky (`--lp-sky`) | `#F2D7A8` | Warm tint (rare) |

### Hairlines / rules (white at low opacity)
| Token | Value |
|---|---|
| Rule (`--ph-rule`) | `rgba(241, 245, 242, 0.14)` |
| Rule hi (`--ph-rule-hi`) | `rgba(241, 245, 242, 0.28)` |
| Rule faint (`--ph-rule-faint`) | `rgba(241, 245, 242, 0.07)` |

---

## The logo mark — "the lean"

Two rounded beams leaning into each other (two founders, one peak; the void
beneath is the hollow). Drawn on a 64×64 grid.

- **Beams:** both filled with a vertical-ish gradient — `#B0F1FF` (top) → `#D6F5FF` (bottom)
- **Back beam:** at **85% opacity** (so the overlap reads as depth)
- **Ink variant** (mark on light surfaces): both beams `#06181F`, back beam at 42% opacity
- Mono fallback: both beams one colour, the back beam at 55% opacity

### App-icon tile recipe (favicon / app icon)
- **Background:** radial gradient from `#15293A` (top, ~14% down) → `#060A0F` (bottom)
- **Beams:** the gradient mark above, centred
- **Edge:** 1.5px inner stroke at `rgba(255, 255, 255, 0.10)`
- Rounded-square tile, corner radius ≈ 28 on a 128 grid (~22%)

### Mark geometry (SVG, 64×64 viewBox)
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="beam" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0%" stop-color="#B0F1FF"/>
      <stop offset="100%" stop-color="#D6F5FF"/>
    </linearGradient>
  </defs>
  <rect x="14" y="5"  width="15"   height="52" rx="7.5"  transform="rotate(22 21.5 31)"  fill="url(#beam)"/>
  <rect x="34" y="15" width="14.5" height="42" rx="7.25" transform="rotate(-24 41.25 36)" fill="url(#beam)" opacity="0.85"/>
</svg>
```

---

## Typography
- **One family: Manrope** (Google Fonts, via `next/font`). Weights in use: 800 for headlines (tight, `letter-spacing: -0.04em`), 700 for buttons and labels, 600 for nav, 500 for body.
- Headline accents: a single word in ice `#7FE4FF`, never gradient text, never italics.
- Labels: 12px, weight 700, `letter-spacing: 0.14em`, uppercase, ice.
- Share card (`app/opengraph-image.tsx`) renders with the static TTFs in `assets/fonts/` (Manrope Medium 500 and ExtraBold 800).

---

## Gradients in use (for reference)
- **Hero aura glow:** `radial-gradient(rgba(127,228,255,0.10) → transparent)` layered over `radial-gradient(rgba(42,74,94,0.45) → transparent)`.
- **OG / share card:** background `radial-gradient(rgba(127,228,255,0.14) → transparent)` + `radial-gradient(rgba(42,74,94,0.50) → transparent)` on `#060A0F`.

_Note: `rgb(127, 228, 255)` == `#7FE4FF`; `rgb(241, 245, 242)` == `#F1F5F2`._
