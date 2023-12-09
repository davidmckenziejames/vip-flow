import {
  Box,
  Flex,
  Link,
  Text,
  Modal,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FiLock } from "react-icons/fi";
import SignInModal from "../../Home/Sections/HeaderComponents/SignInModal";
import SignInLink from "../SignInLink";
export default function PostActionsOffline() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex p="0" m="0" borderTop="1px solid #bdbdbd" bg="#f6f6f6">
      <Flex
        px={{ base: "10px", md: "15px" }}
        pt="10px"
        pb="10px"
        borderRight="1px solid #bdbdbd"
      >
        <Box as={FiLock} size="18px" color="black" />
      </Flex>
      <Flex justifyContent="flex-start" align="center" gap="10px">
        <Text
          display="flex"
          ml="10px"
          gap="4px"
          color="#5C5C5C"
          fontSize={{ base: "14px", md: "16px" }}
        >
          <Box color="#8A0FD2" fontWeight="400">
            <SignInLink color="#8A0FD2" linkText="Sign in" />
          </Box>
          or
          <Link href="/register" color="#8A0FD2" fontWeight="400">
            register
          </Link>
          to{" "}
          <Box as="span" display={{ base: "none", md: "flex" }}>
            comment or{" "}
          </Box>
          react to this post.
        </Text>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <SignInModal />
        </Modal>
      </Flex>
    </Flex>
  );
}
