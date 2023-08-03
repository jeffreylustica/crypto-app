import { configureStore } from "@reduxjs/toolkit";
import isHoverReducer from "../features/isHoverSlice";

import { cryptoApi } from "../services/cryptoApi";

export const store = configureStore({
  reducer: {
    isHover: isHoverReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});
