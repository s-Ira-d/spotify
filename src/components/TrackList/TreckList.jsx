import { fetchTracks } from "../../services/api.js";
import { useAudio } from "../../context/AudioContext/AudionContext.jsx";
import { useEffect, useState } from "react";

export default function TrackList() {
  const [tracks, setTracks] = useState([]);
  const { playTrack } = useAudio;
  useEffect(() => fetchTracks().then(setTracks), []);

  return (
    <div>
      <h2>tracks</h2>
      {tracks.map((track) => (
        <div key={track.id}>
          <img src={track.image} />
          <p>{track.image}</p>
          <p>{track.artist_name}</p>
          <button onClick={playTrack(track)}>play</button>
        </div>
      ))}
    </div>
  );
}
