import { createPalette, createTheme, extendTheme } from "@you-ui/core";

const palette = createPalette({
  primary: "#7c43ab",
});

export const baseTheme = createTheme({
  fonts: {
    icons: "var(--app-fonts-icons)",
    sans: "var(--app-fonts-roboto), sans-serif",
  },
});

export const lightTheme = extendTheme(
  createTheme({
    colors: palette.light,
  }),
  [baseTheme]
);

export const darkTheme = extendTheme(
  createTheme({
    colors: palette.dark,
  }),
  [baseTheme]
);
