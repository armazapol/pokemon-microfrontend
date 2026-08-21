import { LoadingSpinner } from "@/shared/components/LoadingSpinner";
import { useVisitsPokemons } from "@/shared/store/useVisitsPokemons";
import React, { Suspense } from "react";

const PokemonHistoryPage = () => {
  const RemotePokemonHistory = React.lazy(
    () => import("pokemon_history_app/PokemonHistory"),
  );

  const { history } = useVisitsPokemons();


  return (
    <div className="mt-4 ">
      <Suspense fallback={<LoadingSpinner />}>
        <RemotePokemonHistory history={history} />
      </Suspense>
    </div>
  );
};

export default PokemonHistoryPage;
