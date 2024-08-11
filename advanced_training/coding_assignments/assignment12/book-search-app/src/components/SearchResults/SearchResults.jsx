import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BookCard from './BookCard'
import { addToWishlist } from '../../features/search/searchSlice'

export default function SearchResults() {
  const { books, loading } = useSelector(state => state.books);
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.books.wishlist);

  const handleAddToWishList = (data) => {
    let contains = false;
    wishlist.map((book) => {
      for (const prop in book) {
        if (book[prop] === data.id) {
          contains = true;
        }
      }
    })
    if (!contains) {
      return dispatch(addToWishlist(data));
    } else {
      return null;
    }
  }

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div className='results-container'>
        {books?.map((book) => {
            return <BookCard book={book} key={book.id} onClick={() => handleAddToWishList(book)}/>
        })}
    </div>
  )
}
