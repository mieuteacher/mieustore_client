import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./slices/user";
import { cartReducer } from "./slices/cart";
const store = configureStore({
  reducer: {
    userStore: userReducer,
    cartStore: cartReducer
  },
});

export default store;
