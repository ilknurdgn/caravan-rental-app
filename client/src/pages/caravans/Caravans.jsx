import Caravan from '../../components/caravan/Caravan';
import styles from './caravans.module.css';
import { FaRegHeart } from 'react-icons/fa';
import Pagination from '@mui/material/Pagination';
import { createTheme } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';

const Caravans = () => {
  const [totalCaravans, setTotalCaravans] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [fetch, setFetch] = useState({});
  const [page, setPage] = useState(1);
  const caravansPerPage = 9;

  useEffect(() => {
    const getSingleCaravan = async () => {
      try {
        const res = await axios.get(
          `/caravan/?page=${page}&limit=${caravansPerPage}`
        );
        setFetch(res.data);
        setTotalCaravans(res.data.caravans);
        console.log(res.data);
        console.log('useff:', res.data.currentPage);
      } catch (error) {
        console.error('Error fetching caravan data: ', error);
      }
    };
    getSingleCaravan();
  }, [page]);

  const toggleFavorite = (caravanId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [caravanId]: !prevFavorites[caravanId],
    }));
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div className={styles['caravans-container']}>
      {/* Sayfa başına karavan sayısı */}
      <span className={styles.result}>
        {totalCaravans.length > 20
          ? "20'den fazla karavan"
          : totalCaravans.length + ' karavan bulundu'}
      </span>
      <div className={styles.caravans}>
        {totalCaravans.map((caravan, index) => (
          <div className={styles.iconDiv} key={index}>
            <Link className={styles.links} to={`/caravan/${caravan._id}`}>
              <Caravan
                totalCaravans={totalCaravans}
                setTotalCaravans={setTotalCaravans}
                {...caravan}
              />
            </Link>
            {/* Favori kısmı */}
            <div
              className={styles['heartIcon-div']}
              onClick={() => toggleFavorite(caravan._id)}
            >
              {favorites[caravan._id] ? (
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
        count={fetch.totalPage}
        color='primary'
        variant='outlined'
        size='large'
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Caravans;
