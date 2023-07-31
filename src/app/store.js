import { configureStore } from "@reduxjs/toolkit";
import isHoverReducer from "../features/isHoverSlice";

export const store = configureStore({
  reducer: {
    isHover: isHoverReducer,
  },
});
