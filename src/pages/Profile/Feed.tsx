import {
  Flex,
  Text,
  useColorModeValue,
  Container,
  Box,
  Button,
} from "@chakra-ui/react";
import Filter from "./Feed/Filter";
import Layout from "../../layout/Layout";
import PostCardVideo from "./Feed/PostCardVideo";
import PostCardAudio from "./Feed/PostCardAudio";
import PostCardImage from "./Feed/PostCardImage";
import PostCardImageCarousel from "./Feed/PostCardImageCarousel";
import PostCardText from "./Feed/PostCardText";

export default function Feed() {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Layout>
      <Container p="0" py="20px" m="0" maxW="100%" id="con" px="20px">
        <Flex mb="20px" justifyContent="space-between" id="feed">
          <Text me="auto" fontSize="26px" fontWeight="700" color={textColor}>
            Post Feed
          </Text>
          <Filter />
        </Flex>
        <Flex
          w="100%"
          flexDirection="column"
          justifyContent="center"
          align="center"
          p="0px"
          gap="20px"
        >
          <Box width={{ base: "100%", md: "500px" }}>
            <PostCardVideo />
          </Box>

          <Box width={{ base: "100%", md: "500px" }}>
            <PostCardImageCarousel />
          </Box>

          <Box width={{ base: "100%", md: "500px" }}>
            <PostCardAudio />
          </Box>

          <Box width={{ base: "100%", md: "500px" }}>
            <PostCardText />
          </Box>

          <Flex width={{ base: "100%", md: "500px" }} justifyContent="center">
            <Button colorScheme="blue">Load more posts...</Button>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  );
}
