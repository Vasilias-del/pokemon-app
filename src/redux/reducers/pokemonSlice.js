import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: false,
  data: null,
  species: null,
};

export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',
  async({ pokemonName }) => {
    const dataResponse = await axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonName);
    const speciesResponse = await axios.get('https://pokeapi.co/api/v2/pokemon-species/' + pokemonName);
    return {
      data: dataResponse.data,
      species: speciesResponse.data
    };
  }
);

const pokemonSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.data = action.payload.data;
        state.species = action.payload.species;
      })
      .addCase(fetchPokemon.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  }
});

export default pokemonSlice.reducer;
