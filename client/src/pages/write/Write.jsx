import { useContext, useState } from 'react';
import styles from './write.module.css';
import { RiImageAddLine } from 'react-icons/ri';
import { Context } from '../../context/Contex';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Write = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [blog, setBlog] = useState();
  const { user } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postBlog = async () => {
      const addBlog = {
        title: title,
        desc: description,
        // photo: file,
      };
      try {
        const response = await axios.post('/blog/add/', addBlog);
        setBlog(response.data._id);
        console.log(response.data.title);
        window.location.replace(`${response.data._id}`);
      } catch (err) {
        console.log(err);
      }
    };
    postBlog();
  };

  return (
    <div className={styles.write}>
      <form onSubmit={handleSubmit} className={styles.writeForm}>
        <div className={styles.writeFormGroup}>
          <input
            type='text'
            className={styles.writeInput}
            autoFocus={true}
            placeholder='Başlık ekle'
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className={styles.fileInput} htmlFor='fileInput'>
            <RiImageAddLine /> Fotoğraf ekle
          </label>
          <input type='file' id='fileInput' style={{ display: 'none' }} />
        </div>
        <div className={styles.writeFormGroup}>
          <textarea
            placeholder='Hikayeni yaz...'
            type='text'
            className={styles.writeText}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button className={styles.writeSubmit} type='submit'>
          Yayınla
        </button>
      </form>
    </div>
  );
};

export default Write;
