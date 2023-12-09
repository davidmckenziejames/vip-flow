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
} from "react-icons/fa";
import CTA22 from "./CTA";
import ButtonModal from "./buttonmodal";
import ButtonOffer from "./buttonoffer";
import ButtonOptions from "./options";

export default function Reviews() {
  return (
    <Box bg="blue.500" h="100vh">
      <ButtonModal />
      <ButtonOffer />
      <ButtonOptions />
      <VStack
        gap="0"
        w="250px"
        bg="white"
        position="fixed"
        bottom="10px"
        left="10px"
        borderRadius="10px"
        overflow="hidden"
      >
        <HStack
          w="100%"
          justify="space-between"
          bg="#e25534"
          py="5px"
          px="10px"
        >
          <Text color="#fff" fontWeight="600">
            What our customers say
          </Text>
        </HStack>
        <VStack w="100%" py="15px" px="10px">
          <HStack w="100%" alignItems="center">
            <Avatar
              w="40px"
              height="40px"
              src="https://files.djfan.app/cache/706eec1f-ea13-41e4-a3f7-fd4dbc98ced2.webp"
            />
            <Stack w="100%" gap="4px">
              <Text
                display="flex"
                w="100%"
                fontSize="15px"
                fontWeight="600"
                lineHeight="1em"
              >
                David Jones
                <Box ml="3px" mt="-3px">
                  <FaCheckCircle fontSize="12px" color="green" />
                </Box>
              </Text>
              <Text lineHeight="1em" fontSize="12px">
                12 hours ago
              </Text>
            </Stack>
          </HStack>
          <Text>
            Repuso makes is amazingly easy to get all of our reviews uploaded to
            our website as soon as they are posted. I love this plug-in!
          </Text>

          <HStack justify="space-between" w="100%" pr="10px">
            <HStack justify="flex-start" gap="3px">
              <FaStar fontSize="16px" color="gold" />
              <FaStar fontSize="16px" color="gold" />
              <FaStar fontSize="16px" color="gold" />
              <FaStar fontSize="16px" color="gold" />
              <FaStar fontSize="16px" color="gold" />
            </HStack>

            <HStack>
              <Text lineHeight="1em" fontSize="14px">
                Posted on
              </Text>
              <FaGoogle />
            </HStack>
          </HStack>
        </VStack>
        <HStack
          w="100%"
          justify="space-between"
          py="10px"
          px="10px"
          bg="#f7f7f7"
          borderTop="1px solid #7f7f7f"
        >
          <Image
            w="90px"
            src="https://dynopest.co.uk/wp-content/uploads/2022/09/Logo-white-background.png"
          />
          <Text
            display="flex"
            flexDirection="row"
            alignItems="center"
            color="#111"
            fontSize={"14px"}
            fontWeight="600"
            gap="5px"
          >
            More Reviews <FaArrowRight />
          </Text>
        </HStack>
      </VStack>
      <CTA22 />
    </Box>
  );
}
