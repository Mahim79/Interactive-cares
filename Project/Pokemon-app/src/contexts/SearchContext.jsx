import React, { createContext, useContext, useState } from "react";
import { PokemonStore } from "./PokemonContext";

export const SearchData = createContext();

const SearchContext = ({ children }) => {
  const [search, setSearch] = useState("");
  const [pokemons, setPokemons] = useContext(PokemonStore);

  const searchItems = pokemons?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SearchData.Provider value={[search, setSearch, searchItems]}>
      {children}
    </SearchData.Provider>
  );
};

export default SearchContext;
