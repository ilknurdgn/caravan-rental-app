import Caravan from '../../components/caravan/Caravan';
import styles from './caravans.module.css';
import { FaRegHeart } from 'react-icons/fa';
import Pagination from '@mui/material/Pagination';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';

const Caravans = () => {
  const [page, setPage] = useState(1); //sayfa numarası state'i
  const caravansPerPage = 6; //sayfada gösterilecek kravan sayısı
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const totalCaravans = [
    {
      id: 1,
      title: 'Motocaravan - Antalya',
      capacity: '4 kişilik',
      year: 2023,
      nights: '3 gece',
      price: '3.500₺ gece',
      rating: 4.97,
    },
    {
      id: 2,
      title: 'Karavan - İstanbul',
      capacity: '6 kişilik',
      year: 2022,
      nights: '2 gece',
      price: '4.000₺ gece',
      rating: 4.75,
      // Diğer özellikler...
    },
    {
      id: 3,
      title: 'Karavan - İstanbul',
      capacity: '6 kişilik',
      year: 2022,
      nights: '2 gece',
      price: '4.000₺ gece',
      rating: 4.75,
      // Diğer özellikler...
    },
    {
      id: 4,
      title: 'Karavan - İstanbul',
      capacity: '6 kişilik',
      year: 2022,
      nights: '2 gece',
      price: '4.000₺ gece',
      rating: 4.75,
      // Diğer özellikler...
    },
    {
      id: 5,
      title: 'Karavan - İstanbul',
      capacity: '6 kişilik',
      year: 2022,
      nights: '2 gece',
      price: '4.000₺ gece',
      rating: 4.75,
      // Diğer özellikler...
    },
    {
      id: 6,
      title: 'Karavan - İstanbul',
      capacity: '6 kişilik',
      year: 2022,
      nights: '2 gece',
      price: '4.000₺ gece',
      rating: 4.75,
      // Diğer özellikler...
    },
    {
      id: 7,
      title: 'Karavan - İstanbul',
      capacity: '6 kişilik',
      year: 2022,
      nights: '2 gece',
      price: '4.000₺ gece',
      rating: 4.75,
      // Diğer özellikler...
    },
    {
      id: 8,
      title: 'Karavan - İstanbul',
      capacity: '6 kişilik',
      year: 2022,
      nights: '2 gece',
      price: '4.000₺ gece',
      rating: 4.75,
      // Diğer özellikler...
    },
    {
      id: 9,
      title: 'Karavan - İstanbul',
      capacity: '6 kişilik',
      year: 2022,
      nights: '2 gece',
      price: '4.000₺ gece',
      rating: 4.75,
      // Diğer özellikler...
    },
    {
      id: 10,
      title: 'Karavan - İstanbul',
      capacity: '6 kişilik',
      year: 2022,
      nights: '2 gece',
      price: '4.000₺ gece',
      rating: 4.75,
      // Diğer özellikler...
    },
    {
      id: 11,
      title: 'Karavan - İstanbul',
      capacity: '6 kişilik',
      year: 2022,
      nights: '2 gece',
      price: '4.000₺ gece',
      rating: 4.75,
      // Diğer özellikler...
    },
    {
      id: 12,
      title: 'Karavan - İstanbul',
      capacity: '6 kişilik',
      year: 2022,
      nights: '2 gece',
      price: '4.000₺ gece',
      rating: 4.75,
      // Diğer özellikler...
    },
    {
      id: 13,
      title: 'Karavan - İstanbul',
      capacity: '6 kişilik',
      year: 2022,
      nights: '2 gece',
      price: '4.000₺ gece',
      rating: 4.75,
      // Diğer özellikler...
    },
  ]; //toplam karavan verisi
  const startIndex = (page - 1) * caravansPerPage;
  const endIndex = startIndex + caravansPerPage;
  const visibleCaravans = totalCaravans.slice(startIndex, endIndex);
  return (
    <div className={styles['caravans-container']}>
      <span className={styles.result}>100'den fazla karavan</span>
      <div className={styles.caravans}>
        {visibleCaravans.map((caravan, index) => (
          <Caravan key={index} {...caravan} />
        ))}
      </div>
      <Pagination
        className={styles.pagination}
        count={Math.ceil(totalCaravans.length / caravansPerPage)}
        color='primary'
        variant='outlined'
        size='large'
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Caravans;
