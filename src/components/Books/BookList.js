import React, { useContext } from 'react';
import BookShow from './BookShow';
import BookContext from '../../context/BookContext';

const BookList = () => {
  const {books} = useContext(BookContext);
  return (
    <div className='book-list'> 

      {books.map((book, index) => <BookShow key={index} book={book} />)}
    </div>
  )
}

export default BookList