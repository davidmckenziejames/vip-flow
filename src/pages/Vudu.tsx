import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  VStack,
  Icon,
  useToast,
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
  FormErrorMessage,
  Input,
  FormControl,
  extendTheme,
  FormLabel,
  useRadio,
  RadioGroup,
  Radio,
  useRadioGroup,
  Select,
} from "@chakra-ui/react";
import RadioCard from "../components/RadioCard";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GroupSize from "../components/GroupSize";
import partyOptions from "../components/partyOptions";
import { timeOptions } from "../components/timeOptions";
import { ContactForm } from "../components/ContactForm";
import GroupSizeSelect from "../components/GroupSize";
import Bottles, { Total } from "../Form/Bottles";
import { FaApple, FaArrowRight, FaLock, FaUsers } from "react-icons/fa";

import Confirm from "../components/Confirm";
import { options, Option } from "../Form/CelebrationOptions";
import { PaymentButtons } from "../Form/PaymentButtons";
import { format } from "date-fns";
import {
  FiCalendar,
  FiClock,
  FiFileText,
  FiPenTool,
  FiShoppingBag,
  FiSmile,
  FiUsers,
} from "react-icons/fi";
import TimeSelect from "../Form/TimeOption";
import { BiParty } from "react-icons/bi";
const fontlabelStyle = {
  fontSize: "20px",
  fontWeight: "600",
};
const summaryStyle = {
  display: "flex",
  alignItems: "center",
  lineHeight: "1em",
  justifyContent: "center",
};
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return format(date, "do MMM yyyy"); // e.g., '12th Feb 2024'
};
const wb = {
  bg: "#fff",
  color: "#111",
};
function isIOS() {
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}
export default function Vudu() {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedNumber, setSelectedNumber] = useState<string | undefined>();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [showCheckout, setShowCheckout] = useState<boolean>(false);
  const checkoutRef = useRef<HTMLDivElement>(null);
  const [totalFromBottles, setTotalFromBottles] = useState<number>(0);

  const handleTotalChange = (newTotal: number) => {
    setTotalFromBottles(newTotal);
  };

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

  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Group size options
  const groupSizes = Array.from({ length: 20 }, (_, i) => (i + 1).toString());
  const selectedOptionLabel = options.find(
    (option) => option.value === selectedOption,
  )?.label;
  const {
    getRootProps: getNumberRootProps,
    getRadioProps: getNumberRadioProps,
  } = useRadioGroup({
    name: "groupSize",
    defaultValue: undefined,
    onChange: setSelectedNumber,
  });

  const [value, setValue] = React.useState("");
  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
  };

  const handleShowCheckout = () => {
    setShowCheckout(true);
    setTimeout(() => {
      checkoutRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Delay the scroll by 100 milliseconds
  };
  const originalPrice = totalFromBottles / 0.9;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputType, setInputType] = useState("text");

  useEffect(() => {
    // Switch back to text type if the date is cleared to show the placeholder
    if (!selectedDate) {
      setInputType("text");
    }
  }, [selectedDate]);

  const handleFocus = () => {
    // Switch to date type on focus
    setInputType("date");
  };
  const isFormComplete =
    selectedOption && selectedDate && selectedTime && selectedNumber;
  const toast = useToast();
  const handleButtonClick = () => {
    if (!isFormComplete) {
      // Show toast notification
      toast({
        title: "Incomplete Form",
        description: "Please fill in all questions before proceeding.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    } else {
      // Handle the click event when the form is complete
      handleShowCheckout();
    }
  };
  return (
    <Flex
      flexDirection={"column"}
      w="100%"
      alignItems="center"
      overflow="hidden"
    >
      {/* header */}
      <Flex bg="black" w="100%" justifyContent="center">
        <Flex
          id="header"
          borderBottom="1px solid #bc9c4f"
          bg="black"
          w="100%"
          p="20px"
          maxW="1000px"
          justifyContent="space-between"
          zIndex="10"
          position="sticky"
          top="0"
        >
          <Image width="80px" src="src/assets/vudu-logo.png" />
          <Flex color="#fff" as="a" href="#cart" alignItems="center" gap="5px">
            <FiShoppingBag />£{totalFromBottles.toFixed(2)}
          </Flex>
        </Flex>
      </Flex>

      <Box
        as="form"
        display="flex"
        flexDirection="column"
        alignItems="center"
        onSubmit={handleSubmit}
        w="100%"
      >
        <Flex
          gap={"20px"}
          px={{ base: "10px", md: "0" }}
          pb="30px"
          pt="15px"
          flexDirection={"column"}
          w={"100%"}
          maxW="600px"
        >
          <FormControl isRequired>
            <FormLabel {...fontlabelStyle}>What are you celebrating?</FormLabel>
            <Flex
              direction="row"
              wrap="wrap"
              gap="15px"
              justifyContent={{
                base: "space-between",
                sm: "unset",
                md: "unset",
              }}
            >
              {options.map((option) => (
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  key={option.value}
                  border="2px solid "
                  borderRadius="lg"
                  overflow="hidden"
                  p="3"
                  w={{ base: "47%", sm: "150px", md: "30%" }}
                  cursor="pointer"
                  bg={selectedOption === option.value ? "#111" : "white"}
                  onClick={() => handleOptionSelect(option.value)}
                >
                  <Image
                    width="40px"
                    src={option.imageUrl}
                    alt={option.label}
                    style={{
                      filter:
                        selectedOption === option.value ? "invert(1)" : "none",
                    }}
                  />
                  <Text
                    color={selectedOption === option.value ? "#fff" : "#111"}
                    fontSize={{ base: "15px", md: "16px" }}
                    fontWeight="500"
                    mt="2"
                  >
                    {option.label}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="event-time" {...fontlabelStyle}>
              Select arrival time:
            </FormLabel>
            <TimeSelect
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
            {/* Other components */}
            <FormHelperText color="#BD9748" fontWeight="500">
              Arrival must be between 10:00pm and 2:00am.
            </FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="group-size" {...fontlabelStyle}>
              Select group size:
            </FormLabel>
            <GroupSizeSelect
              selectedNumber={selectedNumber}
              setSelectedNumber={setSelectedNumber}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="event-date" {...fontlabelStyle}>
              Select the date of the event:
            </FormLabel>
            <Box position="relative">
              <Input
                id="event-date"
                type="date"
                placeholder="DD/MM/YYYY"
                value={selectedDate}
                color="#111"
                minW="98%"
                _placeholder={{ color: "pink" }}
                onChange={(e) => setSelectedDate(e.target.value)} // Ensure this line is added
              />
              {isIOS() && !selectedDate && (
                <Box
                  display={{ base: "flex", md: "none" }}
                  position="absolute"
                  top="8px"
                  left="14px"
                  fontWeight="500"
                >
                  Select date
                </Box>
              )}
            </Box>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="message" {...fontlabelStyle}>
              Booking Note
            </FormLabel>
            <Textarea
              id="message"
              {...wb}
              placeholder="Add any important information, requests, or special requirements (optional)"
              value={message}
              size="md"
              minH="100px"
              onChange={(e) => setMessage(e.target.value)}
            />
          </FormControl>
          <Flex
            bg="#fff"
            mt={"10px"}
            position="relative"
            border={"2px solid black"}
            borderRadius={"10px"}
            flexDirection={"column"}
            justifyContent={"center"}
            py="0px"
            gap={"0px"}
            w={"100%"}
            overflow={"hidden"}
            bgGradient="linear(to-l, rgb(248, 52, 246) 0.6%, rgb(152, 38, 252) 90%)"
          >
            <Flex
              py="15px"
              px={"10px"}
              width={"100%"}
              gap={"10px"}
              flexDirection="column"
              justifyContent="center"
              alignItems={"center"}
            >
              <Text
                bgGradient={
                  "linear(to-l,  rgb(9, 154, 151), rgb(21, 205, 168) 91.1%)"
                }
                color={"white"}
                fontWeight={"700"}
                px="8px"
                py="5px"
                borderRadius={"5px"}
                fontSize={"14px"}
                lineHeight={"1em"}
              >
                PRE-PURCHASE TO SAVE 10%
              </Text>
              <Heading color="white" fontSize={"28px"}>
                VIP Table Bottle Menu
              </Heading>
            </Flex>

            <Bottles onTotalUpdate={handleTotalChange} />
          </Flex>

          <Button
            bg={isFormComplete ? "#111" : "#989898"}
            id="showcheckout"
            display={"flex"}
            gap={"6px"}
            alignItems={"center"}
            fontSize={"18px"}
            color="#fff"
            w={"100%"}
            height={"50px"}
            mt="5px"
            fontWeight={"600"}
            onClick={handleButtonClick}
            _hover={{ bg: isFormComplete ? "#c09c4e" : undefined }}
          >
            COMPLETE TABLE BOOKING{" "}
            {isFormComplete ? (
              <FaArrowRight fontSize={"16px"} />
            ) : (
              <FaLock fontSize={"16px"} />
            )}
          </Button>
        </Flex>
        <Flex
          id="checkout"
          bg="black"
          w="100%"
          flexDirection={"column"}
          alignItems="center"
          display={showCheckout ? "flex" : "none"}
          ref={checkoutRef}
          py={{ base: "20px", md: "40px" }}
          px={{ base: "15px", md: "0" }}
        >
          <Flex
            w="100%"
            maxW="600px"
            flexDirection={"column"}
            alignItems="center"
            bg="#fff"
            px="15px"
            py="15px"
            borderRadius="10px"
          >
            <Text
              lineHeight="1em"
              fontSize={"20px"}
              fontWeight={"600"}
              color={"#111"}
            >
              Complete Table Booking
            </Text>
            <ContactForm />
            <Flex
              w={"100%"}
              flexDir={"column"}
              bg="#f3f3f3"
              border="1px solid #d2d2d2"
              borderRadius={"8px"}
              px="20px"
              pt="15px"
              mt="20px"
            >
              <Text fontWeight={"600"} fontSize="18px" mb="5px">
                Your Table Booking
              </Text>
              <Flex
                flexDirection="row"
                fontSize="18px"
                rowGap="15px"
                columnGap="20px"
                pt="4px"
                pb="10px"
                flexWrap="wrap"
                justifyContent=""
                mb="10px"
              >
                <Text w="fit-content" {...summaryStyle}>
                  <FiUsers style={{ marginRight: "3px" }} />
                  {selectedNumber} people
                </Text>
                <Text w="fit-content" {...summaryStyle}>
                  <BiParty style={{ marginRight: "3px" }} />
                  {selectedOptionLabel}
                </Text>
                <Text w="fit-content" {...summaryStyle}>
                  <FiClock style={{ marginRight: "3px" }} />
                  {selectedTime}
                </Text>

                <Text w="fit-content" {...summaryStyle}>
                  <FiCalendar style={{ marginRight: "3px" }} />
                  {selectedDate && formatDate(selectedDate)}
                </Text>
                <Text w="100%" fontSize="14px">
                  <b>Note</b>:{message}
                </Text>
              </Flex>
            </Flex>
            <Flex
              w={"100%"}
              flexDir={"column"}
              bg="#f3f3f3"
              border="1px solid #d2d2d2"
              borderRadius={"8px"}
              px="20px"
              py="15px"
              mt="20px"
            >
              <Flex flexDirection="column" fontSize="16px" gap="8px">
                <Text
                  fontWeight={"600"}
                  fontSize="18px"
                  mb="5px"
                  lineHeight="1em"
                >
                  Order Summary
                </Text>
                <Text fontWeight={"400"} lineHeight="1em">
                  {" "}
                  <b>Pre-Ordered Bottles</b>: £{totalFromBottles.toFixed(2)}
                </Text>
                <Text lineHeight="1em">
                  <b>Booking Deposit</b>: £39.00 (refundable)
                </Text>
                <Text lineHeight="1em">
                  <b>Total</b>: £{(totalFromBottles + 39.0).toFixed(2)}
                </Text>
              </Flex>
            </Flex>
            <PaymentButtons />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
