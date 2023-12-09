import {
  Flex,
  Heading,
  HStack,
  VStack,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";

export default function PopUpHero() {
  return (
    <Box
      background={`url('http://media.djfan.app/images/product.jpg') no-repeat center center`}
      backgroundSize="cover"
      position="relative"
      w="100%"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="rgba(0,0,0,0.7)"
      />

      <VStack
        position="relative"
        py="25px"
        gap="5px"
        borderBottom="1px solid #fff"
      >
        <Heading
          color="#111"
          px="8px"
          borderRadius={"10px"}
          py="4px"
          fontSize="14px"
          lineHeight="1em"
          bg="#71fa94"
          mb="8px"
        >
          EXCLUSIVE TO NEW FANS
        </Heading>
        <Heading
          fontSize="29px"
          borderRadius="5px"
          lineHeight="1.4em"
          fontWeight="600"
          color="#fff"
          textAlign="center"
          px="20px"
          maxW="400px"
        >
          Enjoy 90% off your first VIP Membership
        </Heading>

        <Text
          w="80%"
          color="#fff"
          fontSize="20px"
          textAlign="center"
          fontWeight="500"
        >
          Start discovering exclusive content and exploring VIP perks for{" "}
          <b>only $1</b>
        </Text>
        <Button
          px="10px"
          mt="10px"
          fontSize="16px"
          color="#111"
          bg="#fff"
          border="1px solid #111"
          lineHeight="1em"
          _hover={{ bg: "#fff" }}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          CLAIM DISCOUNT
        </Button>
      </VStack>
    </Box>
  );
}
