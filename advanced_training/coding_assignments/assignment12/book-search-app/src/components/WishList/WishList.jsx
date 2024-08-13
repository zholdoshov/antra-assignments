import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishList } from '../../features/search/searchSlice';
import "./Wishlist.css"

export default function Wishlist() {
  const wishlist = useSelector((state) => state.books.wishlist);
  const dispatch = useDispatch();
  return (
    <div className='wishlist-container'>
      <h3>My reading wishlist({wishlist.length})</h3>
      <ul>
        {wishlist.map((book) => {
          return <div key={book.id} className='wishlist-title-btn'>
            <li>{book.volumeInfo.title}</li>
            <button onClick={() =>
              dispatch(removeFromWishList(book.id))
            }>Delete</button>
            </div>
        })}
      </ul>
    </div>
  )
}
