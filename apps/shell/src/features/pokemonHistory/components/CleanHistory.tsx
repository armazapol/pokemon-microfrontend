import { Trash2 } from "lucide-react";
import { Button } from "@/shared/components/ui/components/ui/button";
import { useVisitsPokemons } from "@/shared/store/useVisitsPokemons";

const CleanHistory = () => {
  const { clearHistory } = useVisitsPokemons();
  const { clearLastPokemon } = useVisitsPokemons();

  const handleClick = () => {
    clearHistory();
    clearLastPokemon();
  };

  return (
    <div className="flex justify-center">
      <Button
        onClick={handleClick}
        className=" cursor-pointer text-xl py-2 px-4 h-10"
      >
        <Trash2 />
        Limpiar Historial
      </Button>
    </div>
  );
};

export default CleanHistory;
