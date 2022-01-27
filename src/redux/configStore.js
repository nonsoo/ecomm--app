import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from "./counter";

const store = configureStore({
  reducer: { CounterReducer },
});

export default store;
