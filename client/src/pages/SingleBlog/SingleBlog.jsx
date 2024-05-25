import { useEffect, useState } from 'react';
import styles from './singleBlog.module.css';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { BsTrash3 } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
import { useLocation } from 'react-router-dom';

const SingleBlog = ({ blogs }) => {
  const [updateMode, setUpdateMode] = useState(false);
  const [title, setTitle] = useState('');
  const { state } = useLocation();
  console.log(state);
  //const { state } = props.location;
  // const { name, age } = state;

  const update = () => {
    setUpdateMode(true);
    setTitle(title);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });

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
        <span className={styles.title}>{state.title}</span>
      )}

      <div className={styles.update}>
        <span onClick={update} className={styles.edit}>
          <CiEdit />
        </span>
        <span className={styles.delete}>
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
            {state.views}
          </span>
          <span className={styles.item}>
            <FaRegCalendarAlt />
            {state.updatedAt}
          </span>
        </div>

        <div className={styles['blog-content']}>
          {updateMode ? (
            <textarea type='text' className={styles.singlePostDescInput} />
          ) : (
            <div>
              <span className={styles.subtitle}>{state.title}</span>
              <p className={styles['blog-entry']}>{state.desc}</p>
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
