import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { movieAPI } from "../../../services";
import { IMovieSearch } from "../../../types";

interface PageState {
  isLoading: boolean;
  error: string | null;
  results: IMovieSearch[];
}

export const fetchPage = createAsyncThunk<
  IMovieSearch[],
  { page: number },
  { rejectValue: string }
>("page/fetchPage", async ({ page }, { rejectWithValue }) => {
  try {
    return await movieAPI.getPages({ page });
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const initialState: PageState = {
  isLoading: false,
  error: null,
  results: [],
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    getNextPage: (state) => {
      state = `${+state + 1}`;
    },
  },
});

export default pageSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState: string = '1';


// export const pageSlice = createSlice({
//   name: "page",
//   initialState,
//   reducers: {
//     getNextPage: (state) => {
//         state = `${+state + 1}`
//     }
//   },
// });

// export default pageSlice.reducer;
