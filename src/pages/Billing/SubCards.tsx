import {
  Box,
  Flex,
  Link,
  VStack,
  Text,
  Avatar,
  HStack,
} from "@chakra-ui/react";
import { FaHeadphones } from "react-icons/fa";
import ManageButton from "./components/ManageButton";
import VIPbadge from "./components/VIPbadge";
import Goldbadge from "./components/GoldBadge";

export default function SubCards() {
  return (
    <Box
      display="flex"
      w="100%"
      gap="30px"
      flexWrap="wrap"
      justifyContent="center"
    >
      <Flex>
        <VStack
          w="300px"
          bg="#fff"
          boxShadow="2xl"
          border="2px black solid"
          px="10px"
          py="20px"
          gap="10px"
          position="relative"
        >
          <Box pos="absolute" top="10px" right="10px">
            <VIPbadge />
          </Box>
          <Flex flexDirection="column" gap="15px" align="center">
            <Avatar
              size={"xl"}
              src={
                "https://djfan.ams3.cdn.digitaloceanspaces.com/2023/05/ff-bc341bdfde4ec0d1a583944ca302aa39-ff-richy_ahmed_metrodanceclub-358x500-1.jpg"
              }
            />
            <Link
              fontSize="20px"
              as="a"
              href="/profile"
              fontWeight="600"
              lineHeight="1em"
            >
              Richy Ahmed
            </Link>
          </Flex>
          <Flex flexDirection="column" gap="10px">
            <HStack fontSize="14px" color="#696969">
              <Text>Started: 11/10/12</Text>
              <Box>•</Box>
              <Text>$10 per month </Text>
            </HStack>
            <HStack justifyContent="space-between">
              <ManageButton />

              <Box
                p="0"
                display={"flex"}
                fontSize={"14px"}
                bg="#111111"
                color="#fff"
                border="2px #111111 solid"
                fontWeight={"600"}
                px="10px"
                py="8px"
                gap="5px"
                lineHeight="1em"
                alignItems={"center"}
                borderRadius={"5px"}
                cursor="pointer"
                _hover={{
                  border: "2px solid #57EEFA",
                }}
              >
                <FaHeadphones fontSize="12px" />
                View Profile
              </Box>
            </HStack>
          </Flex>
        </VStack>
      </Flex>
      <Flex>
        <VStack
          w="300px"
          bg="#fff"
          boxShadow="2xl"
          border="2px black solid"
          px="10px"
          py="20px"
          gap="10px"
          position="relative"
        >
          <Box pos="absolute" top="10px" right="10px">
            <Goldbadge />
          </Box>
          <Flex flexDirection="column" gap="15px" align="center">
            <Avatar
              size={"xl"}
              src={
                "https://djfan.ams3.cdn.digitaloceanspaces.com/2023/05/ff-8e14e364f1a0dab2636d07aecd4b0988-ff-EC21F503-E96D-4B3E-93E2-0BD81EB4FAAC.jpeg"
              }
            />
            <Link
              fontSize="20px"
              as="a"
              href="/profile"
              fontWeight="600"
              lineHeight="1em"
            >
              DJ Exotic
            </Link>
          </Flex>
          <Flex flexDirection="column" gap="10px">
            <HStack fontSize="14px" color="#696969">
              <Text>Started: 11/10/12</Text>
              <Box>•</Box>
              <Text>$5 per month </Text>
            </HStack>
            <HStack justifyContent="space-between">
              <ManageButton />

              <Box
                p="0"
                display={"flex"}
                fontSize={"14px"}
                bg="#111111"
                color="#fff"
                border="2px #111111 solid"
                fontWeight={"600"}
                px="10px"
                py="8px"
                gap="5px"
                lineHeight="1em"
                alignItems={"center"}
                borderRadius={"5px"}
                cursor="pointer"
                _hover={{
                  border: "2px solid #57EEFA",
                }}
              >
                <FaHeadphones fontSize="12px" />
                View Profile
              </Box>
            </HStack>
          </Flex>
        </VStack>
      </Flex>
    </Box>
  );
}
