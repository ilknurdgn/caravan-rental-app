import { Link } from 'react-router-dom';
import styles from './payment.module.css';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const Payment = () => {
  return (
    <div className={`${styles.payContainer} fadeIn`}>
      <div className={styles.pageTitle}>
        <Link to={`/approval}`}>
          <MdKeyboardArrowLeft className={styles.backIcon} />
        </Link>
        <span className={styles.titleText}>Ödeme</span>
      </div>
    </div>
  );
};

export default Payment;
