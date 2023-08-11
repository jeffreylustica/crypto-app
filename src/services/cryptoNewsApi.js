import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-BingApis-SDK", "true");
      headers.set(
        "X-RapidAPI-Key",
        import.meta.env.VITE_REACT_APP_RAPID_API_KEY
      );
      headers.set("X-RapidAPI-Host", "bing-news-search1.p.rapidapi.com");
    },
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
