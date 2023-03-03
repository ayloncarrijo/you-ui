import { css } from "@you-ui/core";
import { Box, Text } from "@you-ui/react";

export default function Home(): JSX.Element {
  return (
    <div>
      <h1>YouUI</h1>
      <p className={css({ fontFamily: "$icons" })()}>home</p>
      <Box
        css={{
          m: "$8",
          p: "$8",
          backgroundColor: "$white",
          borderRadius: "$full",
          boxShadow: "$2xl",
          size: "$32",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          typography: "$displayMd",
        }}
      >
        Test
      </Box>

      <Text
        as="h1"
        typography="displayLg"
        css={{ backgroundColor: "$primary" }}
      >
        Text
      </Text>
      <Text as="h2" typography="displayMd">
        Text
      </Text>
      <Text as="h3" typography="displaySm">
        Text
      </Text>

      <Text typography="headlineLg">Text</Text>
      <Text typography="headlineMd">Text</Text>
      <Text typography="headlineSm">Text</Text>

      <Text typography="titleLg">Text</Text>
      <Text typography="titleMd">Text</Text>
      <Text typography="titleSm">Text</Text>

      <Text typography="bodyLg">Text</Text>
      <Text typography="bodyMd">Text</Text>
      <Text typography="bodySm">Text</Text>

      <Text typography="labelLg">Text</Text>
      <Text typography="labelMd">Text</Text>
      <Text typography="labelSm">Text</Text>
    </div>
  );
}
