// Kit atoms — token-driven mirrors of the system primitives, used by the
// blog UI kit so it renders standalone. Visuals match components/* exactly.
const { useState } = React;

function Button({ children, variant = "primary", size = "md", onClick, href }) {
  const [h, setH] = useState(false);
  const [a, setA] = useState(false);
  const sizes = {
    sm: { padding: "6px 14px", fontSize: "var(--text-sm)" },
    md: { padding: "9px 20px", fontSize: "var(--text-base)" },
    lg: { padding: "13px 28px", fontSize: "var(--text-md)" },
  };
  const pal = {
    primary: { base: { background: "var(--gilt-400)", color: "var(--ink-900)", border: "1px solid var(--gilt-400)" }, hover: { background: "var(--gilt-300)", borderColor: "var(--gilt-300)" }, active: { background: "var(--gilt-500)" } },
    secondary: { base: { background: "transparent", color: "var(--text-body)", border: "1px solid var(--border-strong)" }, hover: { background: "var(--surface-hover)", borderColor: "var(--parchment-500)" }, active: { background: "var(--surface-sunken)" } },
    ghost: { base: { background: "transparent", color: "var(--accent)", border: "1px solid transparent" }, hover: { background: "var(--accent-wash)" }, active: { background: "var(--surface-sunken)" } },
  }[variant];
  const style = {
    fontFamily: "var(--font-serif)", lineHeight: 1, borderRadius: "var(--radius-md)",
    cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.5em",
    textDecoration: "none", whiteSpace: "nowrap",
    transition: "background var(--duration) var(--ease-standard), border-color var(--duration) var(--ease-standard), color var(--duration) var(--ease-standard)",
    ...sizes[size], ...pal.base, ...(h ? pal.hover : null), ...(a ? pal.active : null),
  };
  const Comp = href ? "a" : "button";
  return (
    <Comp href={href} onClick={onClick} style={style}
      onMouseEnter={() => setH(true)} onMouseLeave={() => { setH(false); setA(false); }}
      onMouseDown={() => setA(true)} onMouseUp={() => setA(false)}>
      {children}
    </Comp>
  );
}

function Tag({ children, active = false, onClick }) {
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        fontFamily: "var(--font-meta)", fontSize: "var(--text-2xs)", fontWeight: 600,
        letterSpacing: "var(--tracking-wide)", textTransform: "uppercase",
        padding: "4px 11px", borderRadius: "var(--radius-pill)", border: "1px solid",
        cursor: "pointer",
        transition: "background var(--duration) var(--ease-standard), border-color var(--duration) var(--ease-standard), color var(--duration) var(--ease-standard)",
        color: active ? "var(--ink-900)" : "var(--text-muted)",
        background: active ? "var(--gilt-400)" : h ? "var(--accent-wash)" : "transparent",
        borderColor: active ? "var(--gilt-400)" : h ? "var(--gilt-500)" : "var(--border-hairline)",
      }}>
      {children}
    </button>
  );
}

function Avatar({ initials, size = 44, ring = true }) {
  const dim = typeof size === "number" ? size + "px" : size;
  return (
    <span style={{
      width: dim, height: dim, borderRadius: "var(--radius-pill)", flex: "none",
      boxShadow: ring ? "0 0 0 1px var(--gilt-500)" : "none",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      background: "var(--surface-raised)", color: "var(--accent)",
      fontFamily: "var(--font-serif)", fontSize: `calc(${dim} * 0.42)`, lineHeight: 1, userSelect: "none",
    }}>{initials}</span>
  );
}

function Divider({ ornament = false, symbol = "\u2767", style }) {
  if (!ornament) return <hr style={{ border: 0, height: 1, background: "var(--border-hairline)", margin: "var(--space-6) 0", ...style }} />;
  return (
    <div role="separator" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.1em", color: "var(--text-faint)", margin: "var(--space-8) 0", ...style }}>
      <span style={{ height: 1, width: 48, background: "var(--border-hairline)" }} />
      <span style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-lg)", color: "var(--accent)", lineHeight: 1 }}>{symbol}</span>
      <span style={{ height: 1, width: 48, background: "var(--border-hairline)" }} />
    </div>
  );
}

