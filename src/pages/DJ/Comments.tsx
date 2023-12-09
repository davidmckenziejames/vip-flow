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
import {
  FaComment,
  FaCommentAlt,
  FaHeart,
  FaRegCommentAlt,
} from "react-icons/fa";

type PostMenuProps = {
  icon: React.ElementType;
  label: string;
};

export default function Comments() {
  return (
    <Flex flexDirection={"column"} py="15px" gap="15px" px="15px" w="100%">
      <HStack w="100%" justifyContent={"space-between"}>
        <Text fontWeight="700" mr="5px" fontSize="16px">
          Discussion
        </Text>
        <HStack gap="18px">
          <Text
            lineHeight={"1em"}
            display="flex"
            alignContent={"center"}
            fontSize="14px"
            gap="4px"
            fontWeight={"500"}
            color="#6A6A6A"
          >
            100 <FaRegCommentAlt fontSize="16px" />
          </Text>
          <Text
            lineHeight={"1em"}
            display="flex"
            alignContent={"center"}
            fontSize="14px"
            gap="4px"
            fontWeight={"600"}
            color="#6A6A6A"
          >
            700 <FiHeart fontSize="16px" />
          </Text>
        </HStack>
      </HStack>
      <Flex gap="8px" w="100%" position="relative">
        <Avatar
          width="30px"
          height="30px"
          mt="4px"
          src="https://files.djfan.app/cache/706eec1f-ea13-41e4-a3f7-fd4dbc98ced2.webp"
        />
        <Flex flexDirection={"column"}>
          <HStack>
            <Link as="span" fontWeight="700" mr="5px" fontSize="16px">
              @richyahmed
            </Link>
            <Text>10h</Text>
            <Text>7 likes</Text>
          </HStack>
          <Text>Hope you guys enjoy!</Text>
        </Flex>
        <Box position="absolute" right="5px" top="8px">
          <FaHeart color="#FF7373" />
        </Box>
      </Flex>
      <Flex gap="8px" w="100%" position="relative">
        <Avatar
          width="30px"
          height="30px"
          mt="4px"
          src="https://files.djfan.app/cache/175d23ef-6b48-4629-873a-ccbcec60b1e7.webp"
        />
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
      <Text fontSize="14px" px="15px" color="#7d5aeb" fontWeight={"500"}>
        View more comments
      </Text>
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
  );
}
