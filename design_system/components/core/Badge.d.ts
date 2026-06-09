import * as React from "react";

/**
 * A tiny status/marker label set inline with headings or meta —
 * "new", "draft", "updated". Tones map to the semantic palette.
 */
export interface BadgeProps {
  children: React.ReactNode;
  /** @default "neutral" */
  tone?: "neutral" | "accent" | "warn" | "quiet";
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
