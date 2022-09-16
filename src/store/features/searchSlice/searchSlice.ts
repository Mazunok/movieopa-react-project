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
      return await movieAPI.getSearch(searchValue, {
        page,
      });
    } catch (error) {
      const axiosError = error as AxiosError;
      return rejectWithValue(axiosError.message);
    }
  },
);

export const initialState: SearchState = {
  isLoading: false,
  error: null,
  results: { Response: "False", TotalResults: "0", Search: [] },
  searchValue: null,
  searchResponse: {
    Response: "True",
    TotalResults: null,
    Search: [],
    page: null,
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
      state.searchResponse.TotalResults = null;
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
      state.searchResponse.TotalResults = payload.TotalResults;
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
