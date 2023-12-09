import { Box, Heading, Img, Flex, Link, VStack } from "@chakra-ui/react";
import ProductInfo from "./components/ProductInfo";
import { FaPlay } from "react-icons/fa";

export default function DownloadCard() {
  return (
    <Flex
      w={{ base: "80%", md: "250px" }}
      flexDir={"column"}
      overflow={"hidden"}
      bg="white"
      border={"2px solid #111111"}
    >
      <Box position={"relative"}>
        <Box
          bg="whiteAlpha.500"
          p="10px"
          position={"absolute"}
          bottom="15px"
          right="15px"
          borderRadius={"50px"}
        >
          <FaPlay color="white" fontSize={"14px"} />
        </Box>
        <Img
          src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/4a/4e/a0/4a4ea0b8-bf99-1772-705f-bbabdf98a303/5060519689627.jpg/316x316bb.webp"
          h="full"
          w="100%"
          maxH="250px"
          objectFit="cover"
          border={"3px solid cyan"}
        />
      </Box>

      <VStack gap="2px" py="10px">
        <Heading color={"black"} fontSize="16px">
          Can't Stop Us
        </Heading>
        <Link color={"black"} fontSize="14px" fontWeight="500">
          Richy Ahmed
        </Link>
      </VStack>
      <ProductInfo />
    </Flex>
  );
}
