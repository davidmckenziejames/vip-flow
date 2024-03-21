import {
  Box,
  Button,
  Flex,
  Image,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  useBreakpointValue,
  Stack,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  HStack,
} from "@chakra-ui/react";
import { Meteors } from "./meteors";
import { FiCheck, FiCheckSquare, FiEye, FiX } from "react-icons/fi";

export default function HomeHero() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      w={"full"}
      py={{ base: "40px", md: "90px" }}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgImage="linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)) , url('https://assets.vipflow.co.uk/files/hotel-bg.jpg')"
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack w={{ base: "100%" }} gap="20px">
        <Image
          mb="10px"
          height={{ base: "40px", md: "60px" }}
          src="http://assets.vipflow.co.uk/files/vipflow-logo.png"
        />
        <Flex
          color="#fff"
          textAlign="center"
          lineHeight="1.2em"
          fontSize={{ base: "40px", md: "60px" }}
          fontWeight="700"
          w={{ base: "95%", md: "800px" }}
        >
          Review Generation Software for Hotels
        </Flex>
        <Flex
          textAlign="center"
          justifyContent="center"
          lineHeight="1.4em"
          color="#fff"
          fontSize={{ base: "18px", md: "28px" }}
          fontWeight="500"
          w={{ base: "95%", md: "600px" }}
        >
          Increase positive reviews, boost direct bookings and level up your
          guest experience.
        </Flex>
      </VStack>
      <Flex w={{ base: "100%" }} flexDirection="column" alignItems="center">
        <Box
          fontWeight="600"
          cursor="pointer"
          position="relative"
          mt="25px"
          fontSize={{ base: "18px", md: "22px" }}
        >
          <span className="relative inline-block overflow-hidden rounded-full p-[2px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 hover:bg-white px-5 py-2  font-600 text-white hover:text-slate-950/90 backdrop-blur-3xl">
              VIEW DEMO
            </div>
          </span>
        </Box>
        <Flex
          lineHeight="1em"
          color="#fff"
          fontSize={{ base: "14px", md: "14px" }}
          fontWeight="500"
          mt="5px"
        >
          No email required
        </Flex>
      </Flex>
    </Flex>
  );
}
