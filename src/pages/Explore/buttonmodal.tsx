import React, { useState } from "react";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";

import {
  FaGoogle,
  FaFacebook,
  FaYelp,
  FaStar,
  FaRegStar,
  FaArrowRight,
  FaCheckCircle,
  FaTimes,
  FaCalculator,
} from "react-icons/fa";

type OptionProps = {
  value: string;
  children: React.ReactNode;
};

function RadioCard(props: OptionProps) {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <VStack as="label">
      <input {...input} />
      <VStack
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        overflow="hidden"
        _checked={{
          border: "3px solid #B8FFD5",
        }}
        _focus={{
          boxShadow: "none",
        }}
      >
        {props.children}
      </VStack>
    </VStack>
  );
}

export default function ButtonModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  const options = ["Residential Property", "Commercial Property"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: undefined,
    onChange: (value) => {
      setSelectedOption(value);
    },
  });

  const group = getRootProps();

  return (
    <>
      <Button
        lineHeight="1em"
        position="fixed"
        top="10px"
        left="10px"
        onClick={onOpen}
      >
        GET A QUOTE
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent p="0" overflow="hidden" borderRadius="10px">
          <ModalCloseButton
            size="lg"
            color="white"
            top="4px"
            right="0px"
            position={"absolute"}
          />
          <ModalBody p="0">
            <VStack bg="green">
              <Text
                color={"WHITE"}
                textAlign="center"
                fontSize={"20px"}
                fontWeight={"600"}
                py="10px"
              >
                FREE QUOTE CALCULATOR
              </Text>
            </VStack>

            <Text
              my="10px"
              textAlign="center"
              fontSize={"20px"}
              fontWeight={"600"}
            >
              Where is your pest problem?
            </Text>
            <HStack
              {...group}
              gap="30px"
              justifyContent="space-evenly"
              px="20px"
            >
              {options.map((value) => {
                const radio = getRadioProps({ value });
                return (
                  <VStack key={value} as={RadioCard} {...radio}>
                    <Image
                      src={
                        value === "Residential Property"
                          ? "https://dynopest.co.uk/wp-content/uploads/2023/07/home.jpg"
                          : "https://dynopest.co.uk/wp-content/uploads/2023/07/othersolar.jpg"
                      }
                    />
                    <Text
                      lineHeight={"1em"}
                      pb="8px"
                      fontSize={"14px"}
                      fontWeight={"600"}
                    >
                      {value}
                    </Text>
                  </VStack>
                );
              })}
            </HStack>
          </ModalBody>
          <ModalFooter p="0">
            <VStack w="100%" gap="0" pt="15px">
              {selectedOption && (
                <Button mb="10px" colorScheme="blue" mr={3} onClick={onClose}>
                  CONTINUE TO CALCULATOR
                </Button>
              )}
              <Text
                fontSize="16px"
                fontWeight={"600"}
                textAlign="center"
                maxW="90%"
              >
                How does this work?
              </Text>
              <Text pb="15px" fontSize="14px" textAlign="center" maxW="90%">
                Answer a few questions about your pest problem and our free
                quote calculator will display an instant price estimate for the
                job.
              </Text>
              <HStack
                py="10px"
                bg="black"
                justifyContent="space-evenly"
                w="100%"
                color="white"
              >
                <HStack gap="4px">
                  <FaTimes color="red" />
                  <Text>No waiting</Text>
                </HStack>
                <HStack gap="4px">
                  <FaTimes color="red" />
                  <Text>No phone calls</Text>
                </HStack>
                <HStack gap="4px">
                  <FaTimes color="red" />
                  <Text>No salespeople</Text>
                </HStack>
              </HStack>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
