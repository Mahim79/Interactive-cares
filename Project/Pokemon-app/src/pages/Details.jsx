import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { PokemonStore } from "../contexts/PokemonContext";
import toast, { Toaster } from "react-hot-toast";

const Details = () => {
  const pokemon = useLoaderData();
  const [pokemons, setPokemons, handleAddtoFav] = useContext(PokemonStore);

  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className="w-full lg:flex items-center justify-between mt-10 gap-10">
        <div className="w-full flex-1">
          <img
            className="w-1/2  mx-auto block"
            src={pokemon.sprites.other.dream_world.front_default}
            alt="pokemon"
          />
          <hr />
        </div>
        <div className=" p-5 rounded-lg flex-1 ">
          <div className="my-5">
            <h1 className=" text-center lg:text-start text-3xl">
              Name: <span className="font-bold text-5xl">{pokemon.name}</span>
            </h1>
            <div className="flex gap-2 items-center my-5">
              <h2 className="underline">Abilities:</h2>
              {pokemon.abilities?.map((ability, index) => (
                <p key={index} className="bg-blue-500 rounded-lg p-1">
                  {ability.ability.name}
                </p>
              ))}
            </div>

            <div className="flex gap-2 items-center my-5">
              <h2 className="underline">Types:</h2>
              {pokemon.types?.map((type, index) => (
                <p key={index} className="bg-blue-500 rounded-lg p-1">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>

          <div className="flex gap-2 items-center my-5">
            <h2 className="underline">Weight:</h2>
            <p className="bg-blue-500 rounded-lg p-1">{pokemon.weight}</p>
            <h2 className="underline">Height:</h2>
            <p className="bg-blue-500 rounded-lg p-1">{pokemon.height}</p>
          </div>
          <div className="flex gap-2 items-center">
            <h2 className="underline">Stats:</h2>
            {pokemon.stats?.map((stat, index) => (
              <p key={index} className="bg-blue-500 rounded-lg p-1">
                {stat.base_stat}
              </p>
            ))}
          </div>

          <button
            onClick={() => handleAddtoFav(pokemon, toast)}
            className="btn btn-primary mt-5 text-white"
          >
            Add to favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
