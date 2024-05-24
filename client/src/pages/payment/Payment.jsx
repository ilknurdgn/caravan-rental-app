import { Link, useNavigate } from 'react-router-dom';
import styles from './payment.module.css';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useState } from 'react';
import { GrRadialSelected } from 'react-icons/gr';
import Confirm from '../../components/confirm/Confirm';

const Payment = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardData, setCardData] = useState([]);
  const [payState, setPayState] = useState(false);

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

  return (
    <div className={`${styles.payContainer} fadeIn`}>
      <div className={styles.pageTitle}>
        <Link to={`/approval`}>
          <MdKeyboardArrowLeft className={styles.backIcon} />
        </Link>
        <span className={styles.titleText}>Ödeme</span>
      </div>
      <div className={styles.payChoose}>
        <span>Ödeme Seçenekleri </span>
        <p>
          <b>Banka/Kredi Kartı</b> veya <b>Alışveriş Kredisi</b> ile ödemenizi
          güvenle yapabilirsiniz.
        </p>
      </div>

      <div className={styles.option}>
        <span onClick={() => handleOptionClick('card')}>
          <GrRadialSelected className={styles.selectedIcon} /> Kart ile öde
        </span>
        {selectedOption === 'card' && (
          <div className={styles.optionDetails}>
            <div className={styles.cardInfo}>
              <span>Kart Bilgileri</span>
              <Link to='/login' className={styles.addCard}>
                <span>Başka bir kart ile ödeme yap</span>
              </Link>
            </div>
            <div className={styles.cards}>
              {mockCardData.map((card) => (
                <div
                  className={`${styles.cardOptions} ${
                    selectedCard === card.id ? styles.selectedCard : ''
                  }`}
                  onClick={() => handleCardClick(card.id)}
                  key={card.id}
                >
                  <span>{card.name}</span>
                </div>
              ))}
            </div>
            <div className={styles.payButtonDiv}>
              <button className={styles.payButton} onClick={handlePay}>
                Ödemeyi tamamla
              </button>
            </div>
          </div>
        )}
      </div>
      <div className={styles.option}>
        <span onClick={() => handleOptionClick('credit')}>
          <GrRadialSelected /> Alışveriş kredisi ile öde
        </span>

        {selectedOption === 'credit' && (
          <div className={styles.optionDetails}>
            <div className={styles.customerInfo}>
              <span>Müşteri Bilgileri</span>
              <p className={styles.text}>
                Lütfen kimlik numaranızı ve müşterisi olduğunuz finansal
                kurumlarda kayıtlı olan cep telefonunuzu giriniz.
              </p>
            </div>
            <div className={styles.cards}>
              <div>
                <label htmlFor='phoneNumber'>Telefon Numarası</label>
                <input
                  className={styles.input}
                  id='phoneNumber'
                  placeholder='0 (5__) ___ __ __'
                  type='tel'
                  pattern='0\s\([5][0-9]{2}\)\s[0-9]{3}\s[0-9]{2}\s[0-9]{2}'
                  title='Telefon numarası formatı: 0 (5__) ___ __ __'
                  required
                />
              </div>

              <div>
                <label>T.C. Kimlik Numarası</label>
                <input className={styles.input} type='text' required />
              </div>
            </div>
            <div className={styles.payButtonDiv}>
              <button className={styles.payButton} onClick={handlePay}>
                Ödemeyi tamamla
              </button>
            </div>
          </div>
        )}
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
