import type { CSS } from "@stitches/react";
import { typographies } from "./typographies";
import { capitalize } from "./utils/stringUtils";

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

export const createTypographyTokens = (
  style: keyof TypographyStyles
): TypographyTokens =>
  Object.fromEntries(
    Object.entries(typographies).flatMap(([role, sizes]) =>
      Object.entries(sizes).map(([size, styles]) => [
        `${role}${capitalize(size)}`,
        styles[style],
      ])
    )
  ) as TypographyTokens;
