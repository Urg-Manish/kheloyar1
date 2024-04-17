import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonServerApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://kheloyaar360.net' }),
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => `/exchangeapi/sports/eventtypes`,
    }),
  }),
});

export const { useGetEventsQuery } = jsonServerApi;