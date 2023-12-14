import { Flex } from "@chakra-ui/react";
import { Footer } from "../layout/Footer";
import { Main } from "../layout/Main";
import { Navbar } from "../layout/Navbar";

export default function Manage() {
  return (
    <Flex direction="column" flex="1" minH="100vh">
      <Navbar />
      <Main />
      <Footer />
    </Flex>
  );
}
