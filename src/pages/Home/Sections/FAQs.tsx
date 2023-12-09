import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
} from "@chakra-ui/react";

import { FaChevronDown } from "react-icons/fa";

export default function FAQs() {
  return (
    <Flex align={"center"} justify={"center"}>
      <Container>
        <Accordion allowMultiple width="100%" maxW="lg" bg="white" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              _hover={{ bg: "gray.100" }}
            >
              <Text fontSize="md" color="gray.800">
                What is Chakra UI?
              </Text>
              <FaChevronDown fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Chakra UI is a simple and modular component library that gives
                developers the building blocks they need to create web
                applications.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              _hover={{ bg: "gray.100" }}
              color="gray.800"
            >
              <Text fontSize="md">What advantages to use?</Text>
              <FaChevronDown fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Chakra UI offers a variety of advantages including ease of use,
                accessibility, and customization options. It also provides a
                comprehensive set of UI components and is fully compatible with
                React.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
              _hover={{ bg: "gray.100" }}
              color="gray.800"
            >
              <Text fontSize="md">How to start using Chakra UI?</Text>
              <FaChevronDown fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                To get started with Chakra UI, you can install it via npm or
                yarn, and then import the components you need in your project.
                The Chakra UI documentation is also a great resource for getting
                started and learning more about the library.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  );
}
