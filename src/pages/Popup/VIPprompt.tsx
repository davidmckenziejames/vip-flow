import {
  Flex,
  Heading,
  Image,
  HStack,
  VStack,
  Button,
  Modal,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Text,
  Box,
} from "@chakra-ui/react";
import { FaFileExcel } from "react-icons/fa";
import { FiX, FiCheck } from "react-icons/fi";
import VIPfeatures from "./VIPfeatures";
import Freefeatures from "./Freefeatures";

const listStyle = {
  alignItems: "center",
  gap: "8px",
  color: "#fff",
  fontSize: "18px",
  w: { base: "280px", md: "50%" },
  pb: "5px",
};

const iconStyle = {
  fontSize: "22px",
};

const popupWidth = {
  w: { base: "90%", md: "590px" },
  minW: { base: "90%", md: "590px" },
};

export default function VIPprompt() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>VIP Pop UpDo</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          border="1px solid #fff"
          overflow="hidden"
          borderRadius="10px"
          bgGradient="linear(to-r, #0e0725, #5c03bc, #e536ab)"
          {...popupWidth}
          position="relative"
        >
          <VStack p="0px">
            <VStack pt="30px">
              <Heading
                fontSize="30px"
                borderRadius="5px"
                lineHeight="1em"
                fontWeight="600"
                mb="10px"
                color="#fff"
              >
                Become a VIP for only $1
              </Heading>
              <Heading
                fontSize="18px"
                borderRadius="5px"
                lineHeight="1em"
                fontWeight="600"
                mb="10px"
                color="#fff"
                textAlign="center"
              >
                Access all Richy Ahmed's VIP content & perks
              </Heading>
              <HStack>
                <Button
                  px="10px"
                  fontSize="18px"
                  height="38px"
                  color="#111"
                  bg="#fff"
                  border="1px solid #111"
                  lineHeight="1em"
                  _hover={{ bg: "#fff" }}
                  onClick={() => {
                    window.location.href = "https://auth.djfan.app/auth/signin";
                  }}
                >
                  JOIN NOW
                </Button>
              </HStack>
            </VStack>
            <Flex pb="25px" bg="#111" w="100%" flexDirection={"column"}>
              <Tabs variant="soft-rounded" align="center" colorScheme="green">
                <Heading
                  fontSize="24px"
                  borderRadius="5px"
                  lineHeight="1em"
                  fontWeight="600"
                  pt="20px"
                  color="#fff"
                  w="100%"
                  textAlign="center"
                >
                  What do VIPs get?
                </Heading>
                <Flex position="fixed" bottom="10px" flexDirection="column">
                  <TabList>
                    <Tab>VIP</Tab>
                    <Tab>FREE</Tab>
                  </TabList>
                </Flex>
                <TabPanels>
                  <TabPanel>
                    <VIPfeatures />
                  </TabPanel>
                  <TabPanel>
                    <Freefeatures />
                  </TabPanel>
                </TabPanels>
              </Tabs>

              <Heading
                fontSize="18px"
                borderRadius="5px"
                lineHeight="1em"
                fontWeight="600"
                pt="20px"
                color="#71fbfd"
                w="100%"
                textAlign="center"
              >
                Click each feature to learn more
              </Heading>
            </Flex>
          </VStack>
        </ModalContent>
      </Modal>
    </>
  );
}
