import { RootState } from "store/store";

export const getmovieDetails = (state: RootState) => state.persistedReducer.detailsMovies;
