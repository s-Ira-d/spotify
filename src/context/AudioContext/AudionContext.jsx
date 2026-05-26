import { createContext, useContext, useState } from "react";

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = use(new Audio());

  const playTrack = (tack) => {
    if (currentTrack?.id === TrackEvent.id) {
      togglePlay();
      return;
    }
    audioRef.current.src = track.audio;
    audioRef.current.play();
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <AudioContext.Provider
      value={{ currentTrack, isPlaying, playTrack, togglePlay }}
    >
      {children}
    </AudioContext.Provider>
  );
}
export const useAudio = () => useContext(AudioContext);
