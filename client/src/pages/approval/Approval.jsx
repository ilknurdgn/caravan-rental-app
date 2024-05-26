import styles from './approval.module.css';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { FaRegCircle } from 'react-icons/fa';
import { IoMdStar } from 'react-icons/io';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/tr';

const Approval = () => {
  const [caravan, setCaravan] = useState([]);
  const { id } = useParams();
  const { state } = useLocation();
  console.log(state);

  useEffect(() => {
    const getSingleCaravan = async () => {
      try {
        const res = await axios.get(`/caravan/${id}`);
        setCaravan(res.data);
      } catch (error) {
        console.error('Error fetching caravan data: ', error);
      }
    };
    getSingleCaravan();
  }, []);

  const { startDate, endDate, days } = state || {};
  const start = startDate ? dayjs(startDate.$d) : null;
  const end = endDate ? dayjs(endDate.$d) : null;
  dayjs.locale('tr');

  return (
    <div className={`${styles.paymentContainer} fadeIn`}>
      <div className={styles.pageTitle}>
        <Link to={`/caravan/${caravan._id}`}>
          <MdKeyboardArrowLeft className={styles.backIcon} />
        </Link>
        <span className={styles.titleText}> Onay </span>
      </div>
      <div className={styles.infoDiv}>
        <div className={styles.payInfo}>
          <span className={styles.subtitle}>Karavan Seyehatiniz</span>
          <div className={styles.reservation}>
            <div className={styles.leftSide}>
              <span className={styles.datesText}>Tarihler</span>
              <span className={styles.dates}>
                {startDate && end
                  ? `${start.format('DD MMMM YYYY')} - ${end.format(
                      'DD MMMM YYYY'
                    )}`
                  : 'Tarih seçilmedi'}
              </span>
            </div>
            <Link to={`/caravan/${caravan._id}`}>
              <div className={styles.rightSide}>Düzenle</div>
            </Link>
          </div>
          <div className={styles['payment-line']}></div>

          <button className={styles.payButton}>
            <span>
              <FaRegCircle className={styles.icon} />
            </span>
            <Link
              className={styles.pay}
              to={`/payment/${caravan._id}`}
              state={{ startDate, endDate, days }}
            >
              <span className={styles.pay}>Onayla ve devam et</span>
            </Link>
          </button>
        </div>
        <div className={styles.payDetails}>
          <div className={styles.topSide}>
            <div className={styles.image}>
              <img
                src='https://images.unsplash.com/photo-1594495894542-a46cc73e081a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
              />
            </div>
            <div className={styles.info}>
              <span className={styles.title}>
                {caravan.type} - {caravan.location}
              </span>
              <span className={styles.details}>
                {caravan.maxGuests} kişilik · {caravan.yearOfManufacture} yapımı
              </span>
              <span className={styles.dateOf}>
                {days} gece · {''}
                {startDate && end
                  ? `${start.format('DD MMM')} - ${end.format('DD MMM')}`
                  : 'Tarih seçilmedi'}
              </span>
              <span className={styles.star}>
                <IoMdStar className={styles.startIcon} /> 4.97
              </span>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.bottomSide}>
            <div className={styles.priceDetails}>
              <span className={styles.detailText}>Fiyat ayrıntıları</span>
              <div className={styles.totalPrice}>
                <span>Toplam (TRY)</span>
                <span> {caravan.dailyPrice * days}₺</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approval;
