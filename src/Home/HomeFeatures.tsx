import {
  Box,
  Button,
  Flex,
  Image,
  VStack,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import { FiCheck, FiCheckSquare, FiEye, FiX } from "react-icons/fi";
import HomeHeader from "../Home/HomeHeader";
import HomeHero from "../Home/HomeHero";
const fontStyle = {
  lineHeight: "1em",
};
const buttonStyle = {
  lineHeight: "1em",
  fontWeight: "600",
  rounded: "lg",
  cursor: "pointer",
};
const features = [
  {
    title: "Engaging Booking Questions",
    imageUrl: "http://media.djfan.app/images/questions.jpg",
  },

  {
    title: "Purchases Bottle Upfront",
    imageUrl: "http://media.djfan.app/images/bottles.jpg",
  },
  {
    title: "Streamlined Checkout ",
    imageUrl: "http://media.djfan.app/images/pay.jpg",
  },
];

export default function HomeFeatures() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      w="100%"
      alignItems="center"
      flexDirection="column"
      background=" linear-gradient(to top, #cc208e 0%, #6713d2 100%);"
      py="30px"
    >
      <Heading color="#fff">Key Features</Heading>
      <Flex
        flexWrap="wrap"
        rowGap={{ base: "15px", md: "25px" }}
        p="20px"
        w="100%"
        maxW="1200px"
        justifyContent="space-between"
      >
        {features.map((feature) => (
          <VStack
            key={feature.title}
            className="featureCard"
            w={{ base: "100%", md: "48%" }}
            bg="#111"
            border="1px solid #111"
            borderRadius="10px"
            overflow="hidden"
            gap="0"
            position="relative"
          >
            <Box
              color="#fff"
              position="absolute"
              right="5px"
              top="5px"
              onClick={onOpen}
              bg="#4b2bc0"
              p="5px"
              rounded="full"
              cursor="pointer"
            >
              <FiEye />
            </Box>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <Flex position="relative">
                  <Image src={feature.imageUrl} />
                  <Box
                    color="#fff"
                    position="absolute"
                    right="5px"
                    top="5px"
                    bg="#4b2bc0"
                    p="5px"
                    rounded="full"
                    cursor="pointer"
                    onClick={onClose}
                  >
                    <FiX />
                  </Box>
                </Flex>
              </ModalContent>
            </Modal>
            <Image src={feature.imageUrl} />
            <Flex
              borderTop="1px solid #fff"
              w="100%"
              py="10px"
              color="#fff"
              justify="center"
              fontWeight="600"
            >
              {feature.title}
            </Flex>
          </VStack>
        ))}
      </Flex>
    </Flex>
  );
}
