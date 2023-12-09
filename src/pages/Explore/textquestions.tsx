import {
  VStack,
  HStack,
  Text,
  Button,
  Input,
  FormLabel,
  useNumberInput,
  Box,
  VisuallyHidden,
  Flex,
  Textarea,
  InputGroup,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";

import { UploadButton } from "@bytescale/upload-widget-react";
import { useState, useEffect, useRef } from "react";
import { HiOutlineMap } from "react-icons/hi";
import {
  HiPhone,
  HiEnvelope,
  HiUser,
  HiOutlineBuildingOffice,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineUser,
} from "react-icons/hi2";
import FilePickerButton from "./filesss";
type Selections = {
  postCode: string;
  numberOfRooms: number;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  pestDescription: string;
};
const formLabelStyles = {
  mb: "-9px",
  px: "6px",
  ml: "10px",
  fontSize: "14px",
  bg: "white",
  zIndex: "100",
};
const AddressAutocomplete = () => {
  const [address, setAddress] = useState("");
  const autocompleteInput = useRef(null);

  useEffect(() => {
    if (
      typeof window.google === "undefined" ||
      typeof window.google.maps === "undefined"
    ) {
      console.error("Google Maps script not loaded");
      return;
    }

    // Ensure the input ref is current to an HTMLInputElement.
    if (autocompleteInput.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        autocompleteInput.current as HTMLInputElement,
        {
          types: ["address"],
          componentRestrictions: { country: "uk" },
        }
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (place.formatted_address) {
          setAddress(place.formatted_address);
        }
      });
    } else {
      console.error("Autocomplete input ref is null");
    }
  }, []);

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <HiOutlineMap color="gray.300" />
      </InputLeftElement>
      <Input
        ref={autocompleteInput}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your postcode"
      />
    </InputGroup>
  );
};
export default function TextQuestions() {
  const [selections, setSelections] = useState<Selections>({
    postCode: "",
    numberOfRooms: 1,
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    pestDescription: "",
  });

  const handleInputChange =
    (field: keyof Selections) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelections((prevSelections) => ({
        ...prevSelections,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(selections);
  };

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: selections.numberOfRooms,
      min: 1,
      max: 6,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      handleInputChange("numberOfRooms")({
        target: {
          value: value,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <VStack gap="20px" align="stretch">
        <Box>
          <VisuallyHidden as="label" htmlFor="post-code">
            Post Code
          </VisuallyHidden>
          <Input
            id="post-code"
            placeholder="Enter your post code"
            value={selections.postCode}
            onChange={handleInputChange("postCode")}
          />
        </Box>
        <Box>
          <Text mb="8px">Number of Rooms:</Text>
          <HStack maxW="320px">
            <Button {...dec}>-</Button>
            <Input {...input} />
            <Button {...inc}>+</Button>
          </HStack>
        </Box>
        <Box>
          {selections.firstName && (
            <Flex>
              <FormLabel {...formLabelStyles} htmlFor="first-name">
                First Name
              </FormLabel>
            </Flex>
          )}
          <Input
            id="first-name"
            placeholder="Enter your first name"
            value={selections.firstName}
            onChange={handleInputChange("firstName")}
          />
        </Box>
        <Box>
          {selections.lastName && (
            <Flex>
              <FormLabel {...formLabelStyles} htmlFor="last-name">
                Last Name
              </FormLabel>
            </Flex>
          )}
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <HiOutlineUser color="gray.300" />
            </InputLeftElement>
            <Input
              id="last-name"
              placeholder="Enter your last name"
              value={selections.lastName}
              onChange={handleInputChange("lastName")}
            />
          </InputGroup>
        </Box>
        <Box>
          {selections.company && (
            <Flex>
              <FormLabel {...formLabelStyles} htmlFor="company">
                Company
              </FormLabel>
            </Flex>
          )}
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <HiOutlineBuildingOffice color="gray.300" />
            </InputLeftElement>
            <Input
              id="company"
              placeholder="Enter your company"
              value={selections.company}
              onChange={handleInputChange("company")}
            />
          </InputGroup>
        </Box>
        <Box>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <HiOutlineEnvelope color="gray.300" />
            </InputLeftElement>
            <Input
              id="email"
              placeholder="Enter your email"
              value={selections.email}
              onChange={handleInputChange("email")}
            />
          </InputGroup>
        </Box>
        <Box>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <HiOutlinePhone color="gray.300" />
            </InputLeftElement>
            <Input
              id="phone"
              type="tel"
              placeholder="Phone number"
              value={selections.phone}
              onChange={handleInputChange("phone")}
            />
          </InputGroup>
        </Box>

        <Box>
          <AddressAutocomplete />
        </Box>
        <Button type="submit" colorScheme="teal" size="lg">
          Submit
        </Button>
      </VStack>
    </form>
  );
}
