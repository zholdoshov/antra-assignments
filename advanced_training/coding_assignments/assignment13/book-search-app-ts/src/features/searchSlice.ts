import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBooks } from "../api/booksAPI";
import { Book, BookState } from "../types/types";

const initialState: BookState = {
  books: [],
  wishlist: [],
  loading: false,
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Book>) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishList: (state, action: PayloadAction<string>) => {
      state.wishlist = state.wishlist.filter((book) => book.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.books = action.payload;
        state.loading = false;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addToWishlist, removeFromWishList } = bookSlice.actions;
export default bookSlice.reducer;
