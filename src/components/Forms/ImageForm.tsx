import {
  Box,
  Button,
  Divider,
  Select,
  Flex,
  Container,
  FormControl,
  Text,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { Dropzone } from "./Dropzone";
import UploadButton from "./UploadButton";
import { Form, Formik, Field, FormikHelpers } from "formik";

interface Values {
  name: string;
  email: string;
  privacy: string;
}

export default function ImageForm() {
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
                  <FormControl id="name" my="15px">
                    <InputGroup>
                      <InputLeftAddon>Name</InputLeftAddon>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl id="privacy" my="15px">
                    <FormLabel>Who can view this post?</FormLabel>
                    <Select
                      name="privacy"
                      placeholder="Who can view this post?"
                    >
                      <option value="everyone">Everyone</option>
                      <option value="gold">Gold Members</option>
                      <option value="vip">VIP Members</option>
                    </Select>
                  </FormControl>

                  <FormControl id="picture">
                    <FormLabel>Picture</FormLabel>

                    <Dropzone width="full" />
                  </FormControl>

                  <Button
                    my="10px"
                    type={"submit"}
                    bg="#8553f4"
                    w="full"
                    _hover={{ bg: "#3500ab" }}
                    color="white"
                  >
                    Create Image Post
                  </Button>
                </Form>
              </Formik>
            </Box>
          </Stack>
          <Divider />
        </Box>
      </Container>
      <Container>
        <Flex
          mt="50px"
          flexDirection="column"
          py="20px"
          px="20px"
          borderRadius="10px"
          align="center"
          gap="10px"
          bg="black"
        >
          <Text fontSize="14px" color="white">
            Alternative upload widget:
          </Text>
          <UploadButton />
        </Flex>
      </Container>
    </>
  );
}
