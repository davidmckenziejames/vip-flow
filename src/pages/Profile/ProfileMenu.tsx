import {
  Box,
  Tab,
  TabIndicator,
  TabPanel,
  TabPanels,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import ProfilePosts from "./ProfilePosts";
import ProfileBio from "./ProfileBio";
import ProfileEvents from "./ProfileEvents";
import ProfileProducts from "./ProfileProducts";
import ProfileAudio from "./ProfileAudio";
import ProfileMembership from "./Membership/ProfileMembership";
import {
  FaHome,
  FaUser,
  FaMusic,
  FaCalendar,
  FaStore,
  FaLock,
  FaImage,
  FaPlay,
  FaPlayCircle,
  FaImages,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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
export default function ProfileMenu() {
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
            <ProfilePosts />
          </TabPanel>
          <TabPanel bg="black">
            <ProfileBio />
          </TabPanel>
          <TabPanel>
            <ProfileAudio />
          </TabPanel>
          <TabPanel>
            <ProfileAudio />
          </TabPanel>
          <TabPanel>
            <ProfileAudio />
          </TabPanel>
          <TabPanel>
            <ProfileEvents />
          </TabPanel>
          <TabPanel>
            <ProfileProducts />
          </TabPanel>
          <TabPanel p="0">
            <ProfileMembership />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
