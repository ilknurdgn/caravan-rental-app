import styles from './favorites.module.css';
import Pagination from '@mui/material/Pagination';
import { FaRegHeart } from 'react-icons/fa';
import FavoriteCaravan from '../../components/favoriteCaravan/FavoriteCaravan';
import { useContext, useEffect, useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Contex';
import { FaHeart } from 'react-icons/fa';
import Loading from '../../components/loading/Loading';

const Favorites = () => {
  const containerRef = useRef(null);
  const [page, setPage] = useState(1); //sayfa numarası state'i
  const caravansPerPage = 9; //sayfada gösterilecek kravan sayısı
  const [favoriteCaravans, setFavoriteCaravans] = useState([]);
  const [caravans, setCaravans] = useState([]);
  const { user } = useContext(Context);
  const userId = user._id;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getFavoriteCaravans = async () => {
      const res = await axios.get(
        `/favorites/favoriteCaravansList/${userId}/?page=${page}&limit=${caravansPerPage}`
      );
      setFavoriteCaravans(res.data);
      // console.log(res.data);
      setCaravans(res.data.caravans);
      // console.log(caravans);
      window.scrollTo(0, 0);
      setTimeout(() => setIsLoading(false), 1000);
    };
    getFavoriteCaravans();
  }, [page]);

  const deleteFavoriteCaravan = async (caravanId) => {
    try {
      await axios.delete(`/favorites/delete`, {
        data: { userId: userId, caravanId: caravanId },
      });
      window.location.replace('/favorites');
    } catch (err) {
      console.log(err);
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  console.log(favoriteCaravans);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles['caravans-container']}>
          <span className={styles.name}>
            {favoriteCaravans.totalCaravan} Favori Karavan
          </span>
          <div className={styles.caravans}>
            {caravans.map((caravan, index) => (
              <div className={styles.favoritesContainer}>
                <Link className={styles.links} to={`/caravan/${caravan._id}`}>
                  <FavoriteCaravan
                    key={caravan._id}
                    caravan={caravan}
                    {...caravan}
                  />
                </Link>

                {/* favoriler kısmı */}
                <div
                  className={styles['heartIcon-div']}
                  onClick={() => deleteFavoriteCaravan(caravan._id)}
                >
                  <FaHeart className={styles.favHeartIcon} />
                </div>
              </div>
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
      )}
    </>
  );
};

export default Favorites;
