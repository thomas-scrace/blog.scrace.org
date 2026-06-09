import React from "react";

/**
 * Pullquote — a large serif quotation lifted from the prose.
 * Italic, generous, with an optional attribution. Gilt opening mark.
 */
export function Pullquote({ children, cite, align = "left" }) {
  return (
    <figure
      style={{
        margin: "var(--space-8) 0",
        textAlign: align,
        maxWidth: "var(--measure-wide)",
      }}
    >
      <blockquote
        style={{
          margin: 0,
          position: "relative",
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: "var(--text-xl)",
          lineHeight: "var(--leading-snug)",
          letterSpacing: "var(--tracking-tight)",
          color: "var(--text-strong)",
          textWrap: "balance",
        }}
      >
        <span
          aria-hidden="true"
          style={{
            color: "var(--accent)",
            fontSize: "1.1em",
            marginRight: "0.08em",
          }}
        >
          “
        </span>
        {children}
        <span aria-hidden="true" style={{ color: "var(--accent)" }}>
          ”
        </span>
      </blockquote>
      {cite && (
        <figcaption
          style={{
            fontFamily: "var(--font-meta)",
            fontSize: "var(--text-2xs)",
            fontWeight: 600,
            letterSpacing: "var(--tracking-wider)",
            textTransform: "uppercase",
            color: "var(--text-faint)",
            marginTop: "var(--space-4)",
          }}
        >
          {cite}
        </figcaption>
      )}
    </figure>
  );
}
