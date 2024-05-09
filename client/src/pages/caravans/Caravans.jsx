import Caravan from '../../components/caravan/Caravan';
import styles from './caravans.module.css';
import { FaRegHeart } from 'react-icons/fa';
import Pagination from '@mui/material/Pagination';
import { createTheme } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Caravans = () => {
  const containerRef = useRef(null);
  //   const [page, setPage] = useState(1); //sayfa numarası state'i
  //   const limit = 9; //sayfada gösterilecek kravan

  const [totalCaravans, setTotalCaravans] = useState([]); // totalCaravans state'i eklenmiş
  const navigate = useNavigate();
  const { page = 1, limit = 9 } = useParams();
  console.log(page);
  console.log(limit);

  useEffect(() => {
    const getSingleCaravan = async () => {
      try {
        const res = await axios.get('/caravan/');
        console.log(res.data);
        setTotalCaravans(res.data);
      } catch (error) {
        console.error('Error fetching caravan data: ', error);
      }
    };
    getSingleCaravan();
  }, [page, limit]);

  const [isFavorited, setIsFavorited] = useState(false);
  const [clickedCaravanId, setClickedCaravanId] = useState(null);
  const [favorites, setFavorites] = useState({});

  // Favori durumu
  const toggleFavorite = (caravanId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [caravanId]: !prevFavorites[caravanId], // Karavanın favori durumunu tersine çevir
    }));
  };

  const startIndex = (page - 1) * limit;
  const endIndex = Math.min(startIndex + limit, totalCaravans.length);
  const visibleCaravans = totalCaravans.slice(startIndex, endIndex);

  const handlePageChange = (event, newPage) => {
    // setPage(newPage);
    navigate(`/caravans?limit=${limit}&page=${newPage}`);
  };
  return (
    <div ref={containerRef} className={styles['caravans-container']}>
      {/* Sayfa başına karavan sayısı */}
      <span className={styles.result}>
        {totalCaravans.length > 20
          ? "20'dan fazla karavan"
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
              onClick={() => toggleFavorite(caravan._id)} // Karavanın ID'si ile favori durumunu güncelle
            >
              {favorites[caravan._id] ? ( // Favori durumuna göre ikonu değiştir
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
        count={Math.ceil(totalCaravans.length / parseInt(limit))}
        color='primary'
        variant='outlined'
        size='large'
        page={parseInt(page)}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Caravans;
