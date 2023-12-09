import { Flex, Button, Box } from "@chakra-ui/react";
import PostCardImageOffline from "./Posts/PostCardImageOffline";
import PostCardImageOfflineVIP from "./Posts/PostCardImageOfflineVIP";
import PostCardImageOfflineGold from "./Posts/PostCardImageOfflineGold";

export default function ProfilePostsOffline() {
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
        <PostCardImageOffline />
      </Box>
      <Box width={{ base: "100%", md: "500px" }}>
        <PostCardImageOfflineVIP />
      </Box>
      <Box width={{ base: "100%", md: "500px" }}>
        <PostCardImageOfflineGold />
      </Box>
    </Flex>
  );
}
