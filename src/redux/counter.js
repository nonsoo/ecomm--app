import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counterReducer",
  initialState: {
    qty: 1,
  },
  reducers: {
    incrementQty: (state) => {
      state.qty = state.qty + 1;
    },
    decreaseQty: (state) => {
      if (state.qty <= 1) {
        state.qty = 1;
      } else {
        state.qty = state.qty - 1;
      }
    },
  },
});

export const { incrementQty, decreaseQty } = counterSlice.actions;
export default counterSlice.reducer;
