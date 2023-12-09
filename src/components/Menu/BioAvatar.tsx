import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuDivider,
  MenuList,
  HStack,
  Avatar,
} from "@chakra-ui/react";

export default function BioAvatar() {
  return (
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
                "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              }
            />
          </HStack>
        </MenuButton>
        <MenuList fontSize="lg" bg="white" borderColor="gray.200">
          <MenuItem as="a" href="/profile">
            Profile
          </MenuItem>
          <MenuItem as="a" href="/setting">
            Settings
          </MenuItem>
          <MenuItem as="a" href="/settings#memberships">
            Memberships
          </MenuItem>
          <MenuItem as="a" href="/settings#billing">
            Billing
          </MenuItem>
          <MenuDivider />
          <MenuItem as="a" href="/">
            Sign out
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
