import * as React from "react";

/**
 * A small, pill-shaped topic label for posts. Tracked sans caps;
 * quiet by default, gilt-filled when active.
 */
export interface TagProps {
  children: React.ReactNode;
  /** Filled gilt state, e.g. the selected filter. @default false */
  active?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function Tag(props: TagProps): JSX.Element;
