import { API_CONFIG } from "../../../../../../packages/shared/config/constants";

export interface PokemonResponse {
  id: number;
  name: string;
  url: string;
  types: Type[];
  stats: Stat[];
}

export interface Type {
  slot: number;
  type: Type2;
}

export interface Type2 {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

export interface Stat2 {
  name: string;
  url: string;
}

export const getPokemonById = async (id: string): Promise<PokemonResponse> => {
  const res = await fetch(`${API_CONFIG.POKEMON_BASE_URL}/pokemon/${id}`);
  if (!res.ok) throw new Error("Error fetching pokemons");
  return res.json();
};
