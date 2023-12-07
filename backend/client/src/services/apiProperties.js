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
  }),
});

export const { useGetPropertiesQuery, useGetPropertyDetailsQuery } = api;
