import P from 'prop-types'
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

TextInput.propTypes = {
  handleChange: P.func.isRequired,
  searchValue: P.string.isRequired,
}

export default TextInput;