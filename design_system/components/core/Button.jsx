import React from "react";

/**
 * Button — the brand's primary action control.
 * Serif label, modest radius, gilt fill for primary. No bounce; a
 * calm color/opacity shift on interaction.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  href,
  onClick,
  type = "button",
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const sizes = {
    sm: { padding: "6px 14px", fontSize: "var(--text-sm)" },
    md: { padding: "9px 20px", fontSize: "var(--text-base)" },
    lg: { padding: "13px 28px", fontSize: "var(--text-md)" },
  };

  const palette = {
    primary: {
      base: { background: "var(--gilt-400)", color: "var(--ink-900)", border: "1px solid var(--gilt-400)" },
      hover: { background: "var(--gilt-300)", borderColor: "var(--gilt-300)" },
      active: { background: "var(--gilt-500)", borderColor: "var(--gilt-500)" },
    },
    secondary: {
      base: { background: "transparent", color: "var(--text-body)", border: "1px solid var(--border-strong)" },
      hover: { background: "var(--surface-hover)", borderColor: "var(--parchment-500)" },
      active: { background: "var(--surface-sunken)" },
    },
    ghost: {
      base: { background: "transparent", color: "var(--accent)", border: "1px solid transparent" },
      hover: { background: "var(--accent-wash)" },
      active: { background: "var(--surface-sunken)" },
    },
  };

  const p = palette[variant] || palette.primary;

  const style = {
    fontFamily: "var(--font-serif)",
    fontWeight: "var(--weight-regular)",
    lineHeight: 1,
    letterSpacing: "0.005em",
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition:
      "background var(--duration) var(--ease-standard), border-color var(--duration) var(--ease-standard), color var(--duration) var(--ease-standard)",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5em",
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...sizes[size],
    ...p.base,
    ...(!disabled && hover ? p.hover : null),
    ...(!disabled && active ? p.active : null),
  };

  const handlers = disabled
    ? {}
    : {
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => {
          setHover(false);
          setActive(false);
        },
        onMouseDown: () => setActive(true),
        onMouseUp: () => setActive(false),
        onClick,
      };

  if (href && !disabled) {
    return (
      <a href={href} style={style} {...handlers} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} style={style} {...handlers} {...rest}>
      {children}
    </button>
  );
}
