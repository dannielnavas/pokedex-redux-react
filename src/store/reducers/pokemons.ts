/* eslint-disable no-case-declarations */

import { fromJS, get } from "immutable";
import { SET_POKEMONS, SET_POKEMOS_FAVORITES } from "../actions/types";

interface Pokemon {
  favorite: boolean;
  id: number;
  // Add other properties of the Pokemon object
}

const initialState = fromJS({
  pokemons: [] as Pokemon[],
});

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      // return {
      //   ...state,
      //   pokemons: action.payload,
      // };
      return state.setIn(["pokemons"], fromJS(action.payload));
    // case SET_LOADING:
    //   return {
    //     ...state,
    //     loading: action.payload,
    //   };

    case SET_POKEMOS_FAVORITES:
      const pokemons = get(state, "pokemons");
      const currentPokemonIndex = Array.isArray(pokemons)
        ? pokemons.findIndex(
            (pokemon) => pokemon.get("id") === action.payload.pokemonId
          )
        : -1;

      if (currentPokemonIndex !== undefined && currentPokemonIndex < 0) {
        return state;
      }
      return state.setIn(
        ["pokemons", currentPokemonIndex, "favorite"],
        !state.getIn(["pokemons", currentPokemonIndex, "favorite"])
      );
    default:
      return state;
  }
};
