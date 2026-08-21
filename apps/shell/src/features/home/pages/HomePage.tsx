import PokemonTypeListComponent from "../components/PokemonTypeListComponent"
import SearchComponent from "../components/SearchComponent"

const HomePage = () => {

  return (
    <div className="flex flex-col gap-10">
        <SearchComponent/>
        <PokemonTypeListComponent />
    </div>
  )
}

export default HomePage