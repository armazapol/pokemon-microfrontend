import { useQuery } from '@tanstack/react-query';
import { getPokemonByType } from '../api/getPokemonByType';
import { API_CONFIG } from '../../../../packages/shared/config/constants'


export const usePokemonTypeQuery = (type: string) => {
  return useQuery({
    queryKey: ['pokemon', type],
    queryFn: () => getPokemonByType(type),
    staleTime: API_CONFIG.STALETIME_DEFAULT,
  });
};