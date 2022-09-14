import { createSlice } from "@reduxjs/toolkit";
import { IMovieApI } from "../../../types";

interface FavoriteState {
  favorites: IMovieApI[];
}

const initialState: FavoriteState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      const findItem = state.favorites.find((movie) => movie.imdbID === payload.imdbID);
      if (!findItem) {
        state.favorites.push(payload);
      }
    },
    removeFavorite(state, { payload }) {
      state.favorites = state.favorites.filter((f) => f.imdbID !== payload.imdbID);
    },
  },
});

export default favoritesSlice.reducer;

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
