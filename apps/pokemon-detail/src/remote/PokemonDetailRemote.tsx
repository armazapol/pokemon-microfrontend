
import PokemonDetail from "../features/pokemon/components/PokemonDetail";
import { QueryProvider } from "../providers/QueryProvider";



interface PokemonDetailProps {
  pokemonId: string;
}

export default function PokemonDetailRemote({
  pokemonId,
}: PokemonDetailProps) {
  return (
    <QueryProvider >
      <PokemonDetail pokemonId={pokemonId} />
    </QueryProvider>
  );
}