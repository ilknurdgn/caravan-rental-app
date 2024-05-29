import React, { useEffect, useState } from 'react';
import styles from './comments.module.css';
import Comment from '../comment/Comment';
import { IoMdStar } from 'react-icons/io';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Comments = () => {
  const { id } = useParams(); //url'den id alır
  const [comments, setComments] = useState([]);
  const [totalComments, setTotalComments] = useState([]);
  const [averageScore, setAverageScore] = useState([]);
  const [totalEvaluation, setTotalEvaluation] = useState([]);
  const [visibleComments, setVisibleComments] = useState(4);

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await axios.get(`/comment/getComments/${id}`);
        const score = res.data.averageScore;
        if (isNaN(score)) {
          setAverageScore(0);
        } else {
          setAverageScore(score);
        }
        setComments(res.data.comments);
        setTotalComments(res.data.totalComments);
        setTotalEvaluation(res.data.totalEvaluation);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);

  const loadMoreComments = () => {
    setVisibleComments((prevVisibleComments) => prevVisibleComments + 4);
  };

  const showLessComments = () => {
    setVisibleComments(4);
  };
  return (
    <div className={styles['comments-container']}>
      <div className={styles['total-rating']}>
        <IoMdStar className={styles.icon} />
        <span>
          {averageScore} , {totalEvaluation} değerlendirme · {comments.length}{' '}
          yorum
        </span>
      </div>
      <div className={styles.comments}>
        {comments.slice(0, visibleComments).map((comment, index) => (
          <div key={index} className={styles.commentContainer}>
            <Comment comment={comment} />
          </div>
        ))}
      </div>

      {comments.length > 0 && (
        <div className={styles.showBtn}>
          {visibleComments < comments.length ? (
            <button className={styles.btn} onClick={loadMoreComments}>
              Daha fazla yorum göster
            </button>
          ) : (
            <button className={styles.btn} onClick={showLessComments}>
              Daha az göster
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Comments;
