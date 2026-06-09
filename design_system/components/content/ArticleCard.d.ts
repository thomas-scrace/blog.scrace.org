import * as React from "react";

/**
 * A post preview for index and archive lists: eyebrow meta, serif
 * title that warms to gilt on hover, standfirst, and a tag row.
 *
 * @startingPoint section="Content" subtitle="Post preview for index & archive lists" viewport="700x220"
 */
export interface ArticleCardProps {
  title: string;
  href?: string;
  /** Standfirst / dek shown under the title. */
  standfirst?: string;
  /** Display date, e.g. "9 June 2026". */
  date?: string;
  /** e.g. "7 min". */
  readingTime?: string;
  /** Gilt category lead-in, e.g. "Essay". */
  kicker?: string;
  tags?: string[];
  /** Wrap in a bordered, hover-filled surface instead of a list row. @default false */
  bordered?: boolean;
}

export function ArticleCard(props: ArticleCardProps): JSX.Element;
