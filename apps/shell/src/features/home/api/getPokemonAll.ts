import {API_CONFIG} from '../../../../../../packages/shared/config/constants'

export interface PokemonItem {
  url: string;
  name: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonItem[];
}

const LIMIT = 30


export const getPokemonAll = async ({pageParam}: {pageParam?: number}): Promise<PokemonListResponse> => {
  const offset = pageParam ? pageParam * LIMIT : 0;
  const res = await fetch(
    `${API_CONFIG.POKEMON_BASE_URL}/pokemon?limit=${LIMIT}&offset=${offset}`
  );
  if (!res.ok) throw new Error("Error fetching pokemons");
  return  res.json();
};