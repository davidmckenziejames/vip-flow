import { Flex } from "@chakra-ui/react";
import { FaGem } from "react-icons/fa";

export default function VIPbadge() {
  return (
    <Flex
      color="#fff"
      px="10px"
      height="30px"
      bg="-webkit-linear-gradient(90deg, hsla(280, 95%, 57%, 1) 0%, hsla(193, 90%, 55%, 1) 100%);
                          "
      fontSize="16px"
      justifyContent="center"
      alignItems={"center"}
      fontWeight={"600"}
      borderRadius={"5px"}
      gap="4px"
    >
      <FaGem fontSize={"12px"} />
      VIP
    </Flex>
  );
}
