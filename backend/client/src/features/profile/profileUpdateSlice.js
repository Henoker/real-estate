// profileUpdateSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateProfile = createAsyncThunk(
  "profile/updateProfile",
  async (updatedProfileData, thunkAPI) => {
    try {
      const authUser = thunkAPI.getState().auth.user;

      if (!authUser) {
        return thunkAPI.rejectWithValue("User not authenticated");
      }

      const { access } = authUser;
      const { username } = authUser.profile;

      const config = {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      };

      const { data } = await axios.put(
        `http://localhost:8000/api/v1/profile/update/${username}/`,
        updatedProfileData,
        config
      );

      const updatedProfile = data.updatedProfile; // Assuming your backend returns the updated profile

      return updatedProfile;
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

const initialState = {
  username: "",
  email: "",
  first_name: "",
  last_name: "",
  city: "",
  country: "",
  postal_code: "",
  about_me: "",
  updatedProfile: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

const profileUpdateSlice = createSlice({
  name: "profileUpdate",
  initialState,
  reducers: {
    resetUpdateProfile: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.updatedProfile = action.payload;
        // Don't update individual fields here - let profileSlice handle it
        state.message = "Profile updated successfully!";
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.updatedProfile = null;
      });
  },
});

export const { resetUpdateProfile } = profileUpdateSlice.actions;

export default profileUpdateSlice.reducer;
