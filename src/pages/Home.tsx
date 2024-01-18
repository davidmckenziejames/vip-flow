import { Flex } from "@chakra-ui/react";
import HomeHeader from "../Home/HomeHeader";
import HomeHero from "../Home/HomeHero";
import HomeFeatures from "../Home/HomeFeatures";
import HomeFooter from "../Home/HomeFooter";
import HomeTopBar from "../Home/HomeTopBar";
import Home2 from "../Home/Home2";

export default function Home() {
  return (
    <Flex w="100%" h="100%" minH="100vh" flexDirection="column" bg="#fff">
      <HomeTopBar />

      <HomeHeader />
      <Home2 />

      <HomeFeatures />
      <HomeFooter />
    </Flex>
  );
}
