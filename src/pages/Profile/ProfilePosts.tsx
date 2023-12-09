import { Flex, Button, Box } from "@chakra-ui/react";
import PostCardVideo from "./Feed/PostCardVideo";
import PostCardText from "./Feed/PostCardText";
import PostCardImage from "./Feed/PostCardImage";
import PostCardImageCarousel from "./Feed/PostCardImageCarousel";
import PostCardAudio from "./Feed/PostCardAudio";
import PostCardSoundcloud from "./Feed/PostCardSoundcloud";
import PostCardYouTube from "./Feed/PostCardYoutube";
import PostCardSpotify from "./Feed/PostCardSpotify";
import PostCardMixcloud from "./Feed/PostCardMixcloud";

export default function ProfilePosts() {
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
