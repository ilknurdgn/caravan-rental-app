import React from 'react';
import styles from './rentalHistorySingleCard.module.css';
import { LuDot } from 'react-icons/lu';
import { IoIosStar } from 'react-icons/io';

const status = {
  ongoing: 'Devam Ediyor',
  completed: 'Tamamlandı',
  cancelled: 'İptal Edildi',
};

const RentalHistorySingleCard = ({ item }) => {
  return (
    <a href={`/profile/rental-history/${item.id}`}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src='/images/karavan.jpg' alt='' />
        </div>
        <div className={styles.infos}>
          <div className={styles.infoTitle}>{item.title}</div>
          <div className={styles.infoTexts}>
            {item.peopleNumber}
            <LuDot className={styles.dotIcon} />
            {item.year}
          </div>
          <div className={styles.infoTexts}>
            {item.day}
            <LuDot className={styles.dotIcon} />
            {item.date}
          </div>
          <div className={styles.starContainer}>
            <IoIosStar className={styles.starIcon} />
            <div>{item.star}</div>
          </div>
        </div>
        <div className={styles.priceContainer}>
          <div>Toplam:</div>
          <div className={styles.price}>{item.price}</div>
        </div>

        <div className={`${styles.state} ${styles[item.state]}`}>
          {status[`${item.state}`]}
        </div>
      </div>
    </a>
  );
};

export default RentalHistorySingleCard;
