import React, { useState, useCallback } from "react";
import {
  Box,
  VStack,
  Text,
  HStack,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import { FiEye, FiMinus, FiX } from "react-icons/fi";
import { FaMinus, FaPlus } from "react-icons/fa";
export function BottleCard(props: {
  children: React.ReactNode;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  imageUrl: string; // Add imageUrl prop
}) {
  const { children, quantity, onIncrement, onDecrement, imageUrl } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex as="label" w={{ base: "47%", md: "30%" }} cursor="pointer">
      <VStack
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _focus={{
          boxShadow: "none",
        }}
        align="center"
        p="10px"
        w="100%"
        position="relative"
      >
        <Box position="absolute" right="5px" top="5px" onClick={onOpen}>
          <FiEye />
        </Box>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
            maxW={{ base: "90%", md: "fit-content" }}
            borderRadius="10px"
            overflow="hidden"
          >
            <Box position="relative">
              <Box position="absolute" right="5px" top="5px" onClick={onClose}>
                <FiX fontSize="30px" />
              </Box>
              <Image src={imageUrl} />
            </Box>
          </ModalContent>
        </Modal>
        <Image
          src={imageUrl}
          alt="Bottle image"
          w="100%"
          maxH="100px"
          objectFit="contain"
        />
        {children}
        <HStack>
          <Flex
            onClick={onDecrement}
            bg="#111"
            color="#fff"
            justify="center"
            height="25px"
            width="25px"
            alignItems="center"
            borderRadius="5px"
            _hover={{ bg: "#4b2bc0" }}
          >
            <FaMinus fontSize="12px" />
          </Flex>
          <Text fontWeight="500" color="#111">
            {quantity}
          </Text>
          <Flex
            onClick={onIncrement}
            bg="#111"
            color="#fff"
            justify="center"
            height="25px"
            width="25px"
            alignItems="center"
            borderRadius="5px"
            _hover={{ bg: "#4b2bc0" }}
          >
            <FaPlus fontSize="12px" />
          </Flex>
        </HStack>
      </VStack>
    </Flex>
  );
}
