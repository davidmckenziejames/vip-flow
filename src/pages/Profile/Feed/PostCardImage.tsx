import {
  Avatar,
  Flex,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  AvatarBadge,
  Menu,
  MenuButton,
  Link,
  MenuItem,
  MenuList,
  HStack,
} from "@chakra-ui/react";
import { BiEdit, BiTrash } from "react-icons/bi";
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
    <Card border="2px solid black" borderRadius="15px">
      <CardHeader borderBottom="2px solid black">
        <Flex gap={4}>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar
              name="Richy Ahmed"
              border="1px solid cyan"
              src="https://files.djfan.app/cache/cfd61f22-662d-4d80-bfca-694b10ef6c89.webp"
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
                Exotic DJ
              </Link>
              <HStack>
                <Text fontSize="12px" color="gray.500" fontWeight="500">
                  6 hours ago
                </Text>
                <Flex align="center" gap="4px">
                  <Box as={FiEye} size="14px" color="#805ad5" />
                  <Text fontSize="14px" color="#805ad5" fontWeight="600">
                    Gold
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
              <PostMenu icon={BiEdit} label="Edit Post" />
              <PostMenu icon={BiTrash} label="Delete Post" />
              <PostMenu icon={FiShare} label="Share Post" />
            </MenuList>
          </Menu>
        </Flex>
      </CardHeader>
      <CardBody p="0">
        <Image
          objectFit="cover"
          src="http://media.djfan.app/images/exotic.jpg"
          alt="DJ"
        />
      </CardBody>
      <CardFooter px="10px" py="15px" flexDirection="column" mb="5px">
        <PostActions />
        <Text as="span" px="10px">
          <Link as="span" fontWeight="700" mr="5px" fontSize="16px">
            @exoticdj
          </Link>
          <Box as="span" fontSize="15px" fontWeight="500">
            Los planes de Dios … siempre perfectos 🤪🤩
          </Box>
        </Text>
        <Link px="10px" fontSize="14px" fontWeight="500" pt="10px" href="#">
          View 67 comments
        </Link>
      </CardFooter>
    </Card>
  );
}
