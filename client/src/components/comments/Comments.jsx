import React from 'react';
import styles from './comments.module.css';
import Comment from '../comment/Comment';
import { IoMdStar } from 'react-icons/io';

const Comments = () => {
  return (
    <div className={styles['comments-container']}>
      <div className={styles['total-rating']}>
        <IoMdStar className={styles.icon} />
        <span>4.83 · 1,800 değerlendirme, 2 yorum</span>
      </div>
      <div className={styles.comments}>
        <Comment />
        <Comment />
      </div>

      <div className={styles.showBtn}>
        <button> 1,800 değerlendirmenin tümünü göster</button>
      </div>
    </div>
  );
};

export default Comments;
