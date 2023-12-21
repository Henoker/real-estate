// apiProperties.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1/' }),
  prepareHeaders: (headers, { getState }) => {
    // Get the JWT token from the Redux state
    
    const accessToken = selectAccessToken(getState());
    console.log(accessToken)

    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => 'properties/all/',
    }),
    getPropertyDetails: builder.query({
        query: (slug) => `properties/details/${slug}/`,
    }),
    getAllAgents: builder.query({
      query: () => 'profile/agents/all/',
    }),
    getProfile: builder.query({
      query: () => 'profile/me/',
    }),
  }),
});

const selectAccessToken = (state) => state.auth.user?.access;


export const { useGetPropertiesQuery, useGetPropertyDetailsQuery, useGetProfileQuery, useGetAllAgentsQuery } = api;
