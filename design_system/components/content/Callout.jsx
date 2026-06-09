import React from "react";

/**
 * Callout — a quiet aside set apart from the prose: a note, an
 * epigraph, an editorial mark. Left gilt rule, raised surface.
 */
export function Callout({ children, label, tone = "note" }) {
  const tones = {
    note: "var(--gilt-500)",
    warn: "var(--terra-500)",
    quiet: "var(--sage-500)",
  };
  const rule = tones[tone] || tones.note;

  return (
    <aside
      style={{
        margin: "var(--space-6) 0",
        padding: "var(--space-4) var(--space-5)",
        background: "var(--surface-raised)",
        borderLeft: `2px solid ${rule}`,
        borderRadius: "0 var(--radius-md) var(--radius-md) 0",
        maxWidth: "var(--measure)",
      }}
    >
      {label && (
        <div
          style={{
            fontFamily: "var(--font-meta)",
            fontSize: "var(--text-2xs)",
            fontWeight: 600,
            letterSpacing: "var(--tracking-wider)",
            textTransform: "uppercase",
            color: "var(--text-faint)",
            marginBottom: "var(--space-2)",
          }}
        >
          {label}
        </div>
      )}
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--text-sm)",
          lineHeight: "var(--leading-relaxed)",
          color: "var(--text-muted)",
        }}
      >
        {children}
      </div>
    </aside>
  );
}
