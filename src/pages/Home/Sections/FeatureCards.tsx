import { Card, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";

type FeatureCardData = {
  src: string;
  title: string;
  description: string;
};

const featureCardsData: FeatureCardData[] = [
  {
    src: "https://images.unsplash.com/photo-1661966522340-a51f578e4017?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Unlock Exclusive Content",
    description:
      "Access photos, videos, tracks, hidden playlists & more only available here.",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661776849166-3d27b91449bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    title: "Unreleased + New Music",
    description:
      "Discover tracks you didn't know existed plus get to preview new tracks before release.",
  },

  {
    src: "https://images.unsplash.com/photo-1586156938613-769b0353c8fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Backstage & Guestlists ",
    description:
      "Direct member-only invites for VIP access to DJ sets, after-parties, and secret shows.",
  },

  {
    src: "https://images.unsplash.com/flagged/photo-1569521739482-5443615d3725?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "First Release Tickets ",
    description:
      "Get early access and member discounts for tickets, merch, & other products.",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1683133991632-41cb80c0eab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "One-Stop Destination",
    description:
      "Get all mixes, tracks, & videos from your favorite DJs in one streamlined platform.",
  },
  {
    src: "https://images.unsplash.com/photo-1550614806-51d8db524675?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Direct Communication",
    description:
      "Interact with your favorite DJs and like-minded music lovers in the community.",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1663047585370-0cc7c5773279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    title: "Ad-Free Experience",
    description:
      "Enjoy uninterrupted music, videos, mixes, masterclasses, without pesky ads.",
  },
];

export default function FeatureCards() {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      py={{ base: "30px", md: "50px" }}
    >
      <Flex
        flexWrap="wrap"
        gap="20px"
        flexDir="row"
        maxW="1100px"
        justifyContent={{ base: "center", md: "space-between" }}
      >
        <Flex
          bg="linear-gradient(75deg,#8553F4, #811E86)"
          direction="column"
          justifyContent="center"
          w={{ base: "90%", md: "66%" }}
          maxW="1100px"
          align="center"
          py="30px"
          px={{ base: "20px", md: "30px" }}
          borderRadius="10px"
          color="white"
          gap={{ base: "0px", md: "10px" }}
        >
          <Heading fontSize={{ base: "28px", md: "36px" }}>
            Why join DJfan?
          </Heading>
          <Text
            textAlign="center"
            pt="6px"
            fontSize={{ base: "18px", md: "22px" }}
          >
            Creators on DJfan ensure that your support is rewarded. As a member,
            you receive exclusive content, community access, behind-the-scenes
            updates, and the pride of fuelling work that matters to you.
          </Text>
        </Flex>
        {featureCardsData.map((card) => (
          <Card
            key={card.title}
            borderRadius="10px"
            w={{ base: "90%", md: "32%" }}
            overflow="hidden"
            textAlign="center"
            border="2px solid #111"
          >
            <Image maxH="200px" objectFit="cover" src={card.src} />
            <VStack gap="5px" px="15px" py={{ base: "15px", md: "20px" }}>
              <Heading fontSize="20px" fontWeight="700">
                {card.title}
              </Heading>
              <Text w="100%" fontSize="16px" fontWeight="500">
                {card.description}
              </Text>
            </VStack>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
}
