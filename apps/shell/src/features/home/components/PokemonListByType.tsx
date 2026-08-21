import { useGetPokemonByTypes } from '../hooks/useGetPokemonByTypes';
import PokemonComponent from './PokemonComponent';

const PokemonListByType = ({ type }: { type: string }) => {
  const LIMIT_POKEMON = 10; // Limite de Pokémon a mostrar


  const { data, isLoading, isError } = useGetPokemonByTypes(type);

  if (isLoading) return <p>Cargando Pokémon...</p>;
  if (isError) return <p>Error al cargar los Pokémon.</p>;
  if (data?.pokemon.length === 0) return <p>No se encontraron Pokémon de este tipo.</p>;

  return (
    <div className="w-full overflow-x-auto">
      <ul className="flex w-max flex-nowrap gap-2 lg:grid! lg:grid-cols-10! lg:w-full">
        {data?.pokemon.slice(0, LIMIT_POKEMON).map((data) => {
          const url = data.pokemon.url;
          const id = url.split("/").filter(Boolean).pop(); // 
          return (
            <PokemonComponent data={data.pokemon} id={id} key={id} />
          );
        })}
      </ul>
    </div>
  );
};

export default PokemonListByType 