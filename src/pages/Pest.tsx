import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Collapse,
  Button,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import TimeSlotBooking from "../components/Pest/TimeSlot";
import PaymentForm from "../components/Pest/Payment";
import PestForm from "../components/Pest/PestForm1";
import { FiPhone } from "react-icons/fi";
import Header from "../components/Pest/Header";
import Contact from "../components/Pest/Contact";
export default function Pest() {
  const { isOpen: isContactOpen, onToggle: onContactToggle } = useDisclosure();
  const { isOpen: isPaymentOpen, onToggle: onPaymentToggle } = useDisclosure();
  const { isOpen: isTimingOpen, onToggle: onTimingToggle } = useDisclosure();

  return (
    <Flex
      w="100%"
      h="100%"
      minH="100vh"
      flexDirection="column"
      pb="30px"
      bg="#fff"
    >
      <Header />
      <Box py="20px" px={{ base: "20px", md: "40px" }}>
        <Flex flexDirection={"column"} gap="30px">
          <TimeSlotBooking />
          <PestForm onContactToggle={onContactToggle} />
          <Contact onPaymentToggle={onPaymentToggle} />
        </Flex>
      </Box>
    </Flex>
  );
}
