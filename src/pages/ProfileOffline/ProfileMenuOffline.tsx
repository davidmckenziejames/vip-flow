import { Box, Tab, TabPanel, TabPanels, TabList, Tabs } from "@chakra-ui/react";
import {
  FaHome,
  FaUser,
  FaMusic,
  FaCalendar,
  FaStore,
  FaLock,
  FaPlayCircle,
  FaImages,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProfilePostsOffline from "./ProfilePostsOffline";
interface CustomTabProps {
  icon: React.ElementType;
  text: string;
}

const CustomTab: React.FC<CustomTabProps> = ({ icon, text }) => (
  <Tab
    borderRight="1px solid white"
    py="10px"
    _selected={{
      bg: "#8A0FD2",
    }}
  >
    <Box as={icon} fontSize={{ base: "14px", md: "16px" }} />
    <Box
      as="span"
      fontWeight="600"
      fontSize={{ base: "16px", md: "18px" }}
      ml={{ base: "5px", md: "6px" }}
    >
      {text}
    </Box>
  </Tab>
);
export default function ProfileMenuOffline() {
  const location = useLocation();
  const [tabIndex, setTabIndex] = useState(0);
  useEffect(() => {
    switch (location.hash) {
      case "#posts":
        setTabIndex(0);
        break;
      case "#biography":
        setTabIndex(1);
        break;
      case "#tracks":
        setTabIndex(2);
        break;
      case "#photos":
        setTabIndex(3);
        break;
      case "#videos":
        setTabIndex(4);
        break;
      case "#events":
        setTabIndex(5);
        break;
      case "#store":
        setTabIndex(6);
        break;
      case "#premium":
        setTabIndex(7);
        break;
      default:
        setTabIndex(0);
        break;
    }
  }, [location]);

  return (
    <Box w="100%">
      <Tabs isLazy isFitted index={tabIndex} onChange={setTabIndex}>
        <TabList
          overflowY="hidden"
          bg="black"
          borderTop="1px solid white"
          borderBottom="1px solid white"
          borderLeft="1px solid white"
          color="white"
          p="0"
          m="0"
          sx={{
            scrollbarWidth: "none",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <CustomTab icon={FaHome} text="Posts" />
          <CustomTab icon={FaUser} text="Biography" />
          <CustomTab icon={FaMusic} text="Tracks" />
          <CustomTab icon={FaImages} text="Photos" />
          <CustomTab icon={FaPlayCircle} text="Videos" />
          <CustomTab icon={FaCalendar} text="Events" />
          <CustomTab icon={FaStore} text="Store" />
          <CustomTab icon={FaLock} text="Premium" />
        </TabList>

        <TabPanels>
          <TabPanel>
            <ProfilePostsOffline />
          </TabPanel>
          <TabPanel bg="black">
            <ProfilePostsOffline />
          </TabPanel>
          <TabPanel>
            <ProfilePostsOffline />
          </TabPanel>
          <TabPanel>
            <ProfilePostsOffline />
          </TabPanel>
          <TabPanel>
            <ProfilePostsOffline />
          </TabPanel>
          <TabPanel>
            <ProfilePostsOffline />
          </TabPanel>
          <TabPanel>
            <ProfilePostsOffline />
          </TabPanel>
          <TabPanel>
            <ProfilePostsOffline />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
