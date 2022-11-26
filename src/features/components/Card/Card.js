import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Box,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";
import { ArrowForwardIcon, InfoIcon } from "@chakra-ui/icons";
import PopoverComponent from "../Popover/Popover";

export default function CardComponent({
  heading,
  symbol,
  value,
  exchangeId,
  rank,
  tradeCount,
  lastUpdated,
}) {
  const lastUpdatedTimeStamp = Number(lastUpdated);
  const lastUpdatedDate =
    new Date(lastUpdatedTimeStamp).toLocaleDateString() +
    " " +
    new Date(lastUpdatedTimeStamp).getHours() +
    ":" +
    new Date(lastUpdatedTimeStamp).getMinutes();
  return (
    <Box>
      <Card width="sm" bg="white">
        <PopoverComponent />
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md">
              {heading.charAt(0).toUpperCase() + heading.slice(1)}({symbol})
            </Heading>
            <Text>Rank: {rank}</Text>
            <Text>Exchange id: {exchangeId}</Text>
            <Text>Trade count 24hrs: {tradeCount}</Text>
            <Text>Last updated: {lastUpdatedDate}</Text>
            <Text color="teal.600" as="b" fontSize="2xl">
              ${Number(value).toFixed(3)}
            </Text>
          </Stack>
        </CardBody>
        {/* <Divider />
        <CardFooter>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="solid"
          >
            Details
          </Button>
        </CardFooter> */}
      </Card>
    </Box>
  );
}
