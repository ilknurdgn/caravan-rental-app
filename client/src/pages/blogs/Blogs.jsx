import styles from './blogs.module.css';
import Blog from '../../components/blog/Blog';
import Pagination from '@mui/material/Pagination';
import { createTheme } from '@mui/material/styles';
import { useState } from 'react';

const Blogs = () => {
  return (
    <div className={styles.blogs}>
      <div className={styles['main-image']}>
        <img className={styles.image} src='/images/blog-1.jpg' alt='' />
        <h1 className={styles.title}>KARAVAN BLOG</h1>
      </div>
      <div className={styles['blogs-section']}>
        <span className={styles.content}>
          VANCA ekibinden ve kullanıcılarımızdan paylaşılan blog yazılarımız.
        </span>
        <div className={styles['blogs-container']}>
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>

      <Pagination
        className={styles.pagination}
        count='10'
        color='primary'
        variant='outlined'
        size='large'
      />
    </div>
  );
};

export default Blogs;
