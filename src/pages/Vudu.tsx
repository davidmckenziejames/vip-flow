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
  FormErrorMessage,
  Input,
  FormControl,
  extendTheme,
  FormLabel,
  useRadio,
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
import Bottles from "../components/Bottles";
import { FaApple } from "react-icons/fa";
import MenuModal from "../components/MenuModal";
import Confirm from "../components/Confirm";

const fontlabelStyle = {
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

  const {
    getRootProps: getNumberRootProps,
    getRadioProps: getNumberRadioProps,
  } = useRadioGroup({
    name: "groupSize",
    defaultValue: undefined,
    onChange: setSelectedNumber,
  });

  const numbersGroup = getNumberRootProps();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      flexDirection={"column"}
      bg="black"
      w="100%"
      minH={"100vh"}
      backgroundImage={"url(src/assets/bottles/vip.jpg)"}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
    >
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor="rgba(0, 0, 0, 0.6)" // Adjust the alpha (last value) for transparency
        zIndex="1"
      />
      <Flex
        borderBottom="1px solid #bc9c4f"
        bg="black"
        w="100%"
        p="20px"
        justify={"center"}
        justifyContent="center"
        zIndex="10"
      >
        <Image width="80px" src="src/assets/vudu-logo.png" />
      </Flex>
      <VStack overflow="hidden" mt="20px" pb="50px" zIndex="10">
        <Box
          display={"flex"}
          borderRadius={"10px"}
          border="2px solid #fff"
          overflow="hidden"
          maxW="500px"
          mt="20px"
          gap={"60px"}
          bg={"#111"}
          w={{ base: "90%", md: "80%" }}
        >
          <Box as="form" onSubmit={handleSubmit} w="100%">
            <Flex
              gap={"20px"}
              px="20px"
              pb="30px"
              flexDirection={"column"}
              w={"100%"}
              color={"white"}
            >
              <Text mt="20px" fontSize="22px" fontWeight="600" color={"white"}>
                Request VIP Table
              </Text>

              <FormControl isRequired>
                <FormLabel {...fontlabelStyle}>Celebration Type</FormLabel>
                <Select placeholder="Select option" {...wb}>
                  <option value="justForFun">Just for Fun</option>
                  <option value="birthday">Birthday</option>
                  <option value="specialOccasion">Special Occasion</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="date">Date</option>
                  <option value="accomplishment">Accomplishment</option>
                  <option value="wedding">Wedding</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
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
                <Input
                  id="event-date"
                  type="date"
                  placeholder="Select date"
                  value={selectedDate}
                  color="#111"
                  bg={"#fff"}
                  _placeholder={{ color: "pink" }}
                />
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
              <MenuModal />
              <Confirm />
            </Flex>
          </Box>
        </Box>
      </VStack>
    </Flex>
  );
}
