import styles from './deleteLoading.module.css';
const DeleteLoading = () => {
  return (
    <div className={styles.loadingContainer}>
      <img className={styles.loading} src='/images/delete4.gif' alt='' />
    </div>
  );
};

export default DeleteLoading;
