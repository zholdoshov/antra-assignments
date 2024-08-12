import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BookCard from './BookCard'

export default function SearchResults() {
  const { books, loading } = useSelector(state => state.books);

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div className='results-container'>
        {books?.map((book) => {
            return <BookCard book={book} key={book.id} />
        })}
    </div>
  )
}
