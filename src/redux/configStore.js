import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from "./counter";
import CartReducer from "./Shopingcart";

const store = configureStore({
  reducer: { CounterReducer, CartReducer },
});

export default store;
