import { createStitches, type PropertyValue } from "@stitches/react";
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

const palette = createPalette({
  primary: "#7c43ab",
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
  theme: baseTheme,
} = createStitches({
  prefix: "youUi",
  theme: {
    zIndices,
    colors: palette.light,
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

export const darkTheme = createTheme({
  colors: palette.dark,
});

export const extendTheme = <T extends ReturnType<typeof createTheme>>(
  theme: T,
  themes: Array<string> = []
): T => {
  const className = `${baseTheme}${
    themes.length > 0 ? ` ${themes.join(" ")} ` : " "
  }${theme.className}`;

  theme.toString = () => className;

  return theme;
};
