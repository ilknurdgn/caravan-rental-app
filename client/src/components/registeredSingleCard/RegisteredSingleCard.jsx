import React, { useState, useRef, useEffect } from 'react';
import styles from './registeredSingleCard.module.css';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { IoTrashOutline } from 'react-icons/io5';
import { PiCardsLight } from 'react-icons/pi';
import { TiWarning } from 'react-icons/ti';

const RegisteredSingleCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const buttonRef = useRef(null);
  const [isSureToDelete, setIsSureToDelete] = useState(false);

  const handleDeleteCancel = () => {
    setIsSureToDelete(false);
  };

  const handleDeleteCard = () => {
    // Kartı silme işlemi burada gerçekleştirilecek
    setIsSureToDelete(false);
  };

  const maskCardNumber = (cardNumber) => {
    return cardNumber.replace(/(\d{4}) \d{4} \d{4} (\d{4})/, '$1 **** **** $2');
  };
  return (
    <div className={styles.card}>
      <div className={styles.dotIconContainer}>
        <HiOutlineDotsVertical
          className={styles.dotIcon}
          onClick={(e) => {
            if (isModalOpen === false) {
              setIsModalOpen(true);
            }
          }}
        />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardTitle}>{item.title}</div>
        <div className={styles.cardNumber}>
          {maskCardNumber(item.cardNumber)}
        </div>
        <div className={styles.cardHolderName}>{item.name}</div>
      </div>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalItem}>
            <IoTrashOutline className={styles.modalIcon} />
            <div
              onClick={() => {
                if (isSureToDelete === false) {
                  setIsSureToDelete(true);
                }
                if (isModalOpen) {
                  setIsModalOpen(false);
                }
              }}
            >
              Sil
            </div>
          </div>
          <div className={styles.modalItem}>
            <PiCardsLight className={styles.modalIcon} />
            <div>Varsayılan kart yap</div>
          </div>
        </div>
      )}
      {isSureToDelete && (
        <div className={styles.isSureToDeleteContainer}>
          <div className={styles.isSureToDelete}>
            <div className={styles.warningIconContainer}>
              <TiWarning className={styles.warningIcon} />
            </div>
            <div className={styles.warningText}>
              Kayıtlı kartınızı silmek istediğinizden emin misiniz?
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
                Sil
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisteredSingleCard;
