import { Flex, Image, useDisclosure, HStack } from "@chakra-ui/react";
const buttonStyle = {
  lineHeight: "1em",
  fontWeight: "600",
  rounded: "lg",
  cursor: "pointer",
};
export default function HomeFooter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex id="header" bg="#111" color="#fff" w="100%" justify="center">
      <Flex px="10px" py="12px" fontSize="14px">
        © 2024 VIPflow. All rights reserved
      </Flex>
    </Flex>
  );
}
