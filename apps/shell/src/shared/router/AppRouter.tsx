import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import LoginPage from "@/features/auth/pages/LoginPage";

import LayoutComponent from "@/shared/components/LayoutComponent";
import { RedirectRoute } from "./RedirectRoute";
import HomePage from "@/features/home/pages/HomePage";
import PokemonDetailPage from "@/features/pokemonDetail/pages/PokemonDetailPage";
import PokemonHistoryPage from "@/features/pokemonHistory/pages/PokemonHistoryPage";

const router = createBrowserRouter([
  {
    element: <RedirectRoute />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <LoginPage />,
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <LayoutComponent />,
        children: [
          {
            path: "/home",
            element: <HomePage />,
          },
          {
            path: "/pokemon/:id",
            element: <PokemonDetailPage />,
          },
          {
            path: "/history",
            element: <PokemonHistoryPage />,
          },
        ],
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
