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

Button.defaultProps = {
  disabled: false,
}

Button.propTypes = {
  loadMorePosts: P.func.isRequired,
  disabled: P.bool,
}

export default Button;