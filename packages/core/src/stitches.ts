import { createStitches, type PropertyValue } from "@stitches/react";
import { spaceAndSizes } from "./spaceAndSizes";
import { createTypographyTokens, type TypographyToken } from "./typography";

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
    colors: {
      white: "#fff",
      black: "#000",
      primary: "red",
      secondary: "green",
      tertiary: "blue",
    },
    space: spaceAndSizes,
    sizes: spaceAndSizes,
    radii: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "0.75rem",
      lg: "1rem",
      xl: "1.5rem",
      "2xl": "2rem",
      full: "9999px",
    },
    shadows: {
      xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    },
    zIndices: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
    },
    fonts: {
      sans: "Roboto, sans-serif",
      serif: "'Roboto Serif', serif",
      mono: "'Roboto Mono', monospace",
      ...createTypographyTokens("fontFamily"),
    },
    fontSizes: createTypographyTokens("fontSize"),
    lineHeights: createTypographyTokens("lineHeight"),
    fontWeights: createTypographyTokens("fontWeight"),
    letterSpacings: createTypographyTokens("letterSpacing"),
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
    typography: (value: `$${TypographyToken}`) => ({
      fontFamily: value,
      fontSize: value,
      lineHeight: value,
      fontWeight: value,
      letterSpacing: value,
    }),
  },
});
