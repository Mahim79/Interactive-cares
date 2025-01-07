import React, { createContext, useState } from "react";

export const FavContext = createContext();

const FavoriteContext = ({ children }) => {
  const [favPokemons, setFavPokemons] = useState(null);

  const handleAddtoRemove = (pokemon, toast) => {
    console.log(pokemon);
    setFavPokemons(favPokemons?.filter((poke) => poke.id !== pokemon.id));
    toast.success("Pokemon has been removed");
  };

  return (
    <FavContext.Provider
      value={[handleAddtoRemove, favPokemons, setFavPokemons]}
    >
      {children}
    </FavContext.Provider>
  );
};

export default FavoriteContext;
