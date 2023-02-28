import { useContext } from "react";
import PokemonCardsContext from "../../../context/PokemonCardsContext";
import { StyledButton } from "./StyledButton";

const RestartButton = () => {
  const { setNewGame, setTurns, inGameStatus } =
    useContext(PokemonCardsContext);
  const handleRestart = () => {
    setNewGame(Math.random());
    setTurns(0);
  };

  return (
    <StyledButton disabled={!inGameStatus} onClick={handleRestart}>
      Restart
    </StyledButton>
  );
};
export default RestartButton;
