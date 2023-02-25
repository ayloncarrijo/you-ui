import { Box } from "@you-ui/react";

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
        }}
      >
        Test
      </Box>
    </div>
  );
}
