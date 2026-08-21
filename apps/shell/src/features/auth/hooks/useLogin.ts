// modules/auth/hooks/useLogin.ts
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/shared/store/useAuthStore';
import { loginApi } from '../api/authApi';
import type { AuthResponse } from '../api/authApi';
import  type { LoginFormData } from '../schemas/loginSchema';

export const useLogin = () => {
  const setSession = useAuthStore((state) => state.setSession);
  const navigate = useNavigate();

  const mutation = useMutation<AuthResponse, Error, LoginFormData>({
    mutationFn: loginApi,
    onSuccess: (data) => {
      // 1. Add Store
      setSession(data.user);
      // 2. Redirect
      navigate('/home', { replace: true });
    },
  });

  return {
    handleLogin: (data: LoginFormData) => mutation.mutate(data),
    isLoading: mutation.isPending,
    serverError: mutation.error?.message || null,
  };
};