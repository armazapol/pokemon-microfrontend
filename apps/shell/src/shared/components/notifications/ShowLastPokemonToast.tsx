// shared/notifications/showLastPokemonToast.tsx

import { toast } from "react-toastify";
import type { VisitPokemon } from "@/shared/store/useVisitsPokemons";

export function showLastPokemonToast(
  pokemon: VisitPokemon,
  theme: 'light' | 'dark',
  onClose?: () => void
) {

 toast(
    <div className="flex items-center gap-3">
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="h-14 w-14 object-contain sm:h-18 sm:w-18"
      />

      <div className="text-sm">
        <p className="font-bold">
          Último Pokémon visitado
        </p>

        <p className="text-muted-foreground capitalize">
          {pokemon.name}
        </p>
      </div>
    </div>,
    {
      position: "bottom-right",
      autoClose: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: theme,
      onClose,
    },
  );
}