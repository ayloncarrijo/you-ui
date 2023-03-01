import type { TypographyRole, TypographySize } from "@you-ui/core";
import { forwardRef } from "../utils/forwardRef";
import { capitalize } from "../utils/stringUtils";
import { Box } from "./Box";

export interface TypographyProps {
  variant?: TypographyRole;
  size?: TypographySize;
}

export const Typography = forwardRef<TypographyProps, "p">(
  ({ as = "p", css, variant = "body", size = "lg", ...props }, ref) => (
    <Box
      as={as}
      ref={ref}
      css={{
        typography: `$${variant}${capitalize(size)}`,
        ...css,
      }}
      {...props}
    />
  )
);
