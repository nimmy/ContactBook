import React, { useEffect, useState, useContext } from 'react';
import './BookStyle.css';
import BookCreate from './BookCreate';
import BookList from './BookList';
import axios from 'axios';
import BookContext from '../../context/BookContext';

const BookContainer = () => {
    const [books, setBooks] = useState([]);
    // console.log(BookContext);
    const {count, fn} = useContext(BookContext);
    // console.log(count, fn);
    //FETCHING EXISTING BOOKS FROM THE BOOKS
    const fetchBooks = async () => {
       const response = await axios.get(`http://localhost:3001/books`);
       setBooks(response.data);
    }

    //FETCHING BOOKS AT ONLOAD OF THE APPLICATIONS
    useEffect(() => {
        fetchBooks();
    }, []);

    // CREATEING NEW BOOK
    const createBook = async (receiveStr) => {
        if (!receiveStr) return;
        const response = await axios.post(`http://localhost:3001/books`);
        console.log(response.data);
        const updatedBook = [ ...books, {id: response.data.id, title: receiveStr},];
        return setBooks(updatedBook);
    }

    const deleteABook = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const udpatedBook = books.filter(book => book.id !== id);
        setBooks(udpatedBook);
    }

    const editABook = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        const editUpdateBook = books.map(book => book.id === id && { ...book, ...response.data});
        
        return setBooks(editUpdateBook);
    }
  return (
    <div className='app'>
        <h1>Create New Reading List</h1>
        {count}
        <button onClick={fn}>Incriment Count</button>
        <BookList list={books} deleteABook={deleteABook} editABook={editABook} />
        <BookCreate onCreate={createBook} />
    </div>
  )
}

export default BookContainer