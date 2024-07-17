/* eslint-disable no-case-declarations */

import { SET_LOADING, SET_POKEMONS, SET_POKEMOS_FAVORITES } from "../actions/types";

interface Pokemon {
  favorite: boolean;
  id: number;
  // Add other properties of the Pokemon object
}

const initialState = {
  pokemons: [] as Pokemon[],
  loading: false,
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_POKEMOS_FAVORITES:
      const newPokemonList = [...state.pokemons];
      const currentPokemonIndex = newPokemonList.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonId
      );

      if (currentPokemonIndex < 0) {
        return state;
      }
      newPokemonList[currentPokemonIndex].favorite =
        !newPokemonList[currentPokemonIndex].favorite;

      return {
        ...state,
        pokemons: newPokemonList,
      };

    default:
      return state;
  }
};
