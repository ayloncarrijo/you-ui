export type Hexadecimal = `#${string}`;

export type Rgb = [number, number, number];

export type Color = Hexadecimal | Rgb;

export type Palette = Record<SchemeType, ColorScheme>;

export type SchemeType = "light" | "dark";

export type MainColor = "primary" | "secondary" | "tertiary";

export type HelperColor = "warning" | "success" | "error" | "info";

export type ColorGroup<T extends string, V> = {
  [K in T as
    | K
    | `on${Capitalize<K>}`
    | `${K}Container`
    | `on${Capitalize<K>}Container`]: V;
};

export type ColorScheme = ColorGroup<MainColor | HelperColor, string> & {
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  shadow: string;
  scrim: string;
};

export type CustomColors = ColorGroup<HelperColor, number> &
  Partial<ColorGroup<"secondary" | "tertiary", number>>;

export interface SourceColors {
  primary: Color;
  secondary?: Color;
  tertiary?: Color;
  warning?: Color;
  success?: Color;
  error?: Color;
  info?: Color;
}
