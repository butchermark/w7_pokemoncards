import { useState } from "react";
import { StyledButton } from "../Buttons/StyledButton";
import "./GameRules.css";

const GameRules = () => {
  const [showRules, setShowRules] = useState(false);

  const handlesetShowRules = () => {
    if (!showRules) {
      setShowRules(true);
    } else {
      setShowRules(false);
    }
  };

  return (
    <div className="rules-div">
      <StyledButton
        className="rules-button"
        onClick={() => handlesetShowRules()}
      >
        Rules
      </StyledButton>
      <p className="rules-p" hidden={!showRules}>
        Welcome fellow Pokémon trainer! Instead of catching all the little
        pocket monsters, your task is to build a game to “match them” all. Your
        task is to match the Pokémon you’ve caught by clicking with the Pokémon
        you’ve caught in the previous round. You can choose the amount of
        Pokémon you’ll have to catch by clicking the "Deck Size" if the task is
        too easy. If you match all the Pokémons, you win! Good luck, and
        remember, don’t let Team Rocket steal your Pokémon!
      </p>
    </div>
  );
};
export default GameRules;
