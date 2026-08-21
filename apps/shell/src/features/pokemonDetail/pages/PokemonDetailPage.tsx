import { LoadingSpinner } from "@/shared/components/LoadingSpinner";
import React, { Suspense } from "react";
import { useParams } from "react-router-dom";

const PokemonDetailPage = () => {
  const RemotePokemonDetail = React.lazy(
    () => import("pokemon_detail_app/PokemonDetail"),
  );

  const { id } = useParams();

  return (
    <div className="mt-4 ">
      <Suspense fallback={<LoadingSpinner />}>
        {id && <RemotePokemonDetail pokemonId={id} />}
      </Suspense>
    </div>
  );
};

export default PokemonDetailPage;
