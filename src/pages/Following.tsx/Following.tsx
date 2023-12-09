import { SimpleGrid, Flex, Heading } from "@chakra-ui/react";
import { ArtistCard } from "./ArtistCard";
import data from "./data.json";
import Layout from "../../layout/Layout";

const renderArtistCard = ({
  profile_picture_cache,
  display_name,
  cover_photo_cache,
  profile_url,
}) => (
  <ArtistCard
    key={display_name}
    profileUrl={`/profile/${profile_url}`}
    artistName={display_name}
    coverPhoto={cover_photo_cache}
    profilePicture={profile_picture_cache}
  />
);

export default function Following() {
  return (
    <Layout>
      <Flex
        maxW="full"
        flexDir="column"
        minH="100vh"
        bg="white"
        py="20px"
        pb="50px"
        px={{ base: "0", sm: "8" }}
      >
        <Heading
          pb="20px"
          pl={{ base: "20px", md: "0px" }}
          fontSize={{ base: "24px", md: "30px" }}
        >
          Arists You're Following
        </Heading>
        <SimpleGrid
          columns={{ base: 2, md: 6 }}
          spacing={{ base: "25px", md: "30px" }}
          px={{ base: "20px", md: "0px" }}
        >
          {data.map(renderArtistCard)}
        </SimpleGrid>
      </Flex>
    </Layout>
  );
}
