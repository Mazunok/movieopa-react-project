import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { movieAPI } from "../../../services/index";
import { IMovieSearch, MovieRequestParams } from "../../../types";

interface SearchState {
  isLoading: boolean;
  error: string | null;
  results: IMovieSearch;
}

export const fetchSearch = createAsyncThunk<
  IMovieSearch,
  MovieRequestParams,
  { rejectValue: string }
>("search/fetchSearch", async ({ s, page }, { rejectWithValue }) => {
  try {
    return await movieAPI.getSearch(s, {
      page,
      s: "",
    });
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const initialState: SearchState = {
  isLoading: false,
  error: null,
  results: { Response: "False", TotalResults: "0", Search: [] },
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results = payload;
    });
    builder.addCase(fetchSearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default searchSlice.reducer;