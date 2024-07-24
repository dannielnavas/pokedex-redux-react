import { useDispatch } from "react-redux";
import { setFavorite } from "../../slices/dataSlice";
import { StarButton } from "../StarButton";
export interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
  type: string;
  isFavorite: boolean;
}

const PokemonCard = ({ image, name, type, id, isFavorite }: PokemonCardProps) => {
  const dispatch = useDispatch();

  const handleOfFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };
  return (
    <article style={{ width: 330 }}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{type}</p>
      <StarButton isFavorite={isFavorite} onClick={handleOfFavorite} />
    </article>
  );
};

export { PokemonCard };
