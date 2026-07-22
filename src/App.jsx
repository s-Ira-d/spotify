import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { AudioProvider } from "./context/AudioContext/AudionContext";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <AudioProvider>
      <div className="app">
        <Sidebar />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </main>
      </div>
    </AudioProvider>
  );
}

export default App;
