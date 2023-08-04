import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const cryptoApiHeaders = {
//   "X-RapidAPI-Key": "ae40ab90admsh3764cbe080cd3b3p19ac15jsn59ccfc756d52",
//   "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
// };

// const baseUrl = "https://coinranking1.p.rapidapi.com/coins";
const baseUrl = "https://api.coinranking.com/v2";

// const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      // const token = getState().auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      // if (token) {
      //   headers.set("authorization", `Bearer ${token}`);
      headers.set(
        "X-RapidAPI-Key",
        "ae40ab90admsh3764cbe080cd3b3p19ac15jsn59ccfc756d52"
      );
      // headers.set("X-RapidAPI-Host", "coinranking1.p.rapidapi.com");
      // }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      // query: () => "/coins",
      query: () => {
        return {
          url: "/coins",
          // headers: {
          //   // "x-access-token":
          //   //   "coinranking85c9dc2256b264f92c8bfd9c40d7fc807705a98a18abb399",
          //   "X-RapidAPI-Key":
          //     "ae40ab90admsh3764cbe080cd3b3p19ac15jsn59ccfc756d52",
          //   "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
          // },
        };
      },
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
