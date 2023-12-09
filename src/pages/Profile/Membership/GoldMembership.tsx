import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Flex,
  List,
  ListIcon,
  ListItem,
  Text,
  CardFooter,
  Heading,
} from "@chakra-ui/react";

import React, { useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

export default function GoldMembership() {
  const [isHovered, setIsHovered] = useState(false);
  const items = [
    "Access Exclusive Content",
    "Detailed Tour Schedule",
    "Private Playlists & Setlists",
    "Early Access to New Music",
    "Community Chat",
    "Purchase Tickets Early",
    "Meet & Greet Invitations",
    "Obtain Guestlist Places",
    "Win Backstage Passes",
    "20% Off Merch Store",
    "Submit Demos for Feedback",
    "Ticket & Merch Giveaways",
    "Behind-the-Scenes Content",
  ];

  const strikeThroughItems = [
    "Meet & Greet Invitations",
    "Obtain Guestlist Places",
    "Win Backstage Passes",
    "20% Off Merch Store",
    "Submit Demos for Feedback",
    "Ticket & Merch Giveaways",
    "Behind-the-Scenes Content",
  ];

  return (
    <>
      <Card
        minW="350px"
        height="100%"
        align="center"
        overflow="hidden"
        borderRadius="15px"
      >
        <CardHeader pt="25px" pb="10px" m="0" w="full" justifyContent="center">
          <Text
            fontWeight="600"
            textAlign="center"
            fontSize={{ base: "20px", md: "24px" }}
            color="#111111"
          >
            Gold Membership
          </Text>
          <Flex justifyContent="center" gap="5px" align="center">
            <Text display="flex" alignItems="center">
              <Box
                as="span"
                fontSize={{ base: "22px", md: "24px" }}
                fontWeight="400"
              >
                $
              </Box>
              <Box
                as="span"
                fontSize={{ base: "28px", md: "30px" }}
                fontWeight="600"
              >
                5.00
              </Box>
            </Text>
            <Text
              fontSize={{ base: "12px", md: "12px" }}
              color="#999999"
              fontWeight="600"
              mb={{ base: "-12px", md: "-12px" }}
            >
              / MONTH
            </Text>
          </Flex>
        </CardHeader>
        <CardBody
          display="flex"
          flexDirection="column"
          alignContent="center"
          p="0"
          pb="25px"
        >
          <Text color="#8553f4" pb="10px" textAlign="center" fontWeight="600">
            <i>What you get?</i>
          </Text>
          <List spacing={4} w="100%">
            {items.map((item) => (
              <ListItem
                key={item}
                display="flex"
                flexDirection="row"
                alignItems="center"
              >
                <ListIcon
                  as={
                    strikeThroughItems.includes(item)
                      ? FaTimesCircle
                      : FaCheckCircle
                  }
                  color={
                    strikeThroughItems.includes(item) ? "#FF7777s" : "#22F07E"
                  }
                />
                {strikeThroughItems.includes(item) ? (
                  <Box as="s" color="gray.400">
                    {item}
                  </Box>
                ) : (
                  item
                )}
              </ListItem>
            ))}
          </List>
        </CardBody>

        <CardFooter
          borderTop="1px solid black"
          bg="#8553f4"
          w="full"
          py="20px"
          justifyContent="center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          _hover={{
            background: "#22f07e",
          }}
        >
          <Heading
            display="flex"
            flexDirection="row"
            alignItems="center"
            color="white"
            as="a"
            href="#"
            gap="10px"
            fontSize={{ base: "20px", md: "22px" }}
          >
            SELECT PLAN
            <Box fontSize={{ base: "14px", md: "16px" }}>
              <Box as={isHovered ? FaCheck : FaArrowRight} />
            </Box>
          </Heading>
        </CardFooter>
      </Card>
    </>
  );
}
