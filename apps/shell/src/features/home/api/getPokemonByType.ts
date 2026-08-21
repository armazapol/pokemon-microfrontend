import {API_CONFIG} from '../../../../../../packages/shared/config/constants'

export interface PokemonByType {
  id: number
  pokemon: Pokemon[]
}

export interface Pokemon {
  pokemon: Pokemon2
  slot: number
}

export interface Pokemon2 {
  name: string
  url: string
}

const LIMIT = 10

export const getPokemonByType = async (type: string): Promise<PokemonByType> => {
  const res = await fetch(`${API_CONFIG.POKEMON_BASE_URL}/type/${type}?limit=${LIMIT}`);
  if (!res.ok) throw new Error("Error fetching type pokemon");
  return res.json();
}; 