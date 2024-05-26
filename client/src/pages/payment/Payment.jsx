import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from './payment.module.css';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useContext, useEffect, useState } from 'react';
import { GrRadialSelected } from 'react-icons/gr';
import Confirm from '../../components/confirm/Confirm';
import { Context, useReservation } from '../../context/Contex';
import { CiCreditCard1 } from 'react-icons/ci';
import { FaLock } from 'react-icons/fa';
import { IoMdStar } from 'react-icons/io';
import dayjs from 'dayjs';
import axios from 'axios';

const Payment = () => {
  const { reservationData } = useReservation();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardData, setCardData] = useState([]);
  const [payState, setPayState] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('Türkiye');
  const { id } = useParams();
  const { user } = useContext(Context);
  const { state } = useLocation();
  const [caravanData, setCaravanData] = useState(null);
  const { startDate, endDate, days } = state || {};
  const start = startDate ? dayjs(startDate.$d) : null;
  const end = endDate ? dayjs(endDate.$d) : null;
  dayjs.locale('tr');

  // users click payment = option
  const handleOptionClick = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card === selectedCard ? null : card);
  };

  const handlePay = () => {
    setPayState(true);
    setTimeout(() => {
      setPayState(false);
      // navigate('/');
    }, 3000);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await reservationHandler();
      handlePay();
    } catch (error) {
      console.error('Error making reservation: ', error);
    }
  };
  useEffect(() => {
    const getSingleCaravan = async () => {
      try {
        const res = await axios.get(`/caravan/${id}`);
        setCaravanData(res.data);
        console.log(res.data);
      } catch (error) {
        console.error('Error fetching caravan data: ', error);
      }
    };
    getSingleCaravan();
  }, []);

  dayjs.locale('tr');

  const reservationHandler = async () => {
    try {
      const startDatePlusOne = start.add(1, 'day');
      const reservationData = {
        userId: user._id,
        caravanId: id,
        startDate: startDatePlusOne.toDate(),
        endDate: end.toDate(),
        totalPrice: caravanData?.dailyPrice * days,
      };

      const response = await axios.post('/rental/booking/', reservationData);
      console.log('Reservation successful:', response.data);
    } catch (error) {
      console.error('Error creating reservation:', error);
    }
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
            <button
              onClick={reservationHandler}
              type='submit'
              className={styles.payButton}
            >
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
                  {caravanData?.type} - {caravanData?.location}
                </span>
                <span className={styles.details}>
                  {caravanData?.maxGuests} kişilik ·{' '}
                  {caravanData?.yearOfManufacture} Yapımı
                </span>
                <span className={styles.dateOf}>
                  {' '}
                  {days} gün ·{' '}
                  {startDate && end
                    ? `${start.format('DD MMM')} - ${end.format('DD MMM')}`
                    : 'Tarih seçilmedi'}
                </span>
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
                  {caravanData?.dailyPrice * days}₺
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
