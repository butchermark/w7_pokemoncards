import { PokemonCardsProvider } from "./context/PokemonCardsContext";
import PageRouter from "./router/PageRouter";

function App() {
  return (
    <PokemonCardsProvider>
      <PageRouter />
    </PokemonCardsProvider>
  );
}

export default App;
