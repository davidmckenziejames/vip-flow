import { Box, Heading, Img, Flex, Link, VStack } from "@chakra-ui/react";
import ProductInfo from "./components/ProductInfo";

export default function Download2() {
  return (
    <Flex
      w={{ base: "80%", md: "250px" }}
      flexDir={"column"}
      overflow={"hidden"}
      bg="white"
      border={"2px solid #111111"}
    >
      <Box>
        <Img
          src={
            "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/93/6a/9d/936a9de8-ebce-9ec2-3d26-a7bd1ff807a2/0196762004667.png/316x316bb.webp"
          }
          h="full"
          w="100%"
          maxH="250px"
          objectFit="cover"
          border={"3px solid cyan"}
        />
      </Box>

      <VStack gap="2px" py="10px">
        <Heading color={"black"} fontSize="16px">
          Lose My Mind
        </Heading>
        <Link color={"black"} fontSize="14px" fontWeight="500">
          Jamie Jones
        </Link>
      </VStack>
      <ProductInfo />
    </Flex>
  );
}
