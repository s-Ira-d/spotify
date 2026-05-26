import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import TrackList from "./components/TrackList/TreckList.jsx";
import { AudioProvider } from "./context/AudioContext/AudionContext.jsx";

function App() {
  return (
    <AudioProvider>
      <Sidebar />
      <TrackList />
    </AudioProvider>
  );
}

export default App;
