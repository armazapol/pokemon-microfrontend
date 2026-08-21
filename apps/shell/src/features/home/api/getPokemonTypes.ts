import {API_CONFIG} from '../../../../../../packages/shared/config/constants'

export interface PokemonTypes {
  count: number
  next: string
  previous: any
  results: Result[]
}

export interface Result {
  name: string
  url: string
}

export const getPokemonTypes = async (): Promise<PokemonTypes> => {
  const res = await fetch(`${API_CONFIG.POKEMON_BASE_URL}/type`);
  if (!res.ok) throw new Error("Error fetching type pokemon");
  return res.json();
}; 