// import { combineReducers } from "redux-immutable";
import { combineReducers } from "redux";
// import { pokemonsReducer } from "./pokemons";
// import { uiReducer } from "./ui";
import { pokemonSlice } from "../../slices/dataSlice";

const rootReducer = combineReducers({
  data: pokemonSlice,
  // ui: uiReducer,
});

export { rootReducer };
