import { Box, Text } from "@you-ui/react";

export default function Home(): JSX.Element {
  return (
    <Box css={{ minHeight: "100vh", backgroundColor: "$background" }}>
      <Text
        as="h1"
        typography="displayLg"
        css={{
          py: "$8",
          textAlign: "center",
          backgroundColor: "$primary",
          color: "$onPrimary",
        }}
      >
        YouUI
      </Text>
      <Box css={{ py: "$8", backgroundColor: "$warning", color: "$onWarning" }}>
        Warning
      </Box>
      <Box css={{ py: "$8", backgroundColor: "$error", color: "$onError" }}>
        Error
      </Box>
      <Box css={{ py: "$8", backgroundColor: "$success", color: "$onSuccess" }}>
        Success
      </Box>
      <Box css={{ py: "$8", backgroundColor: "$info", color: "$onInfo" }}>
        Info
      </Box>
    </Box>
  );
}
