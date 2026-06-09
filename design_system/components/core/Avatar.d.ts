import * as React from "react";

/**
 * The author's portrait or a serif monogram, with an optional gilt
 * ring. Used in the byline and footer.
 */
export interface AvatarProps {
  /** Image URL. If omitted, falls back to `initials`. */
  src?: string;
  alt?: string;
  /** Serif initials shown when no image. */
  initials?: string;
  /** Pixel size or any CSS length. @default 44 */
  size?: number | string;
  /** Thin gilt ring. @default true */
  ring?: boolean;
}

export function Avatar(props: AvatarProps): JSX.Element;
