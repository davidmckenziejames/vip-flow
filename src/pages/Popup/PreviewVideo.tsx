import {
  Avatar,
  Flex,
  Box,
  Card,
  CardHeader,
  Image,
  CardBody,
  CardFooter,
  Text,
  AvatarBadge,
  Menu,
  MenuButton,
  Link,
  MenuItem,
  Button,
  Heading,
  MenuList,
  HStack,
  VStack,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { BiEdit, BiPin, BiTrash } from "react-icons/bi";
import { HiPlayCircle, HiXMark } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useState } from "react";
import ReactPlayer from "react-player";
import { FaCheckCircle } from "react-icons/fa";

export default function PreviewVideo() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isHovering, setIsHovering] = useState(false);
  const handleHoverStart = () => setIsHovering(true);
  const handleHoverEnd = () => setIsHovering(false);
  return (
    <Card overflow="hidden" border="2px solid black" borderRadius="15px">
      <CardBody p="0" overflow="hidden">
        <VStack
          h="200px"
          w="100%"
          justifyContent="center"
          pos={"relative"}
          overflow="hidden"
        >
          <Image
            src="http://media.djfan.app/images/richy-preview.jpg"
            h="full"
            w="full"
            objectFit="cover"
            style={{ zIndex: "1" }}
          />

          <Box
            pos="absolute"
            top="0"
            left="0"
            w="full"
            h="full"
            bg="#111"
            opacity="0.7"
            style={{ zIndex: "2" }}
          />
          <Flex
            position="absolute"
            right="8px"
            top="8px"
            alignItems="center"
            fontSize="12px"
            lineHeight="1em"
            fontWeight={"600"}
            bg="#71fa94"
            py="4px"
            px="2px"
            borderRadius="5px"
            style={{ zIndex: "10" }}
          >
            <BiPin size="15px" />
            PINNED POST
          </Flex>
          <Flex
            justifyContent={"center"}
            w="100%"
            position="absolute"
            style={{ zIndex: "111" }}
            cursor="pointer"
          >
            <motion.div
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              <Flex
                onClick={onOpen}
                className={isHovering ? "" : "play-btn"}
                color="white"
              >
                <HiPlayCircle fontSize="70px" />
              </Flex>
            </motion.div>
          </Flex>
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay bg="rgb(26 32 44 / 66%);rgb(26 32 44 / 66%);" />
            <ModalContent width="95%" maxW="500px" overflow="hidden">
              <VStack>
                <Flex bg="#111" w="100%">
                  <Flex w="full" height="300px">
                    <video className="modalVideo" controls>
                      <source
                        src="http://media.djfan.app/images/ezgif-2-010de840ee.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </Flex>
                </Flex>
              </VStack>
              <VStack bg="#111" py="15px" borderTop={"1px solid white "}>
                <Button
                  bgGradient="linear(to-r, #5c03bc, #e536ab)"
                  color="white"
                >
                  GO VIP FOR FREE
                </Button>
                <HStack>
                  <Text
                    color="#fff"
                    fontSize="14px"
                    textAlign="center"
                    fontWeight="600"
                    display="flex"
                    alignItems="center"
                    gap="6px"
                  >
                    <FaCheckCircle color="#71fa94" />
                    CANCEL ANYTIME
                  </Text>
                  <Text
                    color="#fff"
                    fontSize="14px"
                    textAlign="center"
                    fontWeight="600"
                    display="flex"
                    alignItems="center"
                    gap="6px"
                  >
                    <FaCheckCircle color="#71fa94" />
                    100% AFREE
                  </Text>
                </HStack>
              </VStack>
            </ModalContent>
          </Modal>
          <Flex
            flex="1"
            gap="4"
            alignItems="center"
            flexWrap="wrap"
            position="absolute"
            style={{ zIndex: "10" }}
            left="0"
            bottom="0"
          >
            <HStack gap="8px" pb="15px" pl="10px" alignItems="flex-end">
              <Avatar
                name="Richy Ahmed"
                border="1px solid cyan"
                width="35px"
                height="35px"
                src="https://files.djfan.app/cache/706eec1f-ea13-41e4-a3f7-fd4dbc98ced2.webp"
              ></Avatar>
              <Stack gap="5px" pb="2px">
                <Text
                  fontSize="12px"
                  color="#fff"
                  fontWeight="600"
                  lineHeight="1em"
                >
                  RICHY AHMED
                </Text>
                <Text
                  fontSize="12px"
                  color="#71fbfd"
                  fontWeight="700"
                  lineHeight="1em"
                >
                  MEMBERSHIP TRAILER
                </Text>
              </Stack>
            </HStack>
          </Flex>
        </VStack>
        <Flex py="15px" px="15px">
          <Text fontSize="14px" fontWeight="600" lineHeight="1.4em">
            I recorded a quick video for you guys explaining my memberships,
            what you get, and how you can connect with me. Also how to get free{" "}
            <Link color="#7d5aeb">VIP access</Link>.
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
}
