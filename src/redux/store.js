import { configureStore } from '@reduxjs/toolkit';
import pokemonSlice from './reducers/pokemonSlice';
import catalogSlice from './reducers/catalogSlice';

export const store = configureStore({
  reducer: {
    catalog: catalogSlice,
    pokemon: pokemonSlice,
  },
})