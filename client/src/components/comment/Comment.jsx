import React from 'react';
import styles from './Comment.module.css';
const Comment = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <div className={styles['user-info']}>
        <div>
          <img
            className={styles['user-img']}
            src='https://www.waifu.com.mx/wp-content/uploads/2023/05/Mikasa-Ackerman-Cover.jpg'
            alt=''
          />
        </div>
        <div className={styles.user}>
          <div className={styles.name}>Mikasa</div>
          <div className={styles.date}>{comment.createdAt}</div>
        </div>
      </div>
      <div className={styles['user-text']}>{comment.text}</div>
    </div>
  );
};

export default Comment;
