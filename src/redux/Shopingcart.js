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
  },
});

export const { addItem } = CartSlice.actions;
export default CartSlice.reducer;
