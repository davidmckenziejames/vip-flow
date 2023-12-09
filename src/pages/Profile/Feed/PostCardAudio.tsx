import { useEffect } from "react";
import {
  Avatar,
  Flex,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Heading,
  Image,
  AvatarBadge,
  Menu,
  MenuButton,
  Link,
  MenuItem,
  MenuList,
  HStack,
} from "@chakra-ui/react";
import { BiEdit, BiTrash } from "react-icons/bi";
import {
  FiShare,
  FiHeart,
  FiEye,
  FiMoreVertical,
  FiX,
  FiDownload,
} from "react-icons/fi";

import PostActions from "./PostActions";
import "react-h5-audio-player/lib/styles.css";
import AudioFooter from "../AudioFooter";
import EditPost from "./EditPost";
import { AudioPlayer } from "../../DJ/Player/AudioPlayer";
import Comments from "../../DJ/Comments";

type PostMenuProps = {
  icon: React.ElementType;
  label: string;
};

const iconStyle = {
  fontSize: "25px",
  color: "#111",
  cursor: "pointer",
};
const audio = {
  url: "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3",
  title: "Techno Longer",
  author: "Richy Ahmed",
  thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
};

const PostMenu = ({ icon, label }: PostMenuProps) => (
  <MenuItem py="10px" aria-label={label}>
    <Box as={icon} size="14px" mr="8px" />
    <Text>{label}</Text>
  </MenuItem>
);

export default function PostCardAudio() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .rhap_container {
        background: #333;
      }

      .rhap_progress-filled {
          background: cyan;
      }
      
      .rhap_progress-bar {
        background-image: linear-gradient(90deg, #043AFB 0%, #CB00BE 100%);
      }

      .rhap_download-progress {
        background: #ffffff;
      }

      .rhap_time {
        color: #fff;
      }

      .rhap_play-pause-button {
        color: #fff;
      }
    `;

    document.head.append(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <Card border="2px solid black" borderRadius="15px" mx="15px">
      <CardHeader borderBottom="2px solid black">
        <Flex gap={4}>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar
              name="Richy Ahmed"
              border="1px solid cyan"
              src="https://files.djfan.app/cache/cfd61f22-662d-4d80-bfca-694b10ef6c89.webp"
            >
              <AvatarBadge
                bg="green.500"
                boxSize="1.25rem"
                borderColor="white"
                display="block"
                justifyContent="flex-end"
              />
            </Avatar>

            <Box>
              <Link pb="2px" size="sm" fontWeight="700">
                Exotic DJ
              </Link>
              <HStack>
                <Text fontSize="12px" color="gray.500" fontWeight="500">
                  6 hours ago
                </Text>
                <Flex align="center" gap="4px">
                  <Box as={FiEye} size="14px" color="#805ad5" />
                  <Text fontSize="14px" color="#805ad5" fontWeight="600">
                    VIP
                  </Text>
                </Flex>
              </HStack>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody p="0">
        <AudioPlayer
          url={audio.url}
          title={audio.title}
          author={audio.author}
          thumbnail={audio.thumbnail}
        />
      </CardBody>
      <CardFooter p="0" flexDirection="column" w="100%">
        <>
          <Stack borderBottom="2px solid #111" w="100%" px="15px" py="15px">
            <Text>
              This Hypnotic Techno mix will hopefully give you goosebumps
            </Text>
          </Stack>
          <HStack w="100%" justifyContent="space-between" px="15px"></HStack>
        </>
        <Comments />
      </CardFooter>
    </Card>
  );
}
