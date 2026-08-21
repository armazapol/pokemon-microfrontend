import { useAuthStore } from "@/shared/store/useAuthStore";
import { useVisitsPokemons } from "@/shared/store/useVisitsPokemons";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = useAuthStore((state) => state.logout);
  const cleanHistory = useVisitsPokemons((state) => state.clearHistory);
  const {clearLastPokemon} = useVisitsPokemons();

  const handleLogout = () => {
    logout();
    cleanHistory();
    clearLastPokemon()
    navigate("/login", { replace: true });
  };

  return {
    handleLogout,
  };
};
