import React, { useEffect, useState } from 'react';
import styles from './rentalHistory.module.css';
import RentalHistorySingleCard from '../../components/rentalHistorySingleCard/RentalHistorySingleCard';
import axios from 'axios';

const RentalHistory = () => {
  const [rentalHistory, setRentalHistory] = useState([]);
  const [cancelledReservationId, setCancelledReservationId] = useState(null);

  useEffect(() => {
    const getRentalHistory = async () => {
      try {
        const res = await axios.get('/rental/getBookings');
        setRentalHistory(res.data);
      } catch (error) {
        console.error('Kiralama geçmişi alınamadı:', error);
      }
    };
    getRentalHistory();
  }, [cancelledReservationId]);

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
          {rentalHistory
            .slice()
            .reverse()
            .map((rental, item) => {
              // console.log(rental.caravanId.gear);

              return <RentalHistorySingleCard item={item} rental={rental} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default RentalHistory;
