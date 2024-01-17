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
    <Flex id="header" bg="#f8fafc" w="100%" justify="center">
      <Flex px="10px" py="6px" color="#73717a">
        © 2024 VIPFLOW. All rights reserved
      </Flex>
    </Flex>
  );
}
