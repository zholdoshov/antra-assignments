import React from "react";
import { MdFavorite } from "react-icons/md";
import { addToWishlist } from "../../features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import "./BookCard.css";
import { Book } from "../../types/types";
import { RootState, AppDispatch } from "../../app/store";

const imgNotFound =
  "https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg";

export default function BookCard({ book }: { book: Book }) {
  const { imageLinks, title, authors, publisher, publishedDate, description } =
    book.volumeInfo;

  const wishlist = useSelector((state: RootState) => state.books.wishlist);
  const dispatch = useDispatch<AppDispatch>();

  const isInWishlist = wishlist.some((item: Book) => item.id === book.id);

  const handleAddToWishList = (data: Book) => {
    if (!isInWishlist) {
      return dispatch(addToWishlist(data));
    }
  };

  return (
    <li className="book-item">
      <div className="book-info-container">
        <div className="book-img">
          <img
            src={imageLinks ? imageLinks.thumbnail : imgNotFound}
            alt={title}
            style={imageLinks ? {} : { width: "130px" }}
          />
        </div>
        <div className="book-info">
          <div id="title-and-favicon">
            <h2>{title}</h2>
            <MdFavorite
              id="fav-icon"
              onClick={() => handleAddToWishList(book)}
              style={{ color: isInWishlist ? "red" : "" }}
            />
          </div>
          <p>
            <span>Authors:</span>{" "}
            {authors ? authors.join(", ") : "not provided"}
          </p>
          <p>
            <span>Publisher:</span> {publisher ? publisher : "not provided"}
          </p>
          <p>
            <span>Published date:</span>{" "}
            {publishedDate ? publishedDate : "not provided"}
          </p>
          <p id="book-desciption">
            <span>Description:</span>{" "}
            {description ? description : "not provided"}
          </p>
        </div>
      </div>
    </li>
  );
}
