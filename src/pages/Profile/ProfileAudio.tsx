import { Flex, Button, Box } from "@chakra-ui/react";
import PostCardAudio from "./Feed/PostCardAudio";

export default function ProfileAudio() {
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
        <PostCardAudio />
      </Box>
    </Flex>
  );
}
