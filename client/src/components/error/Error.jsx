import styles from './error.module.css';
import { BiMessageSquareError } from 'react-icons/bi';

const Error = ({ errorMessage }) => {
  return (
    <div className={styles.error}>
      <BiMessageSquareError className={styles.errorIcon} /> {errorMessage}
    </div>
  );
};

export default Error;
