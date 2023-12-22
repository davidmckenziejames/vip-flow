import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  useRadioGroup,
  useRadio,
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
import { FaFileUpload, FaFolder } from "react-icons/fa";
const fontlabelStyle = {
  fontSize: "18px",
  fontWeight: "600",
  mb: "10px",
};
function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        <FaFolder />
        {props.children}
      </Box>
    </Box>
  );
}
export default function PestForm({ onContactToggle }: any) {
  const { isOpen: isContactOpen } = useDisclosure();
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

  const handlePostcodeInput = (value: string) => {
    setPostcode(value);
  };
  const handleBuildingTypeClick = (type: string) => {
    setBuildingType(type);
  };
  const handleSelect = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>,
  ) => {
    // Toggle the selection or unselect if already selected
    setter((prevValue) => (prevValue === value ? "" : value));
  };

  const isAllSelectionsMade =
    buildingType &&
    selectedIssue &&
    (selectedInsect || selectedRodent || selectedBird || selectedFlyingInsect);
  const scrollToBottom = () => {
    // Scroll to the bottom of the page
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // You can change this to "auto" for an instant scroll
    });
  };

  useEffect(() => {
    // Scroll down when selections are made
    if (isAllSelectionsMade) {
      scrollToBottom();
    }
  }, [isAllSelectionsMade]);
  const options = ["Kitchen", "vue", "svelte"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });
  const group = getRootProps();
  const [selectedFiles, setSelectedFiles] = useState(null);

  const handleFileChange = (event) => {
    // Handle the selected files here
    const files = event.target.files;
    setSelectedFiles(files);
  };

  return (
    <>
      <Flex flexDirection="column" gap="20px">
        {/* Building Type Selection */}
        <FormControl id="building">
          <FormLabel {...fontlabelStyle}>
            What type of building are you in?
          </FormLabel>

          <Flex
            direction="row"
            flexWrap={"wrap"}
            justifyContent="flex-start"
            gap="20px"
          >
            {buildingTypeChoices.map((choice) => (
              <ImageChoiceCard
                key={choice.value}
                isSelected={buildingType === choice.value}
                onClick={() => handleSelect(choice.value, setBuildingType)}
                imageSrc={choice.imageSrc}
                labelText={choice.labelText}
              />
            ))}
          </Flex>
        </FormControl>

        {/* Problem Selection */}
        {buildingType && (
          <FormControl>
            <FormLabel {...fontlabelStyle}>What problem do you have?</FormLabel>
            <Flex
              direction="row"
              flexWrap={"wrap"}
              justifyContent="flex-start"
              gap="20px"
            >
              {problemChoices.map((choice) => (
                <ImageChoiceCard
                  key={choice.value}
                  isSelected={selectedIssue === choice.value}
                  onClick={() => handleSelect(choice.value, setSelectedIssue)}
                  imageSrc={choice.imageSrc}
                  labelText={choice.labelText}
                />
              ))}
            </Flex>
          </FormControl>
        )}

        {selectedIssue === "crawling_insects" && (
          <FormControl>
            <FormLabel {...fontlabelStyle}>
              Which kind of crawling insect?
            </FormLabel>
            <Flex
              direction="row"
              flexWrap={"wrap"}
              justifyContent="flex-start"
              gap="20px"
            >
              {crawlingInsectChoices.map((choice) => (
                <ImageChoiceCard
                  key={choice.value}
                  isSelected={selectedInsect === choice.value}
                  onClick={() => handleSelect(choice.value, setSelectedInsect)}
                  imageSrc={choice.imageSrc}
                  labelText={choice.labelText}
                />
              ))}
            </Flex>
          </FormControl>
        )}

        {selectedIssue === "rodents" && (
          <FormControl>
            <FormLabel {...fontlabelStyle}>What kind of rodent?</FormLabel>
            <Flex
              direction="row"
              flexWrap={"wrap"}
              justifyContent="flex-start"
              gap="20px"
            >
              {rodentChoices.map((choice) => (
                <ImageChoiceCard
                  key={choice.value}
                  isSelected={selectedRodent === choice.value}
                  onClick={() => handleSelect(choice.value, setSelectedRodent)}
                  imageSrc={choice.imageSrc}
                  labelText={choice.labelText}
                />
              ))}
            </Flex>
          </FormControl>
        )}

        {selectedIssue === "pest_birds" && (
          <FormControl>
            <FormLabel {...fontlabelStyle}>What kind of pest bird?</FormLabel>
            <Flex
              direction="row"
              flexWrap={"wrap"}
              justifyContent="flex-start"
              gap="20px"
            >
              {pestBirdChoices.map((choice) => (
                <ImageChoiceCard
                  key={choice.value}
                  isSelected={selectedBird === choice.value}
                  onClick={() => handleSelect(choice.value, setSelectedBird)}
                  imageSrc={choice.imageSrc}
                  labelText={choice.labelText}
                />
              ))}
            </Flex>
          </FormControl>
        )}

        {selectedIssue === "flying_insects" && (
          <FormControl>
            <FormLabel {...fontlabelStyle}>What flying insect?</FormLabel>
            <Flex
              direction="row"
              flexWrap={"wrap"}
              justifyContent="flex-start"
              gap="20px"
            >
              {flyingInsectChoices.map((choice) => (
                <ImageChoiceCard
                  key={choice.value}
                  isSelected={selectedFlyingInsect === choice.value}
                  onClick={() =>
                    handleSelect(choice.value, setSelectedFlyingInsect)
                  }
                  imageSrc={choice.imageSrc}
                  labelText={choice.labelText}
                />
              ))}
            </Flex>
          </FormControl>
        )}
        {selectedIssue === "crawling_insects" &&
          selectedInsect === "bed_bugs" && (
            <FormControl>
              <FormLabel {...fontlabelStyle}>How many bedrooms?</FormLabel>
              {/* Add input for the number of bedrooms */}
              <Input
                type="number"
                maxW="300px"
                placeholder="Enter the number of bedrooms"
                value={numberOfBedrooms}
                onChange={(e) => setNumberOfBedrooms(e.target.value)}
              />
            </FormControl>
          )}

        {isAllSelectionsMade && (
          <>
            <Button display="none" onClick={onContactToggle}>
              Click Me
            </Button>
          </>
        )}
      </Flex>
    </>
  );
}
