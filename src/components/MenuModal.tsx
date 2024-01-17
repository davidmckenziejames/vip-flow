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
import Bottles from "../components/Bottles";
import { FiX } from "react-icons/fi";
import { FaArrowAltCircleDown, FaArrowRight } from "react-icons/fa";

interface BottleDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear ",
        },
      },
    },
  };

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
      <Flex
        px={"20px"}
        pb="15px"
        fontWeight={"700"}
        mt="-40px"
        color={"white"}
        lineHeight={"1em"}
        onClick={onClose}
        fontSize={"16px"}
        gap={"5px"}
        alignItems={"center"}
        justifyContent={"flex-end "}
        w="100%"
        cursor={"pointer"}
      >
        CONTINUE <FaArrowRight />
      </Flex>
      <Button alignSelf={"center"} onClick={onOpen} display="none">
        VIEW BOTTLE MENU
      </Button>
      <Modal
        motionPreset="slideInBottom"
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior="outside"
      >
        <ModalOverlay />
        <ModalContent
          border={"1px solid #fff"}
          overflow={"hidden"}
          borderRadius={"10px"}
          maxW={{ base: "95%", md: "90%" }}
        >
          <Flex
            p="10px"
            px={"20px"}
            bg="#111"
            width={"100%"}
            gap={"10px"}
            alignItems={"center"}
          >
            <Box
              color={"white"}
              position={"absolute"}
              top={"10px"}
              right={"10px"}
              onClick={onClose}
              fontSize={"25px"}
            >
              <FiX />
            </Box>
            <Heading color="white" fontSize={"22px"}>
              Pre-Order Bottles
            </Heading>
            <Text
              bgGradient={
                "linear(to-l, rgb(248, 52, 246) 0.6%, rgb(152, 38, 252) 90%)"
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
          <Flex
            px={"20px"}
            pb="15px"
            fontWeight={"700"}
            mt="-40px"
            color={"white"}
            lineHeight={"1em"}
            onClick={onClose}
            fontSize={"16px"}
            gap={"5px"}
            alignItems={"center"}
            justifyContent={"flex-end "}
            w="100%"
            cursor={"pointer"}
          >
            CONTINUE <FaArrowRight />
          </Flex>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
