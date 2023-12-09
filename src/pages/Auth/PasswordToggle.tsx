import { Text } from "@chakra-ui/react";
import { FaLock } from "react-icons/fa";
export default function PasswordToggle() {
  return (
    <>
      <Text
        fontSize="15px"
        w="100%"
        mt="10px"
        fontWeight="600"
        cursor="pointer"
        color="#ffffff"
        display="flex"
        justifyContent="center"
        gap="6px"
        alignItems="center"
        _hover={{ color: "#58faea" }}
      >
        <FaLock />
        Sign in with email + password
      </Text>
    </>
  );
}
