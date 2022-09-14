import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { movieAPI } from "../../../services/index";
import { IMovieSearch, MovieRequestParams } from "../../../types";

interface TrandsState {
  isLoading: boolean;
  error: string | null;
  results: IMovieSearch;
}

export const fetchTrands = createAsyncThunk<
  IMovieSearch,
  MovieRequestParams,
  { rejectValue: string }
>("trands/fetchTrands", async ({ s }, { rejectWithValue }) => {
  try {
    return await movieAPI.getTrands({ s });
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const initialState: TrandsState = {
  isLoading: false,
  error: null,
  results: { Response: "False", TotalResults: "0", Search: [] },
};

const trandsSlice = createSlice({
  name: "trands",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTrands.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchTrands.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results = payload;
    });
    builder.addCase(fetchTrands.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default trandsSlice.reducer;
