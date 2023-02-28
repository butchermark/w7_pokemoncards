import React from "react";
import { Link } from "react-router-dom";
import PokemonCardsContext from "../../../context/PokemonCardsContext";
import { StyledButton } from "./StyledButton";

const SkipButton = () => {
  const { inGameStatus } = React.useContext(PokemonCardsContext);
  return (
    <Link to={"/pokemoncardgame/game"}>
      <StyledButton hidden={!inGameStatus}>
        You are still in game...
      </StyledButton>
    </Link>
  );
};
export default SkipButton;
