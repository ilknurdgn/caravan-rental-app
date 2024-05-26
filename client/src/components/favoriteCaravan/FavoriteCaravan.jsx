import styles from './favoriteCaravan.module.css';
import { FaHeart } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
const FavoriteCaravan = ({ caravan }) => {
  return (
    <div className={styles.caravan}>
      <div className={styles['caravan-image']}>
        <img
          src='https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
        />
      </div>
      <div className={styles['caravans-info']}>
        <div className={styles['caravans-content']}>
          <h4>
            {caravan.type}- {caravan.location}
          </h4>
          <span>
            {caravan.maxGuests} Kişilik · {caravan.yearOfManufacture} yapımı
          </span>
          <p className={styles.price}>{caravan.dailyPrice}₺ gece</p>
        </div>
        <div className={styles.rating}>
          <FaStar className={styles.starIcon} />
          4.97
        </div>
      </div>
    </div>
  );
};

export default FavoriteCaravan;
