import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import moviesReducer from "./features/moviesSlice/moviesSlice";
import storage from "redux-persist/lib/storage";
import trandsReduser from "./features/trandsSlice/trandsSlice";
import favoritesReduser from "./features/favoritesSlice/favoritesSlice";
import movieDetailsReducer from "./features/movieDetailsSlice/movieDetailsSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users", "favorites"],
};

const rootReducer = combineReducers({
  movies: moviesReducer,
  favorites: favoritesReduser,
  trands: trandsReduser,
  detailsMovies: movieDetailsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
