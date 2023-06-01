import React, { useState } from 'react'

const SearchBar = (props) => {
  const [term, setTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(term);
  }

  const handleChange = (e) => {
    setTerm(e.target.value);
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='serach'>Enter Search keyword</label>
        <input type='text' name='search' id='serach' value={term} onChange={handleChange}  />
      </form>
    </div>
  )
}

export default SearchBar