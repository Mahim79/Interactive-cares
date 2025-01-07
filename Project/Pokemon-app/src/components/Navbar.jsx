import React, { useContext } from "react";
import { Link, Outlet } from "react-router";
import { SearchData } from "../contexts/SearchContext";
import { FavContext } from "../contexts/FavoriteContext";

const Navbar = () => {
  const [search, setSearch] = useContext(SearchData);
  const [handleFav, favPokemons, setFavPokemons] = useContext(FavContext);

  return (
    <div>
      <div className="navbar bg-base-100 bg-gradient-to-r from-sky-500 to-blue-600 sticky top-0 z-50">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <ul className="menu menu-horizontal px-1">
            <li className="">
              <Link className="text-2xl font-bold" to={"/"}>
                Pokemons
              </Link>
            </li>
            <li className="">
              <Link className="text-2xl font-bold" to={"/favorites"}>
                <div className="indicator">
                  <span class="indicator-item badge badge-gray">
                    {favPokemons ? favPokemons.length : 0}
                  </span>
                  Favorite List
                </div>
              </Link>
            </li>
          </ul>
          <div className="form-control block">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input input-bordered w-full md:w-72"
            />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
