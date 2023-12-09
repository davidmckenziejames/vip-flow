import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Icon,
  Link,
  Text,
  Flex,
} from "@chakra-ui/react";
import EmailForm from "../Forms/EmailForm";
import SocialButtons from "../Forms/SocialButtons";
import { FaUnlock, FaEnvelope } from "react-icons/fa";

export default function SignUpCard() {
  return (
    <Card
      height="100%"
      w={{ base: "90%", lg: "100%" }}
      bg="unset"
      display="flex"
    >
      <CardBody
        m="0"
        display="flex"
        gap="12px"
        px="25px"
        pt={{ base: "20px", sm: "30px" }}
        pb="20px"
        bg="white"
        flexDirection="column"
        alignItems="center"
        borderRadius="lg"
        border="2px solid cyan"
      >
        <Heading
          display="flex"
          alignItems="center"
          fontSize={{ base: "18px", sm: "24px" }}
        >
          <Icon
            fontSize={{ base: "18px", sm: "22px" }}
            as={FaUnlock}
            marginRight="8px"
          />
          Unlock DJ Content
        </Heading>
        <Text align="center" fontSize="14px" color="#22A9FC" fontWeight="500">
          Register <b>free account</b> with:
        </Text>
        <Box w="100%">
          <SocialButtons />
        </Box>

        <Text fontSize="14px" color="#A3A3A3">
          or you can
        </Text>
        <Button
          bg="white"
          borderRadius="5px"
          display="flex"
          alignItems="center"
          fontSize="15px"
          fontWeight="600"
          variant="unstyled"
          color="#111111"
          transition="all 0.3s ease"
          border="2px solid black"
          px="15px"
          gap="8px"
          height="40px"
          _hover={{
            boxShadow: `.15rem .15rem 0 #69f2eb, .3rem .3rem 0 #DB62FD`,
            color: "black",
            background: "white",
            border: "2px solid black",
          }}
        >
          <FaEnvelope />
          Continue with Email
        </Button>
      </CardBody>
      <CardFooter
        p="0"
        pt="10px"
        m="0"
        background="transparent"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          alignItems="center"
          color="white"
          fontSize="14px"
          fontWeight="500"
        >
          <Text>
            Are you a creator?
            <Link color="cyan" fontWeight="600" ml="5px">
              Create account here
            </Link>
          </Text>
        </Flex>
      </CardFooter>
    </Card>
  );
}
