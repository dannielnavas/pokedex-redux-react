import { useEffect } from "react";
import { connect } from "react-redux";
import { getPokemon } from "./api/index";
import "./App.css";
import { PokemonList } from "./components/PokemonList";
import { Search } from "./components/Search";
import { setPokemons as setPokemonsAction } from "./store/actions/index";

function App({ pokemons, setPokemons }) {
  // const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    try {
      const fetchPokemon = async () => {
        const data = await getPokemon();
        setPokemons(data);
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
      <PokemonList
        pokemons={pokemons.map((pokemon: any, index: number) => ({
          id: index,
          name: pokemon.name,
          image: `https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`,
          type: pokemon.type,
        }))}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
