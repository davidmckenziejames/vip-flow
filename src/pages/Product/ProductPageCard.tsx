import { useEffect } from "react";
import {
  Flex,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BiLike, BiTrash } from "react-icons/bi";
import { FiShare, FiMoreVertical } from "react-icons/fi";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

type PostMenuProps = {
  icon: React.ElementType;
  label: string;
};

const PostMenu = ({ icon, label }: PostMenuProps) => (
  <MenuItem py="10px" aria-label={label}>
    <Box as={icon} size="14px" mr="8px" />
    <Text>{label}</Text>
  </MenuItem>
);

export default function ProductPageCard() {
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
    <Card
      border="2px solid cyan"
      borderRadius="15px"
      overflow="hidden"
      w={{ base: "90%", sm: "450px" }}
      bg="black"
    >
      <CardHeader p="0" alignItems="center">
        <Image
          w="100%"
          src="https://djfan.app/wp-content/uploads/2023/05/Emerald-Beats-Vol.1-LINE-e9642cb250b92a5f75bd32f275fe1e1d-1.jpg"
          alt="DJ"
        />

        <Flex justify="flex-end" px="5px" pt="10px">
          <Menu>
            <MenuButton transition="all 0.3s" _focus={{ boxShadow: "none" }}>
              <Box as={FiMoreVertical} size="20px" color="lightgray" />
            </MenuButton>
            <MenuList
              minW="max-content"
              fontSize="14px"
              bg="white"
              p="0"
              m="0"
              borderColor="gray.200"
            >
              <PostMenu icon={BiLike} label="Edit Product" />
              <PostMenu icon={BiTrash} label="Delete Product" />
              <PostMenu icon={FiShare} label="Share Product" />
            </MenuList>
          </Menu>
        </Flex>
      </CardHeader>
      <CardBody p="0">
        <Flex mt="5px" align="center" direction="column" w="100%" pb="15px">
          <Heading mt="-15px" fontSize="24px" px="10px" color="white">
            Song / Product Name
          </Heading>
          <Heading
            fontSize="18px"
            py="5px"
            as="span"
            color="white"
            fontWeight="500"
          >
            <Box as="span" color="cyan" pr="2px">
              by{" "}
            </Box>
            Artist Name
          </Heading>
        </Flex>
        <AudioPlayer
          src="https://djfan.app/wp-content/uploads/2023/05/The-Line-by-Camilo-Astudillo-Ft.-Anita-Ce-Wiz-3165645648afa640e3b1be51accf8749.wav"
          onPlay={(e) => console.log("onPlay")}
          // other props here
        />
      </CardBody>
      <CardFooter p="0" pt="20px" pb="30px">
        <Flex mt="5px" align="center" direction="column" w="100%">
          <Heading fontSize="16px" px="10px" color="white">
            Digital Download
          </Heading>
          <Heading fontSize="22px" pt="5px" color="cyan">
            $2.00
          </Heading>

          <Box pt="10px">
            <Button
              fontSize="16px"
              flex="1"
              variant="solid"
              colorScheme="purple"
            >
              Purchase Now
            </Button>
          </Box>
        </Flex>
      </CardFooter>
    </Card>
  );
}
