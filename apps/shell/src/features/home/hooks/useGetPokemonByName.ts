
import { useQuery } from '@tanstack/react-query';
import { API_CONFIG } from '../../../../../../packages/shared/config/constants';

import { getPokemonByName } from '../api/getPokemonByName';

export const useGetPokemonByName = (name:string) => {
  return useQuery({
    queryKey: ['pokemon', 'types', name],
    queryFn: () => getPokemonByName(name),
    staleTime: API_CONFIG.STALETIME_DEFAULT,
  });
};