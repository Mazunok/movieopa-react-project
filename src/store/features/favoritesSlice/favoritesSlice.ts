import { createSlice } from "@reduxjs/toolkit";
import { IMovie } from "../../../types";

interface FavoriteState {
  favorites: IMovie[];
}

const initialState: FavoriteState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      state.favorites.push(payload);
    },
    removeFavorite(state, { payload }) {
      state.favorites = state.favorites.filter(
        f => f.imdbID !== payload.imdbID
      );
    },
  },
});

export default favoritesSlice.reducer;

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
