import {
  Flex,
  Box,
  TabPanel,
  TabPanels,
  TabList,
  Tabs,
  Tab,
} from "@chakra-ui/react";
import GoldMembership from "./GoldMembership";
import VIPMembership from "./VIPMembership";
////import VIPoffer from "./VIPoffer";

export default function ProfileMembership() {
  return (
    <Flex
      w="100%"
      flexDirection="column"
      justifyContent="center"
      backgroundImage="https://djfan.ams3.cdn.digitaloceanspaces.com/2023/07/bg-dj.jpg"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      align="center"
      p="0"
      m="0"
      gap="20px"
      pb="80px"
    >
      <Flex
        mt="40px"
        display={{ base: "none", md: "flex" }}
        width={{ base: "100%", md: "100%" }}
        gap="80px"
        justifyContent="center"
      >
        <GoldMembership />
        <VIPMembership />
      </Flex>
      <Flex
        flexDirection="column"
        p="0"
        m="0"
        alignItems="center"
        display={{ base: "flex", md: "none" }}
        width="100%"
      >
        <Tabs
          width="80%"
          align="center"
          variant="soft-rounded"
          colorScheme="green"
        >
          <TabList>
            <Tab
              fontSize={{ base: "22px", md: "26px" }}
              color="white"
              _selected={{ color: "white", bg: "#710CAC" }}
            >
              GOLD
            </Tab>
            <Tab
              fontSize={{ base: "22px", md: "26px" }}
              color="white"
              _selected={{ color: "white", bg: "#710CAC" }}
            >
              VIP
            </Tab>
          </TabList>
          <TabPanels mt="10px">
            <TabPanel>
              <GoldMembership />
            </TabPanel>
            <TabPanel>
              <VIPMembership />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Flex>
  );
}
