import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/shared/components/ui/components/ui/dialog";
import { Input } from "@/shared/components/ui/components/ui/input";
import { PokemonListComponent } from "./PokemonListComponent";
import { useState } from "react";
import { useDebounce } from "@/shared/hooks/useDebounce";
import PokemonSearchComponent from "./PokemonSearchComponent";

const SearchComponent = () => {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  return (
    <div className="flex justify-start ">
      <Dialog>
        <div className="flex justify-start ">
          <DialogTrigger
            render={
              <button className="cursor-pointer border-none bg-transparent p-0 w-full">
                <Input
                  type="search"
                  placeholder="Buscar un Pokémon..."
                  className="md:w-120! w-full h-10"
                  readOnly
                  onFocus={(e) => e.currentTarget.blur()}
                />
              </button>
            }
          />
          <DialogContent className="flex flex-col md:px-10 py-18!  md:h-170 max-w-none! lg:w-246 w-9/10 lg:max-h-200 max-h-8/10  h-auto bg-primary-foreground">
            <div className="">
              <Input
                type="search"
                placeholder="Buscar un Pokémon..."
                className="w-full h-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {debouncedSearch ? (
              <PokemonSearchComponent search={debouncedSearch} />
            ) : (
              <PokemonListComponent />
            )}
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
};

export default SearchComponent;
