import { useGetPokemonByName } from "../hooks/useGetPokemonByName";
import PokemonComponent from "./PokemonComponent";

const PokemonSearchComponent = ({ search }: { search: string }) => {
  const { data, isLoading, error } = useGetPokemonByName(search);

  if (isLoading) return <p>Cargando Pokémon...</p>;
  if (error) return <p>Error al cargar o no se encontró a pokemon.</p>;
  if (!data) return <p>No se encontró el Pokémon.</p>;

  return <PokemonComponent data={data} id={data.id.toString()} isCard={true} />;
};

export default PokemonSearchComponent;
