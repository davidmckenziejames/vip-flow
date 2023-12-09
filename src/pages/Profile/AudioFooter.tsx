import {
  Box,
  Text,
  Link,
  HStack,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { FiHeart, FiDownload, FiX } from "react-icons/fi";

const iconStyle = {
  fontSize: "25px",
  color: "#111",
  cursor: "pointer",
};

export default function AudioFooter() {
  return (
    <>
      <HStack w="100%" px="15px" py="10px">
        <Text>This Hypnotic Techno mix will hopefully give you goosbumps</Text>
      </HStack>
      <HStack
        w="100%"
        justifyContent="space-between"
        px="15px"
        py="10px"
        borderTop="2px solid #111"
      >
        <Link w="50%" fontWeight="700" mr="5px" fontSize="16px">
          @exoticdj
        </Link>

        <HStack w="50%" justifyContent={"flex-end"} gap="15px">
          <Box as={FiHeart} {...iconStyle} />
          <Menu>
            <MenuButton aria-label="Download">
              <FiDownload {...iconStyle} />
            </MenuButton>
            <MenuList p="0" minWidth="fit-content" border="1px solid #9b9b9b">
              <HStack
                px="15px"
                py="6px"
                cursor="pointer"
                _hover={{ bg: "#71fa9466" }}
                borderBottom="1px solid #eee"
              >
                <FiDownload fontSize={"18px"} />
                <Box>Download File</Box>
              </HStack>
              <HStack
                px="16px"
                py="6px"
                cursor="pointer"
                _hover={{ bg: "#eaeaea" }}
              >
                <FiX fontSize={"18px"} />
                <Box>Cancel</Box>
              </HStack>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
    </>
  );
}
