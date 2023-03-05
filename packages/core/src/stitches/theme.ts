import type { Typographies } from "../types/typography";
import { getRemFromPx } from "../utils/css";
import { createTypographyTokens } from "../utils/typography";

export const zIndices = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
};

export const radii = {
  xs: getRemFromPx(4),
  sm: getRemFromPx(8),
  md: getRemFromPx(12),
  lg: getRemFromPx(16),
  xl: getRemFromPx(24),
  "2xl": getRemFromPx(32),
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
  1: getRemFromPx(4),
  2: getRemFromPx(8),
  3: getRemFromPx(12),
  4: getRemFromPx(16),
  5: getRemFromPx(20),
  6: getRemFromPx(24),
  7: getRemFromPx(28),
  8: getRemFromPx(32),
  9: getRemFromPx(36),
  10: getRemFromPx(40),
  11: getRemFromPx(44),
  12: getRemFromPx(48),
  16: getRemFromPx(64),
  20: getRemFromPx(80),
  24: getRemFromPx(96),
  28: getRemFromPx(112),
  32: getRemFromPx(128),
  36: getRemFromPx(144),
  40: getRemFromPx(160),
  44: getRemFromPx(176),
  48: getRemFromPx(192),
  52: getRemFromPx(208),
  56: getRemFromPx(224),
  60: getRemFromPx(240),
  64: getRemFromPx(256),
  72: getRemFromPx(288),
  80: getRemFromPx(320),
  96: getRemFromPx(384),
  112: getRemFromPx(448),
  128: getRemFromPx(512),
};

export const space = sizes;

export const typographies: Typographies = {
  display: {
    lg: {
      fontFamily: "$sans",
      fontSize: getRemFromPx(57),
      lineHeight: getRemFromPx(64),
      fontWeight: 400,
      letterSpacing: 0,
    },
    md: {
      fontFamily: "$sans",
      fontSize: getRemFromPx(45),
      lineHeight: getRemFromPx(52),
      fontWeight: 400,
      letterSpacing: 0,
    },
    sm: {
      fontFamily: "$sans",
      fontSize: getRemFromPx(36),
      lineHeight: getRemFromPx(44),
      fontWeight: 400,
      letterSpacing: 0,
    },
  },
  headline: {
    lg: {
      fontFamily: "$sans",
      fontSize: getRemFromPx(32),
      lineHeight: getRemFromPx(40),
      fontWeight: 400,
      letterSpacing: 0,
    },
    md: {
      fontFamily: "$sans",
      fontSize: getRemFromPx(28),
      lineHeight: getRemFromPx(36),
      fontWeight: 400,
      letterSpacing: 0,
    },
    sm: {
      fontFamily: "$sans",
      fontSize: getRemFromPx(24),
      lineHeight: getRemFromPx(32),
      fontWeight: 400,
      letterSpacing: 0,
    },
  },
  title: {
    lg: {
      fontFamily: "$sans",
      fontSize: getRemFromPx(22),
      lineHeight: getRemFromPx(28),
      fontWeight: 400,
      letterSpacing: 0,
    },
    md: {
      fontFamily: "$sans",
      fontSize: getRemFromPx(16),
      lineHeight: getRemFromPx(24),
      fontWeight: 500,
      letterSpacing: getRemFromPx(0.15),
    },
    sm: {
      fontFamily: "$sans",
      fontSize: getRemFromPx(14),
      lineHeight: getRemFromPx(20),
      fontWeight: 500,
      letterSpacing: getRemFromPx(0.1),
    },
  },
  body: {
    lg: {
      fontFamily: "$sans",
      fontSize: getRemFromPx(16),
      lineHeight: getRemFromPx(24),
      fontWeight: 400,
      letterSpacing: getRemFromPx(0.15),
    },
    md: {
      fontFamily: "$sans",
      fontSize: getRemFromPx(14),
      lineHeight: getRemFromPx(20),
      fontWeight: 400,
      letterSpacing: getRemFromPx(0.25),
    },
    sm: {
      fontFamily: "$sans",
      fontSize: getRemFromPx(12),
      lineHeight: getRemFromPx(16),
      fontWeight: 400,
      letterSpacing: getRemFromPx(0.4),
    },
  },
  label: {
    lg: {
      fontFamily: "$sans",
      fontSize: getRemFromPx(14),
      lineHeight: getRemFromPx(20),
      fontWeight: 500,
      letterSpacing: getRemFromPx(0.1),
    },
    md: {
      fontFamily: "$sans",
      fontSize: getRemFromPx(12),
      lineHeight: getRemFromPx(16),
      fontWeight: 500,
      letterSpacing: getRemFromPx(0.5),
    },
    sm: {
      fontFamily: "$sans",
      fontSize: getRemFromPx(11),
      lineHeight: getRemFromPx(16),
      fontWeight: 500,
      letterSpacing: getRemFromPx(0.5),
    },
  },
};

export const fonts = {
  icons: "'Material Symbols Outlined'",
  sans: "Roboto, sans-serif",
  serif: "'Roboto Serif', serif",
  mono: "'Roboto Mono', monospace",
  ...createTypographyTokens(typographies, "fontFamily"),
};

export const fontSizes = createTypographyTokens(typographies, "fontSize");

export const fontWeights = createTypographyTokens(typographies, "fontWeight");

export const letterSpacings = createTypographyTokens(
  typographies,
  "letterSpacing"
);

export const lineHeights = createTypographyTokens(typographies, "lineHeight");
