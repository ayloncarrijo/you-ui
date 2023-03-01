import type { CSS } from "@stitches/react";
import type { config } from "@you-ui/core";
import React from "react";
import type { LeftJoin } from "../types/utils";

interface StitchesProps<As> {
  as?: As;
  css?: CSS<typeof config>;
}

export type PropsWithAs<Props, As> = As extends React.ElementType
  ? LeftJoin<Props, React.ComponentPropsWithoutRef<As>> & StitchesProps<As>
  : never;

export type ComponentRef<As> = As extends React.ElementType
  ? React.ComponentRef<As>
  : never;

export type ForwardRefRenderFunction<Props, As> = (
  props: PropsWithAs<Props, As>,
  ref: React.ForwardedRef<ComponentRef<As>>
) => React.ReactElement | null;

export type ForwardRefComponent<Props, DefaultAs> = <As = DefaultAs>(
  props: PropsWithAs<Props, As> & React.RefAttributes<ComponentRef<As>>
) => React.ReactElement | null;

export type GetDefaultAs<T> = T extends ForwardRefComponent<
  unknown,
  infer DefaultAs
>
  ? DefaultAs
  : never;

export const forwardRef = <Props, DefaultAs>(
  render: ForwardRefRenderFunction<Props, DefaultAs>
): ForwardRefComponent<Props, DefaultAs> =>
  React.forwardRef(render) as ForwardRefComponent<Props, DefaultAs>;
