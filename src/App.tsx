import "./App.css";
import { PokemonList } from "./components/PokemonList";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="container">
      <Search />
      <PokemonList
        pokemons={[
          {
            id: 0,
            name: "Bulbasaur",
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            type: "Grass",
          },
          {
            id: 1,
            name: "Ivysaur",
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            type: "Grass",
          },
          {
            id: 2,
            name: "Venusaur",
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
            type: "Grass",
          },
          {
            id: 3,
            name: "Charmander",
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            type: "Fire",
          },
          {
            id: 4,
            name: "Charmeleon",
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
            type: "Fire",
          },
          {
            id: 5,
            name: "Charizard",
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
            type: "Fire",
          },
          {
            id: 6,
            name: "Squirtle",
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
            type: "Water",
          },
          {
            id: 7,
            name: "Wartortle",
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
            type: "Water",
          },
          {
            id: 8,
            name: "Blastoise",
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
            type: "Water",
          },
        ]}
      />
    </div>
  );
}

export default App;
