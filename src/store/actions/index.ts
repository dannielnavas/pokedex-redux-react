import { getPokemonDetails } from "../../api";
import { SET_LOADING, SET_POKEMONS } from "./types";

export const setPokemons = (payload: any) => ({
  type: SET_POKEMONS,
  payload,
});
export const getPokemonsWithDetails =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
      pokemons.map((pokemon: any) => getPokemonDetails(pokemon.url))
    );

    dispatch(setPokemons(pokemonsDetailed));
  };

export const setLoading = (payload: any) => ({
  type: SET_LOADING,
  payload,
});
