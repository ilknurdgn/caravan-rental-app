import { Link, useNavigate } from 'react-router-dom';
import styles from './payment.module.css';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useState } from 'react';
import { GrRadialSelected } from 'react-icons/gr';
import Confirm from '../../components/confirm/Confirm';
import { useReservation } from '../../context/Contex';
import { CiCreditCard1 } from 'react-icons/ci';
import { FaLock } from 'react-icons/fa';
import { IoMdStar } from 'react-icons/io';

const Payment = () => {
  const { reservationData } = useReservation();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardData, setCardData] = useState([]);
  const [payState, setPayState] = useState(false);
  console.log(reservationData);

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('Türkiye');

  // users click payment = option
  const handleOptionClick = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card === selectedCard ? null : card);
  };

  const mockCardData = [
    { id: 1, name: 'Ziraat Bankası kartım (Visa)' },
    { id: 2, name: 'Garanti Bankası kartım (Mastercard)' },
    { id: 3, name: 'İş Bankası kartım (Visa)' },
    { id: 4, name: 'Akbank kartım (Mastercard)' },
    { id: 5, name: 'Denizbank kartım ' },
  ];

  const handlePay = () => {
    setPayState(true);
    setTimeout(() => {
      setPayState(false);
      navigate('/');
    }, 3000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handlePay();
  };

  return (
    <div className={`${styles.payContainer} fadeIn`}>
      <div className={styles.pageTitle}>
        <Link to='/'>
          <MdKeyboardArrowLeft className={styles.backIcon} />
        </Link>
        <span className={styles.titleText}>Ödeme</span>
      </div>

      <div className={styles.container}>
        <form onSubmit={handleFormSubmit}>
          <span className={styles.chooseCard}>
            <CiCreditCard1 className={styles.cardIcon} /> Kredi veya banka kartı
          </span>

          <div className={styles.formGroup}>
            {/* <label htmlFor='cardNumber'>Kart numarası</label> */}

            <input
              className={styles.cardNumber}
              type='text'
              id='cardNumber'
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              placeholder='Kart Numarası'
            />
            <div className={styles.cardBottom}>
              <input
                className={styles.expiryDate}
                placeholder='Son Kullanma Tarihi'
                id='expiryDate'
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                type='text'
                required
              />
              <input
                className={styles.cvv}
                id='cvv'
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder='CVV'
                type='text'
                required
              />
            </div>
          </div>

          <div className={styles.cardInfo}>
            <input
              className={styles.postalCode}
              type='text'
              id='postalCode'
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
              placeholder='Posta Kodu'
            />

            <div className={styles.formGroup}>
              <label htmlFor='country'>Ülke/bölge</label>
              <div className={styles.line}></div>

              <select
                id='country'
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option value='Türkiye'>Türkiye</option>
              </select>
            </div>
          </div>
          <div className={styles.buttonDiv}>
            <button type='submit' className={styles.payButton}>
              Ödeme Yap
            </button>
          </div>
        </form>

        <div className={styles.payDetails}>
          <div className={styles.caravanConatiner}>
            <div className={styles.topSide}>
              <div className={styles.image}>
                <img
                  src='https://images.unsplash.com/photo-1594495894542-a46cc73e081a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt=''
                />
              </div>
              <div className={styles.info}>
                <span className={styles.title}>
                  {/* {caravan.type} - {caravan.location} */}
                </span>
                <span className={styles.details}>
                  {/* {caravan.maxGuests} kişilik · {caravan.yearOfManufacture}{' '} */}
                  yapımı
                </span>
                <span className={styles.dateOf}>3 gece · 19-23 Nis (!!!)</span>
                <span className={styles.star}>
                  <IoMdStar className={styles.startIcon} /> 4.97
                </span>
              </div>
            </div>
            <div className={styles.caravanLine}></div>
            <div className={styles.bottomSide}>
              <div className={styles.priceDetails}>
                <span className={styles.detailText}>Fiyat ayrıntıları</span>
                <div className={styles.totalPrice}>
                  <span>Toplam (TRY)</span>
                  {/* <span> {caravan.dailyPrice}₺ x gün sayısı!!</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {payState && (
        <>
          <div className={styles.overlay}></div>
          <div className={`${styles.confirm} slideInFromBottom`}>
            <Confirm />
          </div>
        </>
      )}
    </div>
  );
};

export default Payment;
