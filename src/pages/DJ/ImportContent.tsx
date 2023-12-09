import {
  Avatar,
  Box,
  Button,
  Flex,
  Stack,
  Icon,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Input,
  useToast,
  useDisclosure,
  VisuallyHidden,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FiHeadphones, FiEdit, FiCamera } from "react-icons/fi";
import { useState } from "react";

export default function ImportContent() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex>
      <Box
        border="1px solid #7d5aeb"
        px="8px"
        py="8px"
        color="#fff"
        mt="10px"
        bg="#7d5aeb"
        fontWeight="600"
        fontSize={"14px"}
        lineHeight="1em"
        onClick={onOpen}
        borderRadius="5px"
        cursor="pointer"
      >
        Import Content
      </Box>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Import Content</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>Add Soundcloud below etc.</Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
