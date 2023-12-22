import { useEffect, useState } from "react";
import {
  Flex,
  FormControl,
  FormLabel,
  Button,
  Input,
  Link,
  useDisclosure,
  Checkbox,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Contact({ onPaymentToggle }: any) {
  const { isOpen: isPaymentOpen } = useDisclosure();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [postcode, setPostcode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [showName, setShowName] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const fontlabelStyle = {
    fontSize: "18px",
    fontWeight: "600",
    mb: "10px",
  };
  const handlePostcodeInput = (value: string) => {
    setPostcode(value);
    setShowName(value.trim() !== "");
  };

  const handleLastNameInput = (value: string) => {
    setLastName(value);
    setShowEmail(value.trim() !== "");
  };

  const handleEmailInput = (value: string) => {
    setEmail(value);
    setShowPhone(value.trim() !== "");
  };

  const handlePhoneInput = (value: string) => {
    setPhone(value);
    setShowCompany(value.trim() !== "");
  };

  return (
    <Flex
      flexDirection="column"
      gap="20px"
      py="20px"
      maxW={{ base: "100%", md: "500px" }}
    >
      {/* Postcode Input */}
      <FormControl id="postcode">
        <FormLabel {...fontlabelStyle}>What is your postcode?</FormLabel>
        <Input
          type="text"
          id="postcode"
          placeholder="e.g. SW3 2JY"
          value={postcode}
          onChange={(e) => handlePostcodeInput(e.target.value)}
        />
      </FormControl>

      {/* Name Input */}
      {showName && (
        <FormControl id="name">
          <FormLabel {...fontlabelStyle}>What is your name?</FormLabel>
          <Flex gap={"20px"} justifyContent="space-between">
            <Input
              type="text"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <Input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => handleLastNameInput(e.target.value)}
            />
          </Flex>
        </FormControl>
      )}

      {/* Email Input */}
      {showEmail && (
        <FormControl id="email">
          <FormLabel {...fontlabelStyle}>What is your email?</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => handleEmailInput(e.target.value)}
          />
        </FormControl>
      )}

      {/* Phone Input */}
      {showPhone && (
        <FormControl id="phone">
          <FormLabel {...fontlabelStyle}>What is your phone number?</FormLabel>
          <Input
            type="tel"
            id="phone"
            placeholder="Your Phone"
            value={phone}
            onChange={(e) => handlePhoneInput(e.target.value)}
          />
        </FormControl>
      )}

      {/* Company Input */}
      {showCompany && (
        <Flex flexDirection={"column"} gap={"15px"} bg="white">
          <Checkbox name="acceptTerms">
            I accept the terms and conditions
          </Checkbox>
          <Flex gap={"10px"} flexDirection={"column"} alignItems={"center"}>
            <VStack
              borderRadius={"10px"}
              bg="#072440"
              gap={"20px"}
              py={"30px"}
              w={{ base: "80%", md: "300px" }}

              // Change width to "300px"
            >
              <Text color={"#fff"} lineHeight={"1em"} fontSize={"40px"}>
                £29
              </Text>
              <Text color={"#fff"} lineHeight={"1em"} fontSize={"16px"}>
                <b>Callout Fee</b> (50% deposit)
              </Text>

              <Button
                type="submit"
                bg={"#fff"}
                _hover={{ bg: "#F44822", color: "#fff" }}
                color={"#072440"}
                as="a"
                href="https://buy.stripe.com/cN2eXgePP4Q0dvq5kl"
                target="_blank"
                maxW={{ base: "100%", md: "300px" }}
              >
                COMPLETE BOOKING
              </Button>
            </VStack>
            <Image
              w="140px"
              alignSelf={"center"}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPRRpS4numAbIaHX3a1ayZlctLb1dPgRCFQ&usqp=CAU"
            />
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
