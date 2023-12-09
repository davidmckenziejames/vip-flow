import {
  ButtonGroup,
  Container,
  IconButton,
  Image,
  Link,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px="4"
      py={{ base: "15px", md: "0px" }}
      position="sticky"
      top="0"
      height="20"
      borderTop="1px solid white"
      flexDirection={{ base: "column", md: "row" }}
      zIndex="1"
      alignItems="center"
      gap="10px"
      justify={{ base: "flex-start", md: "space-between" }}
      bg="black"
    >
      <Flex gap="15px" mr="10px">
        <Link fontSize="sm" color="white">
          Terms of Use
        </Link>
        <Link fontSize="sm" color="white">
          Privacy Policy
        </Link>
        <Link fontSize="sm" color="white">
          Cookie Policy
        </Link>
      </Flex>
      <Text fontSize="sm" color="white">
        &copy; {new Date().getFullYear()} DJfan Ltd. All rights reserved.
      </Text>
    </Flex>
  );
}
