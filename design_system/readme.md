# Thomas Scrace — Design System

A design system for the personal blog of **Thomas Scrace**: a place for essays,
notes, and reading. The brief is singular and clear — it should be *a delight to
read*. Everything here serves that: a calm warm-dark page, a classical serif
voice, generous measure and leading, and a single restrained gilt accent.

> **Aesthetic in one line:** *ink & parchment* — a leather-bound book read by
> lamplight. Warm near-black ground, parchment-cream type, gilt-edged accents.

This system is built from a written brief, not an existing codebase or Figma
file. There were **no external sources** to reverse-engineer — the brief was:
> *"Classical, literary, beautiful feel. Dark mode. Using only web-safe system
> installed fonts (no web fonts). Georgia likely. Simple static website that
> should be a delight to read."*

If a codebase or Figma is added later, record the links here so future readers
can find the source of truth.

---

## Sources

| Source | Link / path | Notes |
| --- | --- | --- |
| Written brief | *(in-conversation)* | The complete spec; see quote above. |
| Codebase | — | None provided. |
| Figma | — | None provided. |

---

## Content fundamentals

How the blog writes, regardless of the visual layer.

- **Voice & person.** First person, essayistic. "I" speaks; "you" is addressed
  rarely and warmly. The narrator is a reader and a writer, thinking aloud — not
  a brand, never a "we." Confiding, unhurried, literate without being showy.
- **Tone.** Calm, considered, a little wry. Sentences are allowed to be long and
  to turn. It values precision and the right word over the easy one. Warmth over
  authority. It would rather under-claim than over-sell.
- **Casing.** Sentence case everywhere in prose and headings — titles read like
  the first line of a thought ("On stillness & attention"), not Marketing Title
  Case. The **only** uppercase is the small tracked sans used for eyebrows, dates,
  and tags (e.g. `ESSAYS · 9 JUNE 2026`). Use the real ampersand (&) and en/em
  dashes (–, —); curly quotes (" ") always.
- **Punctuation & typography.** Oxford comma. Em dash for the aside — like this.
  Spaced en dash as an alternative. Footnotes and asides are welcome. Ligatures
  and old-style (text) numerals are on by default.
- **Length.** Posts run long-form; the homepage shows standfirsts (deks), not
  truncated body text. A standfirst is one or two real sentences that say what
  the piece is *about*, not a teaser ("Read more…" is never used).
- **Emoji.** **None.** Never. The "icon" vocabulary is typographic — fleurons,
  asterisks, arrows (see Iconography).
- **Examples.**
  - Title: *On stillness & attention*
  - Standfirst: *What we lose when we never let a thought finish — and the quiet
    discipline of reading something all the way through.*
  - Eyebrow: `ESSAY · 9 JUNE 2026 · 7 MIN`
  - Tag: `essays`, `reading`, `notebook` (lowercase, one word where possible)

---

## Visual foundations

