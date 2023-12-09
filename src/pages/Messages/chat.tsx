import {
  Box,
  Avatar,
  VStack,
  Icon,
  Text,
  Button,
  Heading,
  HStack,
  Image,
  Menu,
  MenuButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  MenuItem,
  MenuList,
  Flex,
  Stack,
} from "@chakra-ui/react";
import {
  BiEdit,
  BiTrash,
  BiFlag,
  BiShare,
  BiSolidFlagAlt,
} from "react-icons/bi";
import { FaHeadphones } from "react-icons/fa";
import {
  FiShare,
  FiHeart,
  FiEye,
  FiMoreVertical,
  FiDownload,
  FiSend,
  FiMoreHorizontal,
} from "react-icons/fi";
import { IoSend } from "react-icons/io5";
import styled from "styled-components";

const CurvedShape = () => {
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 60 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 42C2 19.9086 19.9086 2 42 2H86"
        stroke="#7d5aeb"
        strokeWidth="5"
      />
    </svg>
  );
};

import { RiVipCrownFill } from "react-icons/ri";

export default function Chat() {
  return (
    <Box bg="#ededed" w="100%" h="100vh" p="20px">
      <VStack
        gap="0"
        w="100%"
        bg="white"
        left="10px"
        borderRadius="10px"
        overflow="hidden"
      >
        <VStack w="100%" py="15px" pr="15px" pl="10px">
          <HStack w="100%" gap="10px" alignItems="flex-start">
            <Avatar
              w="40px"
              height="40px"
              src="https://files.djfan.app/cache/706eec1f-ea13-41e4-a3f7-fd4dbc98ced2.webp"
            />
            <Stack w="100%" gap="2px">
              <HStack alignItems="flex-start" justify="space-between">
                <HStack gap="4px">
                  <Text
                    display="flex"
                    fontSize="15px"
                    fontWeight="600"
                    lineHeight="1em"
                    alignItems="center"
                    gap="4px"
                  >
                    Richy Ahmed
                    <FaHeadphones fontSize="15px" color="#7d5aeb" />
                  </Text>
                  <Text lineHeight="1em" fontSize="10px" ml="2px" mb="-4px">
                    12 hours ago
                  </Text>
                </HStack>
                <HStack alignItems="flex-start">
                  <Menu>
                    <MenuButton
                      transition="all 0.3s"
                      _focus={{ boxShadow: "none" }}
                    >
                      <Box
                        as={FiMoreHorizontal}
                        size="20px"
                        color="gray"
                        mt="-3px"
                      />
                    </MenuButton>
                    <MenuList
                      minW="max-content"
                      fontSize="14px"
                      bg="white"
                      p="0"
                      m="0"
                      borderColor="gray.200"
                    >
                      <MenuItem py="10px" aria-label="label">
                        <Box as={BiShare} size="14px" mr="8px" />
                        <Text>Reply</Text>
                      </MenuItem>
                      <MenuItem py="10px" aria-label="label">
                        <Box as={BiSolidFlagAlt} size="14px" mr="8px" />
                        <Text>Report</Text>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </HStack>
              </HStack>

              <Text fontSize="14px" lineHeight="1.4em">
                Hey guys I have two guest list s[pots available for my gig
                tomorrow. who wants them?
              </Text>
            </Stack>
          </HStack>
        </VStack>
      </VStack>
      <VStack
        gap="0"
        w="100%"
        mt="10px"
        bg="white"
        left="10px"
        borderRadius="10px"
        overflow="hidden"
      >
        <VStack w="100%" py="15px" pr="15px" pl="10px">
          <HStack w="100%" gap="10px" alignItems="flex-start">
            <Avatar
              w="40px"
              height="40px"
              src="https://files.djfan.app/cache/c7ec77d0-abff-4038-bb92-28a2e21fd88d.webp"
            />

            <Stack w="100%" gap="2px">
              <HStack alignItems="flex-start" justify="space-between">
                <HStack gap="4px">
                  <Text
                    display="flex"
                    fontSize="15px"
                    fontWeight="600"
                    lineHeight="1em"
                    alignItems="center"
                    gap="4px"
                  >
                    Liz Jones
                    <RiVipCrownFill fontSize="15px" color="#06d6a0" />
                  </Text>
                  <Text lineHeight="1em" fontSize="10px" ml="2px" mb="-4px">
                    12 hours ago
                  </Text>
                </HStack>
                <HStack alignItems="flex-start">
                  <Menu>
                    <MenuButton
                      transition="all 0.3s"
                      _focus={{ boxShadow: "none" }}
                    >
                      <Box
                        as={FiMoreHorizontal}
                        size="20px"
                        color="gray"
                        mt="-3px"
                      />
                    </MenuButton>
                    <MenuList
                      minW="max-content"
                      fontSize="14px"
                      bg="white"
                      p="0"
                      m="0"
                      borderColor="gray.200"
                    >
                      <MenuItem py="10px" aria-label="label">
                        <Box as={BiShare} size="14px" mr="8px" />
                        <Text>Reply</Text>
                      </MenuItem>
                      <MenuItem py="10px" aria-label="label">
                        <Box as={BiSolidFlagAlt} size="14px" mr="8px" />
                        <Text>Report</Text>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </HStack>
              </HStack>

              <Text fontSize="14px" lineHeight="1.4em">
                Yes please! sign me up 💕
              </Text>
            </Stack>
          </HStack>
        </VStack>
      </VStack>
      <Box>
        <HStack
          mt="10px"
          mb="-10px"
          w="100%"
          gap="0px"
          justifyContent={"flex-start"}
          pl="30px"
        >
          <CurvedShape />
          <Flex
            borderRadius="5px"
            alignItems={"center"}
            bg="#e6e1ff"
            py="4px"
            px="15px"
            gap="5px"
            w="min-content"
          >
            <Avatar
              w="20px"
              height="20px"
              src="https://files.djfan.app/cache/c7ec77d0-abff-4038-bb92-28a2e21fd88d.webp"
            />
            <Text
              display="flex"
              fontSize="10px"
              fontWeight="600"
              lineHeight="1em"
              alignItems="center"
              isTruncated
              noOfLines={1}
            >
              Liz Jones
            </Text>
            <Text
              isTruncated
              maxW="100%"
              lineHeight="1em"
              fontSize="10px"
              ml="2px"
            >
              Yes please! sign me up 💕
            </Text>
          </Flex>
        </HStack>
        <VStack
          gap="0"
          w="100%"
          mt="10px"
          bg="white"
          left="10px"
          borderRadius="10px"
          overflow="hidden"
        >
          <VStack w="100%" py="15px" pr="15px" pl="10px">
            <HStack w="100%" gap="10px" alignItems="flex-start">
              <Avatar
                w="40px"
                height="40px"
                src="https://files.djfan.app/cache/305a64ec-5597-4327-8a94-761d044d49c8.webp"
              />

              <Stack w="100%" gap="2px">
                <HStack alignItems="flex-start" justify="space-between">
                  <HStack gap="4px">
                    <Text
                      display="flex"
                      fontSize="15px"
                      fontWeight="600"
                      lineHeight="1em"
                      alignItems="center"
                      gap="4px"
                    >
                      Jess Taylor
                      <RiVipCrownFill fontSize="15px" color="#06d6a0" />
                    </Text>
                    <Text lineHeight="1em" fontSize="10px" ml="2px" mb="-4px">
                      2 hours ago
                    </Text>
                  </HStack>
                  <HStack alignItems="flex-start">
                    <Menu>
                      <MenuButton
                        transition="all 0.3s"
                        _focus={{ boxShadow: "none" }}
                      >
                        <Box
                          as={FiMoreHorizontal}
                          size="20px"
                          color="gray"
                          mt="-3px"
                        />
                      </MenuButton>
                      <MenuList
                        minW="max-content"
                        fontSize="14px"
                        bg="white"
                        p="0"
                        m="0"
                        borderColor="gray.200"
                      >
                        <MenuItem py="10px" aria-label="label">
                          <Box as={BiShare} size="14px" mr="8px" />
                          <Text>Reply</Text>
                        </MenuItem>
                        <MenuItem py="10px" aria-label="label">
                          <Box as={BiSolidFlagAlt} size="14px" mr="8px" />
                          <Text>Report</Text>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </HStack>
                </HStack>

                <Text fontSize="14px" lineHeight="1.4em">
                  Wooooo! me too me too
                </Text>
              </Stack>
            </HStack>
          </VStack>
        </VStack>
      </Box>
      <Flex position={"fixed"} bottom="4px" left={"0"} width={"100%"} p="10px">
        <InputGroup size="lg">
          <Input
            pr="4.5rem"
            fontSize="15px"
            type="text"
            bg="white"
            placeholder="Type your message..."
            borderRadius="15px"
          />
          <InputRightElement width="3rem">
            <Box
              cursor="pointer"
              _hover={{ bg: "#7d5aeb" }}
              as="button"
              p="8px"
              bg="#7198fa"
              borderRadius="50px"
            >
              <FiSend color="#fff" />
            </Box>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
}
