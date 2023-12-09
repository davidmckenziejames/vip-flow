import {
  Box,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
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

export default function BillingSettings() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box p="10px" pb="20px">
      <Heading fontSize="20">Billing</Heading>
      <Flex direction="column" gap="25px">
        <Text>TBC.</Text>
      </Flex>
    </Box>
  );
}
