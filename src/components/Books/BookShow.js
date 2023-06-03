import React, { useContext, useState } from 'react';
import BookEditComp from './BookEdit';
import BookContext from '../../context/BookContext';

const BookShow = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  const {id, title} = props.book;
  const {deleteABook, editABook} = useContext(BookContext);
  // console.log(id, title);
  const handleDelete = () => {
    deleteABook(id);
  }

  const handleEdit = () => {
    setShowEdit(!showEdit);
  }

  const onSubmitForm = (id, newTitle) => {
    setShowEdit(false);
    editABook(id, newTitle);
  }

  let titleHeading = <h3 className='title'>{title}</h3>;
  if (showEdit) {
    titleHeading = <BookEditComp existingId={id} existingValue={title} onSubmitForm={onSubmitForm} />
  }

  return (
    <div className='book-show'>
        <img src={`https://picsum.photos/seed/${id}/300/200`} alt='' />
        {titleHeading}
      <div className='actions'>
      <button className='edit' onClick={handleEdit}>Edit</button>
        <button className='delete' onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default BookShow