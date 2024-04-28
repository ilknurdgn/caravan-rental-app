import Caravan from '../../components/caravan/Caravan';
import styles from './caravans.module.css';
import { FaRegHeart } from 'react-icons/fa';
import Pagination from '@mui/material/Pagination';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';

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
      </div>
      <Pagination
        className={styles.pagination}
        count={10}
        color='primary'
        variant='outlined'
        size='large'
      />
    </div>
  );
};

export default Caravans;
