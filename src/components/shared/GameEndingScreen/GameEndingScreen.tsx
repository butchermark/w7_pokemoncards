import React from "react";
import { Link } from "react-router-dom";
import PokemonCardsContext from "../../../context/PokemonCardsContext";
import { StyledButton } from "../Buttons/StyledButton";
import "./GameEndingScreen.css";

const GameEndingScreen = () => {
  const { setIsGameOver } = React.useContext(PokemonCardsContext);
  const isGameOverHandler = () => {
    setIsGameOver(false);
  };
  return (
    <div className="game-ending-div">
      <p>Congratulations, you "matched them all"!</p>
      <Link to={"/pokemoncardgame"}>
        <StyledButton onClick={isGameOverHandler}>Back</StyledButton>
      </Link>
    </div>
  );
};
export default GameEndingScreen;
