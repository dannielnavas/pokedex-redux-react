export interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
  type: string;
}

const PokemonCard = ({ image, name, type }: PokemonCardProps) => {
  return (
    <article style={{ width: 330 }}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{type}</p>
    </article>
  );
};

export { PokemonCard };
