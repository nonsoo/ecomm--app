import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "CartReducer",
  initialState: {
    cart: null,
  },
  reducers: {
    addItem: (state, action) => {
      state.cart = action.payload;
    },
    removeItem: (state) => {
      state.cart = null;
    },
  },
});

export const { addItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
