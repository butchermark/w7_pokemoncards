import React, { useEffect } from "react";
import PokemonCardsContext from "../../context/PokemonCardsContext";
import { DeckSizeChoose } from "./DeckSizeChoose.styled";

const DeckSizeChooser = () => {
  const { SaveDeckSize, setDeckSize, deckSize } =
    React.useContext(PokemonCardsContext);
  const setDeckSizeHandler = (event: any) => {
    setDeckSize(event.target.value);
  };
  useEffect(() => {
    SaveDeckSize();
  }, [deckSize]);
  return (
    <DeckSizeChoose onChange={setDeckSizeHandler}>
      <option value="0">Deck Size</option>
      <option value="2">Deck Size: 2</option>
      <option value="4">Deck Size: 4</option>
      <option value="6">Deck Size: 6</option>
      <option value="8">Deck Size: 8</option>
    </DeckSizeChoose>
  );
};
export default DeckSizeChooser;
