import {
  Box,
  Button,
  Flex,
  Image,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useBreakpointValue,
  Stack,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  HStack,
} from "@chakra-ui/react";
import { Meteors } from "./meteors";
import { FiCheck, FiCheckSquare, FiEye, FiX } from "react-icons/fi";

const fontStyle = {
  lineHeight: "1em",
};
const buttonStyle = {
  lineHeight: "1em",
  fontWeight: "600",
  rounded: "lg",
  cursor: "pointer",
};

const text = {
  lineHeight: "1em",
};

export default function HomeHero() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      w={"full"}
      py={{ base: "40px", md: "90px" }}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgImage="linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)) , url('https://mckenzie-james.com/wp-content/uploads/2024/01/bg-vip.jpg')"
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack w={{ base: "100%" }} gap="20px">
        <Image
          mb="10px"
          height={{ base: "40px", md: "60px" }}
          src="http://media.djfan.app/images/New-Project-1.png"
        />
        <Flex
          {...text}
          color="#fff"
          textAlign="center"
          lineHeight="1.1em"
          fontSize={{ base: "44px", md: "60px" }}
          fontWeight="700"
          w={{ base: "95%", md: "800px" }}
        >
          Table booking & bottle ordering system for clubs
        </Flex>
        <Flex
          {...text}
          textAlign="center"
          justifyContent="center"
          lineHeight="1.2em"
          color="#fff"
          fontSize={{ base: "18px", md: "28px" }}
          fontWeight="500"
          w={{ base: "95%", md: "600px" }}
        >
          Level up your guest experience, increase reservations & sales, and end
          admin chaos.
        </Flex>
      </VStack>
      <Box
        fontWeight="600"
        cursor="pointer"
        position="relative"
        mt="25px"
        onClick={onOpen}
        fontSize={{ base: "18px", md: "22px" }}
      >
        <span className="relative inline-block overflow-hidden rounded-full p-[2px]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 hover:bg-white px-5 py-2  font-600 text-white hover:text-slate-950/90 backdrop-blur-3xl">
            REQUEST ACCESS
          </div>
        </span>
        <Box>
          <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent w={{ base: "90%", md: "450px" }}>
              <Box w="100%" position="relative">
                <Flex
                  cursor="pointer"
                  position="absolute"
                  right="10px"
                  top="10px"
                  fontSize="26px"
                  onClick={onClose}
                >
                  <FiX />
                </Flex>
                <form
                  accept-charset="UTF-8"
                  action="https://www.formbackend.com/f/9d02de158b2f70bc"
                  method="POST"
                >
                  <Flex flexDirection="column" gap="10px" px="15px" py="20px">
                    <Flex flexDirection="column">
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <Input type="text" id="name" name="name" required />
                    </Flex>
                    <Flex flexDirection="column">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input type="email" id="email" name="email" required />
                    </Flex>
                    <Flex flexDirection="column">
                      <FormLabel htmlFor="company">Company</FormLabel>
                      <Input
                        type="company"
                        id="company"
                        name="company"
                        required
                      />
                    </Flex>
                    <Button type="submit">
                      <Flex
                        alignItems="center"
                        lineHeight="1em"
                        fontSize={{ base: "16px", md: "18px" }}
                        fontWeight="600"
                        gap="5px"
                        w={{ base: "", md: "" }}
                      >
                        <Box boxSize="20px">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                            />
                          </svg>
                        </Box>
                        REQUEST ACCESS
                      </Flex>
                    </Button>
                  </Flex>
                </form>
              </Box>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </Flex>
  );
}
