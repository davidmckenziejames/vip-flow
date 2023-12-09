import { Heading, VStack } from "@chakra-ui/react";
import { FaQuestionCircle } from "react-icons/fa";

export default function ListHeading() {
  return (
    <VStack w="100%" gap="10px">
      <Heading
        fontSize="24px"
        borderRadius="5px"
        lineHeight="1em"
        fontWeight="600"
        pt="20px"
        color="#fff"
        w="100%"
        textAlign="center"
      >
        What do I get as a VIP?
      </Heading>
      <Heading
        fontSize="18px"
        lineHeight="1em"
        fontWeight="600"
        display="flex"
        gap="6px"
        textAlign="center"
        color="#71fa94"
      >
        Click <FaQuestionCircle color="#fff" fontSize="16px" /> to learn more
      </Heading>
    </VStack>
  );
}
