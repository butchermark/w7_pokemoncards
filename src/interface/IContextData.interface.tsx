export interface IContextData {
  inGameStatus: boolean;
  deckSize: number;
  turns: number;
  newGame: number;
  matchCounter: number;
  highScore: number;
  seed: number;
  usingCards: number;
  setUsingCards: React.Dispatch<React.SetStateAction<number>>;
  setSeed: React.Dispatch<React.SetStateAction<number>>;
  setHighScore: React.Dispatch<React.SetStateAction<number>>;
  setMatchCounter: React.Dispatch<React.SetStateAction<number>>;
  setNewGame: React.Dispatch<React.SetStateAction<number>>;
  setTurns: React.Dispatch<React.SetStateAction<number>>;
  checkIfHighScore: () => void;
  setInGameStatus: (inGameStatus: boolean) => void;
  setDeckSize: (deckSize: number) => void;
  SaveDeckSize: () => void;
  getDeckSize: () => void;
}
