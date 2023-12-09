import { Flex } from "@chakra-ui/react";
import ProductPageCard from "./ProductPageCard";

export default function Product() {
  return (
    <Flex
      w="100%"
      h="100vh"
      flexDirection="column"
      align="center"
      p="0px"
      pt="40px"
      pb="50px"
      bgImage="linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%)"
    >
      <ProductPageCard />
    </Flex>
  );
}
