import { createSlice } from "@reduxjs/toolkit";
import { fetchBooks } from "../../api/booksAPI";

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    wishlist: [],
    loading: false,
  },
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishList: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (book) => book.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
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
