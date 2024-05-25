import React, { useEffect, useState } from 'react';
import styles from './comments.module.css';
import Comment from '../comment/Comment';
import { IoMdStar } from 'react-icons/io';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Comments = () => {
  const { id } = useParams(); //url'den id alır
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await axios.get(`/comment/getComments/${id}`);
        setComments(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);
  console.log(comments);
  console.log(id);
  return (
    <div className={styles['comments-container']}>
      <div className={styles['total-rating']}>
        <IoMdStar className={styles.icon} />
        <span>4.83 · 1,800 değerlendirme, {comments.length} yorum</span>
      </div>
      <div className={styles.comments}>
        {comments.map((comment, index) => (
          <div key={index} className={styles.commentContainer}>
            <Comment comment={comment} />
          </div>
        ))}
      </div>

      <div className={styles.showBtn}>
        <button> 1,800 değerlendirmenin tümünü göster</button>
      </div>
    </div>
  );
};

export default Comments;
