import type {
  TypographySize,
  TypographyStyles,
  TypographyTokens,
} from "../../types/typography";
import { convertPxToRem } from "../../utils/css";
import { capitalize } from "../../utils/string";

export const zIndices = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
};

export const radii = {
  xs: convertPxToRem(4),
  sm: convertPxToRem(8),
  md: convertPxToRem(12),
  lg: convertPxToRem(16),
  xl: convertPxToRem(24),
  "2xl": convertPxToRem(32),
  full: "9999px",
};

export const shadows = {
  xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
};

export const sizes = {
  px: "1px",
  1: convertPxToRem(4),
  2: convertPxToRem(8),
  3: convertPxToRem(12),
  4: convertPxToRem(16),
  5: convertPxToRem(20),
  6: convertPxToRem(24),
  7: convertPxToRem(28),
  8: convertPxToRem(32),
  9: convertPxToRem(36),
  10: convertPxToRem(40),
  11: convertPxToRem(44),
  12: convertPxToRem(48),
  16: convertPxToRem(64),
  20: convertPxToRem(80),
  24: convertPxToRem(96),
  28: convertPxToRem(112),
  32: convertPxToRem(128),
  36: convertPxToRem(144),
  40: convertPxToRem(160),
  44: convertPxToRem(176),
  48: convertPxToRem(192),
  52: convertPxToRem(208),
  56: convertPxToRem(224),
  60: convertPxToRem(240),
  64: convertPxToRem(256),
  72: convertPxToRem(288),
  80: convertPxToRem(320),
  96: convertPxToRem(384),
  112: convertPxToRem(448),
  128: convertPxToRem(512),
};

export const space = sizes;

export const typographies = {
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

export const fonts = {
  icons: "'Material Symbols Outlined'",
  sans: "Roboto, sans-serif",
  serif: "'Roboto Serif', serif",
  mono: "'Roboto Mono', monospace",
  ...createTypographyTokens("fontFamily"),
};

export const fontSizes = createTypographyTokens("fontSize");

export const fontWeights = createTypographyTokens("fontWeight");

export const letterSpacings = createTypographyTokens("letterSpacing");

export const lineHeights = createTypographyTokens("lineHeight");

function createTypographyTokens(
  style: keyof TypographyStyles
): TypographyTokens {
  return Object.fromEntries(
    Object.entries(typographies).flatMap(([role, sizes]) =>
      Object.entries(sizes).map(([size, styles]) => [
        `${role}${capitalize(size)}`,
        styles[style],
      ])
    )
  ) as TypographyTokens;
}
