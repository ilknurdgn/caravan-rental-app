import React, { useEffect, useState } from 'react';
import styles from './rentalHistory.module.css';
import RentalHistorySingleCard from '../../components/rentalHistorySingleCard/RentalHistorySingleCard';
import axios from 'axios';

const RentalHistory = () => {
  const [rentalHistory, setRentalHistory] = useState([]);

  useEffect(() => {
    const getRentalHistory = async () => {
      const res = await axios.get('/rental/getBookings');
      setRentalHistory(res.data);
      console.log(res.data);
    };
    getRentalHistory();
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.navigationPath}>
          <a href='/profile'>Hesap</a>
          <span>&gt;</span>
          <span>Kiralama Geçmişi</span>
        </div>
        <span className={styles.title}>Kiralama Geçmişi</span>
        <div className={styles.RentalHistoryCards}>
          {rentalHistory.map((rental, item) => {
            // console.log(rental.caravanId.gear);

            return <RentalHistorySingleCard item={item} rental={rental} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RentalHistory;
