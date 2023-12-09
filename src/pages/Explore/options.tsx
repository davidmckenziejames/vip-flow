import {
  Box,
  Avatar,
  VStack,
  Icon,
  Text,
  Heading,
  HStack,
  Image,
  Stack,
  Button,
  Badge,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Portal,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import React, { useRef } from "react";

import {
  FaGoogle,
  FaFacebook,
  FaYelp,
  FaStar,
  FaRegStar,
  FaArrowRight,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";

export default function ButtonOptions() {
  const initRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Popover closeOnBlur={false} placement="bottom">
        {({ isOpen, onClose }) => (
          <>
            <PopoverTrigger>
              <Button lineHeight="1em" position="fixed" top="10px" right="10px">
                Click to {isOpen ? "close" : "open"}
              </Button>
            </PopoverTrigger>
            <PopoverContent bg="#AARRGGBB" border="unset" w="200px" pr="10px">
              <VStack w="100%" alignItems="flex-end">
                <Button lineHeight="1em" w="150px">
                  SEE PRICING
                </Button>
                <Button lineHeight="1em" w="150px">
                  GET CALLBACK
                </Button>
                <Button lineHeight="1em" w="150px">
                  WHATSAPP
                </Button>
              </VStack>
            </PopoverContent>
          </>
        )}
      </Popover>

      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <form
              id="my-form"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("submitted");
              }}
            >
              <Input name="nickname" placeholder="Type here..." />
            </form>
          </DrawerBody>

          <DrawerFooter>
            <Button type="submit" form="my-form">
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
