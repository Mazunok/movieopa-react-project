import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { movieAPI } from "../../../services/index";
import { IMovieSearch, ISearchedMoviesResponse } from "../../../types";

interface SearchState {
  isLoading: boolean;
  error: string | null;
  results: IMovieSearch;
  searchValue: string | null;
  searchResponse: ISearchedMoviesResponse;
}

type SearchParams = {
  searchValue: string | null;
  page: string;
};

export const fetchSearch = createAsyncThunk<IMovieSearch, SearchParams, { rejectValue: string }>(
  "search/fetchSearch",
  async ({ searchValue, page }, { rejectWithValue }) => {
    try {
      const result = await movieAPI.getSearch(searchValue, {
        page,
      });
      return result.Search ? result : rejectWithValue(result.Error);
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.message);
    }
  },
);

export const initialState: SearchState = {
  isLoading: false,
  error: null,
  results: { Response: "False", totalResults: "10", Search: [], Error: "" },
  searchValue: null,
  searchResponse: {
    Response: "True",
    totalResults: null,
    Search: [],
    page: null,
    Error: "",
  },
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearchValue(state, { payload }) {
      state.searchValue = payload;
    },
    removeState: (state) => {
      state.searchValue = null;
      state.isLoading = false;
      state.error = null;
      state.searchResponse.Search = [];
      state.searchResponse.totalResults = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.searchResponse.Search = payload.Search;
      state.searchResponse.totalResults = payload.totalResults;
    });
    builder.addCase(fetchSearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export const { addSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
