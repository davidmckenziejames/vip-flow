import {
  VStack,
  HStack,
  Image,
  Text,
  Button,
  Box,
  useRadio,
  useRadioGroup,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaHeadset } from "react-icons/fa";

type OptionType = "property" | "helpType" | "pestProblem";
type Option = {
  id: string;
  label: string;
  imgSrc: string;
  width?: string | number;
};
type Options = Record<OptionType, Option[]>;
type Selections = Record<OptionType, string | null>;

const options: Options = {
  property: [
    {
      id: "residential",
      label: "Residential Property",
      imgSrc: "https://dynopest.co.uk/wp-content/uploads/2023/07/home.jpg",
    },
    {
      id: "commercial",
      label: "Commercial Property",
      imgSrc:
        "https://dynopest.co.uk/wp-content/uploads/2023/07/othersolar.jpg",
    },
  ],
  helpType: [
    {
      id: "prevent",
      label: "I want to prevent future pest problems",
      imgSrc:
        "https://dynopest.co.uk/wp-content/uploads/2023/07/pitched-roof.jpg", // Example image, replace with appropriate one
    },
    {
      id: "solve",
      label: "I have a pest problem now I need solving",
      imgSrc: "https://dynopest.co.uk/wp-content/uploads/2023/07/flatsolar.jpg", // Example image, replace with appropriate one
    },
  ],
  pestProblem: [
    {
      id: "crawling",
      label: "Crawling Insects",
      imgSrc:
        "https://dynopest.co.uk/wp-content/uploads/2023/03/cockroach-pest-control-300x200-1.png",
    },
    {
      id: "rodents",
      label: "Rodents",
      imgSrc:
        "https://dynopest.co.uk/wp-content/uploads/2023/03/rodents-1.jpeg",
    },
    {
      id: "birds",
      label: "Pest Birds",
      imgSrc:
        "https://dynopest.co.uk/wp-content/uploads/2023/03/pest-birds-300x200-1.jpg",
    },
    {
      id: "flying",
      width: "200px",
      label: "Flying Insects",
      imgSrc: "https://dynopest.co.uk/wp-content/uploads/2023/03/was.jpg",
    },
  ],
};

const QuestionSection = ({
  question,
  options,
  onChange,
}: {
  question: string;
  options: Option[];
  onChange: (value: string) => void;
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: question,
    onChange: onChange,
  });

  const group = getRootProps();

  return (
    <VStack>
      <Text fontSize="20px" fontWeight="bold">
        {question}
      </Text>
      <HStack
        {...group}
        gap="20px"
        justifyContent="center"
        px="20px"
        flexWrap={"wrap"}
      >
        {options.map((option) => {
          const radio = getRadioProps({ value: option.label });
          const { getInputProps, getCheckboxProps } = useRadio(radio);
          const input = getInputProps();
          const checkbox = getCheckboxProps();

          return (
            <Box as="label" key={option.id} width={option.width || "200px"}>
              <input {...input} />
              <VStack
                {...checkbox}
                cursor="pointer"
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                overflow="hidden"
                _checked={{
                  border: "3px solid #B8FFD5",
                }}
                _focus={{
                  boxShadow: "none",
                }}
              >
                <Image src={option.imgSrc} alt={option.label} />
                <Text
                  lineHeight={"1em"}
                  pb="8px"
                  fontSize={"14px"}
                  fontWeight={"600"}
                >
                  {option.label}
                </Text>
              </VStack>
            </Box>
          );
        })}
      </HStack>
    </VStack>
  );
};

export default function Questions() {
  const [selections, setSelections] = useState<Selections>({
    property: null,
    helpType: null,
    pestProblem: null,
  });

  const handleSelectionChange = (type: OptionType) => (value: string) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [type]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(selections);
  };

  // Determine which question to show next based on current selections
  const shouldShowHelpTypeQuestion = selections.property !== null;
  const shouldShowPestProblemQuestion = selections.helpType !== null;

  return (
    <Flex flexDirection="column">
      <Flex bg="green">
        <Heading>Logo</Heading>
      </Flex>
      <form onSubmit={handleSubmit}>
        <VStack gap="30px">
          <QuestionSection
            question="What property?"
            options={options.property}
            onChange={handleSelectionChange("property")}
          />

          {shouldShowHelpTypeQuestion && (
            <QuestionSection
              question="What do you need help with?"
              options={options.helpType}
              onChange={handleSelectionChange("helpType")}
            />
          )}

          {shouldShowPestProblemQuestion && (
            <QuestionSection
              question="What pest problem do you have?"
              options={options.pestProblem}
              onChange={handleSelectionChange("pestProblem")}
            />
          )}

          {shouldShowPestProblemQuestion && (
            <Box>
              <Button type="submit" colorScheme="teal">
                Submit
              </Button>
            </Box>
          )}
        </VStack>
      </form>
      <Flex position="fixed" bottom="10px" right="10px">
        <Box bg="blue" p="10px" borderRadius={"50px"}>
          <FaHeadset size="25px" color="#fff" />
        </Box>
      </Flex>
    </Flex>
  );
}
