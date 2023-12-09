import {
  Box,
  Avatar,
  Button,
  Divider,
  Select,
  Flex,
  Container,
  FormControl,
  Text,
  Heading,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { Form, Formik, Field, FormikHelpers } from "formik";
import { Dropzone } from "./Dropzone";

interface Values {
  name: string;
  email: string;
  privacy: string;
}

export default function ProfileForm() {
  return (
    <>
      <Container bg="white">
        <Box
          bg="bg-surface"
          boxShadow={useColorModeValue("sm", "sm-dark")}
          borderRadius="lg"
          flex="1"
        >
          <Stack
            spacing="5"
            px={{
              base: "4",
              md: "6",
            }}
            py={{
              base: "5",
              md: "6",
            }}
          >
            <Box>
                <Heading fontSize="24px">Manage Your Profile</Heading>
          <Text pt="5px">Update your basic details</Text>
          <Divider my="10px"/>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  privacy: "",
                }}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                  }, 1000);
                }}
              >
                <Form>
                     <FormControl id="picture">
                    <FormLabel>Picture</FormLabel>
                    <Stack direction='row'>
                    <Avatar name='' src='' size='lg' />
                    <Dropzone width="full" />
                    </Stack>


                    
                  </FormControl>
                  <FormControl id="name" my="15px">
                    <InputGroup>
                      <InputLeftAddon>First Name</InputLeftAddon>
                      <Input
                        type="text"
                        name="firstname"
                      />
                    </InputGroup>
                  </FormControl>
                  
                  
                  <FormControl id="lastname" my="15px">
                    <InputGroup>
                      <InputLeftAddon>Last Name</InputLeftAddon>
                      <Input
                        type="text"
                        name="lastname"
                      />
                    </InputGroup>
                  </FormControl>
                  
                  <FormControl id="lastname" my="15px">
                    <InputGroup>
                      <InputLeftAddon>Email</InputLeftAddon>
                      <Input
                        type="text"
                        name="email"
                      />
                    </InputGroup>
                  </FormControl>
                  
                  <FormControl id="lastname" my="15px">
                    <InputGroup>
                      <InputLeftAddon>Country</InputLeftAddon>
                      <Select placeholder='Select country'>
                        <option>United Arab Emirates</option>
                        <option>Nigeria</option>
                      </Select>
                    </InputGroup>
                  </FormControl>
                  
                  
                  
                  
                  <Button
                    my="10px"
                    type={"submit"}
                    bg="#8553f4"
                    w="full"
                    _hover={{ bg: "#3500ab" }}
                    color="white"
                  >
                    Save Profile Details
                  </Button>
                </Form>
              </Formik>
            </Box>
          </Stack>
          <Divider />
        </Box>
      </Container>
      
    </>
  );
}
