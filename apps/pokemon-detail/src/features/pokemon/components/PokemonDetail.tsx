import { URL_IMAGE_BASE } from "../../../../../../packages/shared/config/constants";
import { useGetPokemonById } from "../hooks/useGetPokemonById";
import { getTypeColor } from "../../../lib/pokemonTypeColors";

interface PokemonDetailProps {
  pokemonId: string;
}

export default function PokemonDetail({ pokemonId }: PokemonDetailProps) {
  const { data, isLoading, isError } = useGetPokemonById(pokemonId);

  if (isLoading) return <p>Cargando Pokémon...</p>;
  if (isError) return <p>Error al cargar los Pokémon.</p>;
  if (!data) return <p>Pokemon no encontrado</p>;

  const primaryTypeColor = data.types?.[0]?.type?.name
    ? getTypeColor(data.types[0].type.name)
    : { bg: "#3B82F6", text: "#FFFFFF" };

  return (
    <div className="bg-background p-4 sm:p-6">
      <div className="max-w-md w-full rounded-lg shadow-lg overflow-hidden mx-auto border-border border">
        <div
          className="p-6 text-center"
          style={{ backgroundColor: primaryTypeColor.bg }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-white capitalize">
            {data.name}
          </h1>
          <p className=" text-opacity-80 text-sm mt-1">
            ID: #{pokemonId}
          </p>
        </div>

        {/* Image Container */}
        <div className="flex justify-center py-8 px-4 bg-primary-foreground">
          <img
            src={`${URL_IMAGE_BASE}/${pokemonId}.png`}
            alt={data.name}
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-md"
          />
        </div>

        {/* Types Section */}
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-3">Tipos</h2>
          <div className="flex flex-wrap gap-2">
            {data.types?.map((type) => {
              const typeColor = getTypeColor(type.type.name);
              return (
                <span
                  key={type.type.name}
                  className="px-3 py-1 text-sm rounded-full capitalize font-semibold"
                  style={{
                    backgroundColor: typeColor.bg,
                    color: typeColor.text,
                  }}
                >
                  {type.type.name}
                </span>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-100 p-6">
          <h2 className="text-lg font-semibold  mb-4">
            Estadísticas
          </h2>
          <div className="space-y-3">
            {data.stats.slice(0, 3).map((stat) => (
              <div
                key={stat.stat.name}
                className="flex items-center justify-between rounded-md bg-primary-foreground px-4 py-3"
              >
                <span className="font-medium  capitalize">
                  {stat.stat.name}
                </span>
                <span className="font-bold ">
                  {stat.base_stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
