import React from "react";

/**
 * Divider — a section break. Plain hairline, or an ornamental
 * centered mark (asterism / fleuron) for literary section breaks.
 */
export function Divider({ ornament = false, symbol = "❧", style }) {
  if (ornament) {
    return (
      <div
        role="separator"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.1em",
          color: "var(--text-faint)",
          margin: "var(--space-7) 0",
          ...style,
        }}
      >
        <span style={{ height: 1, width: 48, background: "var(--border-hairline)" }} />
        <span style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-lg)", color: "var(--accent)", lineHeight: 1 }}>
          {symbol}
        </span>
        <span style={{ height: 1, width: 48, background: "var(--border-hairline)" }} />
      </div>
    );
  }

  return (
    <hr
      style={{
        border: 0,
        height: 1,
        background: "var(--border-hairline)",
        margin: "var(--space-6) 0",
        ...style,
      }}
    />
  );
}
