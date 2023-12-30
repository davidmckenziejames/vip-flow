import { Flex } from "@chakra-ui/react";
import Selector from "../components/Framer/Selector";
export default function Framer() {
  return (
    <Flex
      w="100%"
      h="100%"
      minH="100vh"
      flexDirection="column"
      pb="30px"
      bg="#fff"
    >
      <Selector />
    </Flex>
  );
}
