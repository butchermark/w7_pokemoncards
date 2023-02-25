import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GamePage from "../components/pages/GamePage";
import MainPage from "../components/pages/MainPage";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/pokemoncardgame" />} />
        <Route path="/pokemoncardgame/game" element={<GamePage />} />
        <Route path="/pokemoncardgame/*" element={<MainPage />} />
        <Route path="/pokemoncardgame" element={<MainPage />} />
        <Route path="*" element={<Navigate to="/pokemoncardgame" />} />
      </Routes>
    </BrowserRouter>
  );
};
export default PageRouter;
