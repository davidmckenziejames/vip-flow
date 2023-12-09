import React, { useState } from "react";
import {
  Flex,
  Heading,
  Image,
  Avatar,
  HStack,
  VStack,
  Button,
  Modal,
  Tabs,
  TabList,
  Portal,
  TabPanels,
  Tab,
  Tooltip,
  TabPanel,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Text,
  Box,
} from "@chakra-ui/react";
import { FaFileExcel } from "react-icons/fa";
import { FiX, FiCheck } from "react-icons/fi";
import VIPlist from "./VIPlist";
import { FaQuestion, FaQuestionCircle } from "react-icons/fa";
import PopUpHero from "./PopUpHero";
import PopFeatureList from "./PopFeatureList";

const listStyle = {
  alignItems: "center",
  gap: "8px",
  color: "#fff",
  fontSize: "18px",
  w: { base: "280px", md: "50%" },
  pb: "5px",
};

const iconStyle = {
  fontSize: "22px",
};

const popupWidth = {
  w: { base: "100%", md: "auto" },
  minW: { base: "100%", md: "640px" },
};

export default function VIP() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>VIP </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "full", md: "lg" }}
      >
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent
          borderRadius="10px"
          {...popupWidth}
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          <VStack p="0px" gap="0" position="relative">
            <Flex
              position="absolute"
              right="10px"
              top="10px"
              zIndex={"8989898"}
            >
              <FiX
                color="#fff"
                onClick={onClose}
                fontSize="22px"
                cursor="pointer"
              />
            </Flex>
            <PopUpHero />

            <PopFeatureList />
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
}
