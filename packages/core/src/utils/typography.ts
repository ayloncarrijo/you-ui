import type {
  Typographies,
  TypographyStyles,
  TypographyTokens,
} from "../types/typography";
import { capitalize } from "./string";

export const createTypographyTokens = (
  typographies: Typographies,
  style: keyof TypographyStyles
): TypographyTokens => {
  return Object.fromEntries(
    Object.entries(typographies).flatMap(([role, sizes]) =>
      Object.entries(sizes).map(([size, styles]) => [
        `${role}${capitalize(size)}`,
        styles[style],
      ])
    )
  ) as TypographyTokens;
};
