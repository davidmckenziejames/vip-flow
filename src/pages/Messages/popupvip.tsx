import {
  Flex,
  Avatar,
  Heading,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  useBreakpointValue,
  Text,
  HStack,
  Box,
  Link,
  Image,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import VIPofferFeatures from "./VIPofferFeatures";
import { useState } from "react";
import styled from "@emotion/styled";

const Strike = styled(Text)`
  text-decoration: none;
  position: relative;

  &::before {
    content: "";
    top: 50%;
    width: 120%;
    position: absolute;
    height: 0.15em;
    border-radius: 0.1em;
    left: -5%;
    background: #ff5454;
    opacity: 1;
    display: block;
    transform: rotate(-15deg);
    white-space: nowrap;
  }

  &.straight::before {
    transform: rotate(0deg);
    left: -1%;
    width: 102%;
  }
`;

const featureStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontWeight: "600",
  w: "45%",
};

export default function WelcomeVIPoffer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bg, setBg] = useState("linear(to-r, #0e0725, #5c03bc, #e536ab)");

  const claimDiscount = () => {
    // need to add dynamic link dependent on DJ profile
  };

  const handleMouseEnter = () => setBg("#111");
  const handleMouseLeave = () =>
    setBg("linear(to-r, #0e0725, #5c03bc, #e536ab)");
  const HeaderFontSize = useBreakpointValue({ base: "24px", md: "30px" });
  return (
    <>
      <VStack h="100vh" w="100vw" justifyContent="center">
        <Button onClick={onOpen}>OPEN VIP OFFER POPUP </Button>
      </VStack>

      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "lg", md: "lg" }}
      >
        <ModalOverlay />
        <ModalContent
          overflow="hidden"
          borderRadius="10px"
          border="1px solid #fff"
          w={{ base: "90%", md: "500px" }}
        >
          <VStack
            id="popup"
            bg={bg}
            bgGradient={bg}
            p="0px"
            gap="0"
            position="relative"
          >
            <Flex position="absolute" right="10px" top="10px" zIndex={"999"}>
              <FiX
                color="#fff"
                onClick={onClose}
                fontSize="28px"
                cursor="pointer"
              />
            </Flex>

            <VStack pt="20px" pb="10px" gap="10px">
              <VStack gap="0px">
                <Avatar
                  display="block"
                  flexDirection="row"
                  showBorder
                  borderColor="cyan"
                  width="70px"
                  height="70px"
                  src="https://files.djfan.app/cache/706eec1f-ea13-41e4-a3f7-fd4dbc98ced2.webp"
                />
                <Heading
                  fontSize={HeaderFontSize}
                  fontWeight="600"
                  borderRadius="5px"
                  lineHeight="1.3em"
                  color="#fff"
                  textAlign="center"
                  px="20px"
                  py="5px"
                  pb="5px"
                  maxW="400px"
                >
                  Unlock Richy Ahmed's VIP Membership for{" "}
                  <Strike
                    fontWeight="400"
                    as="span"
                    my="1" // modify as needed
                    w="45%"
                  >
                    $10
                  </Strike>{" "}
                  <Box fontWeight="800" display="inline">
                    $0
                  </Box>
                </Heading>
                <Text
                  color="#fff"
                  textAlign="center"
                  fontSize="14px "
                  maxW="80%"
                >
                  Explore exclusive content & music, receive guestlist invites,
                  chat with DJs and more.
                </Text>
              </VStack>

              <Button
                px="10px"
                mt="0px"
                fontSize="16px"
                color="#111"
                bg="#fff"
                border="2px solid #fff"
                lineHeight="1em"
                fontWeight={"700"}
                transition="0s"
                _hover={{
                  color: "#fff",
                  bgGradient: "linear(to-r, #5c03bc, #e536ab)",
                }}
                onClick={claimDiscount}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                GET 3-DAYS FREE
              </Button>
              <Text
                color="#fff"
                fontSize="14px"
                textAlign="center"
                fontWeight="600"
                display="flex"
                alignItems="center"
                gap="6px"
              >
                <FaCheckCircle color="#71fa94" />
                CANCEL ANYTIME
              </Text>

              <Text
                onClick={onClose}
                color="#fff"
                fontSize="14px"
                textAlign="center"
                fontWeight="400"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
              >
                No thanks
              </Text>
            </VStack>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
}
