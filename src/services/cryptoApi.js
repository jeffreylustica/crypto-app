import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoApiHeaders = {
//   "X-RapidAPI-Key": "ae40ab90admsh3764cbe080cd3b3p19ac15jsn59ccfc756d52",
//   "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
// };

const baseUrl = "https://coinranking1.p.rapidapi.com";
// const baseUrl = "https://api.coinranking.com/v2";

// const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "ae40ab90admsh3764cbe080cd3b3p19ac15jsn59ccfc756d52"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
