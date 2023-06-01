import React from 'react';
import BookShow from './BookShow';

const BookList = ({list, deleteABook, editABook}) => {
  return (
    <div className='book-list'> 
      {list.map(book => <BookShow key={book.id} book={book} deleteABook={deleteABook} editABook={editABook} />)}
    </div>
  )
}

export default BookList