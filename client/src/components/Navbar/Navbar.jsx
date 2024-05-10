import styles from './navbar.module.css';
import { TfiWorld } from 'react-icons/tfi';
import { FaHeart } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <h1>VANCA</h1>
      </div>

      <div>
        <ul className={styles['nav-center']}>
          <li>Nasıl Kiralanır?</li>
          <li>Blog</li>
          <li className={styles.fav}>
            <FaHeart className={styles.heart} />
            Favorilerim
          </li>
        </ul>
      </div>

      <div>
        <ul className={styles['nav-end']}>
          <li className={styles.world}>
            <TfiWorld />
          </li>
          <div className={styles.user}>
            <li>
              <BsThreeDots className={styles.dots} />
            </li>
            <li>
              <FaUserCircle className={styles.circle} />
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
