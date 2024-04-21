import React from 'react';
import styles from './Comment.module.css';
const Comment = () => {
  return (
    <div className='comment'>
      <div className={styles['user-info']}>
        <div>
          <img
            className={styles['user-img']}
            src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg'
            alt=''
          />
        </div>
        <div className='name'>3 Nisan 2023</div>
        <div></div>
      </div>
      <div className='user-text'></div>
    </div>
  );
};

export default Comment;
