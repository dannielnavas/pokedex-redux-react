import { createSlice } from "@reduxjs/toolkit";

interface Pokemon {
  id: number;
  favorite: boolean;
  // Add other properties of Pokemon here
}

const initialState = {
  pokemons: [] as Pokemon[],
};

export const pokemonSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      // 'data/setPokemon'
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemon = state.pokemons.findIndex(
        (pokemon) => pokemon.id === action.payload.pokemonId
      );

      if (currentPokemon >= 0) {
        const isFavorite = state.pokemons[currentPokemon].favorite;
        state.pokemons[currentPokemon].favorite = !isFavorite;
      }
    },
  },
});

export const { setFavorite, setPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
