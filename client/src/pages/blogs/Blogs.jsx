import styles from './blogs.module.css';
import Blog from '../../components/blog/Blog';
import Pagination from '@mui/material/Pagination';
import { createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const blogsPerPage = 4;

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await axios.get(
          `/blog/allBlogs/?page=${page}&limit=${blogsPerPage}`
        );
        setBlogs(res.data.blogs);
        console.log(res.data);
        setTotalPage(res.data.totalPage);
        // console.log(res.data.blogs);
      } catch (err) {
        console.log(err);
      }
    };
    getBlogs();
  }, [page]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

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
        count={totalPage}
        color='primary'
        page={page}
        variant='outlined'
        size='large'
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Blogs;
