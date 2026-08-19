import {API_CONFIG} from '../../../../packages/shared/config/constants'

export interface Pokemon {
  id: number;
  name: string;
}

export const getPokemonByType = async (type: string): Promise<Pokemon> => {
  const res = await fetch(`${API_CONFIG.POKEMON_BASE_URL}/type/${type}`);
  if (!res.ok) throw new Error("Error fetching type pokemon");
  return res.json();
}; 