import { VStack, Text, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

import InputSearch from "../Input-search";

import Logo from "../../assests/logo-light.svg";

export const Header = () => {
  return (
    <VStack as={"header"} w="full" mb="100px">
      <Box mb="22px">
        <Image src={Logo} alt="blobscan-logo" />
      </Box>
      <InputSearch />
      <Flex>
        <Text fontWeight={"regular"} fontSize="14px">
          Blob transaction explorer for{" "}
        </Text>
        <Text
          pl="4px"
          fontWeight={"medium"}
          color="primary.300"
          fontSize={"14px"}
        >
          EIP-4844
        </Text>
      </Flex>
      <Text variant={"primary"}>TEST</Text>
    </VStack>
  );
};
