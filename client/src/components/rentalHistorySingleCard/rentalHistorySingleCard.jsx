import React, { useState } from 'react';
import styles from './rentalHistorySingleCard.module.css';
import { LuDot } from 'react-icons/lu';
import { IoIosStar } from 'react-icons/io';
import { TiWarning } from 'react-icons/ti';

const status = {
  continues: 'Devam Ediyor',
  completed: 'Tamamlandı',
  cancelled: 'İptal Edildi',
};

const RentalHistorySingleCard = ({ item, rental }) => {
  const [isSureToDelete, setIsSureToDelete] = useState(false);

  const handleDeleteCancel = () => {
    setIsSureToDelete(false);
  };

  const handleDeleteCard = () => {
    rental.status = 'cancelled';
    setIsSureToDelete(false);
  };

  const handleDay = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = Math.abs(end - start);
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return dayDiff;
  };

  const getDayFromDate = (dateString) => {
    const parts = dateString.split('T')[0].split('-');
    return parseInt(parts[2], 10);
  };

  const getMonthFromDate = (dateString) => {
    const parts = dateString.split('T')[0].split('-');
    const month = parseInt(parts[1], 10);
    const monthNames = [
      'Ocak',
      'Şubat',
      'Mart',
      'Nisan',
      'Mayıs',
      'Haziran',
      'Temmuz',
      'Ağustos',
      'Eylül',
      'Ekim',
      'Kasım',
      'Aralık',
    ];

    return monthNames[month - 1];
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src='/images/karavan.jpg' alt='' />
      </div>
      <div className={styles.infos}>
        <div className={styles.infoTitle}>{rental.caravanId.type}</div>
        <div className={styles.infoTexts}>
          {rental.caravanId.maxGuests} kişilik
          <LuDot className={styles.dotIcon} />
          {rental.caravanId.yearOfManufacture} yapımı
        </div>
        <div className={styles.infoTexts}>
          {handleDay(rental.startDate, rental.endDate)} gün
          <LuDot className={styles.dotIcon} />
          {getDayFromDate(rental.startDate)} - {getDayFromDate(rental.endDate)}{' '}
          {getMonthFromDate(rental.startDate)}
        </div>
        {/* <div className={styles.starContainer}>
          <IoIosStar className={styles.starIcon} />
          <div>{item.star}</div>
        </div> */}
      </div>
      <div className={styles.priceContainer}>
        <div>Toplam:</div>
        <div className={styles.price}>{rental.totalPrice}₺</div>
      </div>
      <div className={styles.stateContainer}>
        {`${rental.status}` === 'continues' && (
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
        <div className={`${styles.state} ${styles[rental.status]}`}>
          {status[`${rental.status}`]}
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
