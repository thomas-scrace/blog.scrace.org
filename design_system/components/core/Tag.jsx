import React from "react";

/**
 * Tag — a small topic label for posts. Sans micro-type, tracked,
 * lowercase by convention. Quiet by default; gilt when active.
 */
export function Tag({ children, active = false, href, onClick, ...rest }) {
  const [hover, setHover] = React.useState(false);

  const style = {
    fontFamily: "var(--font-meta)",
    fontSize: "var(--text-2xs)",
    fontWeight: 600,
    letterSpacing: "var(--tracking-wide)",
    textTransform: "uppercase",
    padding: "4px 10px",
    borderRadius: "var(--radius-pill)",
    border: "1px solid",
    cursor: href || onClick ? "pointer" : "default",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    transition:
      "background var(--duration) var(--ease-standard), border-color var(--duration) var(--ease-standard), color var(--duration) var(--ease-standard)",
    color: active ? "var(--ink-900)" : "var(--text-muted)",
    background: active
      ? "var(--gilt-400)"
      : hover
      ? "var(--accent-wash)"
      : "transparent",
    borderColor: active
      ? "var(--gilt-400)"
      : hover
      ? "var(--gilt-500)"
      : "var(--border-hairline)",
  };

  const Comp = href ? "a" : onClick ? "button" : "span";

  return (
    <Comp
      href={href}
      onClick={onClick}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
    </Comp>
  );
}
