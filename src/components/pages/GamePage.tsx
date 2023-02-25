import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PokemonCardsContext from "../../context/PokemonCardsContext";

const GamePage = () => {
  const { deckSize, setInGameStatus, getDeckSize } =
    React.useContext(PokemonCardsContext);
  const inGameStatusChangeHandler = () => {
    setInGameStatus(false);
  };
  useEffect(() => {
    getDeckSize();
  }, []);

  return (
    <div>
      <Link to={"/pokemoncardgame"}>
        <button onClick={inGameStatusChangeHandler}>Home</button>
      </Link>
      <p>Deck Size:{deckSize}</p>
    </div>
  );
};
export default GamePage;
