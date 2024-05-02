import styles from './write.module.css';
import { RiImageAddLine } from 'react-icons/ri';

const Write = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
