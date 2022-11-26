import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
export default function PopoverComponent() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme="#E6FFFA">
          <InfoIcon color="teal" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Information related to terms</PopoverHeader>
        <PopoverBody>
          <Text>Exchange id - unique identifier for exchange.</Text>
          <Text>
            Rank - this number represents the amount of volume transacted by
            this market in relation to other markets on that exchange.
          </Text>
          <Text>
            Trade count - number of trades on this market in the last 24 hours.
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
