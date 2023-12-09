import {
  Flex,
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Text,
  Link,
  Tr,
} from "@chakra-ui/react";
import { FaGem, FaHeart, FaMusic, FaRegHeart } from "react-icons/fa";
import ManageButton from "./components/ManageButton";
import ViewProduct from "./components/ViewProduct";
import ManageButtonTable from "./components/ManageButtonTable";

export default function Subscriptions() {
  return (
    <>
      <TableContainer
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        border="1px solid gray"
        flex="1"
        overflowY="auto"
        fontSize="16px"
      >
        <Table variant="simple" overflow="auto" maxH="calc(100vh - 260px)">
          <Thead position="sticky" top="0" color="#fff" bg="black">
            <Tr>
              <Th color={"white"}>Details</Th>
              <Th color={"white"}>Creator</Th>
              <Th color={"white"}>Date</Th>
              <Th color={"white"}>Amount</Th>
              <Th color={"white"}>Type</Th>
              <Th color={"white"}>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>VIP Membership</Td>
              <Td>
                <Link href="/" fontWeight={"600"}>
                  DJ Exotic
                </Link>
              </Td>
              <Td>11/10/2023</Td>
              <Td>$5.00</Td>
              <Td>
                <Text
                  border="px solid #111"
                  fontWeight="600"
                  display="flex"
                  color="#111"
                  alignItems="center"
                  gap="5px"
                >
                  <FaMusic fontSize="14px" />
                  Product
                </Text>
              </Td>
              <Td>
                <ManageButtonTable />
              </Td>
            </Tr>
            <Tr>
              <Td>Cant Stop Us - Richy Ahmed</Td>
              <Td>
                <Link href="/" fontWeight={"600"}>
                  Richy Ahmed
                </Link>
              </Td>
              <Td>11/10/2023</Td>
              <Td>$10.00</Td>
              <Td>
                <Text
                  fontWeight="600"
                  color="#9800e8"
                  display="flex"
                  alignItems="center"
                  gap="5px"
                >
                  <FaRegHeart fontSize="14px" />
                  Membership
                </Text>
              </Td>
              <Td>
                <ViewProduct />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
