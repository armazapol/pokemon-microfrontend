interface VisitPokemon {
  name: string;
  image: string;
  visits: number;
}

interface VisitsPokemonsState {
  history: VisitPokemon[];
}

export default function PokemonHistory({history}: VisitsPokemonsState) {

    if (history.length === 0) return (<h2 style={{marginBottom: "30px"}} className="text-3xl text-center mb-4">
        Aun no ha visualizado pokemones!
    </h2>)

  return (
    <div className="from-slate-50 to-slate-100 p-4 sm:p-6  mb-4 overflow-auto">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
        {history.map((pokemon) => (
          <div key={pokemon.name} className="flex items-center gap-4 p-4 bg-primary-foreground border border-slate-200 rounded-lg shadow-lg hover:border-slate-300 transition-all">
            <img 
              src={pokemon.image} 
              alt={pokemon.name} 
              className="w-20 h-20 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold ">{pokemon.name}</h3>
              <p className="">Visitas: {pokemon.visits}</p>
            </div>
          </div>
        ))}
       
      </div>
    </div>
  );
}