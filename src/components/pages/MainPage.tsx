import React, { useEffect } from "react";
import PokemonCardsContext from "../../context/PokemonCardsContext";
import DeckSizeChooser from "../shared/DeckSizeChooser";
import StartNewGameButton from "../shared/StartNewGameButton";

const MainPage = () => {
  return (
    <div>
      <DeckSizeChooser />
      <StartNewGameButton />
    </div>
  );
};
export default MainPage;
