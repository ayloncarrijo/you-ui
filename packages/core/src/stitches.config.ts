import { createStitches, type PropertyValue } from "@stitches/react";

const spaceAndSizes = {
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
  prefix: "you-ui",
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
      sans: 'Roboto, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif:
        '"Roboto Serif", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      mono: '"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
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
  },
});
