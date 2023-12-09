import { HStack, Tooltip } from "@chakra-ui/react";
import { FaImage, FaMusic, FaVideo } from "react-icons/fa";

interface StatsIconsProps {
  imageCount: number;
  videoCount: number;
  musicCount: number;
}

export default function StatsIcons({
  imageCount = 60, // Dummy data
  videoCount = 35, // Dummy data
  musicCount = 11, // Dummy data
}: StatsIconsProps) {
  return (
    <HStack
      position="absolute"
      right="15px"
      top="15px"
      zIndex="1909"
      color="white"
      fontSize={{ base: "14px", md: "18px" }}
      gap={{ base: "5px", md: "10px" }}
    >
      <Tooltip label="Number of Images" aria-label="Number of Images">
        <HStack gap="5px">
          <FaImage color="white" />
          <span>{imageCount}</span>
        </HStack>
      </Tooltip>
      <span>&bull;</span>
      <Tooltip label="Number of Videos" aria-label="Number of Videos">
        <HStack gap="5px">
          <FaVideo color="white" />
          <span>{videoCount}</span>
        </HStack>
      </Tooltip>
      <span>&bull;</span>
      <Tooltip label="Number of Tracks" aria-label="Number of Tracks">
        <HStack gap="5px">
          <FaMusic color="white" />
          <span>{musicCount}</span>
        </HStack>
      </Tooltip>
    </HStack>
  );
}
