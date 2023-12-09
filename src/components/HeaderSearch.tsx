import { Input, InputLeftElement, InputGroup, Icon } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export default function HeaderSearch() {
  return (
    <InputGroup maxW={{ base: "100%", sm: "150px", md: "200px" }}>
      <InputLeftElement pointerEvents="none">
        <Icon as={FiSearch} color="on-accent" boxSize="6" />
      </InputLeftElement>
      <Input placeholder="Search" variant="filled" colorScheme="blue" />
    </InputGroup>
  );
}
