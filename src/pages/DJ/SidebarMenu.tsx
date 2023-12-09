"use client";

import {
  Box,
  Button,
  CloseButton,
  Flex,
  Image,
  Icon,
  useColorModeValue,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiMail,
  FiMessageCircle,
  FiUsers,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { FaListOl, FaShoppingBag } from "react-icons/fa";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "View Profile", icon: FiHome },
  { name: "Posts", icon: FiTrendingUp },
  { name: "Products", icon: FaShoppingBag },
  { name: "Audience", icon: FiUsers },
  { name: "Earnings", icon: FiSettings },
  { name: "Invitations", icon: FiSettings },
  { name: "Messages", icon: FiMail },
  { name: "Settings", icon: FiSettings },
];

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      color="white"
    >
      <Flex
        align="center"
        px="10px"
        py="10px"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "white",
          color: "#111",
        }}
        {...rest}
      >
        {icon && <Icon mr="3" fontSize="16" as={icon} />}
        {children}
      </Flex>
    </Box>
  );
};

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg="black"
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        //bgGradient="linear(to-r, #0e0725, #5c03bc, #e536ab)"

        borderBottom="1px solid #ffffff"
        w="100%"
        justifyContent="space-between"
        py="5px"
        height="70px"
        alignItems="center"
        mb="15px"
        px={{ base: 4, md: 4 }}
      >
        <Box as="a" href="/">
          <Image
            id="logo"
            w="120px"
            src="https://media.djfan.app/images/djfan-logo-beta.png"
          />
        </Box>
        <CloseButton
          color="#fff"
          display={{ base: "flex", md: "none" }}
          onClick={onClose}
        />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}

      <Flex px={{ base: 6 }} w="100%" mt="10px">
        <Button w="100%">Create Post</Button>
      </Flex>
    </Box>
  );
};

export default SidebarContent;
