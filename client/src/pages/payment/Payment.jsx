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
  const { id } = useParams();
  const { user } = useContext(Context);
  const { state } = useLocation();
  const [caravanData, setCaravanData] = useState(null);
  const { startDate, endDate, days } = state || {};
  const start = startDate ? dayjs(startDate.$d) : null;
  const end = endDate ? dayjs(endDate.$d) : null;
  dayjs.locale('tr');
  const [createNewCard, setCreateNewCard] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [fullname, setFullname] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardTitle, setCardTitle] = useState('');

  console.log(state);

  const [errors, setErrors] = useState({
    cardNumber: '',
    expiryDate: '',
    fullname: '',
    cvv: '',
  });

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
      navigate(`/caravan/${id}`);
    }, 3000);
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await reservationHandler();
      await postCardInfos();
      handlePay();
    } catch (error) {
      console.error('Error making reservation: ', error);
    }
  };

  const reservationHandler = async () => {
    try {
      const startDatePlusOne = start.add(1, 'day');
      const reservationData = {
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

  const postCardInfos = async () => {
    const paymentData = {
      price: caravanData?.dailyPrice * days,
      paidPrice: caravanData?.dailyPrice * days,
      paymentCard: {
        cardHolderName: fullname,
        cardNumber: cardNumber.replace(/\s/g, ''),
        expireMonth: expiryDate.split('/')[0],
        expireYear: expiryDate.split('/')[1],
        cvc: cvv,
        registerCard: '0',
      },
      buyer: {
        name: user?.firstName,
        surname: user.lastName,
        email: user?.email,
      },
    };
    try {
      const response = await axios.post('/payment/createPayment', paymentData);
      console.log('Payment response:', response.data);
    } catch (err) {
      console.log(err);
    }
    console.log(paymentData);
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
                  <div className={styles.newCardTitle}>Son Kullanma Tarihi</div>
                  <input
                    className={`${styles.newCardInput} , ${styles.inputExpiryDate}`}
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
                  <div
                    className={`${styles.newCardTitle} , ${styles.inputCvv}`}
                  >
                    Güvenlik kodu
                  </div>
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
