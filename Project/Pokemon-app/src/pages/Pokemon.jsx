import React, { useContext } from "react";
import "../index.css";
import { PokemonStore } from "../contexts/PokemonContext";
import { SearchData } from "../contexts/SearchContext";
import Card from "../components/Card";
import Loading from "../components/Loading";

const Pokemon = () => {
  const [pokemons, setPokemons, handleAddtoFav] = useContext(PokemonStore);
  const [search, setSearch, searchItems] = useContext(SearchData);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 items-start justify-center gap-2">
      {searchItems ? (
        searchItems.map((pokemon) => (
          <Card
            key={pokemon.id}
            pokemon={pokemon}
            onAdd={handleAddtoFav}
            btnValue={"Add to Favorite"}
          />
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Pokemon;
