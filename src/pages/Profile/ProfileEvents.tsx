import { Flex, Button, Box } from "@chakra-ui/react";
import EventCard from "./Feed/EventCard";
import ListCard from "./Feed/ListCard";

export default function ProfileEvents() {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      justifyContent="center"
      align="center"
      p="0px"
      gap="20px"
      pb="50px"
    >
      <Box width={{ base: "100%", md: "500px" }}>
        <EventCard />
      </Box>

      <Flex
        mt="20px"
        width={{ base: "100%", md: "500px" }}
        justifyContent="center"
      >
        <Button colorScheme="blue">Load more posts...</Button>
      </Flex>
    </Flex>
  );
}
