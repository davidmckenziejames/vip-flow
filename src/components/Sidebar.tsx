import {
  Box,
  CloseButton,
  Flex,
  Image,
  Stack,
  HStack,
  Avatar,
  Heading,
  Divider,
  Link,
} from "@chakra-ui/react";

import {
  FiHome,
  FiSettings,
  FiHeadphones,
  FiHeart,
  FiUserCheck,
} from "react-icons/fi";

import SidebarUser from "./SidebarUser";
import HeaderSearch from "./HeaderSearch";

const NavItem = ({ href, icon, children }) => (
  <Link href={href} color="white" fontSize="18px" mb="5px">
    <Flex align="center">
      <Box mr="8px" as={icon} />
      {children}
    </Flex>
  </Link>
);

const navItems = [
  { href: "/feed", icon: FiHome, label: "Feed" },
  { href: "/explore", icon: FiHeadphones, label: "Explore Creators" },
  { href: "/explore", icon: FiUserCheck, label: "Following" },
  { href: "/subscriptions", icon: FiHeart, label: "Subscriptions" },
  { href: "/settings", icon: FiSettings, label: "Settings" },
];

export default function Sidebar({ onClose, ...rest }) {
  return (
    <Box
      transition="3s ease"
      bg="black"
      borderRight="1px"
      borderRightColor="gray.200"
      width={{ base: "full", md: 60 }}
      pos="fixed"
      h="100%"
      {...rest}
    >
      <Flex
        direction="column"
        transition="3s ease"
        bg="black"
        borderRight="1px"
        borderRightColor="gray.200"
        w={{ base: "full", md: 60 }}
        pos="fixed"
        h="100%"
        display={display}
      >
        <Flex
          id="top-sidebar"
          h="50%"
          alignItems="center"
          m="0"
          justifyContent="flex-start"
          flexDirection="column"
        >
          <Flex
            height="20"
            w="full"
            display={{ base: "none", md: "flex" }}
            justifyContent="start"
            align="start"
            flexDirection="row"
            px="25px"
          >
            <Image
              src="https://djfan.app/wp-content/uploads/2023/07/djfan-logo-white-web.png"
              alt="DJfan Logo"
              width="100px"
              py="20px"
            />
          </Flex>
          <Flex
            display={{ base: "flex", md: "none" }}
            justifyContent="flex-end"
            w="full"
            px="3"
            py="3"
          >
            <CloseButton color="white" onClick={onClose} />
          </Flex>
          <Divider />

          <Flex
            flexDirection="column"
            mt="5px"
            gap="5px"
            w="full"
            justify="center"
            align="center"
          >
            <Box
              display={{ base: "flex", md: "none" }}
              px="25px"
              pt={{ base: "20px", md: "0" }}
            >
              <HeaderSearch />
            </Box>
            <Flex
              flexDirection="column"
              mt="5"
              w="full"
              px="5"
              gap="10px"
              justifyContent="center"
            >
              {navItems.map((nav, index) => (
                <Link key={index} to={nav.linkTo}>
                  <Button
                    leftIcon={nav.icon}
                    minW="120px"
                    width="100%"
                    justifyContent="flex-start"
                    bgColor="transparent"
                    color="white"
                    fontWeight="normal"
                    _hover={{
                      bgColor: "gray",
                    }}
                  >
                    {nav.label}
                  </Button>
                </Link>
              ))}
            </Flex>
          </Flex>
        </Flex>

        <Flex flexDirection="column" gap="10px" px="20px" height="50%">
          <Heading color="white" fontSize="16px" fontWeight="600">
            My Subscriptions
          </Heading>
          <Flex
            direction="column"
            gap="10px"
            w="full"
            maxH="250px"
            overflowY="auto"
          >
            {sortedUsers.map((user, index) => (
              <Link key={index} to="/profile">
                <HStack mt="5px" gap="10px">
                  <Avatar
                    height="30px"
                    width="30px"
                    border="1px solid cyan"
                    src={user.profile_picture}
                  />
                  \
                  <Heading color="white" fontSize="14px" fontWeight="600">
                    {user.display_name}
                  </Heading>
                  <Box
                    position="relative"
                    px="2"
                    py="0.5"
                    borderRadius="base"
                    bgColor="blue"
                    color="white"
                    fontSize="sm"
                  >
                    <Box
                      position="absolute"
                      top="-0.5"
                      right="-1"
                      w="2"
                      h="2"
                      borderRadius="full"
                      bgColor="red"
                    />
                  </Box>
                </HStack>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
