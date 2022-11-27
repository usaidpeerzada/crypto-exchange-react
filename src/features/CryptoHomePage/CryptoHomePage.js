import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  cryptoData,
  selectCryptoData,
  selectStatus,
  filteredData,
  selectFilterData,
  cryptoSearchData,
} from "./cryptoSlice";
import {
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
  Input,
  Link,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import CardComponent from "../components/Card/Card";
import SkeletonComponent from "../components/Skeleton/Skeleton";
import { SearchIcon, ExternalLinkIcon, ArrowBackIcon } from "@chakra-ui/icons";
export function CryptoHomePage() {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [searching, setSearching] = useState(false);
  const filterData = useSelector(selectFilterData);
  const cryptoDataSelector = useSelector(selectCryptoData);
  const loading = useSelector(selectStatus);
  useEffect(() => {
    dispatch(cryptoData());
    if (filterData.length > 0) {
      setSearching(true);
      setName("");
    } else {
      setSearching(false);
    }
  }, [dispatch, filterData]);
  function handleSearch() {
    if (name) {
      dispatch(filteredData(name));
    } else {
      setSearching(false);
    }
  }
  const dataToMap = searching ? filterData : cryptoDataSelector;
  return (
    <>
      <Box bg="teal.100" w="100%" p={4} color="teal.500">
        <Flex justify="space-between">
          <Heading as="h2" size="xl" mr={3}>
            CrEx
          </Heading>

          <Input
            placeholder={searching ? "Go back" : "Search..."}
            value={name}
            onChange={(e) => setName(e.target.value)}
            ml={{ sm: "20px", md: "50%", lg: "70%" }}
            variant="filled"
            size="md"
            mr={3}
          />
          <IconButton
            mr={8}
            onClick={handleSearch}
            colorScheme="teal"
            aria-label="Search database"
            icon={searching ? <ArrowBackIcon /> : <SearchIcon />}
          />
        </Flex>
      </Box>
      <Alert status="info">
        <AlertIcon />
        <Text as="h2">
          Top crypto currencies based on exchanges - click on the icon on card
          for more info - <Text as="b">search for any cryptocurrency.</Text>
        </Text>
      </Alert>
      <Flex wrap="wrap" gap={8} justify="center" bg="teal.50" pt={10} pb={10}>
        {loading === undefined || loading === "loading" ? (
          <SkeletonComponent />
        ) : (
          dataToMap?.map((crypto, key) => (
            <CardComponent
              key={key}
              heading={crypto?.baseId}
              value={crypto?.priceUsd}
              symbol={crypto?.baseSymbol}
              exchangeId={crypto?.exchangeId}
              rank={crypto?.rank}
              tradeCount={crypto?.tradesCount24Hr}
              lastUpdated={crypto?.updated}
            />
          ))
        )}
      </Flex>
      <Box bg="teal.100" w="100%" p={4} color="teal.500">
        <Text as="h3" size="l">
          Made by{" "}
          <Link href="https://usaid.dev" isExternal>
            usaid.dev <ExternalLinkIcon />
          </Link>
        </Text>
      </Box>
    </>
  );
}
