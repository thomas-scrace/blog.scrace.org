// Lucide icon helper + masthead + footer for the blog UI kit.
const { useEffect } = React;

function Icon({ name, size = 18, color = "currentColor", stroke = 1.5, style }) {
  const ref = React.useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = "";
      const el = document.createElement("i");
      el.setAttribute("data-lucide", name);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: { width: size, height: size, "stroke-width": stroke, color },
        nameAttr: "data-lucide",
      });
    }
  }, [name, size, color, stroke]);
  return <span ref={ref} style={{ display: "inline-flex", alignItems: "center", ...style }} />;
}

function Masthead({ view, onNavigate }) {
  const links = [
    { id: "home", label: "Essays" },
    { id: "notebook", label: "Notebook" },
    { id: "reading", label: "Reading" },
    { id: "about", label: "About" },
  ];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 10,
      background: "color-mix(in srgb, var(--surface-page) 88%, transparent)",
      backdropFilter: "blur(6px)",
      borderBottom: "1px solid var(--border-hairline)",
    }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 var(--gutter-wide)", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }}
          style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-lg)", color: "var(--text-strong)", textDecoration: "none", letterSpacing: "var(--tracking-tight)", display: "flex", alignItems: "baseline", gap: "0.5em" }}>
          <span style={{ fontStyle: "italic" }}>Thomas Scrace</span>
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: "var(--space-5)" }}>
          {links.map((l) => {
            const active = (view === "article" && l.id === "home") || view === l.id;
            return (
              <a key={l.id} href="#" onClick={(e) => { e.preventDefault(); onNavigate(l.id); }}
                style={{
                  fontFamily: "var(--font-meta)", fontSize: "var(--text-2xs)", fontWeight: 600,
                  letterSpacing: "var(--tracking-wider)", textTransform: "uppercase",
                  color: active ? "var(--accent)" : "var(--text-faint)", textDecoration: "none",
                  transition: "color var(--duration) var(--ease-standard)",
                }}
                onMouseEnter={(e) => { if (!active) e.target.style.color = "var(--text-muted)"; }}
                onMouseLeave={(e) => { if (!active) e.target.style.color = "var(--text-faint)"; }}>
                {l.label}
              </a>
            );
          })}
          <span style={{ width: 1, height: 18, background: "var(--border-hairline)" }} />
          <a href="#" onClick={(e) => e.preventDefault()} title="Search" style={{ color: "var(--text-faint)", display: "inline-flex" }}><Icon name="search" /></a>
          <a href="#" onClick={(e) => e.preventDefault()} title="RSS" style={{ color: "var(--text-faint)", display: "inline-flex" }}><Icon name="rss" /></a>
        </nav>
      </div>
    </header>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer style={{ borderTop: "1px solid var(--border-hairline)", marginTop: "var(--space-10)" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "var(--space-7) var(--gutter-wide)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "var(--space-4)" }}>
        <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "var(--text-base)", color: "var(--text-muted)" }}>
          Thomas Scrace
          <span style={{ fontFamily: "var(--font-meta)", fontStyle: "normal", fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--text-faint)", marginLeft: "1em" }}>
            Written &amp; set in Georgia, by lamplight.
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-5)" }}>
          {["RSS", "Email", "Index"].map((l) => (
            <a key={l} href="#" onClick={(e) => { e.preventDefault(); if (l === "Index") onNavigate("home"); }}
              style={{ fontFamily: "var(--font-meta)", fontSize: "var(--text-2xs)", fontWeight: 600, letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--text-faint)", textDecoration: "none" }}>{l}</a>
          ))}
          <span style={{ fontFamily: "var(--font-meta)", fontSize: "var(--text-2xs)", letterSpacing: "var(--tracking-wide)", color: "var(--parchment-500)" }}>© 2026</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Icon, Masthead, Footer });
