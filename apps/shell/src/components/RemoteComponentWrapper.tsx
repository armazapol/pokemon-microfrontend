import React, { Suspense } from "react";

const RemoteHeader = React.lazy(() => import("pokemon_history_app/Header"));
const RemoteButton = React.lazy(() => import("pokemon_history_app/Button"));
const RemotePokemonDetail = React.lazy(() => import("pokemon_detail_app/PokemonDetail"));

const LoadingSpinner = () => (
  <div className="flex justify-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
);

export const RemoteComponentWrapper = () => {
  return (
    <div className="p-4">
      <Suspense fallback={<LoadingSpinner />}>
        <RemoteHeader />
      </Suspense>

      <div className="mt-4">
        <Suspense fallback={<LoadingSpinner />}>
          <RemoteButton
            text="Remote Button"
            onClick={() =>
              alert(
                "Well done you've imported the MF remote component successfully"
              )
            }
          />
        </Suspense>
      </div>
      <div className="mt-4">
        <Suspense fallback={<LoadingSpinner />}>
          <RemotePokemonDetail />
        </Suspense>
      </div>
    </div>
  );
};