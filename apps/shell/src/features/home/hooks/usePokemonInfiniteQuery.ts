import { useInfiniteQuery } from '@tanstack/react-query';
import { getPokemonAll } from '../api/getPokemonAll';

export const usePokemonInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: ['pokemons', 'infinite', ],
    queryFn: ({ pageParam = 0 }) =>
      getPokemonAll({ pageParam: pageParam as number }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages,) => {
      if (!lastPage.next) return undefined;
      return allPages.length;
    },
  });
};
