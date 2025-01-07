import React, { createContext, useContext, useEffect, useState } from "react";
import { FavContext } from "./FavoriteContext";

export const PokemonStore = createContext();
const PokemonContext = ({ children }) => {
  const [pokemons, setPokemons] = useState(null);
  const [handleAddtoRemove, favPokemons, setFavPokemons] =
    useContext(FavContext);

  const handleAddtoFav = (pokemon, toast) => {
    if (!favPokemons) {
      setFavPokemons([pokemon]);
    }
    toast.success("Pokemon added to the favorite list");

    if (favPokemons) {
      const check = favPokemons.filter((poke) => poke.id !== pokemon.id);
      setFavPokemons([...check, pokemon]);
    }
  };

  const getPokemons = async () => {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=50";
    const response = await fetch(url);
    const data = await response.json();

    const pokemonsDetails = data.results.map(async (detailsUrl) => {
      const res = await fetch(detailsUrl.url);
      const data = await res.json();

      return data;
    });

    const detailsRes = await Promise.all(pokemonsDetails);
    setPokemons(detailsRes);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <PokemonStore.Provider value={[pokemons, setPokemons, handleAddtoFav]}>
      {children}
    </PokemonStore.Provider>
  );
};

export default PokemonContext;
