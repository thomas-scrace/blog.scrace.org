import * as React from "react";

/**
 * A quiet aside set apart from the prose — a note, epigraph, or
 * editorial mark on a raised surface with a left gilt rule.
 */
export interface CalloutProps {
  children: React.ReactNode;
  /** Tracked sans label above the body, e.g. "Note". */
  label?: string;
  /** Rule colour. @default "note" */
  tone?: "note" | "warn" | "quiet";
}

export function Callout(props: CalloutProps): JSX.Element;
