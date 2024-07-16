import axios from "axios";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const fetchPokemon = async (name: string) => {
  const { data } = await pokeApi.get(`/pokemon/${name}`);
  return data;
};

export const getPokemon = async () => {
  const { data } = await pokeApi.get("/pokemon/?limit=150");
  return data.results;
};

export const getPokemonDetails = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};
