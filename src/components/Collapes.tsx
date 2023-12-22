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
    <Flex w="100%" h="100%" minH="100vh" flexDirection="column">
      <Header />
      <Box py="20px" px={{ base: "20px", md: "40px" }}>
        <Flex flexDirection={"column"}>
          <PestForm onContactToggle={onContactToggle} />

          <Collapse in={isContactOpen} animateOpacity>
            <Contact onPaymentToggle={onPaymentToggle} />
          </Collapse>
          <Collapse in={isPaymentOpen} animateOpacity>
            <PaymentForm />
          </Collapse>
          <Collapse in={isTimingOpen} animateOpacity>
            <TimeSlotBooking />
          </Collapse>
        </Flex>
      </Box>
    </Flex>
  );
}
