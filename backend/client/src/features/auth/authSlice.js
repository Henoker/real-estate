
// authSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import { fetchUserProfile} from "../profile/profileSlice";

const user = JSON.parse(localStorage.getItem("user"));

// Set the initial state for the authentication slice
const initialState = {
  user: user ? user : null,
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// Async thunk to handle user registration
export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Async thunk to handle user login
export const login = createAsyncThunk("auth/login", async (userData, { dispatch, thunkAPI }) => {
  try {
    const response = await authService.login(userData);
    dispatch(fetchUserProfile()); // Fetch user profile after successful login
    return response;
  } catch (error) {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
});

// Async thunk to handle user logout
export const logout = createAsyncThunk("auth/logout", async () => {
  authService.logout();
});

// Async thunk to handle account activation
export const activate = createAsyncThunk(
  "auth/activate",
  async (userData, thunkAPI) => {
    try {
      return await authService.activate(userData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Create the auth slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(activate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(activate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(activate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

// Export reset action for resetting the state
export const { reset } = authSlice.actions;

// Export the auth reducer
export default authSlice.reducer;
