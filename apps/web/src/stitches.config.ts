import { createPalette, createTheme } from "@you-ui/core";

const { light, dark } = createPalette({
  primary: "#7c43ab",
});

export const baseTheme = {
  fonts: {
    icons: "var(--app-fonts-icons)",
    sans: "var(--app-fonts-roboto), sans-serif",
  },
};

export const lightTheme = createTheme({
  ...baseTheme,
  colors: light,
});

export const darkTheme = createTheme({
  ...baseTheme,
  colors: dark,
});
