import React, { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  VStack,
  Icon,
  Text,
  Heading,
  HStack,
  Image,
  Stack,
  Collapse,
  Button,
  Textarea,
  Badge,
  Modal,
  ModalOverlay,
  FormHelperText,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  useRadio,
  useRadioGroup,
  Select,
} from "@chakra-ui/react";
import RadioCard from "../components/RadioCard";
import GroupSize from "../components/GroupSize";
import partyOptions from "../components/partyOptions";
import { timeOptions } from "../components/timeOptions";
import { ContactForm } from "../components/ContactForm";
import GroupSizeSelect from "../components/GroupSize";
import Bottles from "../components/Bottles";
import { FaApple } from "react-icons/fa";
const fontlabelStyle = {
  my: "10px",
  fontSize: "14px",
  fontWeight: "600",
  color: "#fff",
};

const wb = {
  bg: "#fff",
  color: "#111",
};

export default function Vudu() {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedNumber, setSelectedNumber] = useState<string | undefined>();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { isOpen, onToggle } = useDisclosure();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the form submission:
    console.log("Selected option:", selectedOption);
    console.log("Selected date:", selectedDate);
    console.log("Selected arrival time:", selectedTime);
    console.log("Full name:", fullName);
    console.log("Email:", email);
    console.log("Phone:", phone);
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "eventType",
    defaultValue: undefined,
    onChange: (value) => {
      setSelectedOption(value);
    },
  });

  const handleBottleToggle = () => {
    setShowBottles((prev) => !prev); // Toggle the visibility
  };

  const [showBottles, setShowBottles] = useState(false);

  const group = getRootProps();

  // Group size options
  const groupSizes = Array.from({ length: 20 }, (_, i) => (i + 1).toString());

  const {
    getRootProps: getNumberRootProps,
    getRadioProps: getNumberRadioProps,
  } = useRadioGroup({
    name: "groupSize",
    defaultValue: undefined,
    onChange: setSelectedNumber,
  });

  const numbersGroup = getNumberRootProps();

  return (
    <Flex flexDirection={"column"} overflow={"hidden"}>
      <Flex
        borderBottom="1px solid #bc9c4f"
        bg="black"
        w="100%"
        p="20px"
        justify={"center"}
      >
        <Image
          width="80px"
          src="https://vuduyork.co.uk/wp-content/themes/yootheme/cache/5c/vudu-lounge-logo-L-5c2afae8.webp"
        />
      </Flex>
      <form onSubmit={handleSubmit}>
        <Flex
          px="20px"
          flexDirection={"column"}
          {...group}
          maxW="500px"
          pb="30px"
          pt="10px"
          bg="#111"
          color={"white"}
        >
          <Text mt="10px" fontSize="22px" fontWeight="600" color={"white"}>
            Request VIP Table
          </Text>
          <FormControl isRequired>
            <FormLabel {...fontlabelStyle}>Celebration Type</FormLabel>
            <Select placeholder="Select option" {...wb}>
              <option value="option1">Just for Fun</option>
              <option value="option2">Birthday</option>
              <option value="option3">Wedding</option>
              <option value="option3">Other</option>
            </Select>
          </FormControl>
          <FormControl isRequired mt="4">
            <FormLabel htmlFor="event-time" {...fontlabelStyle}>
              Select arrival time:
            </FormLabel>
            <Select
              id="event-time"
              placeholder="Select time"
              value={selectedTime}
              {...wb}
              onChange={(e) => setSelectedTime(e.target.value)}
            >
              {timeOptions.map((time) => (
                <option
                  key={time}
                  value={time.replace("pm", "").replace("am", "")}
                >
                  {" "}
                  {/* Store value in 24-hour format */}
                  {time}
                </option>
              ))}
            </Select>
            <FormHelperText color="#fff">
              Arrival must be between 10:00pm and 2:00am.
            </FormHelperText>
          </FormControl>
          <FormControl isRequired mt="4">
            <FormLabel htmlFor="group-size" {...fontlabelStyle}>
              Select group size:
            </FormLabel>
            <GroupSizeSelect
              selectedNumber={selectedNumber}
              setSelectedNumber={setSelectedNumber}
            />
          </FormControl>
          <FormControl isRequired mt="4">
            <FormLabel htmlFor="event-date" {...fontlabelStyle}>
              Select the date of the event:
            </FormLabel>
            <Input
              id="event-date"
              type="date"
              placeholder="Select date"
              value={selectedDate}
              {...wb}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </FormControl>
          <ContactForm
            fullName={fullName}
            email={email}
            phone={phone}
            setFullName={setFullName}
            setEmail={setEmail}
            setPhone={setPhone}
          />
          <FormControl mt="4">
            <FormLabel htmlFor="message" {...fontlabelStyle}>
              Message
            </FormLabel>
            <Textarea
              id="message"
              {...wb}
              placeholder="Type your message here (optional)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>
        </Flex>
        <Flex flexDirection={"column"} bg="#111">
          <Flex
            bg="#fff"
            borderRadius={"10px"}
            m={"10px"}
            flexDirection={"column"}
            justifyContent={"center"}
            py="15px"
            gap={"10px"}
          >
            <Box
              bg=" #71fa94"
              px="8px"
              py="2px"
              fontWeight={"600"}
              borderRadius="4px"
              fontSize={"14px"}
              color="#111"
              textAlign={"center"}
              alignSelf="center"
            >
              10% 0FF PRE-ORDERS
            </Box>
            <Text
              display="flex"
              fontSize={"24px"}
              fontWeight={"800"}
              alignSelf="center"
              alignItems={"center"}
              gap={"4px"}
            >
              VIP BOTTLE MENU
            </Text>
            <Button
              alignSelf={"center"}
              colorScheme="blue"
              onClick={handleBottleToggle}
              fontSize={"14px"}
              lineHeight={"1em"}
              p="10px"
              height="auto"
              bg="#111"
            >
              {showBottles ? "Hide Menu" : "Show Menu"}
            </Button>

            {showBottles && <Bottles />}
          </Flex>
          <Button
            mx="10px" //onClick={onToggle}
            mt="4"
            mb="20px"
            bg="#bc9c4f"
            color="#fff"
          >
            CONFIRM BOOKING{" "}
          </Button>

          <Collapse in={isOpen} animateOpacity>
            <Flex w="100%" flexDirection={"column"}>
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
              <Text textAlign="center" fontSize={"12px"} fontWeight={"600"}>
                Refundable £50 booking deposit + selected bottles
              </Text>
            </Flex>
          </Collapse>
        </Flex>
      </form>
    </Flex>
  );
}
