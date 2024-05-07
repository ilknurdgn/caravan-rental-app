import Caravan from '../../components/caravan/Caravan';
import styles from './caravans.module.css';
import { FaRegHeart } from 'react-icons/fa';
import Pagination from '@mui/material/Pagination';
import { createTheme } from '@mui/material/styles';
import { useRef, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Caravans = () => {
  const containerRef = useRef(null);
  const [page, setPage] = useState(1); //sayfa numarası state'i
  const caravansPerPage = 9; //sayfada gösterilecek kravan sayısı
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
    containerRef.current.scrollIntoView({ behavior: 'smooth' });
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

  const [isFavorited, setIsFavorited] = useState(false);
  const [clickedCaravanId, setClickedCaravanId] = useState(null);

  const toggleFavorite = (caravanId) => {
    setIsFavorited(!isFavorited);
    setClickedCaravanId(caravanId);
  };
  return (
    <div ref={containerRef} className={styles['caravans-container']}>
      <span className={styles.result}>
        {totalCaravans.length > 10
          ? "10'dan fazla karavan"
          : totalCaravans.length + ' karavan bulundu'}
      </span>
      <div className={styles.caravans}>
        {visibleCaravans.map((caravan, index) => (
          <div className={styles.newDiv} key={index}>
            <Link to='/caravan/:id'>
              <Caravan {...caravan} />
            </Link>
            {/* Favori butonu */}
            <div
              className={styles['heartIcon-div']}
              onClick={() => toggleFavorite(caravan.id)}
            >
              {isFavorited && clickedCaravanId === caravan.id ? (
                <FaHeart className={styles.favHeartIcon} />
              ) : (
                <FaRegHeart className={styles.heartIcon} />
              )}
            </div>
          </div>
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
