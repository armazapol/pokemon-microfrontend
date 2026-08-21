declare module "pokemon_detail_app/PokemonDetail" {
  import type { ComponentType } from "react";

  interface PokemonDetailProps {
    pokemonId: string;
  }

  const PokemonDetail: ComponentType<PokemonDetailProps>;

  export default PokemonDetail;
}

