import React from "react";
import { Link } from "react-router";
import toast, { Toaster } from "react-hot-toast";

const Card = ({ pokemon, btnValue, onAdd }) => {
  return (
    <div
      key={pokemon.id}
      className="card bg-base-100 w-[350px] h-[400px] m-5 shadow-xl mx-auto overflow-hidden"
    >
      <Toaster position="bottom-right" reverseOrder={false} />

      <figure className="h-[50%]">
        <img
          className="mt-5"
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          width="50%"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{pokemon.name}</h2>
        <p>To see full details, click details button</p>
        <div className="card-actions flex items-center justify-between">
          <Link to={`../pokemon/${pokemon.name}`}>
            <button className="btn btn-primary text-white">View Details</button>
          </Link>

          <button
            onClick={() => onAdd(pokemon, toast)}
            className="btn btn-primary text-white"
          >
            {btnValue}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
