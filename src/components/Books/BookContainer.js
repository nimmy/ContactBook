import React, { useEffect, useContext } from 'react';
import './BookStyle.css';
import BookCreate from './BookCreate';
import BookList from './BookList';

import BookContext from '../../context/BookContext';

const BookContainer = () => {
    const { fetchBooks } = useContext(BookContext);
    //FETCHING BOOKS AT ONLOAD OF THE APPLICATIONS
    useEffect(() => {
        fetchBooks();
    }, [fetchBooks]);

  return (
    <div className='app'>
        <h1>Create New Reading List</h1>
        <BookList />
        <BookCreate />
    </div>
  )
}

export default BookContainer