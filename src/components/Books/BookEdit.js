import React, { useState } from 'react'

const BookEdit = (props) => {
  const {existingValue, existingId, onSubmitForm} = props;
  const [valueReceived, setValueReceived] = useState(existingValue);

  const handleEdit = (e) => {
    setValueReceived(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setValueReceived(valueReceived);
    onSubmitForm(existingId, valueReceived);
  }
  return (
    <div>
      <form className='book-edit' onSubmit={handleSubmit}>
        <label htmlFor='edittitle'>Edit Title</label>
        <input className='input' name='edittitle' type='text' value={valueReceived} id='edittitle' onChange={handleEdit} />
        <button className='button is-primary' type='submit'>Save</button>
      </form>
    </div>
  )
}

export default BookEdit