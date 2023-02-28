import DeckSizeChooser from "../shared/DeckSizeChooser/DeckSizeChooser";
import "./MainPage.css";
import StartNewGameButton from "../shared/Buttons/StartNewGameButton";
import { CenteredWrapper, FlexWrapper, PokemonTitle } from "./MainPage.styled";
import PokemonCardsContext from "../../context/PokemonCardsContext";
import React from "react";
import SkipButton from "../shared/Buttons/SkipButton";

const MainPage = () => {
  return (
    <div className="main-page-div">
      <CenteredWrapper>
        <PokemonTitle src="/assets/pokemon-title.png" alt="" />
        <FlexWrapper>
          <DeckSizeChooser />
          <StartNewGameButton />
        </FlexWrapper>
        <SkipButton />
      </CenteredWrapper>
    </div>
  );
};
export default MainPage;
