import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { FiShare, FiMoreVertical } from "react-icons/fi";
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
export default function EditPost() {
  return (
    <>
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
    </>
  );
}
