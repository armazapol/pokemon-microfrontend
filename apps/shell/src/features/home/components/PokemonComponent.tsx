import { useNavigate } from "react-router-dom";
import type { PokemonItem } from "../api/getPokemonAll";
import { URL_IMAGE_BASE } from "../../../../../../packages/shared/config/constants";
import { useVisitsPokemons } from "@/shared/store/useVisitsPokemons";

const PokemonComponent = ({
  data,
  id
}: {
  data: PokemonItem;
  id: string | undefined;
  isCard?: boolean;
}) => {
  const navigate = useNavigate();
  const setVisitPokemon = useVisitsPokemons((state) => state.setVisitPokemon);
  const setLastPokemon = useVisitsPokemons((state) => state.setShowLastPokemon);

  const handleClick = () => {

    const dataVisit = {
      image: `${URL_IMAGE_BASE}/${id}.png`,
      name: data.name,
      visits: 1,
    }

    setVisitPokemon(dataVisit);
    setLastPokemon(dataVisit);

    navigate(`/pokemon/${id}`);
  };

  return (
    <button onClick={handleClick} className="overflow-hidden">
      <li
        key={data.name}
        className={`flex flex-col items-center gap-2 transition-all duration-300 cursor-pointer  hover:scale-105 `}
      >
        <p className="text-xs sm:text-sm text-foreground text-center line-clamp-2">
          {data.name}
        </p>
        <img
          src={`${URL_IMAGE_BASE}/${id}.png`}
          alt={data.name}
          className="w-16 h-16 sm:w-24 sm:h-24 object-contain"
        />
      </li>
    </button>
  );
};

export default PokemonComponent;
