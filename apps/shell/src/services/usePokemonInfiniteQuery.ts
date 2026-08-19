import { useInfiniteQuery } from '@tanstack/react-query';
import { getPokemonAll } from '../api/getPokemonAll';

const LIMIT = 30;

export const usePokemonInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: ['pokemons', 'infinite'],
    queryFn: ({ pageParam = 0 }) =>
      getPokemonAll({ limit: LIMIT, offset: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      // Si `next` es null en la PokeAPI, ya no hay más páginas
      if (!lastPage.next) return undefined;
      // El siguiente offset será la cantidad total de Pokémon cargados hasta el momento
      return allPages.length * LIMIT;
    },
  });
};