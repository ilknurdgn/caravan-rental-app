import styles from './blogs.module.css';
import Blog from '../../components/blog/Blog';
import Pagination from '@mui/material/Pagination';
import { createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get('/blog/allBlogs');
        setBlogs(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBlogs();
  }, []);
  console.log(blogs);
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
          {blogs.map((blog, index) => (
            <div className={styles.blogsInside} key={index}>
              <Blog blogs={blogs} blog={blog} />
            </div>
          ))}
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
