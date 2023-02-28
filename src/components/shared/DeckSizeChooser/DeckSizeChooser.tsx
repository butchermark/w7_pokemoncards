import React, { useEffect } from "react";
import PokemonCardsContext from "../../../context/PokemonCardsContext";
import { DeckSizeChoose } from "./DeckSizeChoose.styled";

const DeckSizeChooser = () => {
  const { SaveDeckSize, setDeckSize, deckSize, inGameStatus } =
    React.useContext(PokemonCardsContext);
  const setDeckSizeHandler = (event: any) => {
    setDeckSize(parseInt(event.target.value));
  };
  useEffect(() => {
    SaveDeckSize();
  }, [deckSize]);
  return (
    <DeckSizeChoose onChange={setDeckSizeHandler}>
      <option value="0">Deck Size</option>
      <option value="4">Deck Size: 4</option>
      <option value="8">Deck Size: 8</option>
      <option value="12">Deck Size: 12</option>
      <option value="16">Deck Size: 16</option>
    </DeckSizeChoose>
  );
};
export default DeckSizeChooser;
