import {
  Avatar,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  StackDivider,
  Heading,
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  Icon,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Input,
  useToast,
  useDisclosure,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  FiHeadphones,
  FiEdit,
  FiCamera,
  FiMinus,
  FiPlus,
  FiCheck,
  FiArrowRightCircle,
  FiArrowRight,
} from "react-icons/fi";
import {
  FaBandcamp,
  FaCalendar,
  FaCamera,
  FaCartPlus,
  FaEdit,
  FaFileImport,
  FaRocket,
  FaSoundcloud,
  FaUser,
} from "react-icons/fa";
import { useState } from "react";
import ImportContents from "./ImportContent";
import ImportContent from "./ImportContent";

const headerStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  gap: "10px",
  lineHeight: "1em",
};

const leftIconStyle = {
  pt: "2px",
  width: "5%",
  justifyContent: " flex-start",
  fontSize: "16px",
};

export default function DashChecklist() {
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="md">Your DJfan is ready!</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </Text>
          <Text color="#00ae27">1 of 7 complete</Text>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Flex justifyContent="space-between">
              <Box>
                <Heading {...headerStyle} color="#767676">
                  <FaCamera fontSize="18px" />
                  UPLOAD PROFILE IMAGES
                </Heading>
                <Text pt="2" fontSize="sm" display="none">
                  View a summary of all your clients over the last month.
                </Text>
              </Box>
              <Flex
                bg="#D7FFE0"
                color="#00DD32"
                p="5px"
                borderRadius="50px"
                fontSize="20px"
              >
                <FiCheck />
              </Flex>
            </Flex>

            <Flex>
              <Flex {...leftIconStyle}>
                <FaUser />
              </Flex>
              <Flex flexDirection="column" w="90%">
                <Heading {...headerStyle}>ADD PROFILE BIO / HEADLINE</Heading>
                <Text pt="2" fontSize="sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </Text>
              </Flex>
            </Flex>

            <Flex>
              <Flex {...leftIconStyle}>
                <FaFileImport />
              </Flex>
              <Flex flexDirection="column" w="90%">
                <Heading {...headerStyle}>IMPORT EXISTING CONTENT</Heading>
                <Text pt="2" fontSize="sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </Text>
                <ImportContent />
              </Flex>
            </Flex>

            <Flex>
              <Flex {...leftIconStyle}>
                <FaEdit />
              </Flex>
              <Flex flexDirection="column" w="90%">
                <Heading {...headerStyle}>CREATE FIRST POST </Heading>
                <Text pt="2" fontSize="sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </Text>
              </Flex>
            </Flex>

            <Flex>
              <Flex {...leftIconStyle}>
                <FaCalendar />
              </Flex>
              <Flex flexDirection="column" w="90%">
                <Heading {...headerStyle}>ADD A TOUR DATE / EVENT</Heading>
                <Text pt="2" fontSize="sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </Text>
              </Flex>
            </Flex>

            <Flex>
              <Flex {...leftIconStyle}>
                <FaRocket />
              </Flex>
              <Flex flexDirection="column" w="90%">
                <Heading {...headerStyle}>PUBLISH YOUR PROFILE</Heading>
                <Text pt="2" fontSize="sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </Text>
              </Flex>
            </Flex>

            <Flex>
              <Flex {...leftIconStyle}>
                <FaCartPlus />
              </Flex>
              <Flex flexDirection="column" w="90%">
                <Heading {...headerStyle}>CREATE A PRODUCT</Heading>
                <Text pt="2" fontSize="sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </Text>
              </Flex>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
