import { createContext, useEffect, useState } from "react";
import { IContextData } from "../interface/IContextData.interface";

const PokemonCardsContext = createContext({} as IContextData);

export const PokemonCardsProvider = ({ children }: any) => {
  const [inGameStatus, setInGameStatus] = useState(false);
  const [deckSize, setDeckSize] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [usingCards, setUsingCards] = useState(0);
  const [newGame, setNewGame] = useState(0);
  const [seed, setSeed] = useState(0);
  const [matchCounter, setMatchCounter] = useState(1);
  const [turns, setTurns] = useState(0);

  const SaveDeckSize = () => {
    localStorage.setItem("deckSize", JSON.stringify(deckSize));
  };

  const getDeckSize = () => {
    setDeckSize(JSON.parse(localStorage.getItem("deckSize") || "0"));
  };

  useEffect(() => {
    setHighScore(JSON.parse(localStorage.getItem("highScore") || "0"));
  }, []);

  const checkIfHighScore = () => {
    if (turns < highScore) {
      setHighScore(turns);
      localStorage.setItem("highScore", JSON.stringify(turns + 1));
    }
  };
  useEffect(() => {
    setHighScore(JSON.parse(localStorage.getItem("highScore") || "0"));
  }, [turns]);

  return (
    <PokemonCardsContext.Provider
      value={{
        inGameStatus,
        turns,
        deckSize,
        newGame,
        matchCounter,
        highScore,
        seed,
        usingCards,
        setUsingCards,
        setSeed,
        setMatchCounter,
        setNewGame,
        setTurns,
        setHighScore,
        checkIfHighScore,
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
