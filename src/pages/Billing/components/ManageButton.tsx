import { Box, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

export default function ManageButton() {
  return (
    <>
      <Menu>
        <MenuButton>
          <Box
            p="0"
            display={"flex"}
            fontSize={"14px"}
            bg="#fff"
            color="#111"
            border="2px #111 solid"
            fontWeight={"600"}
            px="10px"
            py="8px"
            gap="5px"
            lineHeight="1em"
            alignItems={"center"}
            borderRadius={"5px"}
            cursor="pointer"
            _hover={{
              border: "2px solid #DB62FD",
            }}
          >
            Manage
          </Box>
        </MenuButton>
        <MenuList>
          <MenuItem>Change Level</MenuItem>
          <MenuItem>Cancel</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
