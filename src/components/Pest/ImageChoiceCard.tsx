import { Flex, Image, Text } from "@chakra-ui/react";
interface ImageChoiceCardProps {
  isSelected: boolean;
  onClick: () => void;
  imageSrc: string;
  labelText: string; // Add a type for labelText
}
export function ImageChoiceCard({
  isSelected,
  onClick,
  imageSrc,
  labelText,
}: ImageChoiceCardProps) {
  return (
    <Flex
      flexDirection="column"
      overflow={"hidden"}
      gap="0px"
      width={{ base: "160px", md: "200px" }} // Change minW to "200px"
      minW={{ base: "160px", md: "200px" }} // Change minW to "200px"
      onClick={onClick}
      cursor="pointer"
      borderRadius={"5px"}
      borderColor={isSelected ? "#060080" : "#dadada"}
      bgColor={isSelected ? "#060080" : "transparent"}
      color={isSelected ? "white" : "black"}
      borderWidth="2px"
    >
      <Image src={imageSrc} alt={labelText} h={"100px"} objectFit={"cover"} />
      <Text fontWeight={"600"} py="10px" lineHeight="1em" textAlign="center">
        {labelText}
      </Text>
    </Flex>
  );
}
