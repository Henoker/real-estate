// profileSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { updateProfile } from "./profileUpdateSlice";

const initialState = {
  profile: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const fetchUserProfile = createAsyncThunk(
  "profile/fetchUserProfile",
  async (_, thunkAPI) => {
    try {
      const authUser = thunkAPI.getState().auth.user;

      if (!authUser) {
        // Handle the case where auth.user is null
        // You can dispatch an action or return an appropriate value
        return thunkAPI.rejectWithValue("User not authenticated");
      }

      const { access } = authUser;

      const config = {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      };

      const { data } = await axios.get(
        "http://localhost:8000/api/v1/profile/me/",
        config
      );

      const profileData = data.profile;

      return profileData;
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

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetProfile: (state) => {
      state.profile = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.profile = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.isSuccess = true;
      });
  },
});

export const { resetProfile } = profileSlice.actions;

export default profileSlice.reducer;
