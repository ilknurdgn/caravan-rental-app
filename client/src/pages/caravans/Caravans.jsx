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
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  let currentPage = parseInt(queryParams.get('page')) || 1;
  const caravansPerPage = 9;
  const [totalCaravans, setTotalCaravans] = useState([]);
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    const getSingleCaravan = async () => {
      try {
        const res = await axios.get('/caravan/');
        setTotalCaravans(res.data);
      } catch (error) {
        console.error('Error fetching caravan data: ', error);
      }
    };
    getSingleCaravan();

    // Varsayılan olarak sayfa 1 ve URL'de page parametresi yok,  URL'ye page parametresini ekler
    if (!queryParams.has('page') && currentPage === 1) {
      window.history.replaceState(
        {},
        '',
        `${window.location.pathname}?page=${currentPage}&limit=${caravansPerPage}`
      );
    }
  }, []);

  const toggleFavorite = (caravanId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [caravanId]: !prevFavorites[caravanId],
    }));
  };

  const startIndex = (currentPage - 1) * caravansPerPage;
  const endIndex = startIndex + caravansPerPage;
  const visibleCaravans = totalCaravans.slice(startIndex, endIndex);

  const handlePageChange = (event, newPage) => {
    currentPage = newPage;
    window.location.search = `?page=${currentPage}&limit=${caravansPerPage}`;
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
        {visibleCaravans.map((caravan, index) => (
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
        count={Math.ceil(totalCaravans.length / caravansPerPage)}
        color='primary'
        variant='outlined'
        size='large'
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Caravans;
