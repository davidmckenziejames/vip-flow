import * as React from "react";
import {
  Avatar,
  Flex,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  AvatarBadge,
  Menu,
  MenuButton,
  Link,
  MenuItem,
  MenuList,
  HStack,
  Tag,
} from "@chakra-ui/react";
import { BiLike, BiTrash } from "react-icons/bi";
import {
  FiShare,
  FiEye,
  FiMoreVertical,
  FiHeart,
  FiSend,
} from "react-icons/fi";
import PostCarousel from "../Profile/Feed/Gallery/PostCarousel";

type PostMenuProps = {
  icon: React.ElementType;
  label: string;
};

const PostMenu = ({ icon, label }: PostMenuProps) => (
  <MenuItem py="10px" aria-label={label}>
    <Box as={icon} size="14px" mr="8px" />
    <Text>{label}</Text>
  </MenuItem>
);

export default function ImagePost() {
  return (
    <Card overflow="hidden" border="2px solid black" borderRadius="15px">
      <CardBody p="0">
        <Flex
          align="center"
          gap="4px"
          bg="#805ad5"
          position={"absolute"}
          zIndex="1000"
          color="#fff"
          px="6px"
          py="4px"
        >
          <Box as={FiEye} size="14px" />
          <Text fontSize="14px" fontWeight="600">
            VIP POST
          </Text>
        </Flex>
        <PostCarousel />
      </CardBody>
      <CardFooter p="0" pb="10px" flexDirection="column">
        <Flex borderBottom="2px solid black">
          <Text as="span" px="20px" py="15px">
            <Box as="span" fontSize="15px" fontWeight="500">
              Playlist for the day: Good vibes, fresh beats, and a moment worth
              a thousand songs... This is how we tune out the world and turn up
              the volume!
            </Box>
          </Text>
        </Flex>
        <Flex flexDirection={"column"} pt="15px" gap="15px" px="10px" w="100%">
          <Flex gap="8px" w="100%" position="relative">
            <Avatar width="30px" height="30px" mt="4px" />
            <Flex flexDirection={"column"}>
              <HStack>
                <Link as="span" fontWeight="700" mr="5px" fontSize="16px">
                  @richyahmed
                </Link>
                <Text>10h</Text>
                <Text>7 likes</Text>
              </HStack>
              <Text>This was an amazing set</Text>
            </Flex>
            <Box position="absolute" right="5px" top="8px">
              <FiHeart />
            </Box>
          </Flex>
          <Flex gap="8px" w="100%" position="relative">
            <Avatar width="30px" height="30px" mt="4px" />
            <Flex flexDirection={"column"}>
              <HStack>
                <Link as="span" fontWeight="700" mr="5px" fontSize="16px">
                  @timmy
                </Link>
                <Text>14h</Text>
                <Text>2 likes</Text>
              </HStack>
              <Text>Way to go</Text>
            </Flex>
            <Box position="absolute" right="5px" top="8px">
              <FiHeart />
            </Box>
          </Flex>
          <InputGroup size="lg">
            <Input
              pr="4.5rem"
              fontSize="15px"
              type="text"
              bg="white"
              placeholder="Type your comment..."
              borderRadius="15px"
            />
            <InputRightElement width="3rem">
              <Box
                mr="10px"
                cursor="pointer"
                fontSize={"16px"}
                as="button"
                color="#7760e3"
                fontWeight="600"
                p="8px"
              >
                Post
              </Box>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </CardFooter>
    </Card>
  );
}
