"use client";
import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  SliderMark,
  VStack,
  Stack,
  Text,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react";

import { FaCheckCircle } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
}

function PriceWrapper(props: Props) {
  const { children } = props;

  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}

export default function Pricing() {
  const [videos, setVideos] = useState(20);
  const [cost, setCost] = useState(395);
  const [hours, setHours] = useState(3);
  const savings = Math.round(videos * cost * 0.8);
  const hours_saved = Math.round(videos * hours * 0.9);
  const hobby = 79;
  const growth = 149;
  const scale = 349;
  const hobby_roi = Math.round((savings / (hobby * 12)) * 100);
  const growth_roi = Math.round((savings / (growth * 12)) * 100);
  const scale_roi = Math.round((savings / (scale * 12)) * 100);

  return (
    <Box pb={12}>
      <>
        <VStack py="50px" bgGradient="linear(to-r, #0e0725, #5c03bc, #e536ab)">
          <VStack
            bg="#111"
            borderRadius="lg"
            boxShadow="xl"
            py="20px"
            w={{ base: "90%", md: "500px" }}
            overflow="hidden"
            border="2px solid cyan"
          >
            <Flex color="#fff" fontSize="22px" fontWeight="600">
              AI Video Creation ROI Calculator
            </Flex>
            <Flex
              id="sliders"
              w="90%"
              flexDir={"column"}
              gap="35px"
              alignItems={"center"}
            >
              <Flex
                w="100%"
                flexDir={"column"}
                gap="15px"
                alignItems={"center"}
              >
                <Heading
                  size="26px"
                  color="white"
                  display={"flex"}
                  alignItems={"center"}
                  alignSelf={"flex-start"}
                  gap={"5px"}
                >
                  How many videos do you create a year?
                </Heading>
                <Slider
                  maxW="100%"
                  aria-label="Number of Users"
                  value={videos}
                  min={1}
                  max={300}
                  onChange={(val) => setVideos(val)}
                  defaultValue={10}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb
                    boxSize={4}
                    borderColor="gray.400"
                    borderWidth={1}
                  />
                </Slider>
                <HStack
                  lineHeight="1em"
                  w="100%"
                  fontSize="16px"
                  color="white"
                  fontWeight="500"
                  gap="0"
                  justifyContent={"space-between"}
                >
                  <Flex w="20%" justifyContent={"flex-start"}>
                    0
                  </Flex>
                  <Flex w="80%" justifyContent={"center"}>
                    {videos} videos
                  </Flex>
                  <Flex w="20%" justifyContent={"flex-end"}>
                    300
                  </Flex>
                </HStack>
              </Flex>

              <Flex
                w="100%"
                flexDir={"column"}
                gap="15px"
                alignItems={"center"}
              >
                <Heading
                  size="26px"
                  color="white"
                  display={"flex"}
                  alignItems={"center"}
                  alignSelf={"flex-start"}
                >
                  What is your average video cost?
                </Heading>
                <Slider
                  aria-label="Cost"
                  value={cost}
                  min={0}
                  max={10000}
                  onChange={(val) => setCost(val)}
                  defaultValue={395}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb
                    boxSize={4}
                    borderColor="gray.400"
                    borderWidth={1}
                  />
                </Slider>
                <HStack
                  lineHeight="1em"
                  w="100%"
                  fontSize="16px"
                  color="white"
                  fontWeight="500"
                  gap="0"
                  justifyContent={"space-between"}
                >
                  <Flex w="20%" justifyContent={"flex-start"}>
                    $0
                  </Flex>
                  <Flex w="80%" justifyContent={"center"}>
                    {" "}
                    ${cost} per video
                  </Flex>
                  <Flex w="20%" justifyContent={"flex-end"}>
                    $10,000
                  </Flex>
                </HStack>
              </Flex>
              <Flex
                w="100%"
                flexDir={"column"}
                gap="10px"
                alignItems={"center"}
              >
                <Heading
                  size="26px"
                  color="white"
                  display={"flex"}
                  alignItems={"center"}
                  alignSelf={"flex-start"}
                >
                  How many hours to produce each video?
                </Heading>
                <Slider
                  maxW="100%"
                  aria-label="Number of Users"
                  value={hours}
                  min={0}
                  max={15}
                  onChange={(val) => setHours(val)}
                  defaultValue={3}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb
                    boxSize={5}
                    borderColor="gray.400"
                    borderWidth={1}
                  />
                </Slider>
                <HStack
                  lineHeight="1em"
                  w="100%"
                  fontSize="16px"
                  color="white"
                  fontWeight="500"
                  gap="0"
                  justifyContent={"space-between"}
                >
                  <Flex w="20%" justifyContent={"flex-start"}>
                    0
                  </Flex>
                  <Flex w="80%" justifyContent={"center"}>
                    {hours} hours
                  </Flex>
                  <Flex w="20%" justifyContent={"flex-end"}>
                    15
                  </Flex>
                </HStack>
              </Flex>
            </Flex>

            <Flex
              id="ROI"
              flexDir={"column"}
              alignItems="flex-start"
              mt="20px"
              w="90%"
            >
              <Box color="#fff" fontSize="18px" fontWeight="600">
                Annual Return on Investment
              </Box>
              <Box py="6px" color="white" fontSize="20px">
                <b>${savings}</b> reduction in costs
              </Box>
              <Box color="white" fontSize="20px">
                <b>{hours_saved}</b> hours saved
              </Box>
            </Flex>
          </VStack>
        </VStack>
      </>
      <VStack mt="30px" spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Plans that fit your need
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          Start with 14-day free trial. No credit card needed. Cancel at
          anytime.
        </Text>
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Hobby
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="4xl" fontWeight="900">
                ${hobby}
              </Text>
              <Text fontSize="xl" color="gray.500">
                /month
              </Text>
            </HStack>
            <Text fontWeight="500" fontSize="16px">
              <b>ROI</b>: +{hobby_roi}%
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Product Feature
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Product Feature
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Product Feature
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Product Feature
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>

        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Growth
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="4xl" fontWeight="900">
                ${growth}
              </Text>
              <Text fontSize="xl" color="gray.500">
                /month
              </Text>
            </HStack>
            <Text fontWeight="500" fontSize="16px">
              <b>ROI</b>: +{growth_roi}%
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Product Feature
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Product Feature
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Product Feature
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Product Feature
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red">
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              Scale
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="4xl" fontWeight="900">
                ${scale}
              </Text>
              <Text fontSize="xl" color="gray.500">
                /month
              </Text>
            </HStack>
            <Text fontWeight="500" fontSize="16px">
              <b>ROI</b>: +{scale_roi}%
            </Text>
          </Box>
          <VStack
            bg={useColorModeValue("gray.50", "gray.700")}
            py={4}
            borderBottomRadius={"xl"}
          >
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Product Feature
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Product Feature
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Product Feature
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
                Product Feature
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red" variant="outline">
                Start trial
              </Button>
            </Box>
          </VStack>
        </PriceWrapper>
      </Stack>
    </Box>
  );
}
