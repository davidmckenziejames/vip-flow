import {
  Box,
  Button,
  Flex,
  Image,
  VStack,
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
    title: "Low-Friction Opening Questions",
    imageUrl:
      "https://mckenzie-james.com/wp-content/uploads/2023/12/image-select.png",
  },
  {
    title: "Multi-Step Contact Information",
    imageUrl:
      "https://mckenzie-james.com/wp-content/uploads/2023/12/image-select.png",
  },
  {
    title: "Time Slot Options",
    imageUrl:
      "https://mckenzie-james.com/wp-content/uploads/2023/12/image-select.png",
  },
  {
    title: "Take Deposits for Callouts",
    imageUrl:
      "https://mckenzie-james.com/wp-content/uploads/2023/12/image-select.png",
  },
  {
    title: "Streamlined Checkout",
    imageUrl:
      "https://mckenzie-james.com/wp-content/uploads/2023/12/image-select.png",
  },
  {
    title: "Confirmation/Reminder Emails & SMS",
    imageUrl:
      "https://mckenzie-james.com/wp-content/uploads/2023/12/image-select.png",
  },
  {
    title: "Instant Notifications & Lead Dashboard",
    imageUrl:
      "https://mckenzie-james.com/wp-content/uploads/2023/12/image-select.png",
  },
];

export default function HomeFeatures() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      w="100%"
      justify="center"
      bgImage={`url('https://demo.mckenzie-james.com/wp-content/uploads/2024/01/customer-bg.jpg')`}
      bgSize="cover"
      bgPosition="center center"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
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
            bg="navy"
            border="1px solid navy"
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
            <Flex py="10px" color="#fff" fontWeight="600">
              {feature.title}
            </Flex>
          </VStack>
        ))}
      </Flex>
    </Flex>
  );
}
