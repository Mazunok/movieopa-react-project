import { RootState } from "store/store";

export const getFavorites = (state: RootState) => state.persistedReducer.favorites;
