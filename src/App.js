import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme";

// pages
import LandingPage from "./pages/LandingPage/LandingPage";
import InfoMinigame1 from "./pages/Minigame1/InfoMinigame1";
import Minigame1 from "./pages/Minigame1/Minigame1";
import InfoMinigame2 from "./pages/Minigame2/InfoMinigame2";
import Minigame2 from "./pages/Minigame2/Minigame2";
import Minigame3 from "./pages/Minigame3/Minigame3";
import FinalGame from "./pages/Finalgame/FinalGame";
import InfoMinigame3 from "./pages/Minigame3/InfoMinigame3";
import References from "./pages/References";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/info-minigame-1" element={<InfoMinigame1 />} />
          <Route path="/minigame-1" element={<Minigame1 />} />
          <Route path="/info-minigame-2" element={<InfoMinigame2 />} />
          <Route path="/minigame-2" element={<Minigame2 />} />
          <Route path="/info-minigame-3" element={<InfoMinigame3 />} />
          <Route path="/minigame-3" element={<Minigame3 />} />
          <Route path="/finalgame" element={<FinalGame />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
