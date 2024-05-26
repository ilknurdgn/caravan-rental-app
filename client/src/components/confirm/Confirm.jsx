import styles from './confirm.module.css';
import { GiConfirmed } from 'react-icons/gi';

const Confirm = () => {
  return (
    <div className={styles.confirm}>
      <GiConfirmed className={styles.confirmIcon} /> Ödeme başarıyla
      tamamlanmıştır
    </div>
  );
};

export default Confirm;
