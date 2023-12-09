import { Text } from "@chakra-ui/react";
import { FaMagic } from "react-icons/fa";
export default function MagicToggle() {
  return (
    <>
      <Text
        fontSize="15px"
        w="100%"
        mt="10px"
        fontWeight="500"
        cursor="pointer"
        color="#ffffff"
        display="flex"
        justifyContent="center"
        as="span"
        gap="6px"
        alignItems="center"
        _hover={{ color: "#58faea" }}
      >
        <FaMagic color="#fff" />
        <span>
          Forgot password? <b>Email me login link</b>
        </span>
      </Text>
    </>
  );
}
