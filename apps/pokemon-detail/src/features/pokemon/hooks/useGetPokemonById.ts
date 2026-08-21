
import { useQuery } from '@tanstack/react-query';
import { API_CONFIG } from '../../../../../../packages/shared/config/constants';
import { getPokemonById } from '../api/getPokemonById';



export const useGetPokemonById = (id:string) => {
  return useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => getPokemonById(id),
    staleTime: API_CONFIG.STALETIME_DEFAULT,
  });
};