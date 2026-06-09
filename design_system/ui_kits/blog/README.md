# Blog UI kit — Thomas Scrace

A high-fidelity, click-through recreation of the blog itself: the product this
design system exists to serve. Open `index.html` and move between the three
surfaces.

## Surfaces

- **Home / index** (`Home.jsx`) — a short intro line, the latest essay shown
  large (eyebrow meta → display title → standfirst → "read the essay"), a tag
  filter row, and the post list as hairline-separated rows.
- **Reading view** (`Article.jsx`) — the centerpiece. Back link, eyebrow meta,
  large serif title + standfirst, a byline with monogram avatar, then the
  `.prose` body with drop-cap, section headings, a pullquote, a callout, and an
  ornamental divider. Ends with tags and a "read next" list.
- **About** (`About.jsx`) — monogram, lead paragraph, short bio, ornamental
  break, and two actions (write / subscribe).
- **Chrome** (`Chrome.jsx`) — the sticky masthead (wordmark + sans nav +
  search/RSS icons) and the hairline footer, plus the `Icon` Lucide helper.

`App.jsx` is a tiny client-side router (home / article / about); `data.js` holds
the sample posts and the featured essay body.

## How it relates to the components

The kit's atoms in `atoms.jsx` (`Button`, `Tag`, `Avatar`, `Divider`,
`ArticleCard`, `Pullquote`, `Callout`, `Eyebrow`) are **token-driven mirrors of
the system primitives** in `components/`. They are inlined here, rather than
imported from the compiled bundle, so the kit renders standalone in any preview
(the generated `_ds_bundle.js` is only served inside the Design System tab). The
visuals and props match the real primitives 1:1 — when wiring this into
production, swap the local atoms for `window.ThomasScraceDesignSystem_b4656d`.

## Iconography

Functional icons use **Lucide** (CDN, 1.5px stroke) — `search`, `rss`,
`arrow-up-right`, `arrow-left`, `mail`. Ornaments (the fleuron divider, quote
marks) are typographic Unicode glyphs set in gilt. No emoji.

## Files

| File | Role |
| --- | --- |
| `index.html` | Mounts everything; the `@dsCard` + `@startingPoint` entry. |
| `data.js` | Sample posts + featured essay body. |
| `atoms.jsx` | Local mirrors of the system primitives. |
| `Chrome.jsx` | `Icon`, `Masthead`, `Footer`. |
| `Home.jsx` / `Article.jsx` / `About.jsx` | The three views. |
| `App.jsx` | Router + mount. |
