import { Box, Button, Flex, Heading, MenuItem, Text } from "@chakra-ui/react";
import SignInLink from "./SignInLink";
import { FaSignInAlt, FaUnlock } from "react-icons/fa";
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

export default function PostOverlayGold() {
  return (
    <Box
      position="absolute"
      top="0"
      right="0"
      bottom="0"
      left="0"
      background="rgb(0 0 0 / 70%)"
      zIndex="1"
    >
      <Flex
        opacity="1"
        gap="15px"
        flexDirection="column"
        align="center"
        width="100%"
        height="100%"
        justifyContent="center"
      >
        <Heading
          opacity="1"
          as="span"
          display="flex"
          gap={{ base: "6px", md: "6px" }}
          color="white"
          fontSize={{ base: "18px", md: "20px" }}
          fontWeight="600"
        >
          Join my Gold Membership to view
        </Heading>
        <Box
          as="button"
          display="flex"
          flexDirection="row"
          alignItems="center"
          px="15px"
          py="10px"
          border="2px solid black"
          borderRadius="6px"
          transition="all 0.3s ease"
          bg="#ffffff"
          fontSize="16px"
          fontWeight="600"
          color="#111111"
          lineHeight="1"
          _hover={{
            boxShadow: `.1rem .1rem 0 #69f2eb, .2rem .2rem 0 #DB62FD`,
            color: "black",
            background: "white",
            border: "2px solid black",
          }}
          _active={{
            bg: "#dddfe2",
            transform: "scale(0.98)",
            borderColor: "#bec3c9",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
        >
          <Box as="span" mr="10px">
            <FaUnlock />
          </Box>
          <Box as="span">View Memberships</Box>
        </Box>
      </Flex>
    </Box>
  );
}
