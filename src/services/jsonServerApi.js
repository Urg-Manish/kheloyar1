import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonServerApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => `/exchangeapi/sports/eventtypes`,
    }),
    getseiresMatchsList: builder.mutation({
      query: (body) => ({
        url: 'https://easybet24.us/api/v5/getseiresMatchsList',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetEventsQuery,useGetseiresMatchsListMutation } = jsonServerApi;