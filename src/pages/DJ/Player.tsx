import { AudioPlayer } from "./Player/AudioPlayer";

const audio = {
  url: "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3",
  title: "Techno Dream",
  author: "Richy Ahmed",
  thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
};

const Player = () => {
  return (
    <>
      <AudioPlayer
        url={audio.url}
        title={audio.title}
        author={audio.author}
        thumbnail={audio.thumbnail}
      />
    </>
  );
};

export default Player;
