import './styles.css'
import React from 'react';

const TextInput = ({ handleChange, searchValue }) => {
  return (
    <input 
      className="text-input"
      type="search"
      onChange={handleChange}
      value={searchValue}
    />
  )
}

export default TextInput;