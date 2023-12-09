import {
  IconButton,
  Flex,
  Box,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuDivider,
  MenuList,
  HStack,
  Avatar,
  Divider,
} from "@chakra-ui/react";

import { FiMenu } from "react-icons/fi";
import HeaderSearch from "./HeaderSearch";

export default function Header({ onOpen, ...rest }) {
  return (
    <Flex
      ml={{ base: 0, md: 80 }}
      px="4"
      position="sticky"
      top="0"
      zIndex="99"
      alignItems="center"
      bg="#111"
      py="10px"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      justifyContent={{ base: "space-between", md: "flex-end" }}
    >
      <Box
        color="white"
        display={{ base: "flex", md: "none" }}
        fontSize="30px"
        cursor="pointer"
        aria-label="open menu"
      >
        <FiMenu />
      </Box>
      <Box
        display={{ base: "flex", md: "none" }}
        as="a"
        cursor="pointer"
        onClick={() => {
          document.location = "/feed";
        }}
      >
        <Image
          src="https://files.djfan.app/images/djfan-beta.png"
          alt="DJfan Logo"
          width="120px"
        />
      </Box>
      <Flex
        flexDirection="row"
        id="headermenu"
        align="center"
        justifyContent={{ base: "flex-end", sm: "space-between" }}
        width={{ base: "fit-content", md: "100%" }}
      >
        <Box display={{ base: "none", md: "flex" }}>
          <HeaderSearch />
        </Box>
        <HStack gap="0px">
          <Flex alignItems="center">
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
                ml="10px"
              >
                <HStack spacing="4">
                  <Avatar
                    height="35px"
                    width="35px"
                    src={
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    }
                    backgroundColor="black"
                    border="2px solid #fff"
                  />
                </HStack>
              </MenuButton>
              <MenuList fontSize="lg" bg="white" borderColor="gray.200">
                <Divider />
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
}
