import ReactPlayer from "react-player";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Image,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useRef, useState, useEffect, useMemo } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { ImLoop } from "react-icons/im";
import { Duration } from "./Duration";

import {
  FiBookmark,
  FiDownload,
  FiExternalLink,
  FiEye,
  FiInfo,
  FiMoreHorizontal,
  FiMoreVertical,
  FiPause,
  FiPlay,
  FiShare,
  FiShoppingBag,
  FiShoppingCart,
  FiX,
} from "react-icons/fi";
import { FaCirclePause, FaCirclePlay } from "react-icons/fa6";
type Props = {
  url: string;
  title: string;
  author: string;
  thumbnail: string;
};
const iconStyles = {
  fontSize: "60px",
  cursor: "pointer",
  color: "cyan",

  _hover: { color: "cyan" },
  _active: { transform: "scale(0.95)" },
};
export const AudioPlayer = ({ url, title, author, thumbnail }: Props) => {
  const playerRef = useRef<ReactPlayer | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [muted, setMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [progress, setProgress] = useState<number>(0);
  const [loop, setLoop] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [played, setPlayed] = useState<number>(0);
  const [seeking, setSeeking] = useState<boolean>(false);
  const playPauseButtonRef = useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handlePlay = () => setPlaying(true);
  const handlePause = () => setPlaying(false);
  const handleVolumeChange = (newVolume: number) => setVolume(newVolume);
  const toggleMute = () => setMuted((prevMuted) => !prevMuted);
  const handleProgress = (state: any) => setProgress(state.played);
  const handleDuration = (duration: number) => setDuration(duration);
  const toggleLoop = () => setLoop((prevLoop) => !prevLoop);
  const [show, setShow] = useState(false);
  const togglePlayAndPause = () => (playing ? handlePause() : handlePlay());
  const handleSeekMouseDown = (e: any) => setSeeking(true);
  const handleSeekChange = (e: any) => setPlayed(parseFloat(e.target.value));
  const handleSeekMouseUp = (e: any) => {
    playerRef.current?.seekTo(parseFloat(e.target.value));
    setSeeking(false);
  };
  const handleChangeInVolume = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleVolumeChange(Number(e.target.value));

  useMemo(() => {
    setPlayed((prevPlayed) =>
      !seeking && prevPlayed !== progress ? progress : prevPlayed
    );
  }, [progress, seeking]);

  useEffect(() => playPauseButtonRef.current?.focus(), []);

  return (
    <>
      <Box display={"none"}>
        <ReactPlayer
          ref={playerRef}
          url={url}
          playing={playing}
          volume={volume}
          muted={muted}
          loop={loop}
          onPlay={handlePlay}
          onPause={handlePause}
          onProgress={handleProgress}
          onDuration={handleDuration}
        />
      </Box>
      <HStack
        flexWrap={"wrap"}
        position="relative"
        w="100%"
        gap="10px"
        py="20px"
        justifyContent={"center"}
        bgGradient="linear(to-r, #0e0725, #5c03bc, #e536ab)"
      >
        <HStack
          position="absolute"
          justifyContent={{
            base: "space-between",
            sm: "flex-end",
            md: "flex-end",
          }}
          w="100%"
          p="0px"
          px={{ base: "5px", md: "none" }}
          top="0"
          gap={{ base: "10px", sm: "0px" }}
        >
          <Box p="10px" cursor={"pointer"} color="#fff" fontSize={"22px"}>
            <FiShoppingCart />
          </Box>
          <Menu>
            <MenuButton p="10px" as={Box} cursor={"pointer"}>
              <FiMoreHorizontal fontSize={"28px"} color="#fff" />
            </MenuButton>
            <MenuList
              zIndex={"10"}
              minW="unset"
              width={"140px"}
              fontSize={"14px"}
            >
              <MenuItem gap="5px">
                <FiShare /> Share
              </MenuItem>
              <MenuItem gap="5px">
                <FiBookmark /> Save
              </MenuItem>
              <MenuItem gap="5px">
                <FiDownload />
                Download
              </MenuItem>
              <MenuItem gap="5px">
                <FiInfo />
                Track Info
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        <Flex
          w={{ base: "100%", sm: "30%" }}
          position={"relative"}
          justifyContent={"center"}
        >
          <Box
            position={"absolute"}
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            borderRadius="100px"
            bg="#fff"
            zIndex={"1"}
          >
            {playing ? (
              <FaCirclePause {...iconStyles} onClick={togglePlayAndPause} />
            ) : (
              <FaCirclePlay {...iconStyles} onClick={togglePlayAndPause} />
            )}
          </Box>
          <Flex w="fit-content" position={"relative"}>
            <Image
              src={thumbnail}
              alt=""
              width="170px"
              height="170px"
              minH="120px"
              minW="120px"
              objectFit={"cover"}
              borderRadius="20px"
              py="10px"
              px="10px"
            />
            <Flex
              id="ViewArtwork"
              position="absolute"
              justifyContent="flex-end"
              p="5px"
              top="0px"
              left="0px"
              bg="black"
              borderRadius={"50px"}
              color="#fff"
              fontSize={"15px"}
              onClick={onOpen}
              cursor={"pointer"}
              border="0px solid #fff"
            >
              <FiEye />
              <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset="slideInBottom"
              >
                <ModalOverlay />
                <ModalContent maxW={"90%"}>
                  <HStack
                    top="10px"
                    position="absolute"
                    justifyContent={"space-between"}
                    w="100%"
                    px="10px"
                  >
                    <Text color="#fff" fontWeight={"bold"}>
                      Track Artwork
                    </Text>
                    <FiX
                      cursor={"pointer"}
                      color="#fff"
                      onClick={onClose}
                      fontSize="25px"
                    />
                  </HStack>

                  <Image
                    src={thumbnail}
                    width="100%"
                    height="100%"
                    objectFit={"cover"}
                  />
                </ModalContent>
              </Modal>
            </Flex>
          </Flex>
        </Flex>
        <VStack w={{ base: "100%", sm: "65%" }}>
          <Text
            lineHeight={"1em"}
            fontSize={"20px"}
            fontWeight="600"
            color="#fff"
            pb="4px"
          >
            {title}
          </Text>
          <Text
            lineHeight={"1em"}
            fontSize={"15px"}
            fontWeight="500"
            color="#fff"
          >
            {author}
          </Text>

          <HStack
            mb="-10px"
            pr={{ base: "none", md: "10px" }}
            justifyContent={"space-between"}
            gap="0px"
            w="100%"
          >
            <Flex pl={{ base: "10px", md: "none" }} pr="15px" color="#fff">
              <Duration seconds={duration * played} />
            </Flex>

            <Slider
              min={0}
              max={1}
              step={0.001}
              value={played}
              focusThumbOnChange={false}
              onChangeStart={handleSeekMouseDown}
              onChange={(value) => setPlayed(value)}
              onChangeEnd={(value) =>
                handleSeekMouseUp({ target: { value: value.toString() } })
              }
            >
              <SliderTrack minH={"6px"} maxH="6px">
                <SliderFilledTrack
                  minH={"6px"}
                  maxH="6px"
                  bgGradient="linear(to-r, #92fe9d, #00c9ff )"
                />
              </SliderTrack>
              <SliderThumb
                opacity={"0"}
                border="0px solid #be1ca6"
                color="#be1ca6"
                width="11px"
                bg="#be1ca6"
                height="11px"
                borderRadius={"50px"}
                _hover={{ opacity: "1", transition: "0.2s" }}
              ></SliderThumb>
            </Slider>

            <Flex
              position="relative"
              p="0"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              ml="4px"
            >
              <Button
                p="0px"
                bg="transparent"
                _hover={{ bg: "transparent" }}
                onClick={toggleMute}
                color="#fff"
                fontSize={"20px"}
              >
                {muted ? <VscMute /> : <VscUnmute />}
              </Button>
              {show && (
                <Box position="absolute" bottom="30px" right="15px">
                  <Slider defaultValue={30} orientation="vertical" minH="60px">
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb boxSize={3} />
                  </Slider>
                </Box>
              )}
            </Flex>
          </HStack>
        </VStack>
      </HStack>
    </>
  );
};
