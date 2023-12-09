import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";

type Feature = {
  imageUrl: string;
  text: string;
};

const features: Feature[] = [
  {
    imageUrl:
      "https://dj.websitestaging.co/wp-content/uploads/2023/01/locked-files.png",
    text: "Access Exclusive Content",
  },
  {
    imageUrl: "http://media.djfan.app/images/direct-chat.png",
    text: "Direct Chat with DJs ",
  },

  {
    imageUrl:
      "https://dj.websitestaging.co/wp-content/uploads/2023/01/new-music.png",
    text: "Unreleased & New Music",
  },
  {
    imageUrl:
      "https://dj.websitestaging.co/wp-content/uploads/2023/01/guests.png",
    text: "Secure Guestlist Places",
  },
  {
    imageUrl:
      "https://dj.websitestaging.co/wp-content/uploads/2023/01/vip-pass.png",
    text: "Win Backstage Passes",
  },
  {
    imageUrl: "http://media.djfan.app/images/speech-bubbles.png",
    text: "Community Chat & Groups",
  },

  {
    imageUrl:
      "https://dj.websitestaging.co/wp-content/uploads/2023/01/playlists.png",
    text: "Private Playlists & Setlists",
  },
  {
    imageUrl:
      "https://dj.websitestaging.co/wp-content/uploads/2022/12/calendar-1.png",
    text: "Detailed Tour Schedule",
  },
  {
    imageUrl:
      "https://dj.websitestaging.co/wp-content/uploads/2023/01/meet.png",
    text: "Meet & Greet Invites",
  },
  {
    imageUrl:
      "https://dj.websitestaging.co/wp-content/uploads/2023/01/new-music.png",
    text: "Discounts & Giveaways",
  },
  {
    imageUrl:
      "https://dj.websitestaging.co/wp-content/uploads/2023/01/early-ticket.png",
    text: "Purchase Tickets Early",
  },

  {
    imageUrl: "http://media.djfan.app/images/music-upload.png",
    text: "Feedback on Your Demos",
  },
];
const featureStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  lineHeight: "1em",
  fontWeight: "500",
  mb: "12px",
};
const FeatureBox = ({ imageUrl, text }: Feature) => {
  const fontSize = useBreakpointValue({ base: "16px", md: "15px" });
  const width = useBreakpointValue({ base: "max-content", md: "50%" });
  const imageSize = useBreakpointValue({ base: "26px", md: "25px" });
  return (
    <Box {...featureStyle} w={width} fontSize={fontSize}>
      <Image w={imageSize} src={imageUrl} />
      {text}
    </Box>
  );
};

export default function VIPofferFeatures() {
  const [showMore, setShowMore] = useState(false);
  const displayedFeatures = showMore ? features : features.slice(0, 6);
  const justify = useBreakpointValue({
    base: "flex-start",
    md: "space-between",
  });
  const widthFeatures = useBreakpointValue({ base: "max-content", md: "100%" });
  const directionFeatures = useBreakpointValue({
    base: "column",
    md: "row",
  }) as "column" | "row";
  const wrapFeatures = useBreakpointValue({ base: "unset", md: "wrap" }) as
    | "wrap"
    | "nowrap"
    | "wrap-reverse";

  return (
    <Flex bg="#fff" gap="10px" w="100%" flexDirection="column">
      <Flex w="100%" bg="#71fa94">
        <Text
          fontWeight="700"
          fontFamily="Roboto Mono"
          lineHeight="1em"
          fontSize="18px"
          w="100%"
          py="8px"
          textAlign="center"
        >
          VIP BENEFITS & PERKS:
        </Text>
      </Flex>
      <Flex justifyContent="center" id="featureContainer">
        <Flex
          bg="#fff"
          gap="0px"
          w={widthFeatures}
          flexWrap={wrapFeatures}
          py="5px"
          pb="10px"
          px="12px"
          justifyContent={justify}
          flexDirection={directionFeatures}
        >
          {displayedFeatures.map((feature, index) => (
            <FeatureBox
              key={index}
              imageUrl={feature.imageUrl}
              text={feature.text}
            />
          ))}
          <Text
            w="100%"
            textAlign="center"
            cursor="pointer"
            color="#531db5"
            fontSize="12px"
            fontWeight="500"
            pb="5px"
            _hover={{ textDecoration: "underline", color: "#7d5aeb" }}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "SEE LESS" : "SEE MORE"}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
