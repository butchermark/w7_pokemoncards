import { Card, PokemonCardWrapper } from "./PokemonCardWrapper.styled";
const PokemonCard = ({ disabled, handleChoice, flipped, card }: any) => {
  const handleClick = () => {
    if (disabled) {
      handleChoice(card);
    }
  };

  return (
    <PokemonCardWrapper>
      {!flipped ? (
        <Card
          src={require("./assets/cardImages/card-back.png")}
          alt="img"
          onClick={handleClick}
        />
      ) : (
        <Card src={require(`${card.src}`)} alt="img" />
      )}
    </PokemonCardWrapper>
  );
};
export default PokemonCard;
