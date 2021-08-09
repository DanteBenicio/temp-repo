import P from 'prop-types'
import './styles.css'
import React from 'react'
import PostCard from '../PostCard'

const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map(post => (
      <PostCard post={post} key={post.id}/>
    ))}
  </div>
)

Posts.defaultProps = {
  posts: []
}

Posts.propTypes = {
  posts: P.array,
}

export default Posts