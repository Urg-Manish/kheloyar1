import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonServerApi = createApi({
  reducerPath: "jsonServerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => `/exchangeapi/sports/eventtypes`,
    }),
    getseiresMatchsList: builder.mutation({
      query: (body) => ({
        url: "https://easybet24.us/api/v5/getseiresMatchsList",
        method: "POST",
        body,
      }),
    }),
    getCricketDetails: builder.mutation({
      query: (body) => ({
        url: "https://easybet24.us/api/v5/get-cricket-detail",
        method: "POST",
        body,
      }),
    }),
    getMatchDetails: builder.query({
      query: (id) =>
        `https://easybet24.us/api/v5/get-match-session?match_id=${id}`,
    }),
    getRoulette: builder.mutation({
      query: (body) => ({
        url: "https://easybet24.us/api/v5/getCasinoListByCategory",
        method: "POST",
        body,
      }),
   
    }),
    userLogin:builder.mutation({
      query:(body)=>({
        url:'https://easybet24.us/api/v5/login ',
        method:'POST',
        body
      })
    })
  }),
});

export const {
  useGetEventsQuery,
  useGetseiresMatchsListMutation,
  useGetCricketDetailsMutation,
  useGetMatchDetailsQuery,
  useGetRouletteMutation,useUserLoginMutation
} = jsonServerApi;
