import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoApiHeaders = {
//   "X-RapidAPI-Key": "ae40ab90admsh3764cbe080cd3b3p19ac15jsn59ccfc756d52",
//   "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
// };

const baseUrl = "https://coinranking1.p.rapidapi.com";
// const baseUrl = "https://api.coinranking.com/v2";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "ae40ab90admsh3764cbe080cd3b3p19ac15jsn59ccfc756d52"
      );
      headers.set("X-RapidAPI-Host", "coinranking1.p.rapidapi.com");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => `/coin/${coinId}`,
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        `/coin/${coinId}/history?timePeriod=${timePeriod}`,
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
