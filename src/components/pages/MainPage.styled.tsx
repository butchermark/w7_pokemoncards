import styled from "styled-components";

export const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: "url(require('./assets/background-game.png'))";
  background-size: cover;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const PokemonTitle = styled.img`
  width: 280px;
  margin-bottom: 25px;
`;
