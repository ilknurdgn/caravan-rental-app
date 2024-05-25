import React from 'react';
import styles from './Comment.module.css';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
const Comment = ({ comment }) => {
  const { score, text, createdAt } = comment;
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= score) {
        stars.push(<FaStar key={i} className={styles.starScore} />);
      } else {
        stars.push(<FaStar key={i} className={styles.starNotScore} />);
      }
    }
    return stars;
  };
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
          <div className={styles.userInfo}>
            <div className={styles.name}>{comment.user}</div>
            <div className={styles.score}>{renderStars()}</div>
          </div>
          <div className={styles.date}>{comment.createdAt}</div>
        </div>
      </div>
      <div className={styles['user-text']}>{comment.text}</div>
    </div>
  );
};

export default Comment;
