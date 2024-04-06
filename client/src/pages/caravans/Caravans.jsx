import Caravan from '../../components/caravan/Caravan';
import styles from './caravans.module.css';
import { FaRegHeart } from 'react-icons/fa';
const Caravans = () => {
  return (
    <div className={styles['caravans-container']}>
      <span className={styles.result}>100'den fazla karavan</span>
      <div className={styles.caravans}>
        <Caravan />
        <Caravan />
        <Caravan />
        <Caravan />
        <Caravan />
        <Caravan />
        <Caravan />
        <Caravan />
        <Caravan />
      </div>
    </div>
  );
};

export default Caravans;
