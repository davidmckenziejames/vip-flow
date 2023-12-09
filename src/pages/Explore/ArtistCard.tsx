import { Avatar, Box, Flex, FlexProps, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface ArtistCardProps extends FlexProps {
  artistName: string;
  coverPhoto: string;
  profileUrl: string;
  profilePicture: string;
}

export const ArtistCard: React.FC<ArtistCardProps> = React.memo(
  ({ profilePicture, coverPhoto, artistName, profileUrl }) => {
    return (
      <Flex
        direction="column"
        alignItems="center"
        rounded="md"
        pt="10px"
        pb="10px"
        maxW="200px"
        gap="0px"
        border="2px solid #58faea"
        borderRadius="15px"
        px="10px"
        position="relative"
        bg={useColorModeValue("white", "gray.700")}
        shadow={{ md: "base" }}
      >
        <Box
          position="absolute"
          inset="0"
          height="50%"
          backgroundImage={`url(${coverPhoto})`}
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          roundedTop="inherit"
        />
        <Box as="a" href={profileUrl}>
          <Avatar border="2px solid #ffffff" size="xl" src={profilePicture} />
        </Box>
        <Text fontSize="16px" mt="5px" fontWeight="600">
          {artistName}
        </Text>
        <Box
          as="a"
          fontSize="12px"
          fontWeight="600"
          color="white"
          bg="#9b5de5"
          mt="5px"
          px="8px"
          py="2px"
          borderRadius="10px"
          href={profileUrl}
        >
          View Profile
        </Box>
      </Flex>
    );
  }
);
