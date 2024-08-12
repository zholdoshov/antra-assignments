import React from 'react'
import { MdFavorite } from "react-icons/md";
import { addToWishlist } from '../../features/search/searchSlice';
import { useDispatch, useSelector } from 'react-redux';
const imgNotFound = 'https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg';

export default function BookCard({book}) {
    const {imageLinks, title, authors, publisher, publishedDate, description} = book.volumeInfo;

    const wishlist = useSelector((state) => state.books.wishlist);
    const dispatch = useDispatch();

    const isInWishlist = wishlist.some(item => item.id === book.id);

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

  return <li className='book-item'>{
    <div className='book-info-container'>
        <div className='book-img'>
            <img src={imageLinks ? imageLinks.thumbnail : imgNotFound} alt={title} style={imageLinks ? {} : {width: '130px'}} />
        </div>
        <div className='book-info'>
            <div id='title-and-favicon'>
              <h2>{title}</h2>
              <MdFavorite id='fav-icon' onClick={() => handleAddToWishList(book)} style={{ color: isInWishlist ? 'red' : '' }}/>
            </div>
            <p><span>Authors:</span> {authors ? authors.join(', ') : 'not provided'}</p>
            <p><span>Publisher:</span> {publisher ? publisher : 'not provided'}</p>
            <p><span>Published date:</span> {publishedDate ? publishedDate : 'not provided'}</p>
            <p id='book-desciption'><span>Description:</span> {description ? description : 'not provided'}</p>
        </div>
    </div>
  }
  </li>
}
