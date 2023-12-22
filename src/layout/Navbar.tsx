import {
  Flex,
  Box,
  Container,
  Link,
  HStack,
  Text,
  Image,
} from "@chakra-ui/react";
import { Placeholder } from "./Placeholder";
import { FaEye } from "react-icons/fa";
const buttonStyle = {
  color: "#111",
  display: "flex",
  alignItems: "center",
  lineHeight: "1em",
  fontSize: "14px",
  fontWeight: "700",
  gap: "5px",
  bg: "#fff",
  px: "10px",
  py: "8px",
  borderRadius: "8px",
};

export const Navbar = () => {
  return (
    <Flex
      py="20px"
      px="40px"
      as="nav"
      role="navigation"
      bg="#062440"
      color={"white"}
    >
      <HStack justify={"space-between"} width={"100%"}>
        <Flex gap="25px" fontWeight={"600"} fontSize={"18px"} align={"center"}>
          <Image
            src="https://dynopest.co.uk/wp-content/uploads/2023/07/dyno-white.png"
            height={"30px"}
          />
          <Link>Bookings</Link>

          <Link>Customers</Link>
          <Link>Settings</Link>
        </Flex>
        <Flex>
          <Box {...buttonStyle}>
            <FaEye fontSize={"16px"} />
            BOOKING PAGE
          </Box>
        </Flex>
      </HStack>
    </Flex>
  );
};
