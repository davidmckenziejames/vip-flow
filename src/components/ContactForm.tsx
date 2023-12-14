import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import { FaApple, FaPaypal, FaStripe, FaStripeS } from "react-icons/fa";
import { Total } from "./Bottles";

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

export function ContactForm() {
  return (
    <>
      <Flex flexDirection={"row"} flexWrap={"wrap"} justify={"space-between"}>
        <FormControl mt="4" color="black" w="48%">
          <FormLabel htmlFor="first-name" {...fontlabelStyle}>
            First Name
          </FormLabel>
          <Input
            {...wb}
            color="black"
            id="first-name"
            type="text"
            name="first-name"
            placeholder="First Name"
            value=""
          />
        </FormControl>
        <FormControl mt="4" color="black" w="48%">
          <FormLabel htmlFor="last-name" {...fontlabelStyle}>
            Last Name
          </FormLabel>
          <Input
            {...wb}
            color="black"
            id="last-name"
            type="text"
            placeholder="Last Name"
            value=""
          />
        </FormControl>

        <FormControl mt="4">
          <FormLabel htmlFor="email" {...fontlabelStyle}>
            Email
          </FormLabel>
          <Input
            {...wb}
            id="email"
            type="email"
            placeholder="Email Address"
            value=""
          />
        </FormControl>

        <FormControl mt="4">
          <FormLabel htmlFor="phone" {...fontlabelStyle}>
            Phone
          </FormLabel>
          <Input
            {...wb}
            id="phone"
            type="tel"
            value=""
            placeholder="Phone Number"
          />
        </FormControl>
        <FormControl mt="4">
          <FormLabel htmlFor="postcode" {...fontlabelStyle}>
            Postcode
          </FormLabel>
          <Input
            {...wb}
            id="postcode"
            type="text"
            placeholder="Postcode"
            value=""
          />
        </FormControl>
        <Flex
          w={"100%"}
          flexDir={"column"}
          bg="#f3f3f3"
          border="1px solid #d2d2d2"
          borderRadius={"8px"}
          p="10px"
          mt="20px"
        >
          <Text fontWeight={"bold"}>Summary</Text>
          <Text w="100%" fontSize={"14px"} fontWeight={"600"}>
            Booking Deposit:{" "}
            <Text as="span" fontWeight={"400"}>
              £50.00 (refundable)
            </Text>
          </Text>
          <Text w="100%" fontSize={"14px"} fontWeight={"600"}>
            Pre-Ordered Bottles:{" "}
            <Text as="span" fontWeight={"400"}>
              £360.00 (saving £150)
            </Text>
          </Text>
        </Flex>
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
      </Flex>
    </>
  );
}
