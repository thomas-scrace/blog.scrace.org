import * as React from "react";

/**
 * A large italic serif quotation lifted from the prose, with gilt
 * quotation marks and an optional attribution.
 */
export interface PullquoteProps {
  children: React.ReactNode;
  /** Attribution line, shown as tracked sans caps below. */
  cite?: string;
  /** @default "left" */
  align?: "left" | "center";
}

export function Pullquote(props: PullquoteProps): JSX.Element;
