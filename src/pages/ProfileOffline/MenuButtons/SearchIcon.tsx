import {
  IconButton,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Box,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { FaTimes, FaSearch, FaChevronRight } from "react-icons/fa";
import { GrSearch, GoClose } from "react-icons/go";

export default function SearchIcon() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Popover closeOnBlur={false} placement="left">
      <PopoverTrigger>
        <Box
          color="white"
          as="a"
          fontSize={{ base: "20px" }}
          onClick={isOpen ? onClose : onOpen}
        >
          {isOpen ? <FaChevronRight /> : <FaSearch />}
        </Box>
      </PopoverTrigger>

      <PopoverContent right="0px">
        <InputGroup>
          <Input
            focusBorderColor="cyan"
            bg="white"
            type="text"
            fontSize={{ base: "16px", md: "16px" }}
            placeholder="Search for an Artist"
          />
          <InputRightElement>
            <IconButton
              aria-label="Search database"
              bg="#D1FFE6"
              icon={<FaSearch />}
            />
          </InputRightElement>
        </InputGroup>
      </PopoverContent>
    </Popover>
  );
}
