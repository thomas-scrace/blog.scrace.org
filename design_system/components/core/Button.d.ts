import * as React from "react";

/**
 * The brand's primary action control — a serif-labelled button with
 * a gilt primary, outlined secondary, and quiet ghost variant.
 *
 * @startingPoint section="Core" subtitle="Primary, secondary & ghost actions" viewport="700x160"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** Visual weight. @default "primary" */
  variant?: "primary" | "secondary" | "ghost";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  /** Render as an anchor instead of a button. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
}

export function Button(props: ButtonProps): JSX.Element;
