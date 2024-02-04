import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/apiProperties';
import authReducer from "../features/auth/authSlice";
import profileReducer from "../features/profile/profileSlice";
import profileUpdateReducer from "../features/profile/profileUpdateSlice";
import customerContactReducer from "../features/customer/customerContactSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    profileUpdate: profileUpdateReducer,
    customerContact: customerContactReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
