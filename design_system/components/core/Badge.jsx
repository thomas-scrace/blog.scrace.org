import React from "react";

/**
 * Badge — a tiny status/marker label. Inline with headings or meta.
 * Tones map to the restrained semantic palette.
 */
export function Badge({ children, tone = "neutral", ...rest }) {
  const tones = {
    neutral: { color: "var(--text-muted)", border: "var(--border-hairline)", bg: "var(--surface-sunken)" },
    accent: { color: "var(--gilt-300)", border: "var(--gilt-500)", bg: "var(--accent-wash)" },
    warn: { color: "var(--terra-400)", border: "var(--terra-500)", bg: "rgba(192,106,78,0.12)" },
    quiet: { color: "var(--sage-400)", border: "var(--sage-500)", bg: "rgba(138,160,129,0.12)" },
  };
  const t = tones[tone] || tones.neutral;

  return (
    <span
      style={{
        fontFamily: "var(--font-meta)",
        fontSize: "var(--text-2xs)",
        fontWeight: 600,
        letterSpacing: "var(--tracking-wide)",
        textTransform: "uppercase",
        padding: "2px 8px",
        borderRadius: "var(--radius-sm)",
        border: `1px solid ${t.border}`,
        color: t.color,
        background: t.bg,
        display: "inline-flex",
        alignItems: "center",
        lineHeight: 1.4,
        ...rest.style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
