
import { useLogin } from "../hooks/useLogin";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../schemas/loginSchema";
import { Input } from "@/shared/components/ui/components/ui/input";
import { Button } from "@/shared/components/ui/components/ui/button";


export const LoginForm = () => {
  const { handleLogin, isLoading, serverError } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  return (
    <form
      className="flex flex-col gap-4 w-72"
      onSubmit={handleSubmit(handleLogin)}
    >
      {serverError && (
        <div className="p-3 text-sm text-destructive bg-red-50 rounded-md border border-red-200">
          {serverError}
        </div>
      )}
      <div className="space-y-1">
        <Input
          placeholder="Usuario"
          className="md:h-10"
          {...register("username")}
          disabled={isLoading}
        />
        {errors.username && (
          <p className="text-xs text-destructive">{errors.username.message}</p>
        )}
      </div>
      <div className="space-y-1">
        <Input
          placeholder="Contraseña"
          type="password"
          className="md:h-10"
          {...register("password")}
          disabled={isLoading}
        />
        {errors.password && (
          <p className="text-xs text-destructive">{errors.password.message}</p>
        )}
      </div>

      <Button
        size="lg"
        className="cursor-pointer"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Autenticando..." : "Ingresar"}
      </Button>
    </form>
  );
};