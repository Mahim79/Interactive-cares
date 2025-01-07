
import Pokemon from './pages/Pokemon'
import {createBrowserRouter,Outlet,RouterProvider,} from "react-router";
import Navbar from './components/Navbar';
import Favorites from './pages/Favorites';
import PokemonContext from './contexts/PokemonContext';
import SearchContext from './contexts/SearchContext';
import Details from './pages/Details';
import FavoriteContext from './contexts/FavoriteContext';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      children:[
        {
            path:"/",
            element:<Pokemon/>
        },
        {
          path:"pokemon/:pokemonName",
          loader:({params})=> fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`),
          element:<Details/>
        },
        {
            path:"/favorites",
            element:<Favorites/>
        }
      ]
    },
  ]);


function App() {

  return (
    <div>
      <FavoriteContext> 
      <PokemonContext>
        <SearchContext>
            <RouterProvider router={router} />
        </SearchContext>
      </PokemonContext>
      </FavoriteContext>
    </div>
  )
}

export default App
