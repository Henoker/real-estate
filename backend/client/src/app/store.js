import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/apiProperties';
import authReducer from "../features/auth/authSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
