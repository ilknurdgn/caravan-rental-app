import React, { useEffect, useState } from 'react';
import styles from './rentalHistory.module.css';
import RentalHistorySingleCard from '../../components/rentalHistorySingleCard/RentalHistorySingleCard';
import axios from 'axios';

const pageInfos = [
  {
    id: 1,
    title: 'Motokaravan',
    peopleNumber: '4 kişilik',
    year: '2023 Yapımı',
    day: '4 gün',
    date: '22-27 Nisan',
    star: '4.97',
    price: '12000₺',
    state: 'ongoing',
  },
  {
    id: 2,
    title: 'Çekme Karavan',
    peopleNumber: '3 kişilik',
    year: '2024 Yapımı',
    day: '5 gün',
    date: '22-27 Mayıs',
    star: '4.95',
    price: '15000₺',
    state: 'completed',
  },
  {
    id: 3,
    title: 'Karavan',
    peopleNumber: '8 kişilik',
    year: '2022 Yapımı',
    day: '3 gün',
    date: '10-20 Nisan',
    star: '4.97',
    price: '9000₺',
    state: 'cancelled',
  },
  {
    id: 4,
    title: 'Motokaravan',
    peopleNumber: '6 kişilik',
    year: '2020 Yapımı',
    day: '4 gün',
    date: '22-27 Nisan',
    star: '4.97',
    price: '12000₺',
    state: 'ongoing',
  },
];

const RentalHistory = () => {
  const [rentalHistory, setRentalHistory] = useState([]);
  const [rentalHistoryInfos, setRentalHistoryInfos] = useState([]);

  useEffect(() => {
    const getRentalHistory = async () => {
      const res = await axios.get('/rental/getBookings');
      setRentalHistory(res.data);
      console.log(res.data);

      //   setRentalHistoryInfos(res.data.caravanId);
      //   console.log(res.data);
      //   console.log(res.data[1].caravanId.type);
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
