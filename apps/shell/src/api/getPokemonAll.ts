import {API_CONFIG} from '../../../../packages/shared/config/constants'

export interface PokemonItem {
  id: number;
  name: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonItem[];
}

interface GetPokemonParams {
  limit?: number;
  offset?: number;
}


export const getPokemonAll = async ({
  limit = 30,
  offset = 0,
}: GetPokemonParams = {}): Promise<PokemonListResponse> => {
  const res = await fetch(
    `${API_CONFIG.POKEMON_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
  );
  if (!res.ok) throw new Error("Error fetching pokemons");
  return res.json();
};