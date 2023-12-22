import {
  Container,
  Flex,
  FlexProps,
  Table,
  Thead,
  Icon,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useColorModeValue,
  useBreakpointValue,
  useColorMode,
  Box,
  Button,
  Heading,
  Stack,
  SimpleGrid,
  VStack,
  IconButton,
  ButtonGroup,
  HStack,
} from "@chakra-ui/react";
import { Placeholder } from "./Placeholder";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit, AiTwotoneLock } from "react-icons/ai";
import {
  FaShoppingCart,
  FaCheck,
  FaShoppingBasket,
  FaShoppingBag,
} from "react-icons/fa";
import TimeSlotBooking from "../components/Timing";
const itemStyle = {
  color: "#111",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "1em",
};
const titleStyle = {
  color: "#111",

  fontSize: "15px",
  fontWeight: "500",
};
const buttonStyle = {
  color: "white",
  display: "flex",
  alignItems: "center",
  lineHeight: "1em",
  fontSize: "14px",
  fontWeight: "600",
  gap: "5px",
  bg: "black",
  px: "10px",
  py: "8px",
  borderRadius: "8px",
};
export const Main = (props: FlexProps) => {
  const data = [
    {
      name: "Peter Bennett",
      celebration: "Pigeons",
      date: "Fri 15th December",
      time: "10:00 AM",
      people: "5",
      amount: "300",
    },
    {
      name: "Archie Evans",
      celebration: "Bed Bugs",
      date: "Fri 15th December",
      time: "11:00 AM",
      people: "8",
      amount: "600",
    },
    {
      name: "Mike Forest",
      celebration: "Bed Bugs",
      date: "Fri 15th December",
      time: "11:30 AM",
      people: "6",
      amount: "300",
    },
    {
      name: "Annie Stevens",
      celebration: "Rats",
      date: "Sat 16th December",
      time: "9:30 AM",
      people: "8",
      amount: "200",
    },
    {
      name: "Rich Harris",
      celebration: "Bed Bugs",
      date: "Sat 16th December",
      time: "10:30 AM",
      people: "8",
      amount: "230",
    },
    {
      name: "Rebecca Jones",
      celebration: "Bed Bugs",
      date: "Sat 16th December",
      time: "12:00 AM",
      people: "4",
      amount: "170",
    },
    {
      name: "Rebecca Jones",
      celebration: "Bed Bugs",
      date: "Sat 16th December",
      time: "12:00 AM",
      people: "4",
      amount: "170",
    },
    {
      name: "Rebecca Jones",
      celebration: "Bed Bugs",
      date: "Sat 16th December",
      time: "12:00 AM",
      people: "4",
      amount: "170",
    },
    {
      name: "Rebecca Jones",
      celebration: "Bed Bugs",
      date: "Sat 16th December",
      time: "12:00 AM",
      people: "4",
      amount: "170",
    },
    {
      name: "Rebecca Jones",
      celebration: "Bed Bugs",
      date: "Sat 16th December",
      time: "12:00 AM",
      people: "4",
      amount: "170",
    },
  ];
  return (
    <Flex
      as="main"
      role="main"
      direction="column"
      flex="1"
      py={"20px"}
      px="20px"
      {...props}
    >
      <Heading px="20px" fontSize={"24px"} mb="10px">
        Pest Bookings
      </Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Pest</Th>
            <Th>Date</Th>
            <Th>Time</Th>

            <Th>Amount</Th>
            <Th>Deposit</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((booking, index) => (
            <Tr key={index}>
              <Td>
                <Flex {...itemStyle}>{booking.name}</Flex>
              </Td>
              <Td>
                <Flex {...itemStyle}>{booking.celebration}</Flex>
              </Td>
              <Td>
                <Flex {...itemStyle}>{booking.date}</Flex>
              </Td>
              <Td>
                <Flex {...itemStyle}>{booking.time}</Flex>
              </Td>

              <Td>
                <Flex {...itemStyle} alignItems={"center"} gap={"4px"}>
                  <FaShoppingCart fontSize={"14px"} />£{booking.amount}
                </Flex>
              </Td>
              <Td>
                <Flex {...itemStyle} alignItems={"center"} gap={"4px"}>
                  <FaCheck color="lightgreen" fontSize={"14px"} /> Deposit
                </Flex>
              </Td>
              <Td>
                <Flex>
                  <Box {...buttonStyle}>View </Box>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};
