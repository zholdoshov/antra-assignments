import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Book } from "../types/types";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async (query: string): Promise<Book[]> => {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=20`
    );
    return response.data.items;
  }
);
