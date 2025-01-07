import React, { useContext } from "react";
import { FavContext } from "../contexts/FavoriteContext";
import Card from "../components/Card";

const Favorites = () => {
  const [handleAddtoRemove, favPokemons, setFavPokemons] =
    useContext(FavContext);
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start justify-center">
      {favPokemons?.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            onAdd={handleAddtoRemove}
            pokemon={pokemon}
            btnValue={"Remove to Favorite"}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
