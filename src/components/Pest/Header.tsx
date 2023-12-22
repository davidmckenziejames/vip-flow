import { Box, HStack, Image } from "@chakra-ui/react";
import { FiPhone } from "react-icons/fi";

export default function Header() {
  return (
    <HStack
      bg="#072440"
      color="white"
      p={4}
      w="100%"
      justifyContent={"space-between"}
    >
      <Image
        src="https://dynopest.co.uk/wp-content/uploads/2023/07/dyno-white.png"
        h={"24px"}
        alt="logo"
      />
      <Box
        color="#fff"
        fontSize="16px"
        fontWeight="600"
        p="4px 8px"
        borderRadius="4px"
        bg="#F44822"
        display="flex"
        alignItems={"center"}
        gap="6px"
        cursor="pointer"
        _hover={{
          color: "#072440",
          bg: "#fff",
        }}
      >
        <FiPhone /> CALL US
      </Box>
    </HStack>
  );
}
