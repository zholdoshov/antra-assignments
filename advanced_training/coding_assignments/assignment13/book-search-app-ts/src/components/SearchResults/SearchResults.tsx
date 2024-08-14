import React from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import "./SearchResults.css";
import { RootState } from "../../app/store";
import { Book } from "../../types/types";

export default function SearchResults() {
  const { books, loading } = useSelector((state: RootState) => state.books);

  if (loading) {
    return <div className="loader"></div>;
  }

  return (
    <div className="results-container">
      {books?.map((book: Book) => {
        return <BookCard book={book} key={book.id} />;
      })}
    </div>
  );
}
