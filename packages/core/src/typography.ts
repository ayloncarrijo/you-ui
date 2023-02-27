import type { CSS } from "@stitches/react";
import { capitalize } from "./utils/capitalize";
import { convertPxToRem } from "./utils/convertPxToRem";

export type TypographyStyles = Pick<
  CSS,
  "fontFamily" | "fontSize" | "lineHeight" | "fontWeight" | "letterSpacing"
>;

export type TypographyName = keyof typeof typography;

export type TypographySize = "sm" | "md" | "lg";

export type TypographyToken = `${TypographyName}${Capitalize<TypographySize>}`;

export const typography = {
  display: {
    lg: {
      fontFamily: "$sans",
      fontSize: convertPxToRem(57),
      lineHeight: convertPxToRem(64),
      fontWeight: 400,
      letterSpacing: 0,
    },
    md: {
      fontFamily: "$sans",
      fontSize: convertPxToRem(45),
      lineHeight: convertPxToRem(52),
      fontWeight: 400,
      letterSpacing: 0,
    },
    sm: {
      fontFamily: "$sans",
      fontSize: convertPxToRem(36),
      lineHeight: convertPxToRem(44),
      fontWeight: 400,
      letterSpacing: 0,
    },
  },
  headline: {
    lg: {
      fontFamily: "$sans",
      fontSize: convertPxToRem(32),
      lineHeight: convertPxToRem(40),
      fontWeight: 400,
      letterSpacing: 0,
    },
    md: {
      fontFamily: "$sans",
      fontSize: convertPxToRem(28),
      lineHeight: convertPxToRem(36),
      fontWeight: 400,
      letterSpacing: 0,
    },
    sm: {
      fontFamily: "$sans",
      fontSize: convertPxToRem(24),
      lineHeight: convertPxToRem(32),
      fontWeight: 400,
      letterSpacing: 0,
    },
  },
  title: {
    lg: {
      fontFamily: "$sans",
      fontSize: convertPxToRem(22),
      lineHeight: convertPxToRem(28),
      fontWeight: 400,
      letterSpacing: 0,
    },
    md: {
      fontFamily: "$sans",
      fontSize: convertPxToRem(16),
      lineHeight: convertPxToRem(24),
      fontWeight: 500,
      letterSpacing: convertPxToRem(0.15),
    },
    sm: {
      fontFamily: "$sans",
      fontSize: convertPxToRem(14),
      lineHeight: convertPxToRem(20),
      fontWeight: 500,
      letterSpacing: convertPxToRem(0.1),
    },
  },
  body: {
    lg: {
      fontFamily: "$sans",
      fontSize: convertPxToRem(16),
      lineHeight: convertPxToRem(24),
      fontWeight: 400,
      letterSpacing: convertPxToRem(0.15),
    },
    md: {
      fontFamily: "$sans",
      fontSize: convertPxToRem(14),
      lineHeight: convertPxToRem(20),
      fontWeight: 400,
      letterSpacing: convertPxToRem(0.25),
    },
    sm: {
      fontFamily: "$sans",
      fontSize: convertPxToRem(12),
      lineHeight: convertPxToRem(16),
      fontWeight: 400,
      letterSpacing: convertPxToRem(0.4),
    },
  },
  label: {
    lg: {
      fontFamily: "$sans",
      fontSize: convertPxToRem(14),
      lineHeight: convertPxToRem(20),
      fontWeight: 500,
      letterSpacing: convertPxToRem(0.1),
    },
    md: {
      fontFamily: "$sans",
      fontSize: convertPxToRem(12),
      lineHeight: convertPxToRem(16),
      fontWeight: 500,
      letterSpacing: convertPxToRem(0.5),
    },
    sm: {
      fontFamily: "$sans",
      fontSize: convertPxToRem(11),
      lineHeight: convertPxToRem(16),
      fontWeight: 500,
      letterSpacing: convertPxToRem(0.5),
    },
  },
} satisfies Record<string, Record<TypographySize, TypographyStyles>>;

export const createTypographyTokens = (
  property: keyof TypographyStyles
): Record<TypographyToken, string | number> =>
  Object.fromEntries(
    Object.entries(typography).flatMap(([name, sizes]) =>
      Object.entries(sizes).map(([size, styles]) => [
        `${name}${capitalize(size)}`,
        styles[property],
      ])
    )
  ) as Record<TypographyToken, string | number>;
