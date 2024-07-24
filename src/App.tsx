import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { UnknownAction } from "redux";
import "./App.css";
import { PokemonList } from "./components/PokemonList";
import { Search } from "./components/Search";
import { fetchPokemonWithDetails } from "./slices/dataSlice";

// { pokemons, setPokemons }
function App() {
  // const [pokemons, setPokemons] = useState([]);
  // const pokemons = useSelector((state: any) =>
  //   state.getIn(["data", "pokemons"], shallowEqual)
  // ).toJS();
  const pokemons = useSelector((state: any) => state.data?.pokemons, shallowEqual);
  // const loading = useSelector((state: any) => state.getIn(["ui", "loading"]));

  const loading = useSelector((state: any) => state.ui.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    // try {
    // const fetchPokemon = async () => {
    //   dispatch({ type: SET_LOADING, payload: true });
    //   const data = await getPokemon();
    // const pokemonDetailed = await Promise.all(
    //   data.map(async (pokemon: any) => {
    //     const response = await getPokemonDetails(pokemon.url);
    //     return response;
    //   })
    // );
    //     dispatch(getPokemonsWithDetails(data) as unknown as UnknownAction);
    //     dispatch({ type: SET_LOADING, payload: false });
    //   };
    //   fetchPokemon();
    // } catch (error) {
    //   console.error(error);
    // }

    // reduc thunk

    dispatch(fetchPokemonWithDetails() as unknown as UnknownAction);
  }, []);

  console.log(pokemons);
  return (
    <div className="container">
      <Search />
      {loading ? (
        <article aria-busy="true"></article>
      ) : (
        <PokemonList
          pokemons={pokemons?.map(
            (
              pokemon: {
                name: string;
                sprites: { front_default: string };
                types: { type: { name: string } }[];
              },
              index: number
            ) => ({
              id: index,
              name: pokemon.name,
              image: pokemon.sprites.front_default,
              type: pokemon.types
                .map((type: { type: { name: string } }) => type.type.name)
                .join(", "),
            })
          )}
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
