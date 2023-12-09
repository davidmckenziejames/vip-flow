import { Flex } from "@chakra-ui/react";
import ProductCard from "./Feed/ProductCard";

export default function ProfileEvents() {
  return (
    <Flex w="100%" flexDirection="column" align="center" p="0px" pb="50px">
      <ProductCard />
    </Flex>
  );
}
