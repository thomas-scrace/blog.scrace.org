import React from "react";

/**
 * Avatar — the author's portrait or monogram. Subtle gilt ring.
 * Falls back to serif initials on the raised surface.
 */
export function Avatar({ src, alt = "", initials, size = 44, ring = true }) {
  const dim = typeof size === "number" ? `${size}px` : size;
  const common = {
    width: dim,
    height: dim,
    borderRadius: "var(--radius-pill)",
    flex: "none",
    boxShadow: ring ? "0 0 0 1px var(--gilt-500)" : "none",
    objectFit: "cover",
    display: "block",
  };

  if (src) {
    return <img src={src} alt={alt} style={common} />;
  }

  return (
    <span
      aria-label={alt || initials}
      style={{
        ...common,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--surface-raised)",
        color: "var(--accent)",
        fontFamily: "var(--font-serif)",
        fontSize: `calc(${dim} * 0.42)`,
        lineHeight: 1,
        userSelect: "none",
      }}
    >
      {initials}
    </span>
  );
}
