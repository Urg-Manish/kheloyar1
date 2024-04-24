import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonServerApi = createApi({
  reducerPath: "jsonServerApi",
  
  baseQuery: fetchBaseQuery({ baseUrl: ""
 
}

),
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => `/exchangeapi/sports/eventtypes`,
    }),
    getseiresMatchsList: builder.mutation({
      query: (body) => ({
        url: "http://localhost:8787/api/v5/getseiresMatchsList",
        method: "POST",
        body,
      }),
    }),
    getCricketDetails: builder.mutation({
      query: (body) => ({
        url: "http://localhost:8787/api/v5/get-cricket-detail",
        method: "POST",
        body,
      }),
    }),
    getMatchDetails: builder.query({
      query: (id) =>
        `http://localhost:8787/api/v5/get-match-session?match_id=${id}`,
    }),
    getRoulette: builder.mutation({
      query: (body) => ({
        url: "http://localhost:8787/api/v5/getCasinoListByCategory",
        method: "POST",
        body,
      }),
   
    }),
    userLogin:builder.mutation({
      query:(body)=>({
        url:'http://localhost:8787/api/v5/login ',
        method:'POST',
        body
      })
    }),
    getWallet:builder.mutation({
      query:(body)=>({
        url:'http://localhost:8787/api/v5/wallet-balance',
        method:'POST',
        body,
        credentials:'include'
      })
    
      
    })

  }),
});

export const {
  useGetEventsQuery,
  useGetseiresMatchsListMutation,
  useGetCricketDetailsMutation,
  useGetMatchDetailsQuery,
  useGetRouletteMutation,useUserLoginMutation,
  useGetWalletMutation
} = jsonServerApi;
