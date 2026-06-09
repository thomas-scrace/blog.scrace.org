import * as React from "react";

/**
 * A section break — a plain hairline, or a centered ornamental mark
 * (fleuron/asterism) for literary breaks within an essay.
 */
export interface DividerProps {
  /** Show the centered ornament instead of a plain rule. @default false */
  ornament?: boolean;
  /** The glyph for the ornament. @default "❧" */
  symbol?: string;
  style?: React.CSSProperties;
}

export function Divider(props: DividerProps): JSX.Element;
