import styles from './caravans.module.css';

const Caravans = () => {
  return (
    <>
      <span>100'den fazla karavan</span>
      <div className={styles['caravans-container']}>
        <div className='caravan'>
          <img src='' alt='' />
        </div>
      </div>
    </>
  );
};

export default Caravans;
