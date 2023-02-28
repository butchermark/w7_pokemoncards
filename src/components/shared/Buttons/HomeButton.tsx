import { useContext } from "react";
import { Link } from "react-router-dom";
import PokemonCardsContext from "../../../context/PokemonCardsContext";
import { StyledButton } from "./StyledButton";

const HomeButton = () => {
  const { setInGameStatus } = useContext(PokemonCardsContext);

  const inGameStatusChangeHandler = () => {
    setInGameStatus(false);
  };
  return (
    <Link to={"/pokemoncardgame"}>
      <StyledButton>Home</StyledButton>
    </Link>
  );
};
export default HomeButton;
