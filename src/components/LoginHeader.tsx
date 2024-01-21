import { Flex, Image, useDisclosure, HStack, Box } from "@chakra-ui/react";
import {
  essentialLink,
  proLink,
  essentialLink6months,
  proLink6months,
  clientPortal,
} from "./Links"; // Adjust the path to where links.js is located

const buttonStyle = {
  lineHeight: "1em",
  fontWeight: "600",
  rounded: "lg",
  cursor: "pointer",
  alignItems: "center",
};

export default function LoginHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      id="header"
      bg="black"
      w="100%"
      justify="center"
      borderBottom="solid 1px #fff"
    >
      <HStack p="15px" w="100%" maxW="1000px" justifyContent="space-between">
        <Box as="a" href="/" cursor="pointer">
          <Image
            height={{ base: "30px", md: "30px" }}
            src="http://assets.vipflow.co.uk/files/vipflow-logo.png"
          />
        </Box>
        <Flex
          {...buttonStyle}
          color="#fff"
          px="8px"
          py="4px"
          gap="3px"
          fontSize="14px"
          border="1px solid #fff"
          as="a"
          href={clientPortal}
          target="_blank"
          _hover={{ bg: "#fff", color: "#111" }}
        >
          <Box boxSize="20px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </Box>{" "}
          CLIENT PORTAL
        </Flex>
      </HStack>
    </Flex>
  );
}
