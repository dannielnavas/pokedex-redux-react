import { createAsyncThunk, createSlice, UnknownAction } from "@reduxjs/toolkit";
import { getPokemon, getPokemonDetails } from "../api";
import { setLoading } from "./uiSlice";

interface Pokemon {
  id: number;
  favorite: boolean;
  // Add other properties of Pokemon here
}

const initialState = {
  pokemons: [] as Pokemon[],
};

export const fetchPokemonWithDetails = createAsyncThunk(
  "data/fetchPokemonsWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true) as unknown as UnknownAction);
    const data = await getPokemon();
    const pokemonsDetailed = await Promise.all(
      data.map((pokemon: { url: string }) => getPokemonDetails(pokemon.url))
    );
    dispatch(setPokemons(pokemonsDetailed) as unknown as UnknownAction);
    dispatch(setLoading(false) as unknown as UnknownAction);
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      // 'data/setPokemon'
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });
      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const { setFavorite, setPokemons } = dataSlice.actions;

export default dataSlice.reducer;
