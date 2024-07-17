import { getPokemonDetails } from "../../api";
import { SET_LOADING, SET_POKEMONS, SET_POKEMOS_FAVORITES } from "./types";

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

export const setPokemonsFavorites = (payload: any) => ({
  type: SET_POKEMOS_FAVORITES,
  payload,
});
