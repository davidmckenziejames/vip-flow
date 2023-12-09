import {
  Avatar,
  Box,
  Button,
  HStack,
  Tooltip,
  Flex,
  Stack,
  Icon,
  Image,
  Text,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  FiShare,
  FiUnlock,
  FiUser,
  FiHeadphones,
  FiPlay,
} from "react-icons/fi";
import { FaCheckCircle, FaEnvelope } from "react-icons/fa";

export default function ProfileHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const avatarSizes = { base: "100px", sm: "150px" };
  return (
    <Box
      className="ProfileHeader"
      px={8}
      pt="30px"
      pb="30px"
      mx="auto"
      bg="pink"
      position="relative"
      backgroundImage="url('https://files.djfan.app/artists/158/30b0a512-5020-4c9b-8473-608ef3de5e0f.jpeg')"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Flex align="center" flexDirection="column">
        <Box pt="10px">
          <Avatar
            display="block"
            flexDirection="row"
            showBorder
            borderColor="cyan"
            width={avatarSizes}
            height={avatarSizes}
            src="https://files.djfan.app/cache/706eec1f-ea13-41e4-a3f7-fd4dbc98ced2.webp"
          />
        </Box>
        {/*<Share />*/}
        <Stack spacing={0} align="center" justify="center" p={0} pos="relative">
          <Text
            fontSize="24px"
            fontWeight="bold"
            color="white"
            mt="10px"
            pos="relative"
          >
            Richy Ahmed
            <Box
              position="absolute"
              right="-24px"
              top="0px"
              zIndex="3"
              color="white"
            >
              <Tooltip label="Verified Profile" aria-label="Verified Profile">
                <FaCheckCircle fontSize="18px " color="#71fbfd" />
              </Tooltip>
            </Box>
          </Text>
          <Text fontSize="16px" color="white" fontWeight="600">
            <Icon as={FiHeadphones} mb="-3px" mr="6px" />
            DJ / Producer
          </Text>
          <Flex direction="row" gap="15px" mt="15px">
            <Button
              leftIcon={<FiUnlock />}
              px="10px"
              size="sm"
              iconSpacing="1"
              background=" linear-gradient(109.6deg, rgb(170, 255, 169) 11.2%, rgb(17, 255, 189) 91.1%)"
              color="#111"
              _hover={{
                background:
                  "radial-gradient(circle at 10% 20%, rgb(64, 84, 178) 0%, rgb(219, 2, 234) 90%)",
                color: "#fff",
              }}
            >
              VIP FREE TRIAL
            </Button>
            <Button
              leftIcon={<FiUser />}
              px="10px"
              size="sm"
              iconSpacing="1"
              color="black"
              bg="white"
            >
              Follow
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
}
