import { RootState } from "store/store";

export const getTrands = (state: RootState) => state.persistedReducer.trands;
