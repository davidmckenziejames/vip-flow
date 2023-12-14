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
  const [users, setUsers] = useState(10);
  const [cost, setCost] = useState(195);

  const earnings = Math.round(users * cost);

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
        <Heading
          color="#fff"
          fontSize={{ base: "18px", md: "20px" }}
          mb="10px"
          lineHeight={{ base: "1.2em", md: "1em" }}
          textAlign="center"
        >
          Monthly Revenue
        </Heading>

        <Heading
          size="26px"
          color="white"
          display={"flex"}
          alignItems={"center"}
          alignSelf={"flex-start"}
          gap={"5px"}
          ml="40px"
        >
          <FaUsers />
          {users} customers
        </Heading>
        <Slider
          maxW="80%"
          aria-label="Number of Users"
          value={users}
          min={0}
          max={1000}
          onChange={(val) => setUsers(val)}
          defaultValue={10}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={4} borderColor="gray.400" borderWidth={1} />
        </Slider>

        <Heading
          size="26px"
          color="white"
          display={"flex"}
          alignItems={"center"}
          alignSelf={"flex-start"}
          ml="40px"
        >
          <FaPoundSign />
          {cost} per month
        </Heading>
        <Slider
          maxW="80%"
          aria-label="Number of Users"
          value={cost}
          min={0}
          max={1000}
          onChange={(val) => setCost(val)}
          defaultValue={195}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={4} borderColor="gray.400" borderWidth={1} />
        </Slider>

        <Flex>
          <Box color="white" fontSize="20px">
            <span style={{ color: "cyan", fontWeight: "600" }}>
              ${earnings}
            </span>{" "}
            per month
          </Box>
        </Flex>
      </VStack>
    </VStack>
  );
};

export default ROICalculator;
