import {
  Box,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import Layout from "../../layout/Layout";

import ProfileSettings from "./Panels/ProfileSettings";
import AccountSettings from "./Panels/AccountSettings";
import BillingSettings from "./Panels/BillingSettings";
import Memberships from "./Panels/Memberships";
import Notifications from "./Panels/Notifications";

export default function Settings() {
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    if (location.hash) {
      switch (location.hash) {
        case "#profile":
          setTabIndex(0);
          break;
        case "#account":
          setTabIndex(1);
          break;
        case "#memberships":
          setTabIndex(2);
          break;
        case "#billing":
          setTabIndex(3);
          break;
        case "#notifications":
          setTabIndex(4);
          break;
        default:
          break;
      }
    }
  }, [location]);

  const tabProps = {
    as: Button,
    variant: "unstyled",
    fontSize: { base: "15px", sm: "16px" },
    fontWeight: "500",
    _selected: { color: "#8338ec", fontWeight: "500", bg: "white" },
  };
  const panelProps = { bg: "white", mt: "20px", borderRadius: "15px" };
  const ChevronDownIconBase = <FaChevronDown size={1} />;
  const ChevronDownIconSm = <FaChevronDown size={12} />;
  return (
    <Layout>
      <Box>
        <Flex
          bg="gray.200"
          mx="auto"
          py="0px"
          px="0px"
          pb="60px"
          flexDirection="column"
          align="center"
          minHeight="100vh"
        >
          <Tabs
            index={tabIndex}
            onChange={setTabIndex}
            pt="15px"
            variant="soft-rounded"
            colorScheme="green"
            w={{ base: "95%", sm: "600px" }}
          >
            <Box bg="white" px="10px" py="10px" borderRadius="15px">
              <TabList>
                <Tab {...tabProps}>Profile</Tab>
                <Tab {...tabProps}>Account</Tab>
                <Tab {...tabProps}>Memberships</Tab>
                <Menu>
                  <MenuButton
                    as={Button}
                    variant="unstyled"
                    fontSize={{ base: "15px", sm: "16x" }}
                    fontWeight="500"
                    ml={{ base: "10px", sm: "16x" }}
                    mr={{ base: "8px", sm: "16x" }}
                    rightIcon={
                      <>
                        <Box display={{ base: "flex", sm: "none" }}>
                          {ChevronDownIconBase}
                        </Box>
                        <Box display={{ base: "none", sm: "flex" }}>
                          {ChevronDownIconSm}
                        </Box>
                      </>
                    }
                  >
                    More
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => setTabIndex(3)}>Billing</MenuItem>
                    <MenuItem onClick={() => setTabIndex(4)}>
                      Notifications
                    </MenuItem>
                  </MenuList>
                </Menu>
              </TabList>
            </Box>
            <TabPanels>
              <TabPanel {...panelProps}>
                <ProfileSettings />
              </TabPanel>
              <TabPanel {...panelProps}>
                <AccountSettings />
              </TabPanel>
              <TabPanel p="0">
                <Memberships />
              </TabPanel>
              <TabPanel {...panelProps}>
                <BillingSettings />
              </TabPanel>
              <TabPanel {...panelProps}>
                <Notifications />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Box>
    </Layout>
  );
}
