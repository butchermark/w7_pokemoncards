export interface IContextData {
  inGameStatus: boolean;
  deckSize: number;
  setInGameStatus: (inGameStatus: boolean) => void;
  setDeckSize: (deckSize: number) => void;
  SaveDeckSize: () => void;
  getDeckSize: () => void;
}
