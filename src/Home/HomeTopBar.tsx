import { Flex, Image, useDisclosure, HStack } from "@chakra-ui/react";

export default function HomeTopBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      id="header"
      bgGradient="linear(to-l, rgb(248, 52, 246), rgb(152, 38, 252))"
      w="100%"
      justify="center"
      py={{ base: "6px", md: "10px" }}
    >
      <Flex
        fontWeight="600"
        fontSize={{ base: "14px", sm: "16px", md: "18px" }}
        color="#fff"
      >
        VIP table booking system with bottle pre-ordering
      </Flex>
    </Flex>
  );
}
