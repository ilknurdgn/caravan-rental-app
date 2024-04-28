import React from 'react';
import styles from './Comment.module.css';
const Comment = () => {
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
          <div className={styles.date}>3 Nisan 2023</div>
        </div>
      </div>
      <div className={styles['user-text']}>
        Çok güzel,temiz bir karavandı. Kesinlikle tavsiye ederim!
      </div>
    </div>
  );
};

export default Comment;
