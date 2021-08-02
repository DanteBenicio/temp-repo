import './styles.css'
import React, { Component } from 'react'

class Button extends Component {
  render() {
    const { loadMorePosts, disabled } = this.props

    return (
      <button 
        className="button" 
        onClick={loadMorePosts}
        disabled={disabled}
        >
          Load More Posts
      </button>
    )
  }
} 

export default Button;