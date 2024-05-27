import React, { useState } from 'react';
import styles from './rentalHistorySingleCard.module.css';
import { LuDot } from 'react-icons/lu';
import { IoIosStar } from 'react-icons/io';
import { TiWarning } from 'react-icons/ti';

const status = {
  ongoing: 'Devam Ediyor',
  completed: 'Tamamlandı',
  cancelled: 'İptal Edildi',
};

const RentalHistorySingleCard = ({ item }) => {
  const [isSureToDelete, setIsSureToDelete] = useState(false);

  const handleDeleteCancel = () => {
    setIsSureToDelete(false);
  };

  const handleDeleteCard = () => {
    item.state = 'cancelled';
    setIsSureToDelete(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src='/images/karavan.jpg' alt='' />
      </div>
      <div className={styles.infos}>
        <div className={styles.infoTitle}>{item.title}</div>
        <div className={styles.infoTexts}>
          {item.peopleNumber}
          <LuDot className={styles.dotIcon} />
          {item.year}
        </div>
        <div className={styles.infoTexts}>
          {item.day}
          <LuDot className={styles.dotIcon} />
          {item.date}
        </div>
        <div className={styles.starContainer}>
          <IoIosStar className={styles.starIcon} />
          <div>{item.star}</div>
        </div>
      </div>
      <div className={styles.priceContainer}>
        <div>Toplam:</div>
        <div className={styles.price}>{item.price}</div>
      </div>
      <div className={styles.stateContainer}>
        {`${item.state}` === 'ongoing' && (
          <div
            className={styles.cancelButton}
            onClick={() => {
              if (isSureToDelete === false) {
                setIsSureToDelete(true);
              }
            }}
          >
            İptal Et
          </div>
        )}
        <div className={`${styles.state} ${styles[item.state]}`}>
          {status[`${item.state}`]}
        </div>
      </div>
      {isSureToDelete && (
        <div className={styles.isSureToDeleteContainer}>
          <div className={styles.isSureToDelete}>
            <div className={styles.warningIconContainer}>
              <TiWarning className={styles.warningIcon} />
            </div>
            <div className={styles.warningText}>
              Rezervasyonu iptal etmek istediğinizden emin misiniz?
            </div>
            <div className={styles.buttonContainer}>
              <button
                className={styles.cancelIcon}
                onClick={handleDeleteCancel}
              >
                Vazgeç
              </button>
              <button
                className={styles.deleteButton}
                onClick={handleDeleteCard}
              >
                İptal Et
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentalHistorySingleCard;
