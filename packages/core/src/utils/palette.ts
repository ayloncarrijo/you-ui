import type * as Material from "@importantimport/material-color-utilities";
import {
  argbFromHex,
  argbFromRgb,
  hexFromArgb,
  themeFromSourceColor,
} from "@importantimport/material-color-utilities";
import type {
  Color,
  ColorGroup,
  ColorScheme,
  FlatCustomColors,
  Palette,
  SchemeType,
  SourceColors,
} from "../types/palette";
import { capitalize } from "./string";

const identifyColorGroup = <T extends string>(
  colorName: T,
  colorGroup: Material.ColorGroup
): ColorGroup<T, number> =>
  Object.fromEntries(
    Object.entries(colorGroup).map(([key, value]) => [
      key
        .replace("color", colorName.toLowerCase())
        .replace("Color", capitalize(colorName)),
      value,
    ])
  ) as ColorGroup<T, number>;

const flattenCustomColors = (
  customColors: Array<Material.CustomColorGroup>,
  schemeType: SchemeType
): FlatCustomColors =>
  customColors
    .map((customColor) =>
      identifyColorGroup(customColor.color.name, customColor[schemeType])
    )
    .reduce(
      (accumulator, currentValue) => ({ ...accumulator, ...currentValue }),
      {}
    ) as FlatCustomColors;

const getArgbFromColor = (color: Color): number =>
  typeof color === "string" ? argbFromHex(color) : argbFromRgb(...color);

const convertValuesToHex = <T extends Record<string, number>>(
  obj: T
): Record<keyof T, string> =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, hexFromArgb(value)])
  ) as Record<keyof T, string>;

const createColorScheme = (
  { schemes, customColors }: Material.Theme,
  schemeType: SchemeType
): ColorScheme => {
  const scheme = schemes[schemeType];

  return convertValuesToHex({
    primary: scheme.primary,
    onPrimary: scheme.onPrimary,
    primaryContainer: scheme.primaryContainer,
    onPrimaryContainer: scheme.onPrimaryContainer,
    secondary: scheme.secondary,
    onSecondary: scheme.onSecondary,
    secondaryContainer: scheme.secondaryContainer,
    onSecondaryContainer: scheme.onSecondaryContainer,
    tertiary: scheme.tertiary,
    onTertiary: scheme.onTertiary,
    tertiaryContainer: scheme.tertiaryContainer,
    onTertiaryContainer: scheme.onTertiaryContainer,
    background: scheme.background,
    onBackground: scheme.onBackground,
    surface: scheme.surface,
    onSurface: scheme.onSurface,
    surfaceVariant: scheme.surfaceVariant,
    onSurfaceVariant: scheme.onSurfaceVariant,
    outline: scheme.outline,
    outlineVariant: scheme.outlineVariant,
    shadow: scheme.shadow,
    scrim: scheme.scrim,
    ...flattenCustomColors(customColors, schemeType),
  } satisfies Record<keyof ColorScheme, number>);
};

export const createPalette = ({
  primary,
  secondary,
  tertiary,
  warning = "#9c4400",
  success = "#1b6d24",
  error = "#ba1a1a",
  info = "#00639a",
}: SourceColors): Palette => {
  const theme = themeFromSourceColor(
    getArgbFromColor(primary),
    Object.entries({
      primary,
      secondary,
      tertiary,
      warning,
      success,
      error,
      info,
    } satisfies Record<keyof SourceColors, Color | undefined>)
      .filter((entry): entry is [string, Color] => entry[1] != null)
      .map(([key, value]) => ({
        name: key,
        value: getArgbFromColor(value),
        blend: false,
      }))
  );

  return {
    light: createColorScheme(theme, "light"),
    dark: createColorScheme(theme, "dark"),
  };
};
