import Caravan from '../../components/caravan/Caravan';
import styles from './caravans.module.css';
import { FaRegHeart } from 'react-icons/fa';
import Pagination from '@mui/material/Pagination';
import { createTheme } from '@mui/material/styles';
import { useContext, useEffect, useRef, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/loading/Loading';
import { Context } from '../../context/Contex';
import { useNavigate } from 'react-router-dom';

const Caravans = () => {
  const [totalCaravans, setTotalCaravans] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [fetch, setFetch] = useState({});
  const [page, setPage] = useState(1);
  const caravansPerPage = 9;
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(Context);

  const [location, setLocation] = useState('');
  const navigate = useNavigate();
  console.log(user);

  useEffect(() => {
    const getSingleCaravan = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `/caravan/?page=${page}&limit=${caravansPerPage}`
        );
        setFetch(res.data);
        console.log(res.data);
        setTotalCaravans(res.data.caravans);
        setLocation();
        window.scrollTo(0, 0);
        setTimeout(() => setIsLoading(false), 1000);
      } catch (error) {
        console.error('Error fetching caravan data: ', error);
        setIsLoading(false);
      }
    };
    getSingleCaravan();
  }, [page]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const addFavoriteCaravans = async (caravanId) => {
    try {
      await axios.post(`/favorites/add`, {
        userId: user._id,
        caravanId: caravanId,
      });
      setFavorites({ ...favorites, [caravanId]: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles['caravans-container']}>
          {/* Sayfa başına karavan sayısı */}
          <span className={styles.result}>
            {fetch.totalCaravans > 20
              ? "20'den fazla karavan"
              : fetch.totalCaravans + ' Karavan Bulundu'}
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
                  onClick={() => {
                    if (user && user._id) {
                      addFavoriteCaravans(caravan._id);
                    } else {
                      // Kullanıcı giriş yapmamışsa login sayfasına yönlendir
                      navigate('/login');
                    }
                  }}
                  className={styles['heartIcon-div']}
                >
                  {user && user._id && favorites[caravan._id] ? (
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
      )}
    </>
  );
};

export default Caravans;
