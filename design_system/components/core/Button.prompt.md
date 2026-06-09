A serif-labelled action button — gilt primary, outlined secondary, quiet ghost. Use for the rare deliberate action on a reading-first site (subscribe, send, read more).

```jsx
<Button variant="primary" size="md" onClick={subscribe}>Subscribe</Button>
<Button variant="secondary" href="/archive">The archive</Button>
<Button variant="ghost">Dismiss</Button>
```

Variants: `primary` (gilt fill), `secondary` (outline), `ghost` (text-only, gilt). Sizes: `sm` / `md` / `lg`. Pass `href` to render an anchor. Interaction is a calm color shift — no scale, no bounce.
