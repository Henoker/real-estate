import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/apiProperties';
import authReducer from "../features/auth/authSlice";
import profileReducer from "../features/auth/profileSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
