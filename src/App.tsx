import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UnknownAction } from "redux";
import { getPokemon } from "./api/index";
import "./App.css";
import { PokemonList } from "./components/PokemonList";
import { Search } from "./components/Search";
import { getPokemonsWithDetails } from "./store/actions";
import { SET_LOADING } from "./store/actions/types";

// { pokemons, setPokemons }
function App() {
  // const [pokemons, setPokemons] = useState([]);
  const pokemons = useSelector((state: any) => state.pokemons);
  const loading = useSelector((state: any) => state.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const fetchPokemon = async () => {
        dispatch({ type: SET_LOADING, payload: true });
        const data = await getPokemon();
        // const pokemonDetailed = await Promise.all(
        //   data.map(async (pokemon: any) => {
        //     const response = await getPokemonDetails(pokemon.url);
        //     return response;
        //   })
        // );
        dispatch(getPokemonsWithDetails(data) as unknown as UnknownAction);
        dispatch({ type: SET_LOADING, payload: false });
      };
      fetchPokemon();
    } catch (error) {
      console.error(error);
    }
  }, []);

  console.log(pokemons);
  return (
    <div className="container">
      <Search />
      {loading ? (
        <article aria-busy="true"></article>
      ) : (
        <PokemonList
          pokemons={pokemons.map((pokemon: any, index: number) => ({
            id: index,
            name: pokemon.name,
            image: pokemon.sprites.front_default,
            type: pokemon.types.map((type: any) => type.type.name).join(", "),
          }))}
        />
      )}
    </div>
  );
}
// TODO: connect to redux
// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemonsAction(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
