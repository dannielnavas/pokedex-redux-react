import { PokemonCard, PokemonCardProps } from "../PokemonCard";
import "./PokemonList.css";

interface PokemonListProps {
  pokemons: PokemonCardProps[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <div className="container-list">
      {pokemons?.map((pokemon: PokemonCardProps) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          type={pokemon.type}
          id={pokemon.id}
          isFavorite={pokemon.isFavorite}
        />
      ))}
    </div>
  );
};

export { PokemonList };
