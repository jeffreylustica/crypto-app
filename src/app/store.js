import { configureStore } from "@reduxjs/toolkit";
import isHoverReducer from "../features/isHoverSlice";

import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";

export const store = configureStore({
  reducer: {
    isHover: isHoverReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cryptoApi.middleware,
      cryptoNewsApi.middleware
    ),
});
