import React from "react";

/**
 * ArticleCard — a post preview for index/archive lists. Eyebrow
 * meta, serif title, standfirst, and a tag row. Hover lifts the
 * title to gilt; no card chrome by default (list-like), optional
 * bordered surface.
 */
export function ArticleCard({
  title,
  href = "#",
  standfirst,
  date,
  readingTime,
  kicker,
  tags = [],
  bordered = false,
}) {
  const [hover, setHover] = React.useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "block",
        textDecoration: "none",
        padding: bordered ? "var(--space-5)" : "var(--space-5) 0",
        borderRadius: bordered ? "var(--radius-lg)" : 0,
        border: bordered ? "1px solid var(--border-hairline)" : "none",
        background: bordered && hover ? "var(--surface-raised)" : "transparent",
        borderBottom: bordered ? undefined : "1px solid var(--border-hairline)",
        transition: "background var(--duration) var(--ease-standard)",
      }}
    >
      {(kicker || date || readingTime) && (
        <div
          style={{
            fontFamily: "var(--font-meta)",
            fontSize: "var(--text-2xs)",
            fontWeight: 600,
            letterSpacing: "var(--tracking-wider)",
            textTransform: "uppercase",
            color: "var(--text-faint)",
            display: "flex",
            gap: "0.9em",
            alignItems: "center",
            marginBottom: "var(--space-3)",
          }}
        >
          {kicker && <span style={{ color: "var(--accent)" }}>{kicker}</span>}
          {date && <span>{date}</span>}
          {readingTime && <span>· {readingTime}</span>}
        </div>
      )}

      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--text-xl)",
          lineHeight: "var(--leading-snug)",
          letterSpacing: "var(--tracking-tight)",
          fontWeight: "var(--weight-regular)",
          color: hover ? "var(--accent)" : "var(--text-strong)",
          transition: "color var(--duration) var(--ease-standard)",
          margin: 0,
          textWrap: "balance",
        }}
      >
        {title}
      </h3>

      {standfirst && (
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-base)",
            lineHeight: "var(--leading-relaxed)",
            color: "var(--text-muted)",
            margin: "var(--space-3) 0 0",
            maxWidth: "var(--measure)",
            textWrap: "pretty",
          }}
        >
          {standfirst}
        </p>
      )}

      {tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5em", marginTop: "var(--space-4)" }}>
          {tags.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--font-meta)",
                fontSize: "var(--text-2xs)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-wide)",
                textTransform: "uppercase",
                color: "var(--text-faint)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
