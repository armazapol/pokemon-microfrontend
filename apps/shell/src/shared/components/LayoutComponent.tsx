import { Link, Outlet, useLocation } from "react-router-dom";
import { useLogout } from "@/features/auth/hooks/useLogout";
import { LogOutIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/components/ui/dropdown-menu";
import { Button } from "./ui/components/ui/button";
import ReturnPage from "./ReturnPage";
import { useAuthStore } from "../store/useAuthStore";
import CleanHistory from "@/features/pokemonHistory/components/CleanHistory";
import { useVisitsPokemons } from "../store/useVisitsPokemons";
import { useEffect } from "react";
import { showLastPokemonToast } from "./notifications/ShowLastPokemonToast";
import ThemePokemon from "./ThemePokemon";
import { useThemeStore } from "../store/useThemeStore";

const LayoutComponent = () => {
  const { pathname } = useLocation();
  const { user } = useAuthStore();
  const { showLastPokemon, history, clearLastPokemon } = useVisitsPokemons();
  const { theme } = useThemeStore();

  useEffect(() => {
    if (showLastPokemon && history.length > 0) {
      showLastPokemonToast(showLastPokemon, theme, () => clearLastPokemon());
    }
  }, []);

  const { handleLogout } = useLogout();
  return (
    <main className="flex flex-col min-h-svh">
      <header className="sticky top-0 z-50 flex justify-between md:px-10 px-5  border-b border-gray-300 shadow-lg bg-primary-foreground items-center">
        <Link to="/home">
          <h3 className="text-2xl text-foreground font-semibold cursor-pointer">
            Pokedex
          </h3>
        </Link>
        <nav className="flex items-center gap-4">
          <ThemePokemon />
          <Link to="/history">
            <Button variant="ghost" className="text-foreground cursor-pointer">
              Ver historial
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button variant="outline" className="cursor-pointer">
                  {user?.name}
                </Button>
              }
            />
            <DropdownMenuContent className="w-40 align-start bg-background">
              <DropdownMenuItem
                onClick={handleLogout}
                variant="destructive"
                className="cursor-pointer"
              >
                <LogOutIcon />
                Cerrar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </header>
      <div className="flex-1 px-4 md:px-14 md:py-14 py-7 max-w-6xl mx-auto w-full">
        <Outlet />
        <div className="flex justify-center gap-4 w-full">
          {pathname !== "/home" && <ReturnPage />}{" "}
          {pathname === "/history" && <CleanHistory />}{" "}
        </div>
      </div>
    </main>
  );
};

export default LayoutComponent;
