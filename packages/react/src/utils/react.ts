import React from "react";
import type {
  ForwardRefComponent,
  ForwardRefRenderFunction,
} from "../types/react";

export const forwardRef = <Props, DefaultAs>(
  render: ForwardRefRenderFunction<Props, DefaultAs>
): ForwardRefComponent<Props, DefaultAs> =>
  React.forwardRef(render) as ForwardRefComponent<Props, DefaultAs>;
