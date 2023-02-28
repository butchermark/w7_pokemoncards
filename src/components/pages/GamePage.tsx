import React, { useEffect, useState } from "react";
import "./GamePage.css";
import PokemonCardsContext from "../../context/PokemonCardsContext";
import PokemonCardsList from "../cards/PokemonCardsList";
import Header from "../shared/Header/Header";
import RestartButton from "../shared/Buttons/RestartButton";

const GamePage = () => {
  const { turns, highScore } = React.useContext(PokemonCardsContext);

  return (
    <div className="game-page-div">
      <Header />
      <div className="game-body-div">
        <div className="lower-header-div">
          <p className="display-scores">Current Tries: {turns}</p>
          <p className="display-scores">Best: {highScore}</p>
          <RestartButton />
        </div>
        <div className="cards-div">
          <PokemonCardsList />
        </div>
      </div>
    </div>
  );
};
export default GamePage;
