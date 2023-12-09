import { Box } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

export default function CreateAccount() {
  return (
    <Box
      bg="white"
      borderRadius="5px"
      as="a"
      href="https://auth.djfan.app/api/auth/signin"
      target="_blank"
      fontSize="16px"
      fontWeight="800"
      color="#111111"
      transition="all 0.3s ease"
      border="2px solid black"
      px="15px"
      display="flex"
      gap="5px"
      alignItems="center"
      alignSelf={"center"}
      height="45px"
      boxShadow=".15rem .15rem 0 #69f2eb"
      _hover={{
        boxShadow: `.15rem .15rem 0 #00ff87`,
        fontWeight: "800",
        border: "2px solid black",
      }}
    >
      CREATE FREE ACCOUNT{" "}
      <Box fontSize="16px">
        <FaArrowRight />
      </Box>
    </Box>
  );
}
