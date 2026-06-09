import { useAudio } from "../../context/AudioContext/AudionContext.jsx";

export default function Sidebar() {
  const { currentTrack, isPlaying, togglePlay, error } = useAudio();

  return (
    <div>
      <h1>MINI PLAYER</h1>
      {currentTrack ? (
        <>
          <h2>{currentTrack.name}</h2>
          <h2>{currentTrack.artist_name}</h2>
          <button onClick={togglePlay}>{isPlaying ? "pause" : "play"}</button>
        </>
      ) : (
        <h2>chose track!</h2>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
