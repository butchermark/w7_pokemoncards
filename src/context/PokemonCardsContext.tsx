import { createContext, useEffect, useState } from "react";
import { IContextData } from "../interface/PokemonCards.interface";

const PokemonCardsContext = createContext({} as IContextData);

export const PokemonCardsProvider = ({ children }: any) => {
  const [inGameStatus, setInGameStatus] = useState(false);
  const [deckSize, setDeckSize] = useState(0);

  const SaveDeckSize = () => {
    localStorage.setItem("deckSize", JSON.stringify(deckSize));
    console.log(deckSize);
  };

  const getDeckSize = () => {
    setDeckSize(JSON.parse(localStorage.getItem("deckSize") || "0"));
  };

  return (
    <PokemonCardsContext.Provider
      value={{
        inGameStatus,
        deckSize,
        setInGameStatus,
        setDeckSize,
        SaveDeckSize,
        getDeckSize,
      }}
    >
      {children}
    </PokemonCardsContext.Provider>
  );
};
export default PokemonCardsContext;
