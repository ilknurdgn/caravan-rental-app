import styles from './favoriteCaravan.module.css';
import { FaHeart } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
const FavoriteCaravan = ({ caravan }) => {
  return (
    <div className={styles.caravan}>
      <div className={styles['caravan-image']}>
        <img src={caravan.photos[0]} alt='' />
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
