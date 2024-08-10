import React from 'react'

export default function BookCard({book, onAdd}) {
    const {imageLinks, title, authors, publisher, publishedDate, description} = book.volumeInfo;
    const imgNotFound = 'https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg';
  return <li className='book-item'>{
    <div className='book-info-container'>
        <div className='book-img'>
            <img src={imageLinks ? imageLinks.thumbnail : imgNotFound} alt='book picture' style={imageLinks ? {} : {width: '130px'}} />
        </div>
        <div className='book-info'>
            <h2>{title}</h2>
            <p><span>Authors:</span> {authors ? authors : 'not provided'}</p>
            <p><span>Publisher:</span> {publisher ? publisher : 'not provided'}</p>
            <p><span>Published date:</span> {publishedDate ? publishedDate : 'not provided'}</p>
            <p id='book-desciption'><span>Description:</span> {description ? description : 'not provided'}</p>
        </div>
    </div>
  }
  </li>
}
