// apiProperties.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/v1/' }),
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => 'properties/all/',
    }),
    getPropertyDetails: builder.query({
        query: (slug) => `properties/details/${slug}/`,
    }),
    getProfileDetails: builder.query({
      query: () => 'profile/me/',
  }),
  }),
});

export const { useGetPropertiesQuery, useGetPropertyDetailsQuery, useGetProfileDetailsQuery } = api;
