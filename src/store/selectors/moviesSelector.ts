import { RootState } from "store/store";

export const getMovies = (state: RootState) => state.persistedReducer.movies;
