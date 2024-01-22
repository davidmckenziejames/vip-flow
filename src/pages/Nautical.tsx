import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Flex,
  useToast,
  Text,
  Heading,
  Image,
  Radio,
  RadioGroup,
  Button,
  Textarea,
  FormHelperText,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  useRadioGroup,
} from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css";
import { ContactForm } from "../components/ContactForm";
import GroupSizeSelect from "../components/GroupSize";
import Bottles, { Total } from "../Form/Bottles";
import { FaApple, FaArrowRight, FaLock, FaUsers } from "react-icons/fa";
import { options, Option } from "../Form/CelebrationOptions";
import { PaymentButtons } from "../Form/PaymentButtons";
import { format } from "date-fns";
import {
  FiCalendar,
  FiClock,
  FiPhone,
  FiShoppingBag,
  FiSmile,
  FiUsers,
} from "react-icons/fi";
import TimeSelect from "../Form/TimeOption";
import { BiParty } from "react-icons/bi";
import Courses from "../Home/Courses";
const logo =
  "https://www.nauticalcircle.com/wp-content/uploads/2023/05/nc-logo-blue.png";
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
export default function Nautical() {
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
      <Flex bg="#fff" w="100%" justifyContent="center">
        <Flex
          id="header"
          w="100%"
          p="15px"
          maxW="1000px"
          justifyContent="space-between"
          zIndex="10"
          position="sticky"
          top="0"
        >
          <Flex w="20%" display={{ base: "none", md: "flex" }}></Flex>
          <Flex w="80%" justifyContent={{ base: "flex-start", md: "center" }}>
            <Image height={{ base: "25px", md: "40px" }} src={logo} />
          </Flex>
          <Flex
            w="20%"
            color="navy"
            as="a"
            href="#cart"
            alignItems="center"
            gap="5px"
          >
            <FiPhone /> 01482 235 560
          </Flex>
        </Flex>
      </Flex>
      <Courses />
      <form
        accept-charset="UTF-8"
        action="https://www.formbackend.com/f/9d02de158b2f70bc"
        method="POST"
      >
        <Flex flexDirection="column" gap="10px" px="15px" py="20px">
          <Flex
            flexDirection={"row"}
            flexWrap={"wrap"}
            justify={"space-between"}
          >
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
          </Flex>
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
            <FormLabel htmlFor="phone" {...fontlabelStyle}>
              Emergency Contact Number
            </FormLabel>
            <Input
              {...wb}
              id="emergencyphone"
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
          <FormControl mt="4">
            <FormLabel htmlFor="postcode" {...fontlabelStyle}>
              Home Address
            </FormLabel>
            <Input
              {...wb}
              id="address"
              type="text"
              placeholder="Home Address"
              value=""
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel htmlFor="Full Name" {...fontlabelStyle}>
              Full Name
            </FormLabel>
            <Input
              {...wb}
              id="address"
              type="text"
              placeholder="Full Name"
              value=""
            />
            <Box>To appear on certificate</Box>
          </FormControl>
          <FormControl mt="4">
            <FormLabel htmlFor="Full Name" {...fontlabelStyle}>
              Emergency Contact Name
            </FormLabel>
            <Input
              {...wb}
              id="address"
              type="text"
              placeholder="Full Name"
              value=""
            />
            <Box>To appear on certificate</Box>
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
              Please detail any boating experience / qualifications
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

          <FormControl>
            <FormLabel htmlFor="message" {...fontlabelStyle}>
              Can you swim 25 metres?
            </FormLabel>
            <RadioGroup onChange={setValue} value={value}>
              <Flex direction="row" gap="15px">
                <Radio value="1">Yes</Radio>
                <Radio value="2">No</Radio>
              </Flex>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="message" {...fontlabelStyle}>
              Please detail any medical conditions
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
          <Flex flexDirection="column">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input type="email" id="email" name="email" required />
          </Flex>
          <Flex flexDirection="column">
            <FormLabel htmlFor="company">Company</FormLabel>
            <Input type="company" id="company" name="company" required />
          </Flex>
          <Button type="submit">
            <Flex
              alignItems="center"
              lineHeight="1em"
              fontSize={{ base: "16px", md: "18px" }}
              fontWeight="600"
              gap="5px"
              w={{ base: "", md: "" }}
            >
              <Box boxSize="20px">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </Box>
              REQUEST ACCESS
            </Flex>
          </Button>
        </Flex>

        <Flex
          gap={"20px"}
          px={{ base: "15px", md: "0" }}
          pb="30px"
          pt="15px"
          flexDirection={"column"}
          w={"100%"}
          maxW="600px"
        >
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
      </form>
    </Flex>
  );
}
