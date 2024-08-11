import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/search/searchSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});
