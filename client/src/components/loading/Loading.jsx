import styles from './loading.module.css';
const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <img src='images/logox.png' alt='' />
      <img className={styles.loading} src='/images/loading7.gif' alt='' />{' '}
    </div>
  );
};

export default Loading;