function Eyebrow({ items }) {
  return (
    <div style={{ fontFamily: "var(--font-meta)", fontSize: "var(--text-2xs)", fontWeight: 600, letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--text-faint)", display: "flex", gap: "0.9em", alignItems: "center" }}>
      {items.map((it, i) => (
        <span key={i} style={{ color: i === 0 && it.accent ? "var(--accent)" : "inherit" }}>{i > 0 ? "\u00b7 " : ""}{it.label}</span>
      ))}
    </div>
  );
}

function ArticleCard({ post, onOpen }) {
  const [h, setH] = useState(false);
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); onOpen && onOpen(post); }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: "block", textDecoration: "none", padding: "var(--space-5) 0", borderBottom: "1px solid var(--border-hairline)" }}>
      <div style={{ fontFamily: "var(--font-meta)", fontSize: "var(--text-2xs)", fontWeight: 600, letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--text-faint)", display: "flex", gap: "0.9em", marginBottom: "var(--space-3)" }}>
        <span style={{ color: "var(--accent)" }}>{post.kicker}</span>
        <span>{post.date}</span>
        <span>{"\u00b7 " + post.readingTime}</span>
      </div>
      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", lineHeight: "var(--leading-snug)", letterSpacing: "var(--tracking-tight)", fontWeight: 400, color: h ? "var(--accent)" : "var(--text-strong)", transition: "color var(--duration) var(--ease-standard)", margin: 0, textWrap: "balance" }}>{post.title}</h3>
      <p style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-base)", lineHeight: "var(--leading-relaxed)", color: "var(--text-muted)", margin: "var(--space-3) 0 0", maxWidth: "var(--measure)", textWrap: "pretty" }}>{post.standfirst}</p>
      <div style={{ display: "flex", gap: "0.6em", marginTop: "var(--space-4)" }}>
        {post.tags.map((t) => (
          <span key={t} style={{ fontFamily: "var(--font-meta)", fontSize: "var(--text-2xs)", fontWeight: 600, letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--text-faint)" }}>{t}</span>
        ))}
      </div>
    </a>
  );
}

function Pullquote({ children, cite }) {
  return (
    <figure style={{ margin: "var(--space-8) 0", maxWidth: "var(--measure-wide)" }}>
      <blockquote style={{ margin: 0, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "var(--text-xl)", lineHeight: "var(--leading-snug)", letterSpacing: "var(--tracking-tight)", color: "var(--text-strong)", textWrap: "balance" }}>
        <span aria-hidden="true" style={{ color: "var(--accent)", fontSize: "1.1em", marginRight: "0.06em" }}>{"\u201c"}</span>
        {children}
        <span aria-hidden="true" style={{ color: "var(--accent)" }}>{"\u201d"}</span>
      </blockquote>
      {cite && <figcaption style={{ fontFamily: "var(--font-meta)", fontSize: "var(--text-2xs)", fontWeight: 600, letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--text-faint)", marginTop: "var(--space-4)" }}>{cite}</figcaption>}
    </figure>
  );
}

function Callout({ children, label }) {
  return (
    <aside style={{ margin: "var(--space-6) 0", padding: "var(--space-4) var(--space-5)", background: "var(--surface-raised)", borderLeft: "2px solid var(--gilt-500)", borderRadius: "0 var(--radius-md) var(--radius-md) 0", maxWidth: "var(--measure)" }}>
      {label && <div style={{ fontFamily: "var(--font-meta)", fontSize: "var(--text-2xs)", fontWeight: 600, letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: "var(--space-2)" }}>{label}</div>}
      <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--text-muted)" }}>{children}</div>
    </aside>
  );
}

Object.assign(window, { Button, Tag, Avatar, Divider, Eyebrow, ArticleCard, Pullquote, Callout });
