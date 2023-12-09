import {
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Button,
  Image,
  useDisclosure,
  Flex,
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Slide,
  Box,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Input,
  Portal,
  Center,
} from "@chakra-ui/react";
import { CgMenu } from "react-icons/cg";
import SignInButton from "../Home/Sections/HeaderComponents/SignInButton";

import React, { useState } from "react";
import { FaBars, FaTimes, FaHeadphones, FaSearch } from "react-icons/fa";

export default function SearchIconMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initRef = React.useRef();
  return (
    <>
      <Box as="a" onClick={onOpen} color="white" fontSize={{ base: "20px" }}>
        <FaSearch />
      </Box>
      <Slide direction="top" in={isOpen} style={{ zIndex: 1 }} mt="60px">
        <Drawer
          isOpen={isOpen}
          placement="top"
          onClose={onClose}
          finalFocusRef={initRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <Flex
              px={{ base: "10px", md: "0px" }}
              py={{ base: "10px", md: "10px" }}
              w="100%"
              flexDirection="row"
              maxW="1024px"
              align="center"
              justifyContent="space-between"
            >
              <Flex w={{ base: "100%", md: "50%" }}>
                <InputGroup mr="10px">
                  <Input
                    bg="white"
                    focusBorderColor="cyan"
                    type="tel"
                    fontSize={{ base: "16px", md: "16px" }}
                    placeholder="Search for an Artist"
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label="Search database"
                      bg="#D1FFE6"
                      icon={<FaSearch />}
                    />
                  </InputRightElement>
                </InputGroup>
              </Flex>
              <Flex display="flex" id="button" p="0" m="0">
                <DrawerCloseButton
                  color="black"
                  top="unset"
                  right="0px"
                  position="relative"
                  size="lg"
                  px={{ base: "5px", md: "20px" }}
                  py="10px"
                  w="100%"
                  h="100%"
                />
              </Flex>
            </Flex>
          </DrawerContent>
        </Drawer>
      </Slide>
    </>
  );
}
