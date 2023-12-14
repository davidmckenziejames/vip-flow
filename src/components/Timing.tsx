import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Select,
  useMediaQuery,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { addDays, addMonths, format } from "date-fns";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

const TimeSlotBooking = () => {
  const today = new Date();
  const [selectedMonth, setSelectedMonth] = useState<number>(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(
    undefined,
  );
  const [startDay, setStartDay] = useState(0);
  const [hasMovedRight, setHasMovedRight] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 600px)");
  const [isTablet] = useMediaQuery("(min-width: 600px) and (max-width: 850px)");
  const timeSlots: string[] = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];

  const handleWheel = (event: React.WheelEvent) => {
    if (event.deltaY < 0) {
      slideLeft();
    } else if (event.deltaY > 0) {
      slideRight();
    }
  };

  const slideLeft = () => {
    if (startDay > 0) {
      setStartDay((oldStartDay) => oldStartDay - 1);
      if (startDay - 1 === 0) {
        setHasMovedRight(false);
      }
    }
  };

  const slideRight = () => {
    setStartDay((oldStartDay) => oldStartDay + 1);
    setHasMovedRight(true);
  };

  return (
    <Flex p="0px" pt="20px" flexDirection="column" alignItems="center">
      <Flex w="100%" justifyContent="center">
        <Heading>Pick a Time</Heading>
      </Flex>
      <VStack align="start" spacing={2} width="100%" maxW="800px">
        <Flex
          align="flex-start"
          justify="space-between"
          width="100%"
          onWheel={handleWheel}
        >
          <Box color={hasMovedRight ? "black" : "white"} pt="10px">
            <ChevronLeftIcon boxSize={8} onClick={slideLeft} />
          </Box>
          <Flex
            overflowX="scroll"
            justify="space-between"
            width="100%"
            css={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {Array.from({ length: isMobile ? 2 : isTablet ? 3 : 5 }, (_, i) => {
              const date = addDays(today, startDay + i);
              return (
                <Box key={i} p={2} m={1} bg="white" textAlign="center" flex="1">
                  <Box
                    border="1px"
                    borderRadius="md"
                    onClick={() => setSelectedDate(date)}
                    color="#fff"
                    bg="purple"
                    py="6px"
                  >
                    {format(date, "EEE do MMM")}
                  </Box>
                  <VStack align="stretch" spacing={1} mt={2}>
                    {timeSlots.map((timeSlot) => (
                      <Button
                        key={timeSlot}
                        display="flex"
                        flexDirection="column"
                        py="24px"
                        colorScheme={
                          selectedTime === `${timeSlot} ${format(date, "EEE")}`
                            ? "green"
                            : "gray"
                        }
                        onClick={() =>
                          setSelectedTime(`${timeSlot} ${format(date, "EEE")}`)
                        }
                        mt={2}
                      >
                        <Text fontSize="16px">{timeSlot}</Text>
                        <Text fontSize="10px">{format(date, "EEEE")}</Text>
                      </Button>
                    ))}
                  </VStack>
                </Box>
              );
            })}
          </Flex>
          <Box pt="10px">
            <ChevronRightIcon boxSize={8} onClick={slideRight} />
          </Box>
        </Flex>
        <VStack w="100%">
          <Flex align="center" justify="space-between" width="90%">
            <Box>
              {!selectedTime && (
                <Button colorScheme="gray">I DON'T KNOW</Button>
              )}
              <Text fontSize="lg">
                {selectedTime
                  ? `Selected Time: ${selectedTime.split(" ")[0]} ${format(
                      new Date(selectedDate),
                      "EEEE do MMMM",
                    )}`
                  : ""}
              </Text>
            </Box>
            {selectedTime && (
              <HStack>
                <Button colorScheme="gray">I DON'T KNOW</Button>
                <Button colorScheme="teal">Confirm Time</Button>
              </HStack>
            )}
          </Flex>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default TimeSlotBooking;
