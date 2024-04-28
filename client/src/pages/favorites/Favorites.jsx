import styles from './favorites.module.css';
import Pagination from '@mui/material/Pagination';
import { FaRegHeart } from 'react-icons/fa';
import FavoriteCaravan from '../../components/favoriteCaravan/FavoriteCaravan';
const Favorites = () => {
  return (
    <div className={styles['caravans-container']}>
      <span className={styles.name}>Favoriler</span>
      <div className={styles.caravans}>
        <FavoriteCaravan />
        <FavoriteCaravan />
        <FavoriteCaravan />
        <FavoriteCaravan />
        <FavoriteCaravan />
        <FavoriteCaravan />
        <FavoriteCaravan />
        <FavoriteCaravan />
        <FavoriteCaravan />
        <FavoriteCaravan />
        <FavoriteCaravan />
      </div>
      <Pagination
        className={styles.pagination}
        count={10}
        color='primary'
        variant='outlined'
        size='large'
      />
    </div>
  );
};

export default Favorites;
