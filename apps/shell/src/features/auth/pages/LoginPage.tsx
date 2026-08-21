import { LoginForm } from "../components/LoginForm";
import ThemePokemon from "@/shared/components/ThemePokemon";

const LoginPage = () => {


  return (
    <div className="flex min-h-dvh flex-col items-center justify-center">
      <div className="border border-gray-300 shadow-xl rounded-[10px] w-10/12 md:w-142 py-28 items-center flex flex-col gap-4 bg-primary-foreground">
        <h2 className="md:text-7xl text-4xl">POKEDEX</h2>
          <ThemePokemon  />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
