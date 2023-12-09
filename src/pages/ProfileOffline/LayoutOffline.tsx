import HeaderOffline from "./HeaderOffline";
import StickyFooter from "./StickyFooter";
import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import FooterOffline from "./FooterOffline";

export default function LayoutOffline({ children }) {
  return (
    <Box minH="100vh" bg="white" width="100%">
      <HeaderOffline />
      <Box>{children}</Box>
      <FooterOffline />
    </Box>
  );
}
