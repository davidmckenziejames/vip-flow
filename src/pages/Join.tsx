import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  HStack,
  VStack,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  Input,
  FormLabel,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import {
  essentialLink,
  proLink,
  essentialLink6months,
  proLink6months,
} from "../components/Links";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import LoginHeader from "../components/LoginHeader";
import ContactModal from "../Home/ContactModal";
import {
  FiCheck,
  FiCheckCircle,
  FiCheckSquare,
  FiEye,
  FiX,
  FiXCircle,
} from "react-icons/fi";
interface Props {
  children: React.ReactNode;
}

function PriceWrapper(props: Props) {
  const { children } = props;
  return (
    <Box
      mb={4}
      minW="300px"
      w={{ base: "80%", md: "30%" }}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}
const listItemStyle = {
  display: "flex",
  alignItems: "center",
  fontWeight: "500",
};
export default function Join() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [videos, setVideos] = useState(20);
  const [cost, setCost] = useState(395);
  const [hours, setHours] = useState(3);
  const savings = Math.round(videos * cost * 0.8);
  const hours_saved = Math.round(videos * hours * 0.9);
  const essential = 195;
  const essential6months = 975;
  const pro = 295;
  const pro6months = 1475;
  const scale = 349;
  const essential_roi = Math.round((savings / (essential * 12)) * 100);
  const pro_roi = Math.round((savings / (pro * 12)) * 100);
  const scale_roi = Math.round((savings / (scale * 12)) * 100);
  return (
    <Flex flexDirection="column" alignItems="center" w="100%">
      <LoginHeader />
      <Flex flexDirection="column" alignItems="center" w="100%" maxW="1000px">
        <VStack mt="30px" spacing={2} textAlign="center" w="100%">
          <Heading as="h1" fontSize="4xl" pb="20px">
            Pricing Plans
          </Heading>
        </VStack>
        <Tabs
          p="0px"
          align="center"
          variant="soft-rounded"
          colorScheme="purple"
        >
          <TabList>
            <Tab fontSize="20px">Monthly</Tab>
            <Tab fontSize="20px">
              <Box position="relative">
                Bi-Annual
                <Box
                  fontSize="10px"
                  bg="black"
                  color="white"
                  lineHeight="1em"
                  px="8px"
                  py="4px"
                  borderRadius="8px"
                  position={"absolute"}
                  top="-20px"
                  right="-45px"
                >
                  1-MONTH FREE
                </Box>
              </Box>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel p="0">
              <Stack
                direction={{ base: "column", md: "row" }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}
                w="100%"
              >
                <PriceWrapper>
                  <Box py="20px" px="20px">
                    <Text fontWeight="600" fontSize="2xl" color="#7d5aeb">
                      Essential
                    </Text>
                    <HStack justifyContent="center" alignItems={"baseline"}>
                      <Text fontSize="4xl" fontWeight="900">
                        £{essential}
                      </Text>
                      <Text fontSize="xl" color="gray.500">
                        /month
                      </Text>
                    </HStack>
                  </Box>
                  <VStack
                    bg={useColorModeValue("gray.50", "gray.700")}
                    py={4}
                    borderBottomRadius={"xl"}
                  >
                    <List spacing={3} textAlign="start" px="20px">
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Table Booking Form
                      </ListItem>
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Admin Dashboard
                      </ListItem>
                      <ListItem {...listItemStyle} color="#bcbcbc">
                        <ListIcon as={FaTimesCircle} color="red" />
                        <s>Bottle Pre-Payments</s>
                      </ListItem>
                      <ListItem {...listItemStyle} color="#bcbcbc">
                        <ListIcon as={FaTimesCircle} color="red" />
                        <s>SMS & Email Marketing</s>
                      </ListItem>
                    </List>
                    <Box
                      w="90%"
                      pt={7}
                      as="a"
                      href={essentialLink}
                      target="_blank"
                    >
                      <Button
                        w="full"
                        bg="#fff"
                        color="#111"
                        border="1px solid #111"
                        variant="unstyled"
                      >
                        GET STARTED
                      </Button>
                    </Box>
                  </VStack>
                </PriceWrapper>

                <PriceWrapper>
                  <Box py="20px" px="20px" position={"relative"}>
                    <Flex
                      position="absolute"
                      top="-15px"
                      left="50%" // Set left to 50% of the parent element
                      transform="translateX(-50%)"
                      lineHeight="1em"
                      color="#fff"
                      bg="#7d5aeb"
                      px="10px"
                      py="6px"
                      gap="3px"
                      fontSize="14px"
                      fontWeight="600"
                      borderRadius="8px"
                    >
                      MOST POPULAR
                    </Flex>
                    <Text fontWeight="600" fontSize="2xl" color="#7d5aeb">
                      Pro
                    </Text>
                    <HStack justifyContent="center" alignItems={"baseline"}>
                      <Text fontSize="4xl" fontWeight="900">
                        £{pro}
                      </Text>
                      <Text fontSize="xl" color="gray.500">
                        /month
                      </Text>
                    </HStack>
                  </Box>
                  <VStack
                    bg={useColorModeValue("gray.50", "gray.700")}
                    py={4}
                    borderBottomRadius={"xl"}
                  >
                    <List spacing={3} textAlign="start" px="20px">
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Table Booking Form
                      </ListItem>
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Admin Dashboard
                      </ListItem>
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Bottle Pre-Payments
                      </ListItem>
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        SMS & Email Marketing
                      </ListItem>
                    </List>
                    <Box w="80%" pt={7} as="a" href={proLink} target="_blank">
                      <Button
                        w="full"
                        bg="#111"
                        color="#fff"
                        variant="unstyled"
                        border="1px solid #111"
                      >
                        GET STARTED
                      </Button>
                    </Box>
                  </VStack>
                </PriceWrapper>
                <PriceWrapper>
                  <Box py="20px" px="20px">
                    <Text fontWeight="600" fontSize="2xl" color="#7d5aeb">
                      Enterprise
                    </Text>
                    <HStack justifyContent="center">
                      <Text fontSize="4xl" fontWeight="900">
                        CUSTOM
                      </Text>
                    </HStack>
                  </Box>
                  <VStack
                    bg={useColorModeValue("gray.50", "gray.700")}
                    py={4}
                    borderBottomRadius={"xl"}
                  >
                    <List spacing={3} textAlign="start" px="20px">
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Table Booking Form
                      </ListItem>
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Admin Dashboard
                      </ListItem>
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Bottle Pre-Payments
                      </ListItem>
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        SMS & Email Marketing
                      </ListItem>
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Custom Features
                      </ListItem>
                    </List>
                    <Box w="80%" pt={7} onClick={onOpen}>
                      <Button
                        w="full"
                        bg="#ac9562"
                        color="#fff"
                        variant="unstyled"
                        border="1px solid #ac9562"
                      >
                        CONTACT US
                      </Button>
                    </Box>
                    <Box>
                      <Modal onClose={onClose} isOpen={isOpen} isCentered>
                        <ModalOverlay />
                        <ModalContent w={{ base: "90%", md: "450px" }}>
                          <Box w="100%" position="relative">
                            <Flex
                              cursor="pointer"
                              position="absolute"
                              right="10px"
                              top="10px"
                              fontSize="26px"
                              onClick={onClose}
                            >
                              <FiX />
                            </Flex>
                            <form
                              accept-charset="UTF-8"
                              action="https://www.formbackend.com/f/9d02de158b2f70bc"
                              method="POST"
                            >
                              <Flex
                                flexDirection="column"
                                gap="10px"
                                px="15px"
                                py="20px"
                              >
                                <Flex flexDirection="column">
                                  <FormLabel htmlFor="name">Name</FormLabel>
                                  <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                  />
                                </Flex>
                                <Flex flexDirection="column">
                                  <FormLabel htmlFor="email">Email</FormLabel>
                                  <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                  />
                                </Flex>
                                <Flex flexDirection="column">
                                  <FormLabel htmlFor="company">
                                    Company
                                  </FormLabel>
                                  <Input
                                    type="company"
                                    id="company"
                                    name="company"
                                    required
                                  />
                                </Flex>
                                <Button type="submit" mt={"10px"}>
                                  <Flex
                                    alignItems="center"
                                    lineHeight="1em"
                                    fontSize={{ base: "16px", md: "18px" }}
                                    fontWeight="600"
                                    gap="5px"
                                    w={{ base: "", md: "" }}
                                  >
                                    CONTACT US
                                    <Box boxSize="20px">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                      </svg>
                                    </Box>
                                  </Flex>
                                </Button>
                              </Flex>
                            </form>
                          </Box>
                        </ModalContent>
                      </Modal>
                    </Box>
                  </VStack>
                </PriceWrapper>
              </Stack>
            </TabPanel>
            <TabPanel p={0}>
              <Stack
                direction={{ base: "column", md: "row" }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}
                w="100%"
              >
                <PriceWrapper>
                  <Box py="20px" px="20px">
                    <Text fontWeight="600" fontSize="2xl" color="#7d5aeb">
                      Essential
                    </Text>
                    <HStack justifyContent="center" alignItems={"baseline"}>
                      <Text fontSize="4xl" fontWeight="900">
                        £{essential6months}
                      </Text>
                      <Text fontSize="xl" color="gray.500">
                        / 6-months
                      </Text>
                    </HStack>
                  </Box>
                  <VStack
                    bg={useColorModeValue("gray.50", "gray.700")}
                    py={4}
                    borderBottomRadius={"xl"}
                  >
                    <List spacing={3} textAlign="start" px={12}>
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Table Booking Form
                      </ListItem>
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Admin Dashboard
                      </ListItem>
                      <ListItem {...listItemStyle} color="#bcbcbc">
                        <ListIcon as={FaTimesCircle} color="red" />
                        <s>Bottle Pre-Payments</s>
                      </ListItem>
                      <ListItem {...listItemStyle} color="#bcbcbc">
                        <ListIcon as={FaTimesCircle} color="red" />
                        <s>SMS & Email Marketing</s>
                      </ListItem>
                    </List>
                    <Box
                      w="90%"
                      pt={7}
                      as="a"
                      href={essentialLink}
                      target="_blank"
                    >
                      <Button
                        w="full"
                        bg="#fff"
                        color="#111"
                        border="1px solid #111"
                        variant="unstyled"
                      >
                        GET STARTED
                      </Button>
                    </Box>
                  </VStack>
                </PriceWrapper>

                <PriceWrapper>
                  <Box py="20px" px="20px" position={"relative"}>
                    <Flex
                      position="absolute"
                      top="-15px"
                      left="50%" // Set left to 50% of the parent element
                      transform="translateX(-50%)"
                      lineHeight="1em"
                      color="#fff"
                      bg="#7d5aeb"
                      px="10px"
                      py="6px"
                      gap="3px"
                      fontSize="14px"
                      fontWeight="600"
                      borderRadius="8px"
                    >
                      MOST POPULAR
                    </Flex>
                    <Text fontWeight="600" fontSize="2xl" color="#7d5aeb">
                      Pro
                    </Text>
                    <HStack justifyContent="center" alignItems={"baseline"}>
                      <Text fontSize="4xl" fontWeight="900">
                        £{pro6months}
                      </Text>
                      <Text fontSize="xl" color="gray.500">
                        / 6-months
                      </Text>
                    </HStack>
                  </Box>
                  <VStack
                    bg={useColorModeValue("gray.50", "gray.700")}
                    py={4}
                    borderBottomRadius={"xl"}
                  >
                    <List spacing={3} textAlign="start" px={12}>
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Table Booking Form
                      </ListItem>
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Admin Dashboard
                      </ListItem>
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Bottle Pre-Payments
                      </ListItem>
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        SMS & Email Marketing
                      </ListItem>
                    </List>
                    <Box w="80%" pt={7} as="a" href={proLink} target="_blank">
                      <Button
                        w="full"
                        bg="#111"
                        color="#fff"
                        variant="unstyled"
                        border="1px solid #111"
                      >
                        GET STARTED
                      </Button>
                    </Box>
                  </VStack>
                </PriceWrapper>
                <PriceWrapper>
                  <Box py="20px" px="20px">
                    <Text fontWeight="600" fontSize="2xl" color="#7d5aeb">
                      Enterprise
                    </Text>
                    <HStack justifyContent="center">
                      <Text fontSize="3xl" fontWeight="900">
                        CUSTOM
                      </Text>
                    </HStack>
                  </Box>
                  <VStack
                    bg={useColorModeValue("gray.50", "gray.700")}
                    py={4}
                    borderBottomRadius={"xl"}
                  >
                    <List spacing={3} textAlign="start" px={12}>
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Table Booking Form
                      </ListItem>
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Admin Dashboard
                      </ListItem>
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Bottle Pre-Payments
                      </ListItem>
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        SMS & Email Marketing
                      </ListItem>
                      <ListItem {...listItemStyle}>
                        <ListIcon as={FaCheckCircle} color="green.500" />
                        Custom Features
                      </ListItem>
                    </List>
                    <Box w="80%" pt={7} onClick={onOpen}>
                      <Button
                        w="full"
                        bg="#ac9562"
                        color="#fff"
                        variant="unstyled"
                        border="1px solid #ac9562"
                      >
                        CONTACT US
                      </Button>
                    </Box>
                    <Box>
                      <Modal onClose={onClose} isOpen={isOpen} isCentered>
                        <ModalOverlay />
                        <ModalContent w={{ base: "90%", md: "450px" }}>
                          <Box w="100%" position="relative">
                            <Flex
                              cursor="pointer"
                              position="absolute"
                              right="10px"
                              top="10px"
                              fontSize="26px"
                              onClick={onClose}
                            >
                              <FiX />
                            </Flex>
                            <form
                              accept-charset="UTF-8"
                              action="https://www.formbackend.com/f/9d02de158b2f70bc"
                              method="POST"
                            >
                              <Flex
                                flexDirection="column"
                                gap="10px"
                                px="15px"
                                py="20px"
                              >
                                <Flex flexDirection="column">
                                  <FormLabel htmlFor="name">Name</FormLabel>
                                  <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                  />
                                </Flex>
                                <Flex flexDirection="column">
                                  <FormLabel htmlFor="email">Email</FormLabel>
                                  <Input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                  />
                                </Flex>
                                <Flex flexDirection="column">
                                  <FormLabel htmlFor="company">
                                    Company
                                  </FormLabel>
                                  <Input
                                    type="company"
                                    id="company"
                                    name="company"
                                    required
                                  />
                                </Flex>
                                <Button type="submit" mt={"10px"}>
                                  <Flex
                                    alignItems="center"
                                    lineHeight="1em"
                                    fontSize={{ base: "16px", md: "18px" }}
                                    fontWeight="600"
                                    gap="5px"
                                    w={{ base: "", md: "" }}
                                  >
                                    CONTACT US
                                    <Box boxSize="20px">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                      </svg>
                                    </Box>
                                  </Flex>
                                </Button>
                              </Flex>
                            </form>
                          </Box>
                        </ModalContent>
                      </Modal>
                    </Box>
                  </VStack>
                </PriceWrapper>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
}
