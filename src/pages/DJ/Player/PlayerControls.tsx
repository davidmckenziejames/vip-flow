import { useEffect, useMemo, useRef, useState } from "react";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { ImLoop } from "react-icons/im";
import { Duration } from "./Duration";
import {
  Flex,
  Image,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Button,
  Text,
  VStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Input,
} from "@chakra-ui/react";

type Props = {
  playerRef: any;
  playing: boolean;
  loop: boolean;
  volume: number;
  muted: boolean;
  progress: number;
  duration: number;

  handlePlay: () => void;
  toggleMute: () => void;
  toggleLoop: () => void;
  handlePause: () => void;
  handleVolumeChange: (newVolume: number) => void;
};
export const PlayerControls = ({
  playerRef,
  loop,
  playing,
  volume,
  muted,
  progress,
  duration,
  handlePlay,
  toggleLoop,
  handlePause,
  handleVolumeChange,
  toggleMute,
}: Props) => {
  const [played, setPlayed] = useState<number>(0);
  const [seeking, setSeeking] = useState<boolean>(false);
  const playPauseButtonRef = useRef<HTMLButtonElement>(null);

  const togglePlayAndPause = () => {
    if (playing) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleSeekMouseDown = (e: any) => {
    setSeeking(true);
  };

  const handleSeekChange = (e: any) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleSeekMouseUp = (e: any) => {
    playerRef.current?.seekTo(parseFloat(e.target.value));
    setSeeking(false);
  };

  const handleChangeInVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleVolumeChange(Number(e.target.value));
  };

  useMemo(() => {
    setPlayed((prevPlayed) => {
      if (!seeking && prevPlayed !== progress) {
        return progress;
      }
      return prevPlayed;
    });
  }, [progress, seeking]);

  // shifts focus to play button on component mount
  useEffect(() => {
    playPauseButtonRef.current?.focus();
  }, []);

  return (
    <VStack w="100%">
      <Flex flexDirection={"column"} w="100%">
        {/* duration: time played  */}

        <Flex w="100%" px="20px">
          <Slider
            min={0}
            max={1}
            step={0.001}
            value={played}
            onChangeStart={handleSeekMouseDown}
            onChange={(value) => setPlayed(value)}
            onChangeEnd={(value) =>
              handleSeekMouseUp({ target: { value: value.toString() } })
            }
            focusThumbOnChange={false}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </Flex>
      </Flex>
      <Flex>
        <Duration seconds={duration * played} />
      </Flex>
      <Flex>
        {/* play/pause button */}
        <Flex>
          <Button
            ref={playPauseButtonRef}
            as={Flex}
            onClick={togglePlayAndPause}
          >
            {playing ? <CiPause1 /> : <CiPlay1 />}
          </Button>
        </Flex>

        {/* volume control */}
        <Flex>
          {/* mute button */}
          <Button onClick={toggleMute}>
            {muted ? <VscMute /> : <VscUnmute />}
          </Button>

          {/* volume slider */}
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={volume}
            onChange={handleChangeInVolume}
          />
        </Flex>
      </Flex>
    </VStack>
  );
};
