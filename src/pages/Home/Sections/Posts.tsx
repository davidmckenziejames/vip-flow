import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import PostCardImage from "../Posts/PostCardImage";

export default function Posts() {
  return (
    <Box w="100%" justifyContent="center" pb="50px">
      <Center bg="white" py="30px">
        <Flex
          flexDir="column"
          w={{ base: "90%", md: "450px" }}
          align="center"
          gap="30px"
        >
          <Heading fontSize={{ base: "24px", sm: "28px" }}>
            Latest Featured Posts
          </Heading>
          <PostCardImage />
          <PostCardImage />
          <PostCardImage />
        </Flex>
      </Center>
    </Box>
  );
}
