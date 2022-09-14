import { RootState } from "store/store";

export const getUser = (state: RootState) => state.persistedReducer.user;
