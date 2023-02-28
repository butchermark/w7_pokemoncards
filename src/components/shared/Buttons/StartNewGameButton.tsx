import React from "react";
import { Link } from "react-router-dom";
import PokemonCardsContext from "../../../context/PokemonCardsContext";
import { StyledButton } from "./StyledButton";
const StartNewGameButton = () => {
  const {
    setInGameStatus,
    setNewGame,
    inGameStatus,
    setTurns,
    setMatchCounter,
  } = React.useContext(PokemonCardsContext);

  const inGameStatusChangeHandler = () => {
    setInGameStatus(true);
    setMatchCounter(1);
    setTurns(0);
    setNewGame(Math.random());
  };
  return (
    <Link to={"/pokemoncardgame/game"}>
      <StyledButton
        disabled={inGameStatus}
        onClick={inGameStatusChangeHandler}
        className="start-new-game-button"
      >
        Start New Game
      </StyledButton>
    </Link>
  );
};
export default StartNewGameButton;
