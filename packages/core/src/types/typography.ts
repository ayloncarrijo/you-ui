import type { CSS } from "@stitches/react";

export type TypographyCssProperty =
  | "fontFamily"
  | "fontSize"
  | "lineHeight"
  | "fontWeight"
  | "letterSpacing";

export type TypographyScale =
  | "fonts"
  | "fontSizes"
  | "fontWeights"
  | "letterSpacings"
  | "lineHeights";

export type TypographyRole =
  | "display"
  | "headline"
  | "title"
  | "body"
  | "label";

export type TypographySize = "sm" | "md" | "lg";

export type TypographyStyles = Pick<CSS, TypographyCssProperty>;

export type TypographyTokens = Record<
  `${TypographyRole}${Capitalize<TypographySize>}`,
  string | number
>;

export type TypographyScales<
  Tokens extends Record<string, string | number> = Record<
    string,
    string | number
  >,
  Scales extends TypographyScales = Record<
    TypographyScale,
    Record<string, string | number>
  >
> = {
  [Scale in TypographyScale]?: Tokens & Scales[Scale];
};

export type Typographies<Scales extends TypographyScales> = Record<
  TypographyRole,
  Record<
    TypographySize,
    {
      [Property in TypographyCssProperty]:
        | TypographyStyles[Property]
        | `$${keyof Scales[TypographyScaleByCssProperty[Property]] & string}`;
    }
  >
>;

export interface TypographyCssPropertyByScale
  extends Record<TypographyScale, TypographyCssProperty> {
  fonts: "fontFamily";
  fontSizes: "fontSize";
  fontWeights: "fontWeight";
  letterSpacings: "letterSpacing";
  lineHeights: "lineHeight";
}

export interface TypographyScaleByCssProperty
  extends Record<TypographyCssProperty, TypographyScale> {
  fontFamily: "fonts";
  fontSize: "fontSizes";
  fontWeight: "fontWeights";
  letterSpacing: "letterSpacings";
  lineHeight: "lineHeights";
}
