import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/CryptoHomePage/cryptoSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
