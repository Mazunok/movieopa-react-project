import {
  favoritesSlice,
  movieDetailsSlice,
  moviesSlice,
  searchSlice,
  trandsSlice,
  userSlice,
} from "./features/index";
import { useAppDispatch, useAppSelector } from "./hooks";
import {
  getFavorites,
  getMovies,
  getSearch,
  getTrands,
  getUser,
  getmovieDetails,
} from "./selectors/index";

import { store } from "./store";

export {
  favoritesSlice,
  movieDetailsSlice,
  moviesSlice,
  searchSlice,
  trandsSlice,
  userSlice,
  useAppDispatch,
  useAppSelector,
  getFavorites,
  getMovies,
  getSearch,
  getTrands,
  getUser,
  getmovieDetails,
  store,
};
