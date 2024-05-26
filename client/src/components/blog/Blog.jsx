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
    <Link
      to={`/blog/${blog._id}`}
      state={blog}
      className={styles['blog-container']}
    >
      <span className={styles.title}>{blog.title}</span>
      <img
        className={styles.image}
        src='https://plus.unsplash.com/premium_photo-1681884705028-fe0dc759406a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt=''
      />
      <p className={styles['blog-text']}> {blog.desc}</p>
      <div className={styles['down-section']}>
        <span>{formatDate(blog.createdAt)}</span>

        <Link to={`/blog/${blog._id}`} className={styles.more}>
          DEVAMI <FaArrowRightLong />
        </Link>
      </div>
    </Link>
  );
};

export default Blog;
