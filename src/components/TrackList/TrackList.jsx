import { fetchTracks } from "../../services/api.js";
import { useAudio } from "../../context/AudioContext/AudionContext.jsx";
import { useEffect, useState } from "react";

export function TrackList() {
  const [tracks, setTracks] = useState([]);
  const [search, setSearch] = useState("");

  const { playTrack } = useAudio();

  useEffect(() => {
    fetchTracks(search)
      .then(setTracks)
      .catch((error) => console.error(error));
  }, [search]);

  return (
    <div>
      <h2>tracks</h2>

      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {tracks.map((track) => (
        <div key={track.id}>
          <img src={track.image} alt={track.name} width="120" />
          <p>{track.name}</p>
          <p>{track.artist_name}</p>
          <button onClick={() => playTrack(track)}>play</button>
        </div>
      ))}
    </div>
  );
}
