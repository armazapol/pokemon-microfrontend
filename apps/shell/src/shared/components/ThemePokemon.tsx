import { useThemeStore } from "../store/useThemeStore";
import { Label } from "./ui/components/ui/label";
import { Switch } from "./ui/components/ui/switch";

const ThemePokemon = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <button className="flex items-center space-x-2 cursor-pointer">
      <Switch
        id="switch-theme"
        className={`border-2 border-foreground bg-muted shadow-sm `}
        onClick={toggleTheme}
        checked={theme === "light" ? true : false}
        aria-label={
          theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
        }
      />
      <Label htmlFor="switch-theme" className=" md:text-lg cursor-pointer">
        <div>
          <img
            className="object-contain w-16 h-16"
            src={theme === "light" ? "/gastly.png" : "/pikachu.png"}
            alt={theme === "light" ? "gastly" : "pikachu"}
          />
        </div>
      </Label>
    </button>
  );
};

export default ThemePokemon;
