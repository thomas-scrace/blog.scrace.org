# blog.scrace.org

A fast, attractive, **zero-JavaScript** static blog for Thomas Scrace, built with
[Hugo](https://gohugo.io) and a small custom theme. Content is Markdown in this
repository; it compiles to static HTML + one small CSS file and deploys to
Cloudflare on every push to `master`.

No CMS, no database, no runtime rendering, no JavaScript — none. The site works
with JavaScript disabled because there is no JavaScript to disable.

The look and feel — *ink & parchment*, a warm-dark Georgia reading site with a
single gilt accent — comes from the design system in [`design_system/`](design_system/),
which this theme implements faithfully. (It also ships a tasteful warm-paper
**light mode** via `prefers-color-scheme`, CSS-only.)

---

## Requirements

- **Hugo extended `0.158.0`** (pinned). Install with `brew install hugo`, or grab
  the matching release from <https://github.com/gohugoio/hugo/releases>.
  - The version is pinned in CI (`.github/workflows/deploy.yml`, `HUGO_VERSION`).
    Keep your local version in step with it so local output matches production.

```sh
hugo version   # expect: hugo v0.158.0+extended ...
```

---

## Run locally

```sh
hugo server -D          # live reload, includes drafts; visit http://localhost:1313
```

Drop `-D` to preview exactly what will publish (drafts hidden).

---

## Add a post

Posts follow the house style in [`writing_style.md`](writing_style.md).

```sh
hugo new posts/my-post-title.md
```

This scaffolds a file from [`archetypes/default.md`](archetypes/default.md). The
filename becomes the URL: `posts/my-post-title.md` → `/posts/my-post-title/`.

Front matter:

```yaml
---
title: "Post title in sentence case"
date: 2026-06-09
description: "A one- or two-sentence standfirst — shown on the home page, in the
  feed, and as the search/social preview."
kicker: "Essay"          # eyebrow label: "Essay" or "Notebook" (default: Essay)
tags: ["essays", "reading"]
draft: false             # flip to false to publish
# Optional:
# updated: 2026-06-10     # last-modified date
# canonicalUrl: "https://example.com/original"
# image: "/some-image.png"  # Open Graph / social preview image
# dropcap: true           # gilt drop-cap on the opening paragraph
# featured: true          # pin as the large "Latest" essay on the home page
---

Write the essay here.
```

**Required fields:** `title`, `date`, `description`, `draft`.
**Optional:** `tags`, `kicker`, `canonicalUrl`, `updated`, `image`, `dropcap`,
`featured`.

### Rich prose blocks (no raw HTML needed)

The theme ships three shortcodes that match the design system. Raw HTML in
Markdown is intentionally disabled, so use these:

```md
{{</* pullquote cite="Marilynne Robinson" */>}}The only thing required of a reader is attention.{{</* /pullquote */>}}

{{</* callout label="Note" */>}}A small aside, set off with a gilt rule.{{</* /callout */>}}

{{</* divider */>}}            <!-- ornamental fleuron section break; pass a glyph to override, e.g. {{</* divider "⁂" */>}} -->

{{</* lead */>}}A standfirst / lead paragraph inside prose.{{</* /lead */>}}
```

Images in Markdown are automatically lazy-loaded and (for
[page-bundle](https://gohugo.io/content-management/page-bundles/) images) given
real `width`/`height` to avoid layout shift.

---

## Build for production

```sh
hugo --gc --minify        # output goes to ./public
```

`--gc` cleans unused cache; `--minify` minifies HTML/CSS/XML. The single
stylesheet is fingerprinted (cache-busting) and stays **under 15 KiB minified
(~15.0 KB), ~4 KB gzipped** — even with the design system, light/dark theme,
and rich table + code styling.

---

## Verify the output contains no JavaScript

```sh
hugo --gc --minify
bash scripts/check-no-js.sh        # checks ./public (pass a path to override)
```

The script fails the build if it finds **any** of:

- `.js` / `.mjs` / `.cjs` / `.jsx` / `.ts` files,
- `<script>` tags in HTML or XML,
- inline event handlers (`onclick=`, `onload=`, …),
- `javascript:` URLs.

CI runs this between the build and the deploy, so nothing with JavaScript in it
can ever reach production.

---

## How deployment works

A push to `master` (i.e. **merging a pull request into `master`**) triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. Install the pinned Hugo extended version.
2. `hugo --gc --minify`.
3. `bash scripts/check-no-js.sh` — the zero-JavaScript gate.
4. **Deploy to Cloudflare** with Wrangler (`wrangler deploy`, reading
   [`wrangler.toml`](wrangler.toml) — Cloudflare Workers Static Assets serving
   `./public`).

Pull requests run steps 1–3 (build + verify) as a gate, but **do not deploy**.

### One-time setup

1. Create a GitHub repo and push this code; make `master` the default branch.
2. In Cloudflare, create an **API token** with permission to edit Workers, and
   note your **Account ID**.
3. In the GitHub repo, add two **Actions secrets**:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
4. Adjust [`wrangler.toml`](wrangler.toml) if you want a different Worker `name`.
5. Push to `master`. The first run creates the Worker and deploys it; add your
   custom domain (`blog.scrace.org`) to the Worker in the Cloudflare dashboard.
6. Change `baseURL` in [`hugo.toml`](hugo.toml) and the `--baseURL` in the
   workflow if the domain differs. `params.email` (the "Write to me" and
   footer Email links) is set in `hugo.toml`.

### Alternative: Cloudflare Pages

Prefer Pages? Two options:

- **Pages + Git integration (no Actions):** connect the repo in the Cloudflare
  dashboard with build command `hugo --gc --minify && bash scripts/check-no-js.sh`,
  output directory `public`, and environment variable `HUGO_VERSION=0.158.0`.
  The build (and therefore the deploy) fails if JavaScript is found.
- **Pages via this workflow:** swap the deploy step's `command:` to
  `pages deploy public --project-name=<your-project>`.

---

## Project structure

```
content/            Markdown — posts live in content/posts/
  _index.md         home-page intro
  about.md          about page
  posts/            essays & notebook entries
assets/css/main.css the single, hand-maintained stylesheet
layouts/            the custom theme (templates, partials, shortcodes)
  _default/         baseof, single (article), list (archive), taxonomy, term, about
  partials/         head, masthead, footer, icon (inline SVG), post-card, …
  shortcodes/       pullquote, callout, divider, lead
  404.html          not-found page
static/favicon.svg  the gilt monogram favicon
archetypes/         front-matter template for `hugo new`
scripts/            check-no-js.sh — the zero-JavaScript gate
design_system/      the source design system this theme implements (reference)
hugo.toml           site configuration
wrangler.toml       Cloudflare Workers Static Assets config
.github/workflows/  build → verify → deploy
```

## What's included (v1)

Home, post pages, posts archive (`/posts/`), tag pages (`/tags/<tag>/`), a tag
index (`/tags/`), an about page, RSS (`/index.xml`, full content), sitemap,
`robots.txt`, a 404 page, Open Graph / Twitter metadata, canonical URLs, and
CSS-only light/dark mode. No search, comments, analytics, embeds, or toggles —
by design, because none can be done without JavaScript.
