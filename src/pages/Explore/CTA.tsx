import {
  Box,
  Avatar,
  VStack,
  Icon,
  Text,
  Heading,
  HStack,
  Image,
  Stack,
  Button,
  Badge,
} from "@chakra-ui/react";

import Slider from "react-slick";

import {
  FaGoogle,
  FaFacebook,
  FaYelp,
  FaStar,
  FaRegStar,
  FaArrowRight,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";

export default function CTA22() {
  return (
    <VStack
      gap="0"
      w="250px"
      bg="white"
      position="fixed"
      bottom="10px"
      right="10px"
      borderRadius="10px"
      overflow="hidden"
    >
      <HStack w="100%" justify="space-between" bg="#e25534" py="5px" px="10px">
        <Text color="#fff" fontWeight="600">
          What our customers say
        </Text>
      </HStack>
      <VStack w="100%" py="15px" px="10px">
        <Badge bg="green">NEW</Badge>
        <Button color="white" bg="blue">
          GET A PRICE
        </Button>
        <Button color="white" bg="blue" lineHeight="1em">
          CALCULATE PRICE
        </Button>
        <Text>
          Answer a few questions and receive an instant estimate to fix your
          pest problem.
        </Text>
        <Text>Get a price in 1-2 mins</Text>
        <HStack>
          <FaTimes /> <Text>No phone calls</Text>
          <FaTimes /> <Text>No waiting</Text>
          <FaTimes /> <Text>No sales people</Text>
        </HStack>
        <VStack w="100%">
          <HStack w="100%" justifyContent="center" gap="3px">
            <FaStar fontSize="16px" color="gold" />
            <FaStar fontSize="16px" color="gold" />
            <FaStar fontSize="16px" color="gold" />
            <FaStar fontSize="16px" color="gold" />
            <FaStar fontSize="16px" color="gold" />
          </HStack>
          <Text>657 reviews (4.8)</Text>
          <Image src="https://app.wondersites.org/templates/review-widget.net/assets/img/widgets/square-widget-7.png" />
        </VStack>
      </VStack>
    </VStack>
  );
}
