import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHover: false,
};

export const isHoverSlice = createSlice({
  name: "isHover",
  initialState,
  reducers: {
    mouseEnter: (state) => {
      state.isHover = true;
    },
    mouseLeave: (state) => {
      state.isHover = false;
    },
  },
});

export const { mouseEnter, mouseLeave } = isHoverSlice.actions;
export default isHoverSlice.reducer;
