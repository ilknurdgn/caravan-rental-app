import styles from './blog.module.css';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useEffect } from 'react';

const Blog = ({ blog }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', options);
  };
  return (
    <a
      href={`/blog/${blog._id}`}
      state={blog}
      className={styles['blog-container']}
    >
      <span className={styles.title}>{blog.title}</span>
      <img className={styles.image} src={blog.photo} alt='' />
      <p className={styles['blog-text']}> {blog.desc}</p>
      <div className={styles['down-section']}>
        <span>{formatDate(blog.createdAt)}</span>

        <a href={`/blog/${blog._id}`} className={styles.more}>
          DEVAMI <FaArrowRightLong />
        </a>
      </div>
    </a>
  );
};

export default Blog;
