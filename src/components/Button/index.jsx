import P from 'prop-types'
import './styles.css'
import React from 'react'

const Button = ({ loadMorePosts, disabled }) => (
  <button 
    className="button" 
    onClick={loadMorePosts}
    disabled={disabled}
    >
      Load More Posts
  </button>
) 

export default Button;