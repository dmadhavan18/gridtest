import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  currPage: "DD",
};

const topBarSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeCurrPage: (state, action) => {
      state.currPage = action.payload;
      console.log("executed top bar content change")
    },
  },
});

export const { changeCurrPage } = topBarSlice.actions;

export const store = configureStore({
  reducer: {
    topBar: topBarSlice.reducer,
  },
});
