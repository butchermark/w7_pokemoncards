import "./Header.css";
import DeckSizeChooser from "../DeckSizeChooser/DeckSizeChooser";
import StartNewGameButton from "../Buttons/StartNewGameButton";
import HomeButton from "../Buttons/HomeButton";
const Header = () => {
  return (
    <div className="header-div">
      <HomeButton />
      <DeckSizeChooser />
      <StartNewGameButton />
    </div>
  );
};
export default Header;
