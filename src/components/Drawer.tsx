import {
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

import "./marquee.css";
import { FiX } from "react-icons/fi";

interface BottleDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BottleDrawer({ isOpen, onClose }: BottleDrawerProps) {
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
    <>
      <Drawer onClose={onClose} isOpen={isOpen} size="md">
        <DrawerOverlay />
        <DrawerContent maxW={{ base: "100%", md: "40%" }} overflowY={"scroll"}>
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
            <Heading color="white">Bottle Menu</Heading>
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
        </DrawerContent>
      </Drawer>
    </>
  );
}
