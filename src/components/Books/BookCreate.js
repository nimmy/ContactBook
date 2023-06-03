import React, { useContext, useState } from 'react';
import BookContext from '../../context/BookContext';

const BookCreate = () => {
  const [title, setTitle] = useState('');
  const {createBook} = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle('');
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  }
  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form className='container' onSubmit={handleSubmit}>
        <label htmlFor='title'></label>
            <input className='input' type='text' name='title' id='title' value={title} onChange={handleChangeTitle} />
        <button className='button' type='submit'>Create !</button>
      </form>
    </div>
  )
}

export default BookCreate