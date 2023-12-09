import React, { useState } from "react";
import {
  Flex,
  Heading,
  Box,
  Image,
  HStack,
  VStack,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { FiX, FiCheck, FiHelpCircle } from "react-icons/fi";
import { FaQuestion, FaQuestionCircle } from "react-icons/fa";
import ListHeading from "./ListHeading";

const popupWidth = {
  w: { base: "100%", md: "590px" },
  minW: { base: "100%", md: "590px" },
};

const options = [
  {
    id: "free",
    text: "Access to free content",
    color: "#fff",
    description:
      "View all free content posted by <b>ALL DJs</b>, including videos, tracks, mixes, and galleries.",
  },
  {
    id: "free",
    text: "First-to-know DJ updates",
    color: "#fff",
    description:
      "Receive real-time updates about your favorite DJs, including tour announcements and new releases.",
  },
  {
    id: "vip",
    text: "Detailed Tour Schedule",
    color: "#71fa94",
    description:
      "Get a comprehensive schedule of your favorite DJs' tours, including exclusive VIP shows.",
  },
  {
    id: "vip",
    text: "Private Playlists & Setlists",
    color: "#71fa94",
    description:
      "Access specially curated playlists and setlists available only to VIP members.",
  },
  {
    id: "vip",
    text: "Access Unreleased Music",
    color: "#71fa94",
    description:
      "Enjoy early access to new music before it's released to the general public.",
  },
  {
    id: "vip",
    text: "Preview New Tracks",
    color: "#71fa94",
    description:
      "Listen to snippets of upcoming releases exclusively as a VIP member.",
  },
  {
    id: "vip",
    text: "Community Chat",
    color: "#71fa94",
    description:
      "Engage in conversations with other VIP members and sometimes the DJs themselves in a VIP-only chat.",
  },
  {
    id: "vip",
    text: "Meet & Greet Invitations",
    color: "#71fa94",
    description:
      "Get invitations to meet & greet events to interact with DJs in person.",
  },
  {
    id: "vip",
    text: "Obtain Guestlist Places",
    color: "#71fa94",
    description:
      "Get a chance to be on the guestlist for special DJ events and shows.",
  },
  {
    id: "vip",
    text: "Purchase Tickets Early",
    color: "#71fa94",
    description:
      "Enjoy priority access to ticket sales for tours, festivals, and other events.",
  },
  {
    id: "vip",
    text: "Access Exclusive Content",
    color: "#71fa94",
    description:
      "View VIP-only content including behind-the-scenes footage, interviews, and more.",
  },
  {
    id: "vip",
    text: "Win Backstage Passes",
    color: "#71fa94",
    description:
      "Participate in contests to win backstage passes and get a behind-the-scenes experience.",
  },
  {
    id: "vip",
    text: "20% Off Merch Store",
    color: "#71fa94",
    description:
      "Enjoy a 20% discount on all merchandise from our online store.",
  },
  {
    id: "vip",
    text: "Submit Demos for Feedback",
    color: "#71fa94",
    description:
      "Get your music demos reviewed by professionals for constructive feedback.",
  },
  {
    id: "vip",
    text: "Ticket & Merch Giveaways",
    color: "#71fa94",
    description:
      "Enter exclusive contests to win free tickets to shows and merchandise.",
  },
  {
    id: "vip",
    text: "Behind-the-Scenes Content",
    color: "#71fa94",
    description:
      "Gain access to exclusive behind-the-scenes content from rehearsals, tours, and more.",
  },
];

export default function VIPlist() {
  const [show, setShow] = useState("both");

  const toggleShow = () => {
    setShow(show === "both" ? "free" : "both");
  };
  return (
    <Flex
      w="100%"
      justifyContent="center"
      bgGradient="linear(to-r, #0e0725, #5c03bc, #e536ab)"
      flexDir={"column"}
      alignItems="center"
      height="100%"
    >
      <ListHeading />
      <Flex
        justifyContent="center"
        w="100%"
        flexWrap="wrap"
        gap={{ base: "10px", md: "20px" }}
        pb="15px"
        pt="15px"
        px="20px"
      >
        {options.map((option) => {
          const shouldDisplay =
            show === "both" || (show === "free" && option.id === "free");

          return (
            <Popover id={option.id} key={option.text} isLazy>
              <PopoverTrigger>
                <HStack
                  alignItems="center"
                  fontSize="16px"
                  cursor="pointer"
                  opacity={shouldDisplay ? 1 : 0}
                  pointerEvents={shouldDisplay ? "auto" : "none"}
                  w="fit-content"
                  px="8px"
                  py="5px"
                  gap="10px"
                  bg="#fff"
                  color="#111"
                  fontWeight="600"
                  borderRadius="5px"
                >
                  <Box>{option.text}</Box>
                  <Box opacity="0.8" _hover={{ opacity: "1" }}>
                    <FaQuestionCircle fontSize="14px" />
                  </Box>
                </HStack>
              </PopoverTrigger>
              <PopoverContent p="0px">
                <PopoverArrow />
                <Flex flexDirection="column">
                  <HStack
                    bg="#71fa94"
                    color="#fff"
                    h="40px"
                    pl="15px"
                    pr="10px"
                    justifyContent={"space-between"}
                  >
                    <Heading color="#111" fontSize={"18px"}>
                      {option.text}
                    </Heading>
                    <PopoverCloseButton
                      as={FiX}
                      color="#111"
                      boxSize={"25px"}
                      position="unset"
                      p="0"
                      cursor={"pointer"}
                    />
                  </HStack>
                  <Text py="10px" px="15px">
                    {option.description}
                  </Text>
                </Flex>
              </PopoverContent>
            </Popover>
          );
        })}
      </Flex>
      <VStack
        bg="#fff"
        pt="10px"
        pb="15px"
        px="15px"
        mb="20px"
        mt="10px"
        borderRadius="15px"
        gap="10px"
      >
        <Heading fontSize="18px" color="#111" fontWeight={"600"}>
          How much more do I get as a VIP?
        </Heading>

        <Heading
          fontSize="16px"
          lineHeight="1em"
          px="10px"
          py="8px"
          bg="#71fa94"
          onClick={toggleShow}
          borderRadius="8px"
          cursor="pointer"
          border="1px solid #71fa94"
          _hover={{ border: "1px solid #111" }}
        >
          {show === "both" ? "COMPARE NOW" : "DISPLAY VIP BENEFITS"}
        </Heading>
      </VStack>
    </Flex>
  );
}
