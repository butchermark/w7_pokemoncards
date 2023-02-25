import React from "react";
import { Link } from "react-router-dom";
import PokemonCardsContext from "../../context/PokemonCardsContext";

const StartNewGameButton = () => {
  const { inGameStatus, setInGameStatus, setDeckSize } =
    React.useContext(PokemonCardsContext);

  const inGameStatusChangeHandler = () => {
    setInGameStatus(true);
  };
  return (
    <Link to={"/pokemoncardgame/game"}>
      <button
        onClick={inGameStatusChangeHandler}
        className="start-new-game-button"
      >
        Start New Game
      </button>
    </Link>
  );
};
export default StartNewGameButton;
