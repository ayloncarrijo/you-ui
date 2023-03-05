import type { CSS } from "@stitches/react";

export type TypographyStyles = Pick<
  CSS,
  "fontFamily" | "fontSize" | "lineHeight" | "fontWeight" | "letterSpacing"
>;

export type TypographyRole =
  | "display"
  | "headline"
  | "title"
  | "body"
  | "label";

export type TypographySize = "sm" | "md" | "lg";

export type TypographyTokens = Record<
  `${TypographyRole}${Capitalize<TypographySize>}`,
  string | number
>;

export type Typographies = Record<
  TypographyRole,
  Record<TypographySize, TypographyStyles>
>;
