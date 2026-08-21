
import { useQuery } from '@tanstack/react-query';
import { API_CONFIG } from '../../../../../../packages/shared/config/constants';
import { getPokemonByType } from '../api/getPokemonByType';

export const useGetPokemonByTypes = (type:string) => {
  return useQuery({
    queryKey: ['pokemon', 'types', type],
    queryFn: () => getPokemonByType(type),
    staleTime: API_CONFIG.STALETIME_DEFAULT,
  });
};