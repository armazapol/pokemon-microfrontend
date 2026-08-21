import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { usePokemonInfiniteQuery } from '../hooks/usePokemonInfiniteQuery';
import PokemonComponent from './PokemonComponent';

export const PokemonListComponent = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    isFetching,
    isFetchingNextPage,
  } = usePokemonInfiniteQuery();

  const { ref, inView } = useInView({
    threshold: 0, 
    rootMargin: '200px',
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetching && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetching, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <p className="p-4">Cargando Pokémon iniciales...</p>;
  if (isError) return <p className="p-4">Error al obtener la lista de Pokémon.</p>;

  const allPokemons = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <div className="md:p-4 p-0 overflow-y-auto h-[calc(100vh-100px)]">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
        {allPokemons.map((pokemon) => {
          const url = pokemon.url;
          const id = url.split("/").filter(Boolean).pop();
          return (
            <PokemonComponent 
              key={pokemon.name} 
              data={pokemon} 
              id={id} 
              isCard={true} 
            />
          );
        })}
      </div>

      <div ref={ref} className="py-6 text-center">
        {isFetchingNextPage && <p className="text-gray-600">Cargando más Pokémon...</p>}
        {!hasNextPage && (
          <p className="text-gray-400">Has llegado al final de la Pokédex.</p>
        )}
      </div>
    </div>
  );
};