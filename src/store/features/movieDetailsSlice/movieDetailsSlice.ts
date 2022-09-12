import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { movieAPI } from "../../../services/index";
import { IDetailsMovie } from "../../../types";

export interface DetailsState {
  isLoading: boolean;
  error: string | null;
  results: IDetailsMovie;
}

const initialState: DetailsState = {
  isLoading: false,
  error: null,
  results: { Title: "",
    Year: 0,
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards: "",
    Poster: "",
    Metascore: "",
    imdbRating: "",
    imdbVotes: "",
    imdbID: "",
    Type: "",
    DVD: "",
    BoxOffice: "",
    Production: "",
    Website: "",
    Response: "", },
};

export const fetchDetails = createAsyncThunk<
  IDetailsMovie,
  string,
  { rejectValue: string }
>("detailsMovies/fetchDetails", async (id, { rejectWithValue }) => {
  try {
    return await movieAPI.getDetails(id);
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

export const movieDetailsSlice = createSlice({
  name: "detailsMovies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.results = payload;
    });
    builder.addCase(fetchDetails.rejected, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.error = payload;
      }
    });
  },
});

export default movieDetailsSlice.reducer;