import { Box } from "@chakra-ui/react";
import { FaHeadphones } from "react-icons/fa";

export default function ViewProduct() {
  return (
    <Box
      p="0"
      w="90px"
      fontSize={"14px"}
      bg="#fff"
      color="#111"
      border="2px #111 solid"
      fontWeight={"600"}
      px="4px"
      py="8px"
      gap="5px"
      lineHeight="1em"
      textAlign="center"
      alignItems={"center"}
      borderRadius={"5px"}
      cursor="pointer"
      _hover={{
        color: "#fff",
        bg: "#111111",
      }}
    >
      ACCESS
    </Box>
  );
}
