import React from "react";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
export default function SkeletonComponent() {
  return (
    <Box w="100%" p={4} boxShadow="lg" bg="white">
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
    </Box>
  );
}
