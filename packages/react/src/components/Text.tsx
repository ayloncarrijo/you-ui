import type { TypographyTokens } from "@you-ui/core";
import { forwardRef } from "../utils/forwardRef";
import { Box } from "./Box";

interface TextProps {
  typography: keyof TypographyTokens;
}

export const Text = forwardRef<TextProps, "p">(
  ({ as = "p", css, typography, ...props }, ref) => (
    <Box
      ref={ref}
      as={as}
      css={{
        typography: `$${typography}`,
        ...css,
      }}
      {...props}
    />
  )
);
