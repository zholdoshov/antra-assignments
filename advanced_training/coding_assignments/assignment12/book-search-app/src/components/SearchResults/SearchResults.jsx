import React from 'react'
import BookCard from './BookCard'

export default function SearchResults({books}) {
  return (
    <div className='results-container'>
        {books?.map((book) => {
            return <BookCard book={book} key={book.id}/>
        })}
    </div>
  )
}
