import  { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { usePokemonInfiniteQuery } from '../services/usePokemonInfiniteQuery';


export const InfinityScroll = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = usePokemonInfiniteQuery();

  const { ref, inView } = useInView({
    threshold: 0.5,  // Se activa cuando el 50% del elemento es visible
    delay: 100,      // (Opcional) Pequeño delay para evitar llamadas dobles accidentales
  });


  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <p className="p-4">Cargando Pokémon iniciales...</p>;
  if (isError) return <p className="p-4">Error al obtener la lista de Pokémon.</p>;

  const allPokemons = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    //crear pokemonCard
    <div className="p-4 max-w-4xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {allPokemons.map((pokemon, index) => (
          <div
            key={`${pokemon.name}-${index}`}
            className="p-4 border rounded-lg shadow-sm capitalize bg-white"
          >
            <p className="font-semibold">{pokemon.name}</p>
          </div>
        ))}
      </div>

      {/* Asignamos la ref directamente otorgada por useInView */}
      <div ref={ref} className="py-6 text-center">
        {isFetchingNextPage && <p className="text-gray-600">Cargando más Pokémon...</p>}
        {!hasNextPage && (
          <p className="text-gray-400">Has llegado al final de la Pokédex.</p>
        )}
      </div>
    </div>
  );
};