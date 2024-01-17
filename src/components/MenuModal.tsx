import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Flex,
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  VStack,
} from "@chakra-ui/react";
import Bottles from "../Form/Bottles";
import { FiX } from "react-icons/fi";
import { FaArrowAltCircleDown, FaArrowRight } from "react-icons/fa";

interface BottleDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      bg="#fff"
      mt={"10px"}
      position="relative"
      borderRadius={"10px"}
      flexDirection={"column"}
      justifyContent={"center"}
      py="0px"
      gap={"0px"}
      backgroundImage="url('src/assets/bottles.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      w={"100%"}
      overflow={"hidden"}
      bgGradient="linear(to-l, rgb(248, 52, 246) 0.6%, rgb(152, 38, 252) 90%)"
    >
      <Flex
        py="10px"
        px={"10px"}
        width={"100%"}
        gap={"10px"}
        justifyContent="center"
        alignItems={"center"}
      >
        <Heading color="white" fontSize={"22px"}>
          Pre-Order Bottles
        </Heading>
        <Text
          bgGradient={
            "linear(to-l,  rgb(9, 154, 151), rgb(21, 205, 168) 91.1%)"
          }
          color={"white"}
          fontWeight={"700"}
          px="8px"
          py="5px"
          borderRadius={"5px"}
          fontSize={"14px"}
          lineHeight={"1em"}
        >
          SAVE 10%
        </Text>
      </Flex>

      <Bottles />
    </Flex>
  );
}
