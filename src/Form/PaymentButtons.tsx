import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import { FaApple, FaPaypal, FaStripe, FaStripeS } from "react-icons/fa";

const fontlabelStyle = {
  mb: "8px",
  fontSize: "14px",
  lineHeight: "1em",
  fontWeight: "600",
  color: "#111",
};

const wb = {
  bg: "#fff",
  color: "#111",
};

export function PaymentButtons() {
  return (
    <>
      <Button
        w="100%"
        alignItems={"center"}
        bg={"#111"}
        color={"white"}
        mt="4"
        display={"flex"}
        gap={"6px"}
        _hover={{ bg: "#111" }}
      >
        <FaApple /> Checkout with Apple Pay
      </Button>
      <Button
        w="100%"
        alignItems={"center"}
        bg={"navy"}
        color={"white"}
        colorScheme="PayPal"
        mt="10px"
        display={"flex"}
        gap={"6px"}
        _hover={{ bg: "navy" }}
      >
        <FaPaypal /> Checkout with PayPal
      </Button>
      <Button
        w="100%"
        alignItems={"center"}
        bg={"#6059F8"}
        color={"white"}
        mt="10px"
        display={"flex"}
        gap={"6px"}
        _hover={{ bg: "#6059F8" }}
      >
        <FaStripeS /> Checkout with Stripe
      </Button>
    </>
  );
}
