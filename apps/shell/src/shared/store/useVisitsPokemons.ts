// shared/store/useVisitsPokemons.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface VisitPokemon {
  name: string;
  image: string;
  visits: number;
}

interface VisitsPokemonsState {
  history: VisitPokemon[];
  showLastPokemon: VisitPokemon | null;
  setVisitPokemon: (visit: VisitPokemon) => void;
  clearHistory: () => void;
  setShowLastPokemon: (visit: VisitPokemon) => void;
  clearLastPokemon: () => void;

}

export const useVisitsPokemons = create<VisitsPokemonsState>()(
  persist(
    (set) => ({
      history: [],
      showLastPokemon: null,
      setVisitPokemon: (visit: VisitPokemon) =>
        set((state) => {
          const existingPokemon = state.history.find(
            (p) => p.name === visit.name,
          );

          if (existingPokemon) {
            return {
              history: state.history.map((p) =>
                p.name === visit.name ? { ...p, visits: p.visits + 1 } : p,
              ),
            };
          }

          return {
            history: [...state.history, visit],
          };
        }),

      clearHistory: () =>
        set({
          history: [],
        }),
      setShowLastPokemon(lastPokemon: VisitPokemon) {
        set({
          showLastPokemon: lastPokemon,
        });
      },
      clearLastPokemon: () =>
        set({
          showLastPokemon: null,
        }),
    }),
    {
      name: "visits-pokemons-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        history: state.history,
        showLastPokemon: state.showLastPokemon,
      }),
    },
  ),
);
