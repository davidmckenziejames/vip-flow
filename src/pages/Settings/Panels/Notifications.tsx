import {
  Box,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Switch,
  InputLeftElement,
  Button,
  Flex,
  Select,
  InputGroup,
  InputRightElement,
  Divider,
} from "@chakra-ui/react";
import Countries from "./Countries";
import { useState } from "react";
import {
  FaRegAddressCard,
  FaRegAddressBook,
  FaRegEnvelope,
} from "react-icons/fa";

export default function Notifications() {
  return (
    <Box p="10px" pb="20px">
      <Heading fontSize="20">Notification Settings</Heading>
      <Flex direction="column" gap="20px" mt="25px">
        <FormControl
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <FormLabel htmlFor="email-alerts" mb="0">
              Communication emails
            </FormLabel>
            <Text fontSize="12px" mt="4px">
              Receive emails about your account activity.
            </Text>
          </Box>
          <Switch colorScheme="green" id="email-alerts" size="md" />
        </FormControl>
        <Divider />

        <FormControl
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <FormLabel htmlFor="email-alerts" mb="0">
              Marketing emails
            </FormLabel>
            <Text fontSize="12px" mt="4px">
              Receive emails about new products, features, and more.
            </Text>
          </Box>
          <Switch colorScheme="green" id="email-alerts" size="md" />
        </FormControl>
        <Divider />

        <FormControl
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <FormLabel htmlFor="email-alerts" mb="0">
              Social emails
            </FormLabel>
            <Text fontSize="12px" mt="4px">
              Receive emails for messages, follows, and more.
            </Text>
          </Box>
          <Switch colorScheme="green" id="email-alerts" size="md" />
        </FormControl>
        <Divider />

        <FormControl
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <FormLabel htmlFor="email-alerts" mb="0">
              Security emails
            </FormLabel>
            <Text fontSize="12px" mt="4px">
              Receive emails about your account activity and security.
            </Text>
          </Box>
          <Switch colorScheme="green" id="email-alerts" size="md" />
        </FormControl>
        <Button
          bg={"#000000"}
          mt="15px"
          w="200px"
          color={"white"}
          _hover={{
            bg: "#8E03B5",
          }}
        >
          Update Settings
        </Button>
      </Flex>
    </Box>
  );
}
