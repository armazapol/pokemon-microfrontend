import { API_CONFIG } from "../../../../../../packages/shared/config/constants";

export interface PokemonResponse {
  id: number;
  name: string;
  url: string;
}

export const getPokemonByName = async (name: string): Promise<PokemonResponse> => {
  const res = await fetch(`${API_CONFIG.POKEMON_BASE_URL}/pokemon/${name}`);
  if (!res.ok) throw new Error("Error fetching pokemons");
  return res.json();
};
