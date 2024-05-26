import React, { useEffect, useState } from 'react';
import styles from './registeredCards.module.css';
import RegisteredSingleCard from '../../components/registeredSingleCard/RegisteredSingleCard';
import { FaArrowLeft } from 'react-icons/fa';

const pageInfos = [
  {
    id: 1,
    title: 'Ziraat Bankası Kartım',
    cardNumber: '4348 1523 4556 8523',
    name: 'Semanur Özkan',
  },
  {
    id: 2,
    title: 'İş Bankası Kartım',
    cardNumber: '4348 1523 4556 8523',
    name: 'Semanur Özkan',
  },
  {
    id: 3,
    title: 'Halk Bankası Kartım',
    cardNumber: '4348 1523 4556 8523',
    name: 'Semanur Özkan',
  },
  {
    id: 4,
    title: 'Halk Bankası Kartım',
    cardNumber: '4348 1523 4556 8523',
    name: 'Semanur Özkan',
  },
];

const RegisteredCards = () => {
  const [createNewCard, setCreateNewCard] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [fullname, setFullname] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardTitle, setCardTitle] = useState('');
  const [allCards, setAllCards] = useState(pageInfos);

  const [errors, setErrors] = useState({
    cardNumber: '',
    expiryDate: '',
    fullname: '',
    cvv: '',
  });

  const handleBlur = (field) => {
    validateField(field);
  };

  const validateField = (field) => {
    let error = '';
    switch (field) {
      case 'cardTitle':
        if (!cardTitle) {
          error = 'Kartın adı boş bırakılamaz';
        }
        break;
      case 'cardNumber':
        if (!cardNumber) {
          error = 'Kart numarası boş bırakılamaz';
        } else if (cardNumber.replace(/\s/g, '').length !== 16) {
          error = 'Kart numarası 16 haneli olmalıdır';
        }
        break;
      case 'expiryDate':
        if (!expiryDate) {
          error = 'Son kullanma tarihi boş bırakılamaz';
        } else if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
          error = 'Son kullanma tarihi MM/YY formatında olmalıdır';
        } else {
          const [month, year] = expiryDate.split('/').map(Number);
          const currentDate = new Date();
          const currentMonth = currentDate.getMonth() + 1;
          const currentYear = currentDate.getFullYear() % 100;
          if (month < 1 || month > 12) {
            error = 'Geçerli bir ay giriniz';
          } else if (
            year < currentYear ||
            (year === currentYear && month < currentMonth)
          ) {
            error = 'Kartın son kullanma tarihi geçmiş';
          }
        }
        break;
      case 'fullname':
        if (!fullname) {
          error = 'Kart sahibinin adı boş bırakılamaz';
        }
        break;
      case 'cvv':
        if (!cvv) {
          error = 'CVV boş bırakılamaz';
        } else if (!/^\d{3}$/.test(cvv)) {
          error = 'CVV 3 haneli olmalıdır';
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  const formatCardNumber = (value) => {
    // Sadece sayısal karakterleri al
    const numericValue = value.replace(/\D/g, '');
    // Her 4 karakterde bir boşluk ekle
    const formattedValue = numericValue.replace(/(\d{4})(?=\d)/g, '$1 ');
    return formattedValue;
  };

  const formatExpiryDate = (value) => {
    const numericValue = value.replace(/\D/g, '');
    if (numericValue.length <= 4) {
      if (numericValue.length === 3 && !numericValue.includes('/')) {
        return numericValue.replace(/(\d{2})(\d{1})/, '$1/$2');
      }
      return numericValue.replace(/(\d{2})(\d{2})/, '$1/$2');
    }
    return numericValue.slice(0, 5); // Maksimum 5 karakter (MM/YY)
  };

  const handleChangeCardNumber = (event) => {
    const inputValue = event.target.value;
    // Sadece sayısal karakterleri ve boşlukları al
    const rawValue = inputValue.replace(/\s/g, '');
    if (/^\d{0,19}$/.test(rawValue)) {
      setCardNumber(formatCardNumber(rawValue));
    }
  };

  const handleChangeExpiryDate = (event) => {
    const inputValue = event.target.value;
    const rawValue = inputValue.replace(/\D/g, ''); // Sadece sayısal karakterleri al
    if (/^\d{0,4}$/.test(rawValue)) {
      setExpiryDate(formatExpiryDate(rawValue));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const newCard = {
      id: pageInfos.length + 1,
      title: cardTitle,
      cardNumber: cardNumber,
      name: fullname,
    };

    setAllCards((prevCards) => [...prevCards, newCard]);
    // console.log('İÇERDEEEE newCard:', newCard);
    console.log('İÇERDEEEE allCards:', allCards);
  };

  console.log('KART NUMARASI:', cardNumber);
  console.log('expiryDate:', expiryDate);
  console.log('cvv:', cvv);
  console.log('cardTitle:', cardTitle);
  console.log('allCards', allCards);
  return (
    <div className={styles.container}>
      {createNewCard ? (
        <div className={styles.newCardContainer}>
          <div className={styles.newCardSection}>
            <div
              className={styles.backButtonContainer}
              onClick={() => {
                setCreateNewCard(false);
              }}
            >
              <span>
                <FaArrowLeft className={styles.backButton} />
              </span>
              <span>Kayıtlı Kartlar</span>
            </div>
          </div>
          <div className={styles.newCardSection}>
            <div className={styles.newCardInfos}>
              <div className={styles.newCardInfo}>
                <div className={styles.newCardTitle}>Kartın Adı</div>
                <input
                  className={styles.newCardInput}
                  placeholder='Kart adını yazınız'
                  type='text'
                  value={cardTitle}
                  onChange={(e) => {
                    setCardTitle(e.target.value);
                  }}
                  onBlur={() => handleBlur('cardTitle')}
                ></input>
                {errors.cardTitle && (
                  <span className={styles.error}>{errors.cardTitle}</span>
                )}
              </div>
              <div className={styles.newCardInfo}>
                <div className={styles.newCardTitle}>Kart numarası</div>
                <input
                  className={styles.newCardInput}
                  placeholder='•••• •••• •••• ••••'
                  inputMode='numeric'
                  type='text'
                  maxLength='19'
                  value={cardNumber}
                  onChange={handleChangeCardNumber}
                  onBlur={() => handleBlur('cardNumber')}
                ></input>
                {errors.cardNumber && (
                  <span className={styles.error}>{errors.cardNumber}</span>
                )}
              </div>

              <div className={styles.newCardInfo}>
                <div className={styles.newCardTitle}>Kart üzerindeki isim</div>
                <input
                  className={styles.newCardInput}
                  placeholder='Kart sahibinin adı ve soyadı'
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  onBlur={() => handleBlur('fullname')}
                ></input>
                {errors.fullname && (
                  <span className={styles.error}>{errors.fullname}</span>
                )}
              </div>

              <div className={styles.newCardInfo}>
                <div className={styles.newCardContent}>
                  <div className={styles.newCardItem}>
                    <div className={styles.newCardTitle}>
                      Son Kullanma Tarihi
                    </div>
                    <input
                      className={styles.newCardInput}
                      placeholder='Ay / Yıl'
                      inputMode='numeric'
                      type='text'
                      value={expiryDate}
                      onChange={handleChangeExpiryDate}
                      onBlur={() => handleBlur('expiryDate')}
                    ></input>
                    {errors.expiryDate && (
                      <span className={styles.error}>{errors.expiryDate}</span>
                    )}
                  </div>

                  <div className={styles.newCardItem}>
                    <div className={styles.newCardTitle}>Güvenlik kodu</div>
                    <input
                      className={styles.newCardInput}
                      placeholder='CVV'
                      value={cvv}
                      maxLength='3'
                      onChange={(e) => setCvv(e.target.value)}
                      onBlur={() => handleBlur('cvv')}
                    ></input>
                    {errors.cvv && (
                      <span className={styles.error}>{errors.cvv}</span>
                    )}
                  </div>
                </div>
              </div>
              <button
                className={styles.newCardSaveButton}
                disabled={Object.values(errors).some((error) => error)}
                onClick={handleSave}
              >
                Kaydet
              </button>
            </div>
            <div className={styles.newCardView}>
              <svg xmlns='http://www.w3.org/2000/svg' width='46' height='34'>
                <g fill='none' fillRule='evenodd'>
                  <rect
                    width='45'
                    height='33'
                    x='0.5'
                    y='0.5'
                    fill='#F5F2CA'
                    stroke='#D4D09D'
                    rx='4'
                  ></rect>
                  <path
                    fill='#D4D09D'
                    fillRule='nonzero'
                    d='M16 1v3.7l6.373 6.154L29 4.456V1h1v3h15v1H29.763l.055.057L23 11.64V14h-7.5v7H31v-8l.005-.164a2.498 2.498 0 012.33-2.33l.165-.006h13v1h-13l-.144.007a1.501 1.501 0 00-1.35 1.349L32 13v9l.007.144a1.501 1.501 0 001.349 1.35l.144.006h13v1h-13l-.164-.005a2.498 2.498 0 01-2.33-2.33L31 22h-8v1.359l6.818 6.584-.056.057H30v4h-1v-3.457l-6.627-6.398L16 30.299V34h-1v-3.984l-.07-.073L22 23.115V22h-6.5a2.501 2.501 0 01-2.336 2.495L13 24.5H0v-1h13a1.5 1.5 0 001.493-1.356L14.5 22v-9a1.5 1.5 0 00-1.356-1.493L13 11.5H0v-1h13a2.501 2.501 0 012.495 2.336L15.5 13H22v-1.116l-7.07-6.827.053-.057H0V4h15V1h1z'
                  ></path>
                </g>
              </svg>
              <div className={styles.newCardViewInfos}>
                <div className={styles.numberInfo}>
                  {cardNumber === '' ? '0000 0000 0000 0000' : cardNumber}
                </div>
                <div className={styles.nameInfo}>
                  {fullname === '' ? 'Kart sahibi' : fullname}
                </div>
                <div className={styles.dateInfo}>
                  {expiryDate === '' ? 'AA/YY' : expiryDate}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.savedCards}>
          <div className={styles.navigationPath}>
            <a href='/profile'>Hesap</a>
            <span>&gt;</span>
            <span>Kayıtlı Kartlar</span>
          </div>
          <span className={styles.title}>Kayıtlı Kartlar</span>

          <div className={styles.cards}>
            {allCards.map((item) => {
              return <RegisteredSingleCard item={item} />;
            })}
            <div
              className={styles.addNewCard}
              onClick={() => {
                setCreateNewCard(true);
              }}
            >
              + Yeni Kart Ekle
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisteredCards;
