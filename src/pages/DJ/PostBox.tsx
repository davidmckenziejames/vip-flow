import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Textarea,
  useColorModeValue,
  Select,
  Text,
} from "@chakra-ui/react";
import { MdInsertPhoto, MdLink } from "react-icons/md";
import { BsFillFilePostFill, BsFillBarChartFill } from "react-icons/bs";
import { FaArrowRight, FaCalendar } from "react-icons/fa";
import FileUpload from "./FileUpload";

interface PostBoxProps {}

const PostBox: React.FC<PostBoxProps> = () => {
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      borderColor={borderColor}
      p={4}
      py="30px"
    >
      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList>
          <Tab>Image</Tab>
          <Tab>Video</Tab>
          <Tab>Audio</Tab>
          <Tab>Text</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Input placeholder="Write something about this post" mb={3} />
            <Flex mb={3} align="center">
              <FileUpload />
            </Flex>
          </TabPanel>
          {/* Other tabs content can go here */}
        </TabPanels>
      </Tabs>
      <Box mx={2} px={2} mb={4}>
        <Text fontSize="14px" fontWeight="600" mb="4px">
          Who can view this post?
        </Text>
        <Select>
          <option>Select post privacy</option>
          <option value="Everyone">Everyone</option>
          <option value="Gold">Gold</option>
          <option value="VIP">VIP</option>
        </Select>
      </Box>
      <Flex mx={2} px={2} mt={4} justify="space-between">
        <Button fontSize="16px" height="35px" px="10px">
          <FaCalendar fontSize="14px" style={{ marginRight: "5px" }} />
          Schedule Post{" "}
        </Button>
        <Button
          type="submit"
          background="#300a6e"
          color="#fff"
          fontSize="16px"
          _hover={{ background: "#111" }}
          height="35px"
          px="10px"
        >
          Create Post{" "}
          <FaArrowRight fontSize="14px" style={{ marginLeft: "5px" }} />
        </Button>
      </Flex>
    </Box>
  );
};

export default PostBox;
