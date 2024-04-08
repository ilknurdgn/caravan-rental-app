import styles from './singleCaravan.module.css';
const SingleCaravan = () => {
  return (
    <div className={styles['single-container']}>
      <div className={styles['caravan-info']}>
        <span className={styles['caravan-title']}>Motocaravan-Antalya</span>
        <div className={styles.icons}>
          <div className={styles.share}>share</div>
          <div className={styles.fav}>ekle</div>
        </div>
      </div>

      <div className={styles['caravan-images']}>
        <img
          className={styles['main-image']}
          src='https://images.unsplash.com/photo-1592351763700-b9b35a6465ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
        />
        <div className={styles['images-container']}>
          <img
            className={styles['images']}
            src='https://images.unsplash.com/photo-1592351763700-b9b35a6465ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
          />
          <img
            className={styles['images']}
            src='https://images.unsplash.com/photo-1592351763700-b9b35a6465ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
          />
          <img
            className={styles['images']}
            src='https://images.unsplash.com/photo-1592351763700-b9b35a6465ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
          />
          <img
            className={styles['images']}
            src='https://images.unsplash.com/photo-1592351763700-b9b35a6465ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default SingleCaravan;
