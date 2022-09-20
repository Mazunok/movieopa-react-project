import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { movieAPI } from "../../../services/index";
import { IMovieSearch, MovieRequestParams } from "../../../types";

interface MoviesState {
  isLoading: boolean;
  error: string | null;
  results: IMovieSearch;
}

export const fetchMovies = createAsyncThunk<
  IMovieSearch,
  MovieRequestParams,
  { rejectValue: string }
>("movies/fetchMovies", async (_, { rejectWithValue }) => {
  try {
    const result = await movieAPI.getAll();
    return result.Search ? result : rejectWithValue(result.Error);
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const initialState: MoviesState = {
  isLoading: false,
  error: null,
  results: { Response: "False", totalResults: "10", Search: [], Error: "" },
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    cleanStore: (state) => {
      state.results = { Response: "False", totalResults: "0", Search: [], Error: "" };
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results = payload;
    });
    builder.addCase(fetchMovies.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export const { cleanStore } = moviesSlice.actions;

export default moviesSlice.reducer;
