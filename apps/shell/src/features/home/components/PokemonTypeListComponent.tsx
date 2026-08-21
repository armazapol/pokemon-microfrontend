import { usePokemonTypesQuery } from "../hooks/useGetPokemonTypes";
import type { Result } from "../api/getPokemonTypes";
import PokemonTypeComponent from "./PokemonTypeComponent";

const PokemonTypeListComponent = () => {
  const { data, isLoading, isError } = usePokemonTypesQuery();

  if (isLoading) return <p>Cargando tipos de Pokémon...</p>;
  if (isError) return <p>Error al cargar los tipos de Pokémon.</p>;

  return (
    <div className="flex flex-col gap-4">
      {data?.results.map((type: Result) => (
        <PokemonTypeComponent key={type.name} type={type} />
      ))}
    </div>
  );
};



export default PokemonTypeListComponent;
