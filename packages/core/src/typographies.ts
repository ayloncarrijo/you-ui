import type { TypographySize, TypographyStyles } from "./typography";
import { convertPxToRem } from "./utils/convertPxToRem";

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
