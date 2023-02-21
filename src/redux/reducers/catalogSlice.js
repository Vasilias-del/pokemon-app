import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  error: false,
  baseUrl: 'https://pokeapi.co/api/v2/pokemon?limit=10',
  previousUrl: null,
  nextUrl: null,
  page: 1,
  pokemonList: [],
};

export const fetchCatalog = createAsyncThunk(
  'catalog/fetchCatalog',
  async({ url, pageNumber }, { getState }) => {
    const state = getState();
    const response = await axios.get(url || state.catalog.baseUrl);
    return {
      ...response.data,
      page: pageNumber ? state.catalog.page + pageNumber : 1
    };
  }
);

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCatalog.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCatalog.fulfilled, (state, action) => {
        state.pokemonList = action.payload.results;
        state.page = action.payload.page;
        state.previousUrl = action.payload.previous;
        state.nextUrl = action.payload.next;
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchCatalog.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  }
});

export default catalogSlice.reducer;
