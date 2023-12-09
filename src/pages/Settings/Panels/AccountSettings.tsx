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

export default function AccountSettings() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Box p="10px" pb="20px">
      <Text fontSize="16px" pb="15px">
        <i>Update your account settings.</i>
      </Text>
      <Flex direction="column" gap="25px">
        <FormControl>
          <FormLabel htmlFor="first_name">First Name</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaRegAddressBook color="#bebebe" />
            </InputLeftElement>
            <Input
              focusBorderColor="#69f2eb"
              id="first_name"
              placeholder="First Name"
              defaultValue="David"
            />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last_name">Last Name</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaRegAddressCard color="#bebebe" />
            </InputLeftElement>
            <Input
              focusBorderColor="#69f2eb"
              id="last_name"
              placeholder="Last Name"
              defaultValue="McKenzie-James"
            />
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FaRegEnvelope color="#bebebe" />
            </InputLeftElement>
            <Input
              focusBorderColor="#69f2eb"
              id="email"
              placeholder="Email"
              defaultValue="david@djfan.net"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="country">
          <FormLabel>Select country</FormLabel>
          <Select
            focusBorderColor="#69f2eb"
            placeholder="Select country"
            defaultValue="GB"
          >
            <Countries />
          </Select>
        </FormControl>

        <Button
          bg={"#BE04F1"}
          w="200px"
          color={"white"}
          _hover={{
            bg: "#8E03B5",
          }}
        >
          Update Settings
        </Button>
        <Divider mt="20px" />
        <Heading fontSize="24px">Login Details</Heading>
        <FormControl>
          <FormLabel htmlFor="new_password">New Password</FormLabel>
          <InputGroup>
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="new_password">Confirm Password</FormLabel>
          <InputGroup>
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button
          bg={"#000000"}
          w="200px"
          color={"white"}
          _hover={{
            bg: "#8E03B5",
          }}
        >
          Update Password
        </Button>
      </Flex>
    </Box>
  );
}
