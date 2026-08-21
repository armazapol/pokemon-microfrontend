declare module "pokemon_history_app/PokemonHistory" {
  import type { ComponentType } from "react";

  interface VisitPokemon {
    name: string;
    image: string;
    visits: number;
  }

  interface VisitsPokemonsState {
    history: VisitPokemon[];
  }

  const PokemonHistory: ComponentType<VisitsPokemonsState>;

  export default PokemonHistory;
}
