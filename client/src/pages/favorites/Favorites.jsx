import styles from './favorites.module.css';
import Pagination from '@mui/material/Pagination';
import { FaRegHeart } from 'react-icons/fa';
import FavoriteCaravan from '../../components/favoriteCaravan/FavoriteCaravan';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Favorites = () => {
  const containerRef = useRef(null);
  const [page, setPage] = useState(1); //sayfa numarası state'i
  const caravansPerPage = 9; //sayfada gösterilecek kravan sayısı
  const [favoriteCaravans, setFavoriteCaravans] = useState([]);
  const [caravans, setCaravans] = useState([]);
  const userId = '66315255fdacfb81d01bfe0a';

  useEffect(() => {
    const getFavoriteCaravans = async () => {
      const res = await axios.get(
        `/favorites/favoriteCaravansList/${userId}/?page=${page}&limit=${caravansPerPage}`
      );
      setFavoriteCaravans(res.data);
      setCaravans(res.data.caravans);
    };
    getFavoriteCaravans();
  }, [page]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  console.log(caravans);
  return (
    <div className={styles['caravans-container']}>
      <span className={styles.name}>Favoriler</span>
      <div className={styles.caravans}>
        {caravans.map((caravan, index) => (
          <Link className={styles.links} to={`/caravan/${caravan._id}`}>
            <FavoriteCaravan key={index} {...caravan} />
          </Link>
        ))}
      </div>
      <Pagination
        className={styles.pagination}
        count={favoriteCaravans.totalPage}
        color='primary'
        variant='outlined'
        page={page}
        size='large'
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Favorites;
