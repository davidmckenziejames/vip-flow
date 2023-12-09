import {
  SimpleGrid,
  Box,
  Stack,
  Flex,
  Heading,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { ArtistCard } from "./ArtistCard";
import data from "./data.json";
import Layout from "../../layout/Layout";
import PostCardAudio from "../Profile/Feed/PostCardAudio";

export default function Explore() {
  return (
    <>
      <VStack w="100%" bg="#111" py="15px">
        <Box fontSize={"20px"} color="#fff">
          NAVBAR
        </Box>
      </VStack>
      <Flex
        maxW="full"
        flexDir="column"
        minH="100vh"
        bg="#D3D3D3"
        py="20px"
        pb="50px"
      >
        <PostCardAudio />
        <Box mt="40px" border="2px solid black" />
        <Stack p="20px" w="100%" bg="#fff">
          <Box fontSize={"18px"} fontWeight="bold">
            Comments Functionality
          </Box>
          <Box fontSize={"16px"}>1. Post text comments</Box>
          <Box fontSize={"16px"}>2. Like other comments</Box>
          <Box fontSize={"16px"}>3. See basic stats</Box>
          <Box fontSize={"16px"}>4. View more comments</Box>
        </Stack>
        <Stack p="20px" w="100%" bg="#fff">
          <Box fontSize={"18px"} color="red" fontWeight="bold">
            Dont Need Yet
          </Box>
          <Box fontSize={"16px"}>1. Add images, GIF etc. to comments</Box>
          <Box fontSize={"16px"}>2. Reply or react to comments</Box>
          <Box fontSize={"16px"}>3. Replies / Nested Threads</Box>
        </Stack>
      </Flex>
    </>
  );
}
