import {
  Text,
  Flex,
  Box,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import Bottles, { Total } from "../components/Bottles";
import { FiX } from "react-icons/fi";

interface BottleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BottleModal({ isOpen, onClose }: BottleModalProps) {
  return (
    <>
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
        </ModalContent>
      </Modal>
    </>
  );
}
