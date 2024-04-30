import styles from './blogs.module.css';
import Blog from '../../components/blog/Blog';

const Blogs = () => {
  return (
    <div className={styles.blogs}>
      <div className={styles['main-image']}>
        <img className={styles.image} src='/images/blog-1.jpg' alt='' />
        <h1 className={styles.title}>KARAVAN BLOG</h1>
      </div>
      <div className={styles['blogs-section']}>
        <span className={styles.content}>
          LUX ekibinden ve kullanıcılarımızdan paylaşılan blog yazılarımız.
        </span>
        <div className={styles['blogs-container']}>
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
