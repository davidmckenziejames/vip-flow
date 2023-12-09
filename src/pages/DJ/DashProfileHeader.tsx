import {
  Avatar,
  Box,
  Button,
  Flex,
  Stack,
  Icon,
  Text,
  Popover,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Input,
  useToast,
  useDisclosure,
  HStack,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  FiHeadphones,
  FiEdit,
  FiCamera,
  FiMoreHorizontal,
  FiShare,
  FiEye,
} from "react-icons/fi";
import { useState } from "react";
import DJname from "./DJname";
import DJbio from "./DJbio";

export default function DashProfileHeader() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const avatarSizes = { base: "100px", sm: "100px" };
  const [avatarSrc, setAvatarSrc] = useState(
    "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
  );
  const toast = useToast();

  const handleFileChange = (event: any) => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setAvatarSrc(reader.result as string);
      toast({
        title: "Profile Image Updated",
        description: "Your profile image has been successfully updated.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box
      className="ProfileHeader"
      pt="20px"
      px="15px"
      pb="30px"
      mx="auto"
      bg="pink"
      position="relative"
      backgroundImage="url('https://www.stockportboilerinstallations.co.uk/wp-content/plugins/elementor/assets/images/placeholder.png')"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Flex zIndex="200" align="center" flexDirection="column">
        <HStack zIndex="200" w="100%" justify="flex-end">
          <Box position={"absolute"} right="15px" top="15px">
            <Menu>
              <MenuButton as={Box}>
                <FiMoreHorizontal fontSize={"24px"} color="#fff" />
              </MenuButton>
              <MenuList>
                <MenuItem>View Profile as Fan</MenuItem>
                <MenuItem>Manage Posts</MenuItem>
                <MenuItem>Edit Profile</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </HStack>
        <Box pt="0px" position="relative" _hover={{ zIndex: 1000 }}>
          <Avatar
            display="block"
            position="relative"
            flexDirection="row"
            showBorder
            borderColor="cyan"
            width={avatarSizes}
            height={avatarSizes}
            src={avatarSrc}
          />
          <Box
            position="absolute"
            right={0}
            bottom={0}
            opacity={1}
            _hover={{ opacity: 1 }}
            transition="opacity 0.2s"
            bg="#7d5aeb"
            p="6px"
            borderRadius="50px"
          >
            <FiCamera color="#fff" />
          </Box>
        </Box>
        <Stack
          spacing={0}
          align="center"
          justify="center"
          p={0}
          position="relative"
        >
          <DJname />
          <DJbio />
        </Stack>
      </Flex>
    </Box>
  );
}
