import React from 'react';
import styles from './comments.module.css';
import Comment from '../comment/Comment';

const Comments = () => {
  return (
    <div>
      <span>2 değerlendirme</span>
      <div className='comments'>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default Comments;
