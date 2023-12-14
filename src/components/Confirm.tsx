import { useState } from "react";
import {
  Button,
  Modal,
  Flex,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import Bottles from "../components/Bottles";
import { ContactForm } from "./ContactForm";
import { FiX } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

export default function Confirm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex w={"100%"}>
      <Button
        bg="#fff"
        display={"flex"}
        gap={"6px"}
        alignItems={"center"}
        fontSize={"18px"}
        onClick={onOpen}
        color="#111"
        w={"100%"}
        height={"50px"}
        mt="5px"
        fontWeight={"600"}
      >
        COMPLETE TABLE BOOKING <FaArrowRight fontSize={"16px"} />
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent p="0px">
          <Flex flexDirection={"column"} p="20px" position={"relative"}>
            <Flex position={"absolute"} right={"15px"} top={"15px"}>
              <FiX
                onClick={onClose}
                color="#111"
                fontSize={"24px"}
                cursor={"pointer"}
              />
            </Flex>
            <Text fontSize={"20px"} fontWeight={"600"} color={"#111"}>
              Complete Table Booking
            </Text>
            <ContactForm />
            <Button mt={"10px"} onClick={onClose}>
              Back
            </Button>
          </Flex>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
