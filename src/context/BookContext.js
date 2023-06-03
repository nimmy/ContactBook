import {createContext, useState} from 'react';
import axios from 'axios';

const BookContext = createContext();

export function Provider({children}) {
    const [books, setBooks] = useState([]);
    

    //FETCHING EXISTING BOOKS FROM THE BOOKS
    const fetchBooks = async () => {
        const response = await axios.get(`http://localhost:3001/books`);
        setBooks(response.data);
     }

    // CREATEING NEW BOOK
    const createBook = async (receiveStr) => {
        if (!receiveStr) return;
        const response = await axios.post(`http://localhost:3001/books`);
        console.log(response.data);
        const updatedBook = [ ...books, {id: response.data.id, title: receiveStr},];
        return setBooks(updatedBook);
    }

    // DELETE A BOOK FROM THE BOOK LIST
    const deleteABook = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const udpatedBook = books.filter(book => book.id !== id);
        setBooks(udpatedBook);
    }

    // EDIT A BOOK FROM THE BOOK LIST
    const editABook = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        const editUpdateBook = books.map(book => book.id === id && { ...book, ...response.data});
        
        return setBooks(editUpdateBook);
    }

    return <BookContext.Provider value={{books, fetchBooks, createBook, deleteABook, editABook}}>
        {children}
    </BookContext.Provider>
}
// export {Provider};
export default BookContext;