import {
  Avatar,
  Button,
  Box,
  AbsoluteCenter,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  InputGroup,
  InputRightElement,
  Divider,
  VStack,
  Switch,
} from "@chakra-ui/react";
import {
  FaArrowRight,
  FaGoogle,
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaFacebookF,
} from "react-icons/fa";
import { useState } from "react";
import AuthFooterBar from "./AuthFooterBar";
import AuthHeader from "./AuthHeader";
import PasswordToggle from "./PasswordToggle";
import MagicToggle from "./MagicToggle";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [emailCreds, setEmailCreds] = useState("");
  const [passwordCreds, setPasswordCreds] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const avatarSizes = { base: "100px", sm: "100px" };
  const [avatarSrc, setAvatarSrc] = useState(
    "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
  );
  return (
    <Flex
      w="100%"
      h="100vh"
      maxH="100vh"
      pt={{ base: "90px", md: "180px" }}
      justifyContent="center"
      bg="#111111"
      position="relative"
      overflow="hidden"
    >
      <AuthHeader />
      <Stack
        spacing="6"
        color="white"
        w={{ base: "90%", md: "325px" }}
        maxW="325px"
      >
        <Stack spacing="3">
          <VStack
            py="10px"
            bgGradient="linear(to-r, #0acffe 0%, #495aff 100%)"
            borderRadius="10px"
            border="1px solid cyan"
            mb="15px"
          >
            <Avatar
              display="block"
              position="relative"
              flexDirection="row"
              showBorder
              borderColor="cyan"
              width="45px"
              height="45px"
              src="https://files.djfan.app/cache/cfd61f22-662d-4d80-bfca-694b10ef6c89.webp"
            />
            <Heading textAlign="center" fontSize="18px">
              Camilo Astudillo <br /> has invited you to join DJfan
            </Heading>
            <FormControl
              justifyContent="center"
              w="fit-content"
              p="5px"
              px="10px"
              borderRadius="10px"
              bg="black"
              display="flex"
              alignItems="center"
            >
              <FormLabel htmlFor="email-alerts" mb="0" fontSize="12px">
                Approve as profile manager?
              </FormLabel>
              <Switch colorScheme="green" size="sm" id="email-alerts" />
            </FormControl>
            <Text fontSize={"12px"}>Team members can be added anytime</Text>
          </VStack>

          <Heading textAlign="center" color="#fff" mb="10px" fontSize="28px">
            Sign up as a DJ
          </Heading>

          <Button
            color="white"
            bg="black"
            _hover={{ color: "#111", bg: "#fff" }}
            border="1px solid #ffffff"
            leftIcon={<FaGoogle />}
            iconSpacing="3"
          >
            Sign in with Google
          </Button>
          <Button
            color="white"
            bg="black"
            _hover={{ color: "#111", bg: "#fff" }}
            border="1px solid #ffffff"
            leftIcon={<FaFacebookF />}
            iconSpacing="3"
          >
            Sign in with Facebook
          </Button>
        </Stack>
        <Box position="relative" mt="5px">
          <Divider />
          <AbsoluteCenter
            fontSize="14px"
            bg="#111111"
            w="60%"
            textAlign={"center"}
          >
            or continue with email
          </AbsoluteCenter>
        </Box>

        <Stack w="100%">
          {showPasswordInput ? (
            <Stack spacing="10px">
              <FormControl>
                <Input
                  id="csrfToken"
                  //defaultValue={csrfToken}
                  hidden
                />
                <FormLabel htmlFor="email" fontWeight="500" fontSize="14px">
                  Email Address
                </FormLabel>
                <Input
                  placeholder="e.g. daftpunk@gmail.com"
                  type="email"
                  fontSize="16px"
                  lineHeight="1em"
                  _focus={{ border: "2px solid #00f5d4" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <Button
                rightIcon={<FaArrowRight />}
                color="white"
                bg="#be04f1"
                _hover={{ color: "#be04f1", bg: "#ffffff" }}
                onClick={() => {
                  // signIn("email", { email, csrfToken });
                }}
              >
                Send me a login link
              </Button>
              <Text pt="5px" fontSize="14px" textAlign="center" w="100%">
                We’ll email you a magic link for a one-click sign in.
              </Text>
            </Stack>
          ) : (
            <Stack spacing="10px">
              <FormControl>
                <FormLabel htmlFor="email-cred" fontSize="14px">
                  Email Address
                </FormLabel>
                <Input
                  mt="0px"
                  name="email-cred"
                  placeholder="e.g. daftpunk@gmail.com"
                  type="email"
                  fontSize="16px"
                  lineHeight="1em"
                  _focus={{ border: "2px solid #00f5d4" }}
                  value={emailCreds}
                  onChange={(e) => setEmailCreds(e.target.value)}
                />
              </FormControl>
              <FormControl pb="0px">
                <FormLabel htmlFor="password-cred" fontSize="14px">
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password-cred"
                    placeholder="*********"
                    fontSize="16px"
                    lineHeight="1em"
                    pr="4.5rem"
                    _focus={{ border: "2px solid #00f5d4" }}
                    value={passwordCreds}
                    onChange={(e) => setPasswordCreds(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Box
                      cursor="pointer"
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </Box>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                rightIcon={<FaArrowRight />}
                color="white"
                bg="#be04f1"
                mt="5px"
                _hover={{ color: "#be04f1", bg: "#ffffff" }}
              >
                SIGN IN
              </Button>
            </Stack>
          )}
          <Flex
            w="100%"
            justifyContent="center"
            onClick={() => {
              setShowPasswordInput((prev) => !prev); // toggle the mode
              if (showPasswordInput) {
                setEmail(emailCreds); // copy emailCreds to email
              } else {
                setEmailCreds(email); // copy email to emailCreds
              }
            }}
          >
            {showPasswordInput ? <PasswordToggle /> : <MagicToggle />}
          </Flex>
        </Stack>
      </Stack>
      <AuthFooterBar />
    </Flex>
  );
}