- **Palette — "ink & parchment."** A warm near-black ground (`--ink-900` #14120F)
  with surfaces stepping up in warmth, not brightness. Type is parchment-cream
  (`--parchment-200` #E7DECB) — never pure white, which would feel clinical on
  this warm ground. A single accent does all the lifting: **gilt** gold
  (`--gilt-400` #CBA968) for links, emphasis, focus rings, and ornaments.
  Terracotta and sage exist only for rare semantic marks (draft, warning,
  success). Restraint is the rule — one accent, used like gold leaf.
- **Type.** Serif carries everything that is *read* — Georgia first
  (`--font-serif`), with Book Antiqua and Times New Roman as web-safe fallbacks.
  Body is **19px / 1.72 leading** at a **~66-character measure** (`--measure`).
  A quiet humanist **sans** (`--font-sans`) appears *only* as small tracked
  uppercase labels (eyebrows, dates, tags). Mono (`--font-mono`) for code and
  figures. No web fonts are loaded — by design. Display headings are large
  Georgia with tight tracking; italics are used for emphasis and pullquotes.
- **Backgrounds.** No photography-led layouts, no hand illustration, no repeating
  pattern. The page is near-flat warm ink with **one** very faint warm vignette
  glow from the top (`radial-gradient` in `tokens/base.css`) — barely
  perceptible, like lamplight. No loud gradients, ever. Optional ~1% paper-grain
  token (`--texture-paper`) exists but is used sparingly or not at all.
- **Animation.** Slow and literary. Color and opacity **fades** only
  (`--duration` 220ms, `--ease-standard`). **Nothing bounces. Nothing scales on
  hover.** Entrances, if any, are gentle fades. Respect
  `prefers-reduced-motion` (handled globally in base.css).
- **Hover states.** Links warm from gilt to brighter gilt (`--gilt-300`) and the
  underline brightens. Buttons shift fill color (no lift, no shadow change).
  Article titles in lists warm to gilt. Surfaces (bordered cards) fill from
  transparent to `--surface-raised`.
- **Press states.** A *deeper* color, never a transform. Primary buttons go to
  `--gilt-500`; secondary/ghost go to `--surface-sunken`. No shrink, no bounce.
- **Borders.** Hairlines are the primary structural device — 1px
  `--border-hairline` (#3A342B) divides list rows, footers, and sections. The
  gilt rule (`--rule-accent`) marks quotes and callouts (a 2px left border).
  Ornamental section breaks use a centered fleuron, not a line.
- **Shadows.** Deep, soft, low-opacity — tuned for dark surfaces
  (`--shadow-md`: `0 4px 14px rgba(0,0,0,.45)`). Used sparingly, mostly on
  floating UI (dialogs, the few raised cards). Most surfaces sit flat and are
  separated by hairlines instead. A faint inner top-highlight
  (`--shadow-inset`) suggests a lit edge.
- **Transparency & blur.** Minimal. The accent wash (`--gilt-glow`, ~16% gilt)
  tints ghost-button and active-tag hovers. No glassmorphism, no heavy blur —
  it would fight the paper metaphor.
- **Corner radii.** Modest and paper-like: 2–7px for most things
  (`--radius-md` 7px is the default), 12px for large cards, full pill only for
  tags. Nothing is sharply rectangular, nothing is bubbly.
- **Cards.** Mostly *not* card-shaped. The default list item is a row with a
  bottom hairline — no box, no shadow. When a true card is needed (a featured
  post), it gets a 1px hairline border, 12px radius, no shadow at rest, and a
  quiet surface-fill on hover. Reach for hairlines before boxes.
- **Layout rules.** A single centered reading column governed by `--measure`
  (~34rem) / `--measure-wide` (~44rem). Generous outer gutters. A fixed, quiet
  masthead is acceptable; footers are hairline-separated. Whitespace is the
  primary layout tool — let things breathe.
- **Imagery vibe.** If photography is used, it should read **warm and low-key** —
  muted, slightly desaturated, at home on the ink ground (think aged paper,
  lamplight, monochrome or sepia-leaning). Avoid bright, cool, high-saturation
  imagery. The blog is, by default, nearly imageless — words first.

---

## Iconography

This brand's icon vocabulary is **typographic first**. The classical, words-first
character means most "icons" are Unicode glyphs set in the serif or sans, not
drawn marks:

- **Ornaments / section breaks:** the fleuron `❧` (default in `Divider`), the
  asterism `⁂`, a star `✦`. Set in gilt.
- **Inline marks:** arrows `→ ↗ ←`, the middot `·` as a meta separator, the
  pilcrow `¶`, the section sign `§`, the dagger `†` for footnotes.
- **Quotation marks:** real curly quotes `" "` set in gilt for pullquotes.
- **Emoji:** never used.

For the handful of genuinely *functional* UI affordances a blog needs — RSS,
search, "menu", a moon for theme, a copy-link — use **[Lucide](https://lucide.dev)**
from CDN. Lucide's thin **1.5px stroke, rounded** style matches the system's
restraint and its hairline borders. It is loaded in the UI kit via:

```html
<script src="https://unpkg.com/lucide@latest"></script>
```

**Substitution flag:** No icon set was provided in the brief, so Lucide is a
*chosen substitute*, picked for its thin, quiet stroke. If you have a preferred
icon set (or want icons dropped entirely in favor of typographic marks), say so
and it will be swapped. There is **no** custom icon font or SVG sprite in this
system — by design.

---

## Index — what's in this system

Root:
- **`styles.css`** — the global entry point. Consumers link this one file. It is
  `@import` lines only.
- **`readme.md`** — this guide.
- **`SKILL.md`** — portable Agent-Skill wrapper (for use in Claude Code etc.).

Tokens (`tokens/`, all reached from `styles.css`):
- `fonts.css` — serif / sans / mono stacks (web-safe only, no `@font-face`).
- `colors.css` — ink, parchment, gilt, terracotta, sage + semantic aliases.
- `typography.css` — type scale, leading, tracking, measure.
- `spacing.css` — 4px-based spacing + prose flow rhythm.
- `effects.css` — radii, borders, shadows, motion easings/durations.
- `base.css` — element defaults (the warm page, serif body, focus ring).
- `prose.css` — the `.prose` long-form reading block (drop-cap, lead, quotes…).

Components (`components/`):
- **`core/`** — `Button`, `Tag`, `Badge`, `Divider` (incl. ornamental), `Avatar`.
- **`content/`** — `ArticleCard`, `Pullquote`, `Callout`.
- Each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`; each directory has a
  `*.card.html` specimen. `Button` and `ArticleCard` are also **starting points**.

Foundation cards (`guidelines/cards/`) — the specimens shown in the Design System
tab: color (ink, parchment, gilt, secondary), type (display, body, meta/mono,
scale), spacing (scale, radii, elevation).

UI kit (`ui_kits/blog/`) — a click-through recreation of the blog itself:
the index/home, a reading view (article), and an about page. See its README.

---

## Using the system

- **Namespace** (for `@dsCard` HTML / consumers): `window.ThomasScraceDesignSystem_b4656d`.
- Link `styles.css`; everything is driven by CSS custom properties — prefer the
  semantic aliases (`--text-body`, `--surface-card`, `--accent`) over base values.
- Reach for hairlines before boxes, one accent before many, typographic marks
  before drawn icons, and air before chrome. When in doubt: *make it easier to
  read.*
