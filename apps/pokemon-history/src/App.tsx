import PokemonHistory from "./features/history/components/PokemonHistory";

interface VisitPokemon {
  name: string;
  image: string;
  visits: number;
}

interface VisitsPokemonsState {
  history: VisitPokemon[];
}

function App() {

  const data: VisitsPokemonsState = {
    history: [
      {
        name: "Pikachu",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        visits: 5,
      },
      {
        name: "Charizard",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        visits: 3,
      },
      {
        name: "Blastoise",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        visits: 2,
      },
      {
        name: "Blastoise",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        visits: 2,
      }
    ],
  };

  return (
    <div className="pokemon-history-app">
      <PokemonHistory history={data.history} />
    </div>
  );
}

export default App;
