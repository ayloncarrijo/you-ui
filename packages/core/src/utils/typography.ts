import capitalize from "lodash/capitalize";
import type {
  Typographies,
  TypographyCssProperty,
  TypographyScale,
  TypographyScales,
  TypographyTokens,
} from "../types/typography";

const CSS_PROPERTY_BY_SCALE: Array<[TypographyScale, TypographyCssProperty]> = [
  ["fonts", "fontFamily"],
  ["fontSizes", "fontSize"],
  ["fontWeights", "fontWeight"],
  ["letterSpacings", "letterSpacing"],
  ["lineHeights", "lineHeight"],
];

const getTypographyTokens = <Scales extends TypographyScales>(
  typographies: Typographies<Scales>,
  property: TypographyCssProperty
): TypographyTokens => {
  return Object.fromEntries(
    Object.entries(typographies).flatMap(([role, sizes]) =>
      Object.entries(sizes).map(([size, styles]) => [
        `${role}${capitalize(size)}`,
        styles[property],
      ])
    )
  ) as TypographyTokens;
};

export const createTypographyScales = <Scales extends TypographyScales>(
  typographies: Typographies<Scales>,
  scales?: Scales
): Required<TypographyScales<TypographyTokens, Scales>> => {
  return Object.fromEntries(
    CSS_PROPERTY_BY_SCALE.map(([scale, property]) => [
      scale,
      {
        ...getTypographyTokens(typographies, property),
        ...scales?.[scale],
      },
    ])
  ) as Required<TypographyScales<TypographyTokens, Scales>>;
};
