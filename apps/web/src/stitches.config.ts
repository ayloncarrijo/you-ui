import { addClassAlias, createTheme } from "@you-ui/core";

export const baseTheme = createTheme({
  fonts: {
    icons: "var(--app-fonts-icons)",
    sans: "var(--app-fonts-roboto), sans-serif",
  },
});

export const lightTheme = addClassAlias(
  createTheme({
    colors: {
      primary: "green",
    },
  }),
  [baseTheme]
);

export const darkTheme = addClassAlias(
  createTheme({
    colors: {
      primary: "blue",
    },
  }),
  [baseTheme]
);
