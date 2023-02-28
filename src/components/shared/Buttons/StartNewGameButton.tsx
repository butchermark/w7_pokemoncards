import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PokemonCardsContext from "../../../context/PokemonCardsContext";
import { StyledButton } from "./StyledButton";
const StartNewGameButton = () => {
  const {
    setInGameStatus,
    setNewGame,
    setIsGameOver,
    setTurns,
    setMatchCounter,
    deckSize,
  } = React.useContext(PokemonCardsContext);

  const [deckSizeZero, setDeckSizeZero] = React.useState(false);

  const isDeckSizeZero = () => {
    if (deckSize === 0) {
      console.log(deckSize);
      setDeckSizeZero(true);
    } else {
      setDeckSizeZero(false);
    }
  };

  const inGameStatusChangeHandler = () => {
    if (deckSize === 0) {
      alert("Please select a deck size!");
    } else {
      setInGameStatus(true);
      setIsGameOver(false);
      setMatchCounter(1);
      setTurns(0);
      setNewGame(Math.random());
    }
  };

  useEffect(() => {
    isDeckSizeZero();
  }, [deckSize]);
  return (
    <div>
      {deckSizeZero ? (
        <StyledButton
          onClick={inGameStatusChangeHandler}
          className="start-new-game-button"
        >
          Start New Game
        </StyledButton>
      ) : (
        <Link to={"/pokemoncardgame/game"}>
          <StyledButton
            onClick={inGameStatusChangeHandler}
            className="start-new-game-button"
          >
            Start New Game
          </StyledButton>
        </Link>
      )}
    </div>
  );
};
export default StartNewGameButton;
