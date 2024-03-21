import { Flex } from "@chakra-ui/react";
import HomeHeader from "../Review/HomeHeader";
import HomeHero from "../Review/HomeHero";
import HomePreFeatures from "../Review/HomePreFeatures";
import HomeFeatures from "../Review/HomeFeatures";
import HomeFooter from "../Review/HomeFooter";
import HomeTopBar from "../Review/HomeTopBar";
import Home2 from "../Review/Home2";
import Marquee from "../Review/marquee";
import Features from "../Review/Features";
import Example from "../Review/Example";

export default function ReviewHome() {
  return (
    <Flex w="100%" h="100%" minH="100vh" flexDirection="column" bg="#fff">
      <HomeHero />
      <Marquee />
      <Example />
      <Features />
      <HomePreFeatures />
      <HomeFooter />
    </Flex>
  );
}
