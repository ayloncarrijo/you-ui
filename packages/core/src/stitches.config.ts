import { createStitches, type PropertyValue } from "@stitches/react";
import {
  colors,
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
} = createStitches({
  prefix: "youUi",
  theme: {
    zIndices,
    colors,
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
    m: (value: PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<"margin">) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<"margin">) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<"margin">) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<"margin">) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (value: PropertyValue<"padding">) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<"padding">) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<"padding">) => ({
      paddingRight: value,
    }),
    pb: (value: PropertyValue<"padding">) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<"padding">) => ({
      paddingLeft: value,
    }),
    px: (value: PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: (value: PropertyValue<"width">) => ({
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
