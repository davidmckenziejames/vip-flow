import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Image,
  Text,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { ImageChoiceCard } from "./ImageChoiceCard";
import {
  buildingTypeChoices,
  problemChoices,
  crawlingInsectChoices,
  rodentChoices,
  pestBirdChoices,
  flyingInsectChoices,
} from "./Questions";
const fontlabelStyle = {
  fontSize: "18px",
  fontWeight: "600",
  mb: "10px",
};
interface SummaryCardProps {
  imageSrc: string;
  labelText: string;
}

function SummaryCard({ imageSrc, labelText }: SummaryCardProps) {
  return (
    <Flex
      flexDirection="column"
      overflow={"hidden"}
      gap="0px"
      width="200px"
      minW="200px"
      height={"100px"}
      borderRadius={"5px"}
      borderWidth="2px"
      borderColor="#dadada"
      bgImage={`url(${imageSrc})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      justify={"center"}
    >
      <Text
        color={"white"}
        fontWeight={"600"}
        py="10px"
        lineHeight="1em"
        textAlign="center"
      >
        {labelText}
      </Text>
    </Flex>
  );
}

export default function PestForm() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [buildingType, setBuildingType] = useState("");
  const [selectedIssue, setSelectedIssue] = useState("");
  const [selectedInsect, setSelectedInsect] = useState("");
  const [selectedRodent, setSelectedRodent] = useState("");
  const [selectedBird, setSelectedBird] = useState("");
  const [numberOfBedrooms, setNumberOfBedrooms] = useState("");
  const [selectedFlyingInsect, setSelectedFlyingInsect] = useState("");
  const [postcode, setPostcode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [summary, setSummary] = useState("");

  const isAllSelectionsMade =
    buildingType &&
    selectedIssue &&
    (selectedInsect || selectedRodent || selectedBird || selectedFlyingInsect);
  return (
    <>
      {isAllSelectionsMade && summary && (
        <FormControl>
          <FormLabel {...fontlabelStyle}>Summary</FormLabel>
          <Text>{summary}</Text>
        </FormControl>
      )}
      {isAllSelectionsMade && (
        <Flex flexDirection={"column"} gap="20px">
          <Text fontSize="20px" fontWeight="bold">
            Summary
          </Text>
          <Flex flexDirection="row" gap="10px">
            {buildingType && (
              <>
                <Box>Building</Box>
                <Box>{buildingType}</Box>
              </>
            )}
            {selectedIssue && (
              <SummaryCard
                imageSrc={
                  problemChoices.find(
                    (choice) => choice.value === selectedIssue,
                  )?.imageSrc || ""
                }
                labelText={selectedIssue}
              />
            )}
            {selectedInsect && (
              <SummaryCard
                imageSrc={
                  crawlingInsectChoices.find(
                    (choice) => choice.value === selectedInsect,
                  )?.imageSrc || ""
                }
                labelText={selectedInsect}
              />
            )}
            {selectedRodent && (
              <SummaryCard
                imageSrc={
                  rodentChoices.find(
                    (choice) => choice.value === selectedRodent,
                  )?.imageSrc || ""
                }
                labelText={selectedRodent}
              />
            )}
            {selectedBird && (
              <SummaryCard
                imageSrc={
                  pestBirdChoices.find(
                    (choice) => choice.value === selectedBird,
                  )?.imageSrc || ""
                }
                labelText={selectedBird}
              />
            )}
            {selectedFlyingInsect && (
              <SummaryCard
                imageSrc={
                  flyingInsectChoices.find(
                    (choice) => choice.value === selectedFlyingInsect,
                  )?.imageSrc || ""
                }
                labelText={selectedFlyingInsect}
              />
            )}
            {numberOfBedrooms && (
              <SummaryCard
                imageSrc="https://dynopest.co.uk/wp-content/uploads/2023/03/uk-homes-300x200-1.jpg"
                labelText={numberOfBedrooms}
              />
            )}
          </Flex>
        </Flex>
      )}
    </>
  );
}
