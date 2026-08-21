
import { useQuery } from '@tanstack/react-query';
import { API_CONFIG } from '../../../../../../packages/shared/config/constants';
import { getPokemonTypes } from '../api/getPokemonTypes';

export const usePokemonTypesQuery = () => {
  return useQuery({
    queryKey: ['pokemon', 'types'],
    queryFn: () => getPokemonTypes(),
    staleTime: API_CONFIG.STALETIME_DEFAULT,
  });
};