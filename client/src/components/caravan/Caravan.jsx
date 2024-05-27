import { useEffect, useState } from 'react';
import styles from './caravan.module.css';
import { FaRegHeart } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';

const Caravan = (totalCaravans) => {
  const [averageScore, setAverageScore] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await axios.get(
          `/comment/getComments/${totalCaravans._id}`
        );
        const score = res.data.averageScore;
        setAverageScore(score);
        console.log(score);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);
  return (
    <div className={styles.caravan}>
      <div className={styles['caravan-image']}>
        <img
          src='https://images.unsplash.com/photo-1592351763700-b9b35a6465ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
        />
      </div>
      <div className={styles['caravans-info']}>
        <div className={styles['caravans-content']}>
          <h4>
            {totalCaravans.type}- {totalCaravans.location}
          </h4>
          <span>
            {totalCaravans.maxGuests} kişilik ·{' '}
            {totalCaravans.yearOfManufacture} yapım
          </span>
          <span>3 gece · 19-23 Nis</span>
          <p className={styles.price}> {totalCaravans.dailyPrice}₺ gün</p>
        </div>
        <div className={styles.rating}>
          <FaStar className={styles.starIcon} /> {averageScore}
        </div>
      </div>
    </div>
  );
};

export default Caravan;
