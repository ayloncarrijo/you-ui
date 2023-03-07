import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";
import {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  sizes,
  space,
  zIndices,
} from "./stitches/theme";
import type { TypographyTokens } from "./types/typography";
import { createPalette } from "./utils/palette";

const { light } = createPalette({
  primary: "#7c43ab",
});

const stitches = createStitches({
  prefix: "youUi",
  theme: {
    zIndices,
    colors: light,
    radii,
    shadows,
    sizes,
    space,
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
  },
  media: {
    sm: "(min-width: 480px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 976px)",
    xl: "(min-width: 1440px)",
  },
  utils: {
    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<"margin">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"margin">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: Stitches.PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<"padding">) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<"padding">) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),
    typography: (value: `$${keyof TypographyTokens}`) => ({
      fontFamily: value,
      fontSize: value,
      fontWeight: value,
      letterSpacing: value,
      lineHeight: value,
    }),
  },
});

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  styled,
  theme,
} = stitches;
