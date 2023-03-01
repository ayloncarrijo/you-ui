import { Box, Typography } from "@you-ui/react";

export default function Home(): JSX.Element {
  return (
    <div>
      <h1>YouUI</h1>
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

      <Typography>Text</Typography>

      <Typography as="h1" variant="display" size="lg">
        Text
      </Typography>
      <Typography as="h2" variant="display" size="md">
        Text
      </Typography>
      <Typography as="h3" variant="display" size="sm">
        Text
      </Typography>
      <Typography variant="headline" size="lg">
        Text
      </Typography>
      <Typography variant="headline" size="md">
        Text
      </Typography>
      <Typography variant="headline" size="sm">
        Text
      </Typography>
      <Typography variant="title" size="lg">
        Text
      </Typography>
      <Typography variant="title" size="md">
        Text
      </Typography>
      <Typography variant="title" size="sm">
        Text
      </Typography>
      <Typography variant="body" size="lg">
        Text
      </Typography>
      <Typography variant="body" size="md">
        Text
      </Typography>
      <Typography variant="body" size="sm">
        Text
      </Typography>
      <Typography variant="label" size="lg">
        Text
      </Typography>
      <Typography variant="label" size="md">
        Text
      </Typography>
      <Typography variant="label" size="sm">
        Text
      </Typography>
    </div>
  );
}
