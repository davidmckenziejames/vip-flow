import {
  Image,
  useDisclosure,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  MenuDivider,
  IconButton,
} from "@chakra-ui/react";
import {
  FaBars,
  FaUser,
  FaSearch,
  FaHeadphones,
  FaCaretDown,
} from "react-icons/fa";
import SignInButton from "../Home/Sections/HeaderComponents/SignInButton";
import SearchIconMobile from "./MenuButtons/SearchIconMobile";
import SearchIcon from "./MenuButtons/SearchIcon";
import React, { useState, useCallback } from "react";
import { CgMenu, CgMenuRightAlt } from "react-icons/cg";

export default function HeaderOffline() {
  const { isOpen, onOpen, onClose: onMenuClose } = useDisclosure();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = useCallback(() => setIsVisible((prev) => !prev), []);
  const onClose = useCallback(() => {
    onMenuClose();
    setIsVisible(false); // reset visibility when menu is closed
  }, [onMenuClose]);
  const [isHovered, setIsHovered] = React.useState(false);

  const NavBarItems = [
    { name: "Create Account", path: "/create-account", icon: <FaUser /> },
    { name: "Explore Artists", path: "/explore", icon: <FaSearch /> },
    {
      name: "Become a Creator",
      path: "/become-creator",
      icon: <FaHeadphones />,
    },
  ];

  const HiddenPanelItems = [
    { name: "About", path: "/link1" },
    { name: "Terms of Use", path: "/link2" },
    { name: "Privacy Policy", path: "/link3" },
  ];

  return (
    <Box
      bg="black"
      borderBottom="1px solid #ffffff"
      w="100%"
      position="sticky"
      top="0"
      zIndex="sticky"
      height={{ base: "55px", md: "60px" }}
      px={{ base: "10px", md: "0px" }}
      py={{ base: "10px", md: "10px" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        id="navbar"
        justifyContent="space-between"
        align="center"
        maxW="1024px"
        zIndex="10"
        w="100%"
      >
        <Image
          id="logo"
          w={{ base: "100px", md: "120px" }}
          src="https://djfan.app/wp-content/uploads/2023/04/djfan-email.png"
        />
        <Flex align="center" gap="15px">
          <SignInButton />
          <Box display={{ base: "flex", md: "none" }}>
            <SearchIconMobile />
          </Box>
          <Box display={{ base: "none", md: "flex" }}>
            <SearchIcon />
          </Box>
          <Menu onClose={onClose}>
            <MenuButton>
            <IconButton
            aria-label="Open menu"
            icon={isHovered ? <CgMenu /> : <CgMenuRightAlt />}
            display="flex"
            color="white"
            width={{ base: "38px", md: "38px" }}
            height={{ base: "38px", md: "38px" }}
            fontSize={{ base: "35px", md: "35px" }}
            variant="unstyled"
            onClick={onOpen}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
             
            </MenuButton>
            <MenuList
              minW="150px"
              display="flex"
              mt="10px"
              p="0"
              py="px"
              pb="5px"
            >
                <Flex flexDirection="column" w="100%">
                  {NavBarItems.map((item) => (
                    <MenuItem
                      gap="8px"
                      as={Link}
                      href={item.path}
                      px="16px"
                      py="10px"
                      fontWeight="500"
                      key={item.path}
                    >
                      {item.icon} {/* render the icon */}
                      {item.name}
                    </MenuItem>
                  ))}
                <Link
                  id="more"
                  pl="15px"
                  onClick={toggleVisibility}
                  color={isVisible ? "#AAAAAA" : "black"}
                  textDecoration="none"
                  cursor="pointer"
                  _hover={{ color: "#9000B8" }}
                  py="5px"
                  px="16px"
                  fontSize="16px"
                  fontWeight="500"
                  alignItems="center"
                  gap="4px"
                  justifyContent="flex-end"
                  display={isVisible ? "none" : "flex"} // hide when expanded
                >
                  More <FaCaretDown />
                </Link>
                <Flex
                  id="hiddenPanel"
                  flexDirection="column"
                  w="100%"
                  style={{ display: isVisible ? "flex" : "none" }}
                >
                  <MenuDivider />
                  {HiddenPanelItems.map((item) => (
                    <MenuItem
                      as={Link}
                      fontSize="14px"
                      href={item.path}
                      py="4px"
                      px="16px"
                      key={item.path}
                    >
                      {item.name} 
                    </MenuItem>
                  ))}
                </Flex>
              </Flex>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}
