import { Grid } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import PokemonCardsContext from "../../context/PokemonCardsContext";
import PokemonCard from "./PokemonCard";
import { ICards } from "../../interface/ICards.interface";

const cardImages = [
  { src: "./assets/cardImages/card-poke1.png" },
  { src: "./assets/cardImages/card-poke2.png" },
  { src: "./assets/cardImages/card-poke3.png" },
  { src: "./assets/cardImages/card-poke4.png" },
  { src: "./assets/cardImages/card-poke5.png" },
  { src: "./assets/cardImages/card-poke6.png" },
  { src: "./assets/cardImages/card-poke7.png" },
  { src: "./assets/cardImages/card-poke8.png" },
  { src: "./assets/cardImages/card-poke9.png" },
  { src: "./assets/cardImages/card-poke10.png" },
];

const PokemonCardsList = () => {
  const [usingCards, setUsingCards] = useState(0);
  const [cards, setCards] = useState<ICards[]>([]);
  const [choiceOne, setChoiceOne] = useState<ICards>();
  const [choiceTwo, setChoiceTwo] = useState<ICards>();
  const [disabled, setDisabled] = useState(false);

  const {
    deckSize,
    newGame,
    setTurns,
    checkIfHighScore,
    matchCounter,
    setMatchCounter,
    setInGameStatus,
  } = useContext(PokemonCardsContext);

  useEffect(() => {
    switch (deckSize) {
      case 4:
        setUsingCards(4);
        break;
      case 8:
        setUsingCards(8);
        break;
      case 12:
        setUsingCards(12);
        break;
      case 16:
        setUsingCards(16);
        break;
      default:
        break;
    }
    shuffleCards();
  }, [newGame]);

  const shuffleCards = () => {
    const shuffledCards = [
      ...cardImages.slice(0, deckSize / 2),
      ...cardImages.slice(0, deckSize / 2),
    ]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({
        ...card,
        id: Math.random(),
        flipped: false,
        disabled: false,
        matched: false,
        matchingCardId: index,
      }));
    setCards(shuffledCards);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              setMatchCounter(matchCounter + 1);
              if (matchCounter === usingCards / 2) {
                checkIfHighScore();
                setInGameStatus(false);
              }
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(undefined);
    setChoiceTwo(undefined);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  const handleChoice = (card: ICards) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  return (
    <Grid container spacing={6} justifyContent="center">
      {cards.map((card) => (
        <Grid key={card.id} item xs={5} sm={3} md={2} lg={3}>
          <PokemonCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={!disabled}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export default PokemonCardsList;
