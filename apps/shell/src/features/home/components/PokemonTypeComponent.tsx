

import type { Result } from '../api/getPokemonTypes';
import PokemonListByType from './PokemonListByType';

const PokemonTypeComponent = ({ type }: { type: Result }) => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-lg font-bold capitalize">{type.name}</h4>
      <PokemonListByType type={type.name} />
    </div>
  );
};

export default PokemonTypeComponent