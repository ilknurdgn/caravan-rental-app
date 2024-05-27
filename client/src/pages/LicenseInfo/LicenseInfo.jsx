import React, { useRef, useState } from 'react';
import styles from './licenseInfo.module.css';
import { BsFillTrash3Fill } from 'react-icons/bs';

const LicenseInfo = () => {
  const [uploadedImageFront, setUploadedImageFront] = useState(null);
  const [uploadedImageBack, setUploadedImageBack] = useState(null);
  const fileInputRefFront = useRef(null);
  const fileInputRefBack = useRef(null);

  const handleFileChangeFront = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImageFront(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChangeBack = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImageBack(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCardClickFront = () => {
    fileInputRefFront.current.click();
  };

  const handleCardClickBack = () => {
    fileInputRefBack.current.click();
  };

  const handleDeleteFront = (e) => {
    e.stopPropagation();
    setUploadedImageFront(null);
    fileInputRefFront.current.value = null;
  };

  const handleDeleteBack = (e) => {
    e.stopPropagation();
    setUploadedImageBack(null);
    fileInputRefBack.current.value = null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.navigationPath}>
        <a href='/profile'>Hesap</a>
        <span>&gt;</span>
        <span>Ehliyet Bilgileri</span>
      </div>
      <span className={styles.title}>Ehliyet Bilgileri</span>
      <div className={styles.warningText}>
        Karavan kiralama işlemleriniz için lütfen ehliyet ön ve arka
        görsellerini sisteme yükleyiniz.
      </div>
      <div className={styles.cards}>
        <div className={styles.cardContainer} onClick={handleCardClickFront}>
          <div className={styles.cardTitle}>Ön Kısım</div>
          <div className={styles.card}>
            {uploadedImageFront ? (
              <img src={uploadedImageFront} alt='Uploaded' />
            ) : null}
            <input
              type='file'
              accept='image/*'
              ref={fileInputRefFront}
              className={styles.fileInput}
              onChange={handleFileChangeFront}
            />
            {uploadedImageFront && (
              <div className={styles.deleteButtonContainer}>
                <BsFillTrash3Fill
                  className={styles.deleteButton}
                  onClick={handleDeleteFront}
                />
              </div>
            )}
          </div>
        </div>
        <div className={styles.cardContainer} onClick={handleCardClickBack}>
          <div className={styles.cardTitle}>Arka Kısım</div>
          <div className={styles.card}>
            {uploadedImageBack ? (
              <img src={uploadedImageBack} alt='Uploaded' />
            ) : null}
            <input
              type='file'
              accept='image/*'
              ref={fileInputRefBack}
              className={styles.fileInput}
              onChange={handleFileChangeBack}
            />
            {uploadedImageBack && (
              <div className={styles.deleteButtonContainer}>
                <BsFillTrash3Fill
                  className={styles.deleteButton}
                  onClick={handleDeleteBack}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LicenseInfo;
