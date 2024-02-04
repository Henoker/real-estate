// customerContactSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const sendEnquiry = createAsyncThunk('customerContact/sendEnquiry', async (data) => {
  const response = await axios.post('http://localhost:8000/api/v1/enquiries/', data);
  return response.data;
});

const customerContactSlice = createSlice({
  name: 'customerContact',
  initialState: {
    status: 'idle',
    error: null,
    successMessage: null,
  },
  reducers: {
    resetStatus: (state) => {
      state.status = 'idle';
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendEnquiry.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(sendEnquiry.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.successMessage = action.payload.success;
      })
      .addCase(sendEnquiry.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { resetStatus } = customerContactSlice.actions;

export default customerContactSlice.reducer;
