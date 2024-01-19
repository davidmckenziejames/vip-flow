import {
  Box,
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
  useBreakpointValue,
  Stack,
  Text,
  HStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Meteors } from "./meteors";
import { motion, Variants } from "framer-motion";
import { Button } from "./moving-border";
import { LampContainer } from "./lamp";
import CTA from "./CTA";
import Form from "./Form";
const MyIcon11 = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path fill="none" d="M0 0h100v100H0z" />
    <path d="M8.333 79.167h83.333V87.5H8.333v-8.333zm0-58.334 20.833 14.583L50 8.333l20.833 27.083 20.834-14.583v50H8.333v-50zm8.333 16.004V62.5h66.667V36.837l-14.25 9.975L50 22 30.917 46.813l-14.25-9.98z" />
  </svg>
);
import { features } from "./Icons";

export default function HomePreFeatures() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack
      pt="30px"
      pb={{ base: "30px", md: "40px" }}
      w={{ base: "100%", md: "100%" }}
      gap="15px"
    >
      <Box color="#111" boxSize={{ base: "70px", md: "100px" }}>
        <MyIcon11 />
      </Box>
      <Flex
        textAlign="center"
        lineHeight="1.1em"
        fontSize={{ base: "36px", md: "54px" }}
        fontWeight="700"
        w={{ base: "95%", md: "60%" }}
      >
        Deliver an entire VIP experience from booking to booth.
      </Flex>
      <Flex
        textAlign="center"
        lineHeight="1.4em"
        fontSize={{ base: "16px", md: "24px" }}
        fontWeight="500"
        w={{ base: "95%", md: "750px" }}
      >
        An advanced table booking system can streamline your business, boost
        profits, free up staff time, and decrease operational costs.
      </Flex>
      <VStack mt="15px" px={{ base: "0px", md: "0" }} w="100%">
        <VStack
          rowGap={{ base: "15px", md: "20px" }}
          w={{ base: "95%", md: "450px" }}
        >
          {features.map((feature, index) => (
            <Flex
              key={index}
              textAlign="center"
              justifyContent="center"
              alignItems="center"
              lineHeight="1em"
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight="600"
              gap="8px"
              border="1px solid #CECECE"
              borderColor={feature.bg}
              borderRadius="5px"
              px={{ base: "10px", md: "15px" }}
              py={{ base: "10px", md: "10px" }}
              w="100%"
              _hover={{
                background: feature.hover,
                color: "#fff",

                ".box-hover": {
                  boxSize: { base: "25px", md: "35px" }, // adjust sizes as needed
                },
                ".text-hover": {
                  fontSize: { base: "17px", md: "20px" }, // adjust sizes as needed
                },
              }}
            >
              <Box
                color={feature.bg}
                className="box-hover"
                boxSize={{ base: "20px", md: "30px" }}
              >
                <feature.icon />
              </Box>
              <Text color={feature.bg} className="text-hover">
                {feature.text}
              </Text>
            </Flex>
          ))}
        </VStack>
      </VStack>
      <>
        <Form />
      </>
    </VStack>
  );
}
