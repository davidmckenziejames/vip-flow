import React, { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  VStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Icon,
  Text,
  Heading,
  HStack,
  Image,
  Stack,
  Collapse,
  Button,
  Textarea,
  Badge,
  Modal,
  ModalOverlay,
  FormHelperText,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
  useRadio,
  useRadioGroup,
  Select,
  IconButton,
  InputGroup,
  InputLeftElement,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import { FaRss } from "react-icons/fa";
import { HiCollection } from "react-icons/hi";
import { FaClipboardList } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { FiMenu, FiSearch, FiBell } from "react-icons/fi";

function Admin() {
  return (
    <Box
      as="section"
      bg="gray.50"
      _dark={{
        bg: "gray.700",
      }}
      minH="100vh"
    >
      <Box
        as="nav"
        pos="fixed"
        top="0"
        left="0"
        zIndex="sticky"
        h="full"
        pb="10"
        overflowX="hidden"
        overflowY="auto"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        color="inherit"
        borderRightWidth="1px"
        w="60"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <Flex px="4" py="5" flexDirection={"column"}>
          <Text
            fontSize="2xl"
            ml="2"
            color="brand.500"
            _dark={{
              color: "white",
            }}
            fontWeight="semibold"
          >
            Choc UI
          </Text>
          <Text>Bookings</Text>
          <Text>Products</Text>
          <Text>Products</Text>
        </Flex>
      </Box>
      <Box
        ml={{
          base: 0,
          md: 60,
        }}
        transition=".3s ease"
      >
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          borderBottomWidth="1px"
          color="inherit"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{
              base: "inline-flex",
              md: "none",
            }}
            icon={<FiMenu />}
            size="sm"
          />
          <InputGroup
            w="96"
            display={{
              base: "none",
              md: "flex",
            }}
          >
            <InputLeftElement color="gray.500">
              <FiSearch />
            </InputLeftElement>
            <Input placeholder="Search for articles..." />
          </InputGroup>
          <Flex align="center">
            <Icon color="gray.500" as={FiBell} cursor="pointer" />
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              src="https://avatars.githubusercontent.com/u/30869823?v=4"
              cursor="pointer"
            />
          </Flex>
        </Flex>
        <Box as="main" p="4">
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>Full Name</Th>
                  <Th>Date</Th>
                  <Th>Group Size</Th>
                  <Th isNumeric>Amount</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>John Doe</Td>
                  <Td>2023-01-01</Td>
                  <Td isNumeric>5</Td>
                  <Td isNumeric>120.5</Td>
                  <Td>
                    <Button>View</Button>
                  </Td>
                </Tr>
                <Tr>
                  <Td>Jane Smith</Td>
                  <Td>2023-01-02</Td>
                  <Td isNumeric>3</Td>
                  <Td isNumeric>75.2</Td>
                  <Td>
                    <Button>View</Button>
                  </Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Full Name</Th>
                  <Th>Date</Th>
                  <Th>Group Size</Th>
                  <Th isNumeric>Amount</Th>
                  <Th>Action</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}

export default Admin;
