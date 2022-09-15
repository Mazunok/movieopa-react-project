import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  UserCredential,
} from "firebase/auth";
import { transformUserCredential } from "../../../services/mappers";
import { IUser } from "../../../types";

interface UserState {
  isLoading: boolean;
  error: string | null;
  result: IUser | null;
}

const initialState: UserState = {
  isLoading: false,
  error: null,
  result: null,
};

type FormValues = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
  handleModal?: () => void;
};

export const registerUser = createAsyncThunk<UserCredential, FormValues, { rejectValue: string }>(
  "user/registerUser",
  async ({ email, password, name, handleModal }: FormValues, { rejectWithValue }) => {
    const auth = getAuth();
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name });
      }
      if (handleModal) {
        handleModal();
      }
      return res;
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    }
  },
);

export const signInUser = createAsyncThunk<
  UserCredential | null,
  FormValues,
  { rejectValue: string }
>("user/signInUser", async ({ email, password }: FormValues, { rejectWithValue }) => {
  const auth = getAuth();
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user ? res : null;
  } catch (error) {
    const firebaseError = error as FirebaseError;
    return rejectWithValue(firebaseError.code);
  }
});

export const logoutUser = createAsyncThunk<void, undefined, { rejectValue: string }>(
  "user/logoutUser",
  async (_, { rejectWithValue }) => {
    const auth = getAuth();
    try {
      await signOut(auth);
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    }
  },
);

export const forgotPassword = createAsyncThunk<void, FormValues, { rejectValue: string }>(
  "user/forgotPassword",
  async ({ email }, { rejectWithValue }) => {
    const auth = getAuth();
    try {
      return await sendPasswordResetEmail(auth, email);
    } catch (error) {
      const firebaseError = error as FirebaseError;
      return rejectWithValue(firebaseError.code);
    }
  },
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.result = transformUserCredential(payload);
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
    builder.addCase(signInUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(signInUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload) {
        state.result = transformUserCredential(payload);
      } else {
        state.result = null;
      }
    });
    builder.addCase(signInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.isLoading = false;
      state.result = null;
    });
    builder.addCase(logoutUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
    builder.addCase(forgotPassword.pending, (state) => {
      state.isLoading = true;
      state.result = null;
    });
    builder.addCase(forgotPassword.fulfilled, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(forgotPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default userSlice.reducer;
