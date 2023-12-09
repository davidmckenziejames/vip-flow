import * as React from "react";
import {
  Avatar,
  Flex,
  Box,
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
import { FiShare, FiEye, FiMoreVertical, FiHeart } from "react-icons/fi";
import PostCarousel from "./Gallery/PostCarousel";
import PostActions from "./PostActions";

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

export default function PostCardImageCarousel() {
  return (
    <Card border="2px solid black" borderRadius="15px">
      <CardHeader borderBottom="2px solid black">
        <Flex gap={4}>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar
              name="Richy Ahmed"
              border="1px solid cyan"
              src="https://creators.djfan.app/wp-content/uploads/jet-engine-forms/175/2023/05/WhatsApp-Image-2023-05-20-at-17.39.37.jpeg"
            >
              <AvatarBadge
                bg="green.500"
                boxSize="1.25rem"
                borderColor="white"
                display="block"
                justifyContent="flex-end"
              />
            </Avatar>

            <Box>
              <Link pb="2px" size="sm" fontWeight="700">
                Richy Ahmed
              </Link>
              <HStack>
                <Text fontSize="12px" color="gray.500" fontWeight="500">
                  6 hours ago
                </Text>
                <Flex align="center" gap="4px">
                  <Box as={FiEye} size="14px" color="#805ad5" />
                  <Text fontSize="14px" color="#805ad5" fontWeight="600">
                    VIP
                  </Text>
                </Flex>
              </HStack>
            </Box>
          </Flex>
          <Menu>
            <MenuButton transition="all 0.3s" _focus={{ boxShadow: "none" }}>
              <Box as={FiMoreVertical} size="20px" color="gray" />
            </MenuButton>
            <MenuList
              minW="max-content"
              fontSize="14px"
              bg="white"
              p="0"
              m="0"
              borderColor="gray.200"
            >
              <PostMenu icon={BiLike} label="Edit Post" />
              <PostMenu icon={BiTrash} label="Delete Post" />
              <PostMenu icon={FiShare} label="Share Post" />
            </MenuList>
          </Menu>
        </Flex>
      </CardHeader>
      <CardBody p="0">
        <PostCarousel />
      </CardBody>
      <CardFooter p="0" flexDirection="column">
        <Flex borderBottom="2px solid black">
          <Text as="span" px="20px" py="15px">
            <Box as="span" fontSize="15px" fontWeight="500">
              Playlist for the day: Good vibes, fresh beats, and a moment worth
              a thousand songs... This is how we tune out the world and turn up
              the volume!
            </Box>
          </Text>
        </Flex>
        <Flex px="20px" py="10px" justifyContent="space-between" mb="0px">
          <Flex justifyContent="flex-start" align="center" gap="10px">
            <Link as="span" fontWeight="700" mr="5px" fontSize="16px">
              @richyahmed
            </Link>
          </Flex>
          <Flex justifyContent="flex-end" gap="10px">
            <Link>
              <FiHeart size="22px" color="111" />
            </Link>
            <Link>
              <Box as={FiShare} size="22px" color="black" />
            </Link>
          </Flex>
        </Flex>
      </CardFooter>
    </Card>
  );
}
