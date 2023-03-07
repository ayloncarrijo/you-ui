import type { CSS } from "@you-ui/core";
import type { LeftJoin } from "./utils";

interface StitchesProps<As> {
  as?: As;
  css?: CSS;
}

export type PropsWithAs<Props, As> = As extends React.ElementType
  ? LeftJoin<Props, React.ComponentPropsWithoutRef<As>> & StitchesProps<As>
  : never;

export type ComponentRef<As> = As extends React.ElementType
  ? React.ComponentRef<As>
  : never;

export type GetDefaultAs<T> = T extends ForwardRefComponent<
  unknown,
  infer DefaultAs
>
  ? DefaultAs
  : never;

export type ForwardRefRenderFunction<Props, As> = (
  props: PropsWithAs<Props, As>,
  ref: React.ForwardedRef<ComponentRef<As>>
) => React.ReactElement | null;

export type ForwardRefComponent<Props, DefaultAs> = <As = DefaultAs>(
  props: PropsWithAs<Props, As> & React.RefAttributes<ComponentRef<As>>
) => React.ReactElement | null;
