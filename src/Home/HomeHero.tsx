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
  useBreakpointValue,
  Stack,
  Text,
  HStack,
} from "@chakra-ui/react";
import { FiCheck, FiCheckSquare, FiEye, FiX } from "react-icons/fi";

const fontStyle = {
  lineHeight: "1em",
};
const buttonStyle = {
  lineHeight: "1em",
  fontWeight: "600",
  rounded: "lg",
  cursor: "pointer",
};

export default function HomeHero() {
  return (
    <Flex w="100%" justify="center" flexDirection="column">
      <Flex
        w={"full"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Increase table bookings, shrink admin time, and reduce no-shows
            </Text>
            <Stack direction={"row"}>
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                Show me more
              </Button>
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
              >
                Show me more
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
      <Flex flexDirection="column" w="100%" maxW="1200px">
        <Flex {...fontStyle} fontWeight="600" fontSize="28px">
          VIP table booking system with bottle pre-ordering & checkout
        </Flex>
        <Flex {...fontStyle} fontWeight="600" fontSize="18px">
          Our proven designs convert more website visitors into sales by
          providing the best user experience possible.
        </Flex>
        <Flex
          {...buttonStyle}
          fontWeight="600"
          bg="#111"
          color="#fff"
          alignSelf="flex-start"
          fontSize="18px"
          px="10px"
          py="6px"
        >
          REQUEST DEMO
        </Flex>
        <HStack flexWrap="wrap">
          <Flex
            w={{ base: "100%", md: "fit-content" }}
            {...fontStyle}
            fontWeight="600"
            fontSize="14px"
            columnGap="2px"
          >
            <FiCheckSquare color="#71fa93" /> 100% managed service
          </Flex>
          <Flex
            w={{ base: "100%", md: "fit-content" }}
            {...fontStyle}
            fontWeight="600"
            fontSize="14px"
            columnGap="2px"
          >
            <FiCheckSquare color="#71fa93" /> Mobile-friendly, user-centric
            design
          </Flex>
          <Flex
            w={{ base: "100%", md: "fit-content" }}
            {...fontStyle}
            fontWeight="600"
            fontSize="14px"
            columnGap="2px"
          >
            <FiCheckSquare color="#71fa93" /> Cutting-edge features &
            functionality
          </Flex>
          <Flex
            w={{ base: "100%", md: "fit-content" }}
            {...fontStyle}
            fontWeight="600"
            fontSize="14px"
            columnGap="2px"
          >
            <FiCheckSquare color="#71fa93" /> Reduce admin & messaging
          </Flex>
          <Flex
            w={{ base: "100%", md: "fit-content" }}
            {...fontStyle}
            fontWeight="600"
            fontSize="14px"
            columnGap="2px"
          >
            <FiCheckSquare color="#71fa93" /> Increase table bookings
          </Flex>
          <Flex
            w={{ base: "100%", md: "fit-content" }}
            {...fontStyle}
            fontWeight="600"
            fontSize="14px"
            columnGap="2px"
          >
            <FiCheckSquare color="#71fa93" /> Reduce no-shows
          </Flex>
          <Flex
            w={{ base: "100%", md: "fit-content" }}
            {...fontStyle}
            fontWeight="600"
            fontSize="14px"
            columnGap="2px"
          >
            <FiCheckSquare color="#71fa93" /> Improve cashflow & booking totals
          </Flex>
        </HStack>
      </Flex>
    </Flex>
  );
}
