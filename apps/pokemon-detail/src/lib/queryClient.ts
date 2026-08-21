// src/lib/queryClient.ts
import {API_CONFIG } from './../../../../packages/shared/config/constants'

import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: API_CONFIG.STALETIME_DEFAULT
    },
  },
});