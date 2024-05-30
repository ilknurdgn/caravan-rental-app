import React, { useState, useEffect } from 'react';
import styles from './rentalHistorySingleCard.module.css';
import { LuDot } from 'react-icons/lu';
// import { IoIosStar } from 'react-icons/io';
import { TiWarning } from 'react-icons/ti';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';

const status = {
  continues: 'Devam Ediyor',
  completed: 'Tamamlandı',
  cancelled: 'İptal Edildi',
};

const RentalHistorySingleCard = ({ rental, setCancelledReservationId }) => {
  const [isSureToDelete, setIsSureToDelete] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [star, setStar] = useState('false');
  const [comment, setComment] = useState('');

  const handleDeleteCancel = () => {
    setIsSureToDelete(false);
  };

  const handleDeleteCard = async (rentalId) => {
    // rental.status = 'cancelled';
    console.log(rental._id);
    try {
      await axios.put(`/rental/cancelBooking/${rental._id}`);
      rental.status = 'cancelled';
      setCancelledReservationId(rentalId);
    } catch (error) {}
    // window.location.reload();
    setIsSureToDelete(false);
  };

  const handleCommentSide = async () => {
    try {
      await axios.post('/comment/add', {
        caravanId: rental.caravanId._id,
        text: comment,
        score: star,
      });
    } catch (error) {}
    setIsCommentModalOpen(false);
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

  const handleCardClick = (e) => {
    if (
      e.target.tagName !== 'BUTTON' &&
      e.target.tagName !== 'TEXTAREA' &&
      e.target.tagName !== 'svg'
    ) {
      window.location.href = `/caravan/${rental.caravanId._id}`;
    }
  };

  return (
    <div>
      <div className={styles.container} onClick={handleCardClick}>
        <div className={styles.imgContainer}>
          <img src={rental.caravanId?.photos[0]} alt='' />
        </div>
        <div className={styles.infos}>
          <div className={styles.infoTitle}>{rental.caravanId?.type}</div>
          <div className={styles.infoTexts}>
            {rental.caravanId?.maxGuests} kişilik
            <LuDot className={styles.dotIcon} />
            {rental.caravanId?.yearOfManufacture} yapımı
          </div>
          <div className={styles.infoTexts}>
            {handleDay(rental?.startDate, rental?.endDate)} gün
            <LuDot className={styles.dotIcon} />
            {getDayFromDate(rental?.startDate)} -{' '}
            {getDayFromDate(rental?.endDate)}{' '}
            {getMonthFromDate(rental?.startDate)}
          </div>
          {/* <div className={styles.starContainer}>
          <IoIosStar className={styles.starIcon} />
          <div>{item.star}</div>
        </div> */}
        </div>
        <div className={styles.priceContainer}>
          <div>Toplam:</div>
          <div className={styles.price}>{rental?.totalPrice}₺</div>
        </div>
        <div className={styles.stateContainer}>
          {`${rental?.status}` === 'continues' && (
            <div
              className={styles.cancelButton}
              onClick={(e) => {
                e.stopPropagation();
                setIsSureToDelete(true);
              }}
            >
              İptal Et
            </div>
          )}
          {`${rental?.status}` === 'completed' && (
            <div
              className={styles.evaluateButton}
              onClick={(e) => {
                e.stopPropagation();
                setIsCommentModalOpen(true);
              }}
            >
              Değerlendir
            </div>
          )}
          <div className={`${styles.state} ${styles[rental?.status]}`}>
            {status[`${rental?.status}`]}
          </div>
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
      {isCommentModalOpen && (
        <div className={styles.isCommentModalOpenContainer}>
          <div className={styles.isCommentModalOpen}>
            <div className={styles.closeIconContainer}>
              <IoMdCloseCircle
                onClick={() => {
                  if (isCommentModalOpen) {
                    setIsCommentModalOpen(false);
                  }
                }}
                className={styles.closeIcon}
              />
            </div>

            <div className={styles.commentTitle}>Yorumunuz</div>
            <div className={styles.starContainer}>
              <FaStar
                className={`${styles.star} ${
                  star >= 1 ? styles.yellowStar : styles.starIcon
                }`}
                onClick={() => {
                  setStar(1);
                }}
              />
              <FaStar
                className={`${styles.star} ${
                  star >= 2 ? styles.yellowStar : styles.starIcon
                }`}
                onClick={() => {
                  setStar(2);
                }}
              />
              <FaStar
                className={`${styles.star} ${
                  star >= 3 ? styles.yellowStar : styles.starIcon
                }`}
                onClick={() => {
                  setStar(3);
                }}
              />
              <FaStar
                className={`${styles.star} ${
                  star >= 4 ? styles.yellowStar : styles.starIcon
                }`}
                onClick={() => {
                  setStar(4);
                }}
              />
              <FaStar
                className={`${styles.star} ${
                  star >= 5 ? styles.yellowStar : styles.starIcon
                }`}
                onClick={() => {
                  setStar(5);
                }}
              />
            </div>
            <textarea
              className={styles.commentInput}
              type='text'
              value={comment}
              placeholder='Deneyimlerinizi yazınız...'
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className={styles.commentButton}
              onClick={handleCommentSide}
            >
              Yorum Yap
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentalHistorySingleCard;
