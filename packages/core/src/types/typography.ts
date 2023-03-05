import type { CSS } from "@stitches/react";
import type { typographies } from "../stitches/theme";

export type TypographyStyles = Pick<
  CSS,
  "fontFamily" | "fontSize" | "lineHeight" | "fontWeight" | "letterSpacing"
>;

export type TypographyRole = keyof typeof typographies;

export type TypographySize = "sm" | "md" | "lg";

export type TypographyTokens = Record<
  `${TypographyRole}${Capitalize<TypographySize>}`,
  string | number
>;
