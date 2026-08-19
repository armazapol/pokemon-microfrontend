import {usePokemonTypeQuery} from '../services/usePokemonQuery'
const HomePage = () => {

    const {data, isLoading, isError} = usePokemonTypeQuery("fire")
    console.log(data)

    if (isLoading) return <p>Cargando Pokémon...</p>;
    if (isError) return <p>Error al cargar el Pokémon.</p>;

  return (
    <div className="">
        
    </div>
  )
}

export default HomePage