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
} from "@chakra-ui/react";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPoundSign,
  FaTiktok,
  FaUser,
  FaUsers,
} from "react-icons/fa";

const ROICalculator = () => {
  const [videos, setVideos] = useState(10);
  const [cost, setCost] = useState(395);
  const [hours, setHours] = useState(3);
  const savings = videos * cost * 0.8;
  const hours_saved = videos * hours * 0.9;

  return (
    <VStack
      py="30px"
      minH="100vh"
      bgGradient="linear(to-r, #0e0725, #5c03bc, #e536ab)"
    >
      <Image
        src="https://djfan.ams3.cdn.digitaloceanspaces.com/2023/06/exchange-rate-1.png"
        width={{ base: "55px", md: "75px" }}
        mb="20px"
      />
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
          <Flex w="100%" flexDir={"column"} gap="15px" alignItems={"center"}>
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
              <SliderThumb boxSize={4} borderColor="gray.400" borderWidth={1} />
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

          <Flex w="100%" flexDir={"column"} gap="15px" alignItems={"center"}>
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
              <SliderThumb boxSize={4} borderColor="gray.400" borderWidth={1} />
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
          <Flex w="100%" flexDir={"column"} gap="10px" alignItems={"center"}>
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
              <SliderThumb boxSize={5} borderColor="gray.400" borderWidth={1} />
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
  );
};

export default ROICalculator;
