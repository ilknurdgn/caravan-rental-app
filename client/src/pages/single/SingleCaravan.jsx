import React, { useContext, useEffect, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // ana css dosyası
import 'react-date-range/dist/theme/default.css'; // tema css dosyası
import axios from 'axios';
import { RiCaravanLine } from 'react-icons/ri';
import { PiGasPump } from 'react-icons/pi';
import { IoSettingsOutline } from 'react-icons/io5';
import { GoPeople } from 'react-icons/go';
import { IoMdStar } from 'react-icons/io';
import { IoMdShare } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { MdExpandMore } from 'react-icons/md';
import Comments from '../../components/comments/Comments';
import { addDays, differenceInDays } from 'date-fns';
import styles from './singleCaravan.module.css';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { color } from '@mui/system';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
// import { trTR } from '@mui/lab/locale'; // Türkçe dil desteği
import { LuDot } from 'react-icons/lu';
import { LicenseInfo } from '@mui/x-license';
import SharePage from '../../components/sharePage/SharePage';
import { RxCross1 } from 'react-icons/rx';
import { Context } from '../../context/Contex';
import Cookies from 'universal-cookie';
import { useReservation } from '../../context/Contex';

LicenseInfo.setLicenseKey(
  'e0d9bb8070ce0054c9d9ecb6e82cb58fTz0wLEU9MzI0NzIxNDQwMDAwMDAsUz1wcmVtaXVtLExNPXBlcnBldHVhbCxLVj0y'
);
const SingleCaravan = () => {
  const { reservationData, dispatch } = useReservation();
  const { id } = useParams(); //url'den id alır
  const [isFavorited, setIsFavorited] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const [caravanData, setCaravanData] = useState(null);
  const [selectedDate, setSelectedDate] = useState([null, null]);
  //kullanıcının seçtiği tarih aralığınu tutar
  //başta herhangi bir tarih yok -> null
  const [selectedDateRangeString, setSelectedDateRangeString] = useState('');
  const [days, setDays] = useState(0);
  const [startDay, setStartDay] = useState([]);
  const [endDay, setEndDay] = useState([]);
  const navigate = useNavigate();

  const [showSelectedDateRange, setShowSelectedDateRange] = useState(false);
  const [share, setShare] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { user } = useContext(Context);
  dayjs.locale('tr');

  const { state } = useLocation();
  const { peopleCount } = state || {};

  useEffect(() => {
    const getSingleCaravan = async () => {
      try {
        const res = await axios.get(`/caravan/${id}`);
        window.scrollTo(0, 0);
        setCaravanData(res.data);
        const storedFavorites =
          JSON.parse(localStorage.getItem('favorites')) || {};
        setFavorites(storedFavorites);
        setIsFavorited(!!storedFavorites[res.data._id]);
      } catch (error) {
        console.error('Error fetching caravan data: ', error);
      }
    };
    getSingleCaravan();
  }, []);

  //selected date için
  useEffect(() => {
    //selectedDate seçildiğinde çalışan:
    if (selectedDate[0] && selectedDate[1]) {
      //ilk ve son tarih seçildiyse
      const startDate = selectedDate[0];
      setStartDay(startDate.format('DD/MM/YYYY'));
      const endDate = selectedDate[1];
      setEndDay(endDate.format('DD/MM/YYYY'));
      //tarih aralığındaki gün sayısını hesaplar:
      const days = endDate.diff(startDate, 'day') + 1; // Tarih aralığındaki gün sayısını dayjs ile hesapla
      setDays(days);
      // String formatında tarih aralığını ve gün sayısını ayarlar
      setSelectedDateRangeString(
        `${startDate.format('DD.MM.YYYY')} - ${endDate.format(
          'DD.MM.YYYY'
        )} (${days} gün)`
      );
    } else {
      //seçilmdiyse string boş
      setSelectedDateRangeString('');
    }
  }, [selectedDate]);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const disabledDates =
    caravanData?.notAvailableDates.map((date) => ({
      start: new Date(date.start),
      end: new Date(date.end),
    })) || [];

  disabledDates.forEach((date) => {
    date.start.setDate(date.start.getDate() - 1);
  });

  const isDisabledDate = (date) => {
    // Tarihin müsait olmayan günler arasında olup olmadığını kontrol et
    return disabledDates.some((disabledDate) =>
      isDateInRange(date, disabledDate.start, disabledDate.end)
    );
  };

  const isDateInRange = (date, startDate, endDate) => {
    return dayjs(date).isBetween(startDate, endDate, null, '[]');
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setShowSelectedDateRange(true);

    // 1 saniye sonra showSelectedDateRange state'ini false olarak güncelle
    setTimeout(() => {
      setShowSelectedDateRange(false);
    }, 1000);

    // Yeni tarih aralığını kontrol et
    if (newDate[0] && newDate[1]) {
      const isAnyUnavailable = disabledDates.some((dateRange) => {
        // Seçilen tarih aralığı içinde müsait olmayan bir gün var mı?
        return (
          isDateInRange(dateRange.start, newDate[0], newDate[1]) ||
          isDateInRange(dateRange.end, newDate[0], newDate[1])
        );
      });

      // Eğer müsait olmayan bir gün seçildiyse, uyarı göster
      if (isAnyUnavailable) {
        // Seçilen tarihleri sıfırla
        setSelectedDate([null, null]);
      }
    }
  };
  const clickShareHandle = () => {
    setShare(true);
  };

  const dontShareHandle = () => {
    setShare(false);
  };

  const startDate = selectedDate[0];
  const endDate = selectedDate[1];

  const clickHandler = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      const timeout = setTimeout(() => {
        setIsClicked(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isClicked]);

  const toggleFavorites = async (caravanId) => {
    if (!user || !user._id) {
      navigate('/login');
      return;
    }

    try {
      let updatedFavorites = { ...favorites };
      if (favorites[caravanId]) {
        await axios.delete(`/favorites/delete`, {
          data: { caravanId: caravanId },
        });
        delete updatedFavorites[caravanId];
      } else {
        await axios.post(`/favorites/add`, {
          caravanId: caravanId,
        });
        updatedFavorites[caravanId] = true;
      }
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorited(!isFavorited);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`${styles['single-container']} fadeIn`}>
      <div className={styles['caravan-info']}>
        <div className={styles.icons}>
          <div className={styles['right-side']} onClick={clickShareHandle}>
            <IoMdShare className={styles.shareIcon} />
            <p>Paylaş</p>
          </div>
          <div
            className={styles['right-side']}
            onClick={() => toggleFavorites(caravanData._id)}
          >
            {isFavorited ? (
              <FaHeart
                onClick={toggleFavorite}
                className={styles.favHeartIcon}
              />
            ) : (
              <FaRegHeart
                onClick={toggleFavorite}
                className={styles.heartIcon}
              />
            )}
            <p>Ekle</p>
          </div>
        </div>
      </div>

      <div className={styles['caravan-images']}>
        <img
          className={styles['main-image']}
          src='https://images.unsplash.com/photo-1592351763700-b9b35a6465ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
        />
        <div className={styles['images-container']}>
          <img
            className={styles['images']}
            src='https://images.unsplash.com/photo-1592351763700-b9b35a6465ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
          />
          <img
            className={styles['images']}
            src='https://images.unsplash.com/photo-1592351763700-b9b35a6465ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
          />
          <img
            className={styles['images']}
            src='https://images.unsplash.com/photo-1592351763700-b9b35a6465ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
          />
          <img
            className={styles['images']}
            src='https://images.unsplash.com/photo-1592351763700-b9b35a6465ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
          />
        </div>
      </div>

      <div className={styles['description-section']}>
        <div className={styles['caravan-left-side']}>
          <span>
            {caravanData?.location} - {caravanData?.title}
          </span>
          <ul className={styles.features}>
            <li>
              <RiCaravanLine /> <p>{caravanData?.type}</p>
            </li>
            <li>
              <PiGasPump /> <p>{caravanData?.fuel}</p>
            </li>
            <li>
              <IoSettingsOutline /> <p>{caravanData?.gear}</p>
            </li>
            <li>
              <GoPeople /> <p>{caravanData?.maxGuests} Kişilik</p>
            </li>
          </ul>

          <div className={styles.profile}>
            <div className={styles['profile-pic']}>
              <img
                className={styles['owner-profile-pic']}
                src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt=''
              />
            </div>
            <div className={styles.owner}>
              Karavan Sahibi: {caravanData?.owner}
            </div>
          </div>

          <div className={styles.line}></div>

          <div className={styles.description}>
            <span>AÇIKLAMA</span>
            <ul>
              {caravanData?.description.map((desc, index) => (
                <li key={index} className={styles.caravanDesc}>
                  {' '}
                  <LuDot /> {desc}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.line}></div>

          <div className={styles.calendar}>
            {/* Tarih seçiniz yazısı */}
            {!selectedDate[0] && !selectedDate[1] && (
              <div className={styles.selectedDateRange}>Tarih seçiniz</div>
            )}

            {/* Tarihlerin yer alacağı bölüm */}
            <div className={styles.selectedDatesContainer}>
              {selectedDate[0] && selectedDate[1] && (
                <div
                  className={`${styles.selectedDateRange} ${
                    showSelectedDateRange ? styles.show : ''
                  }`}
                >
                  {selectedDateRangeString}
                </div>
              )}

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangeCalendar
                  className={styles.customCalendar}
                  value={selectedDate}
                  onChange={handleDateChange}
                  shouldDisableDate={(date) => {
                    return isDisabledDate(date);
                  }}
                  disablePast
                />
              </LocalizationProvider>
            </div>
          </div>
        </div>
        <div className={styles['caravan-right-side']}>
          <div className={styles.paymentContainer}>
            <div className={styles['total-info']}>
              <p className={styles.price}>
                {caravanData?.dailyPrice}₺<span>{days} gün</span>
              </p>
            </div>
            <div className={styles['check-container']}>
              <div className={styles.reservation}>
                <div className={styles.check}>
                  <div className={styles.checkin}>
                    <span>BAŞLANGIÇ</span>
                    <span> {startDay} </span>
                  </div>
                  <div className={styles.checkout}>
                    <span>BİTİŞ</span>
                    <span> {endDay} </span>
                  </div>
                </div>
                <div className={styles.guest}>
                  <div className={styles['select-guests']}>
                    <span>MİSAFİR</span>
                    <span> {caravanData?.maxGuests} misafir</span>
                  </div>
                  <div className={styles.moreIcon}>
                    {' '}
                    <MdExpandMore className={styles.moreIcon} />{' '}
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.button}>
              {!selectedDate[0] || !selectedDate[1] ? (
                <div className={styles.disabled}>
                  <button
                    onClick={clickHandler}
                    className={styles['reservation-button']}
                    type='submit'
                  >
                    Devam et
                  </button>
                  {isClicked && (
                    <span className={styles.warning}>
                      Lütfen tarih aralığı seçiniz
                    </span>
                  )}
                </div>
              ) : (
                <Link
                  to={`/approval/${caravanData?._id}`}
                  state={{ startDate, endDate, days }}
                >
                  <button
                    className={styles['reservation-button']}
                    type='submit'
                  >
                    Devam et
                  </button>
                </Link>
              )}

              <span>Henüz ücretlendirilmeyeceksiniz</span>
            </div>
            <div className={styles['caravan-payment']}>
              <div className={styles['payment-info']}>
                <div className={styles['total-price-info']}>
                  {caravanData?.dailyPrice}₺ x {days} gün
                </div>
                <div className={styles['total-price']}>
                  {caravanData?.dailyPrice * days}₺
                </div>
              </div>
              <div className={styles['payment-line']}></div>
              <div className={styles['before-tax']}>
                <div className={styles['total-price-info']}>
                  Vergi̇ öncesi̇ toplam
                </div>
                <div className={styles['total-price']}>
                  {' '}
                  {caravanData?.dailyPrice}₺
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.line}></div>
      {/* COMMENT SECTION */}
      <Comments />

      {share && (
        <>
          <div onClick={dontShareHandle} className={styles.overlay}></div>
          <div className={`${styles.sharePage} slideInFromBottom`}>
            <RxCross1 onClick={dontShareHandle} className={styles.cross} />
            <SharePage />
          </div>
        </>
      )}
    </div>
  );
};

export default SingleCaravan;
