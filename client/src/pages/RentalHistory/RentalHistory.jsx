import React from 'react';
import styles from './rentalHistory.module.css';

const RentalHistory = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.navigationPath}>
          <a href='/profile'>Hesap</a>
          <span>&gt;</span>
          <span>Kiralama Geçmişi</span>
        </div>
        <span className={styles.title}>Kiralama Geçmişi</span>
      </div>
    </div>
  );
};

export default RentalHistory;
