import P from 'prop-types'
import './styles.css'
import React from 'react'
import PostImages from '../PostImages';

const PostCard = ({ post }) => (
    <div className="post">
      <PostImages post={post}/>

      <div key={post.id} className="post-content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
)

export default PostCard;