import { Box } from "@chakra-ui/react";
import { images } from "./_data";
import { Gallery } from "./Gallery";

export default function PostCarousel() {
  return (
    <Box maxW="100%" m="0" p="0">
      <Gallery images={images} />
    </Box>
  );
}
