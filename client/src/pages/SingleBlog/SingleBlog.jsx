import { useEffect, useState } from 'react';
import styles from './singleBlog.module.css';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { BsTrash3 } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import DeleteLoading from '../../components/deleteLoading/DeleteLoading';

const SingleBlog = () => {
  const [updateMode, setUpdateMode] = useState(false);
  const [title, setTitle] = useState('');
  const [blog, setBlog] = useState([]);
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await axios.get(`/blog/singleBlog/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBlog();
  }, []);

  const update = () => {
    setUpdateMode(true);
    setTitle(title);
  };

  const deleteBlog = async () => {
    try {
      await axios.delete(`/blog/delete/${id}/`);
      navigate('/blogs');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', options);
  };

  return (
    <div className={styles['single-blog']}>
      {updateMode ? (
        <input
          type='text'
          value={title}
          className={styles.singlePostTitleInput}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
      ) : (
        <span className={styles.title}>{blog.title}</span>
      )}

      <div className={styles.update}>
        <span onClick={update} className={styles.edit}>
          <CiEdit />
        </span>
        <span onClick={deleteBlog} className={styles.delete}>
          <BsTrash3 />
        </span>
      </div>
      <div className={styles['blog-container']}>
        <img
          className={styles.image}
          src="https://plus.unsplash.com/premium_photo-1681884705028-fe0dc759406a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
          alt=''
        />

        <div className={styles.items}>
          <span className={styles.item}>
            <MdOutlineRemoveRedEye />
            {blog.views}
          </span>
          <span className={styles.item}>
            <FaRegCalendarAlt />
            {formatDate(blog.createdAt)}
          </span>
        </div>

        <div className={styles['blog-content']}>
          {updateMode ? (
            <textarea type='text' className={styles.singlePostDescInput} />
          ) : (
            <div>
              <span className={styles.subtitle}>{blog.title}</span>
              <p className={styles['blog-entry']}>{blog.desc}</p>
            </div>
          )}
          {updateMode && (
            <button className={styles.updateButton}>Update</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
