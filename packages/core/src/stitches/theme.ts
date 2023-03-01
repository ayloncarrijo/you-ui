import type {
  TypographySize,
  TypographyStyles,
  TypographyTokens,
} from "../types/typography";
import { convertPxToRem } from "../utils/css";
import { capitalize } from "../utils/string";

const createTypographyTokens = (
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

export const zIndices = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
};

export const colors = {
  white: "#fff",
  black: "#000",
  primary: "red",
  secondary: "green",
  tertiary: "blue",
};

export const radii = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.5rem",
  "2xl": "2rem",
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
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
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
  sans: "Roboto, sans-serif",
  serif: "'Roboto Serif', serif",
  mono: "'Roboto Mono', monospace",
  ...createTypographyTokens("fontFamily"),
};

export const fontSizes = createTypographyTokens("fontSize");

export const fontWeights = createTypographyTokens("fontWeight");

export const letterSpacings = createTypographyTokens("letterSpacing");

export const lineHeights = createTypographyTokens("lineHeight");
