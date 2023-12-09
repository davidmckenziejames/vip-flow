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
  w: { base: "90%", md: "590px" },
  minW: { base: "90%", md: "590px" },
};

const options = [
  {
    id: "free",
    text: "Access to free content",
    color: "#71fa94",
    description:
      "View all free content posted by <bo>ALL DJs</b<, including videos, tracks, mixes, galleries ",
  },
  { id: "free", text: "First-to-know DJ updates", color: "#71fa94" },
  { id: "vip", text: "Detailed Tour Schedule", color: "#71fa94" },
  { id: "vip", text: "Private Playlists & Setlists", color: "#71fa94" },
  { id: "vip", text: "Access Unreleased Music", color: "#71fa94" },
  { id: "vip", text: "Preview New Tracks", color: "#71fa94" },
  { id: "vip", text: "Community Chat", color: "#71fa94" },
  { id: "vip", text: "Meet & Greet Invitations", color: "#71fa94" },
  { id: "vip", text: "Obtain Guestlist Places", color: "#71fa94" },
  { id: "vip", text: "Purchase Tickets Early", color: "#71fa94" },
  { id: "vip", text: "Access Exclusive Content", color: "#71fa94" },
  { id: "vip", text: "Win Backstage Passes", color: "#71fa94" },
  { id: "vip", text: "20% Off Merch Store", color: "#71fa94" },
  { id: "vip", text: "Submit Demos for Feedback", color: "#71fa94" },
  { id: "vip", text: "Ticket & Merch Giveaways", color: "#71fa94" },
  { id: "vip", text: "Behind-the-Scenes Content", color: "#71fa94" },
];

export default function VIPpop() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <>
      <Button onClick={onOpen}>VIP Pop UpDo</Button>

      <Modal motionPreset="none" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent
          border="1px solid #fff"
          borderRadius="10px"
          bgGradient="linear(to-r, #0e0725, #5c03bc, #e536ab)"
          {...popupWidth}
          height="70%" // Fixed height
          overflowY="auto"
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          }}
        >
          <Flex position="absolute" right="10px" top="10px">
            <FiX
              color="#fff"
              onClick={onClose}
              fontSize="24px"
              cursor="pointer"
            />
          </Flex>
          <VStack p="0px" gap="0">
            <VStack pt="30px">
              <Avatar
                display="block"
                flexDirection="row"
                showBorder
                borderColor="cyan"
                width="50px"
                height="50px"
                src="https://files.djfan.app/cache/706eec1f-ea13-41e4-a3f7-fd4dbc98ced2.webp"
              />
              <Heading
                fontSize="25px"
                borderRadius="5px"
                lineHeight="1em"
                fontWeight="600"
                mb="10px"
                color="#fff"
              >
                Become a VIP for only $1
              </Heading>
              <HStack>
                <Button
                  px="10px"
                  fontSize="18px"
                  height="38px"
                  color="#111"
                  bg="#fff"
                  border="1px solid #111"
                  lineHeight="1em"
                  _hover={{ bg: "#fff" }}
                  onClick={() => {
                    window.location.href = "https://auth.djfan.app/auth/signin";
                  }}
                >
                  JOIN NOW
                </Button>
              </HStack>
            </VStack>
            <VStack bg="#111" w="100%">
              <Heading
                fontSize="20px"
                borderRadius="5px"
                lineHeight="1em"
                fontWeight="600"
                pt="20px"
                pb="10px"
                color="#fff"
                w="100%"
                textAlign="center"
              >
                What do VIPs get?
              </Heading>
              <Heading
                fontSize="14px"
                borderRadius="5px"
                lineHeight="1em"
                fontWeight="600"
                color="#111"
                display="flex"
                gap="5px"
                textAlign="center"
                bg="#71fa94"
                px="10px"
                py="5px"
              >
                Click <FaQuestionCircle fontSize="14px" /> to learn more
              </Heading>
            </VStack>
            <VIPlist />
          </VStack>

          <VStack
            position="fixed" // Changed from fixed to absolute
            bottom="0"
            left="0"
            w="100%"
            justifyContent="center"
            py="15px"
            opacity={"1"}
            bgGradient="linear(to-r, #0e0725, #5c03bc, #e536ab)"
          >
            <Heading
              fontSize="18px"
              borderRadius="5px"
              lineHeight="1em"
              fontWeight="600"
              color="#fff"
              textAlign="center"
            >
              Access all Richy Ahmed's VIP content & perks
            </Heading>
            <HStack>
              <Button
                px="10px"
                fontSize="18px"
                height="38px"
                color="#111"
                bg="#fff"
                border="1px solid #111"
                lineHeight="1em"
                _hover={{ bg: "#fff" }}
                onClick={() => {
                  window.location.href = "https://auth.djfan.app/auth/signin";
                }}
              >
                JOIN NOW
              </Button>
            </HStack>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
}
