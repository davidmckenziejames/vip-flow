import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { ReactNode } from "react";
import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";

export default function Layout({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg="white" width="100%">
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerContent></DrawerContent>
      </Drawer>

      {/*= Header =*/}
      <Header onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }}>{children}</Box>
      <Footer />
    </Box>
  );
}
