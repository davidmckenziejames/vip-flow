import {
  Avatar,
  Flex,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  IconButton,
  Heading,
  Icon,
  Input,
  Button,
  Image,
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
import { FiShare, FiEye, FiMoreVertical } from "react-icons/fi";
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

export default function PostCardImage() {
  return (
    <Card border="2px solid black" borderRadius="15px" overflow="hidden">
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
        <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1542628682-88321d2a4828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="DJ"
        />
      </CardBody>
      <CardFooter
        px="15px"
        py="15px"
        flexDirection="column"
        borderBottom="2px solid black"
      >
        <PostActions />
        <Text as="span" pb="5px" px="10px">
          <Link as="span" fontWeight="700" mr="5px" fontSize="16px">
            @richyahmed
          </Link>
          <Box as="span" fontSize="15px" fontWeight="500">
            Playlist for the day: Good vibes, fresh beats, and a moment worth a
            thousand songs... This is how we tune out the world and turn up the
            volume!
          </Box>
        </Text>
      </CardFooter>

      <Card p={{ base: "15px", md: "15px" }}>
        <Flex justifyContent="space-between" p={0} mt={2} pb="10px">
          <Avatar src="" w="40px" h="40px" mr="10px" />
          <Input
            placeholder="Write a comment..."
            display="flex"
            width="100%"
            mr="10px"
          />
          <Button variant="solid" size="md" display="flex" colorScheme="purple">
            Post
          </Button>
        </Flex>
      </Card>
    </Card>
  );
}
