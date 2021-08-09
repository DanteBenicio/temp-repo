import P from 'prop-types'
import React from 'react';

const PostImages = ({ post }) => (
  <img src={post.cover} alt={post.title}/>
)

export default PostImages;