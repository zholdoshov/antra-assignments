import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishList } from "../../features/searchSlice";
import "./Wishlist.css";
import { RootState, AppDispatch } from "../../app/store";
import { Book } from "../../types/types";

export default function Wishlist() {
  const wishlist = useSelector((state: RootState) => state.books.wishlist);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="wishlist-container">
      <h3>My reading wishlist ({wishlist.length})</h3>
      <ul>
        {wishlist.map((book: Book) => (
          <div key={book.id} className="wishlist-title-btn">
            <li>{book.volumeInfo.title}</li>
            <button onClick={() => dispatch(removeFromWishList(book.id))}>
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}
