import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Link,
  ModalCloseButton,
  FormControl,
  InputRightElement,
  Input,
  InputGroup,
  Flex,
  Box,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import SocialButtons from "../../Forms/SocialButtons";
import { FaEye, FaEyeSlash, FaHeadphones } from "react-icons/fa";
import SignInLink from "../../../ProfileOffline/SignInLink";
import SignInModal from "./SignInModal";
export default function RegisterModal() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <ModalContent pt="20px" mx={{ base: "20px", md: "0" }}>
        <ModalCloseButton />
        <ModalBody
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="10px"
          px="0"
        >
          <Heading fontSize="24px">Create Free Account</Heading>
          <Text align="center" fontSize="14px" color="#22A9FC" fontWeight="500">
            Continue with:
          </Text>
          <SocialButtons />
          <Text fontSize="14px" color="#A3A3A3">
            or continue with email
          </Text>

          <Flex
            flexDirection="column"
            gap="10px"
            width={{ base: "80%", md: "70%" }}
          >
            <FormControl isRequired>
              <Input id="email" placeholder="Email" type="email" />
            </FormControl>

            <FormControl isRequired>
              <InputGroup>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <InputRightElement>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? (
                      <span style={{ fontSize: "14px" }}>
                        <FaEye />
                      </span>
                    ) : (
                      <span style={{ fontSize: "14px" }}>
                        <FaEyeSlash />
                      </span>
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button
              background="#9E03C9"
              color="white"
              _hover={{
                background:
                  "-webkit-linear-gradient(111deg, hsla(291, 79%, 51%, 1) 0%, hsla(240, 91%, 73%, 1) 100%);",
                color: "white",
              }}
            >
              GET STARTED
            </Button>
          </Flex>
        </ModalBody>

        <ModalFooter
          justifyContent="center"
          p="0"
          display="flex"
          flexDirection="column"
        >
          <Box
            as="span"
            mt="10px"
            mb="20px"
            display="flex"
            alignItems="center"
            fontSize="14px"
            gap="5px"
          >
            <FaHeadphones />
            Are you a DJ?{" "}
            <Box as="a" href="/dj" color="#9605F2" fontWeight="500">
              Sign up here
            </Box>
          </Box>
        </ModalFooter>
      </ModalContent>
    </>
  );
}
