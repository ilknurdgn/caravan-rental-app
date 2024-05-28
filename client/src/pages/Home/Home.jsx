import styles from './home.module.css';
import { IoSearchCircleSharp } from 'react-icons/io5';
import { GiCaravan } from 'react-icons/gi';
import { FaCreditCard } from 'react-icons/fa6';
import { GiCampingTent } from 'react-icons/gi';
import Blog from '../../components/blog/Blog';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import './styles.css';
import { useEffect, useState } from 'react';
import { IoIosClose } from 'react-icons/io';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { LicenseInfo } from '@mui/x-license';
import dayjs from 'dayjs';
import locations from '../../helpers/locations.json';
import axios from 'axios';
import { Link } from 'react-router-dom';

LicenseInfo.setLicenseKey(
  'e0d9bb8070ce0054c9d9ecb6e82cb58fTz0wLEU9MzI0NzIxNDQwMDAwMDAsUz1wcmVtaXVtLExNPXBlcnBldHVhbCxLVj0y'
);

const Home = () => {
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);
  const [isOpenLocation, setIsOpenLocation] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [blogs, setBlogs] = useState([]);
  const limit = 5;

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await axios.get(`/blog/allBlogs/?limit=${limit}`);
        setBlogs(res.data.blogs);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBlog();
  }, []);

  const handleSearchClick = async () => {
    try {
    } catch (error) {}
  };

  const formattedDate = (dateString) => {
    // Gelen tarih string'ini Date nesnesine çeviriyoruz.
    const date = new Date(dateString);

    // Date nesnesini "Gün Ay, Yıl" formatına çeviriyoruz.
    const formattedDate = date.toLocaleDateString('tr-TR', {
      day: 'numeric', // Günü sayısal olarak alırız.
      month: 'long', // Ay ismini uzun formatda alırız (Ocak, Şubat, ...)
      year: 'numeric', // Yılı sayısal olarak alırız.
    });
    return formattedDate;
  };

  const handleDateChange = (newDate) => {
    const startDate = newDate[0];
    const endDate = newDate[1];
    const updatedStartDate = dayjs(startDate).format('YYYY-MM-DD');
    const updatedEndDate = dayjs(endDate).format('YYYY-MM-DD');

    setStartDate(updatedStartDate);

    if (newDate[1] !== null) {
      setEndDate(updatedEndDate);
    }
  };

  const handleLocation = () => {
    setIsOpenDatePicker(false);
    setIsOpenLocation(!isOpenLocation);
  };

  const handleDatePicker = () => {
    setIsOpenLocation(false);
    setIsOpenDatePicker(!isOpenDatePicker);
  };

  const handleSelectLocation = (e) => {
    setSelectedCity(e.target.innerText);
  };

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
    console.log('açıldı');
  };

  const handleClose = () => {
    setClick(false);
    console.log('kapandı');
  };

  const Tiny = () => {
    return (
      <div className={styles.tinyContainer}>
        {/* <div className={styles.tinyTitle}>
          <span>VANCA AI</span>
        </div> */}
        <iframe
          loading='lazy'
          className='rounded-sm w-full h-[600px]'
          src='https://tiny.technology/vanca'
          frameBorder='0'
          title='Vanca AI'
        ></iframe>
      </div>
    );
  };

  const ViewPage = ({ handleClose }) => {
    return (
      <div className={styles.viewPageContainer}>
        <div>
          <div className={styles.tinyTitle}>
            <span>VANCA AI</span>
          </div>
          <button className={styles.closeButton}>
            <IoIosClose className={styles.closeIcon} onClick={handleClose} />
          </button>
        </div>
        <button className={styles.closeButton}>
          <IoIosClose className={styles.closeIcon} onClick={handleClose} />
        </button>
        <div className={styles.viewContent}>
          <Tiny />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <div className={styles.search}>
          <div className={styles.selecterContent}>
            <div className={styles.item} onClick={handleLocation}>
              <h3 className={styles.searchTitles}>Konum</h3>
              <span className={styles.searchLabel}>
                {selectedCity === '' ? 'Şehir Seçin' : selectedCity}
              </span>
              {isOpenLocation && (
                <div className={styles.location}>
                  <ul>
                    {locations.map((city) => {
                      return (
                        <li
                          onClick={handleSelectLocation}
                          className={
                            selectedCity === city.name
                              ? styles.activeLocation
                              : ''
                          }
                        >
                          {city.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
            <div
              className={styles.item}
              onClick={() => {
                handleDatePicker();
              }}
            >
              <h3 className={styles.searchTitles}>Alış Tarihi</h3>
              <span className={`${styles.input} ${styles.searchLabel}`}>
                {startDate !== null ? formattedDate(startDate) : 'Tarih Seçin'}
              </span>
            </div>
            <div
              className={styles.item}
              onClick={() => {
                handleDatePicker();
              }}
            >
              <h3 className={styles.searchTitles}>Teslim Tarihi</h3>
              <span className={`${styles.input} ${styles.searchLabel}`}>
                {endDate !== '' ? formattedDate(endDate) : 'Tarih Seçin'}
              </span>
            </div>
            <div className={styles.item}>
              <h3 className={styles.searchTitles}>Kişi Sayısı</h3>
              <input
                className={`${styles.input} ${styles.peopleCountInput}`}
                type='text'
                placeholder='Kişi sayısı ekle'
                value={peopleCount}
                onChange={(e) => setPeopleCount(e.target.value)}
              />
            </div>
          </div>
          <Link
            to='/caravans'
            state={{ selectedCity, startDate, endDate, peopleCount }}
          >
            <div className={styles.iconContainer}>
              <IoSearchCircleSharp />
            </div>
          </Link>

          {isOpenDatePicker && (
            <div className={styles.datePicker}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateRangeCalendar']}>
                  <DateRangeCalendar
                    disablePast
                    onChange={handleDateChange}
                  ></DateRangeCalendar>
                </DemoContainer>
              </LocalizationProvider>
            </div>
          )}
        </div>
      </div>

      <div className={styles.secondSection}>
        <h3 className={styles.secondSectionTitle}>VANCA'YA HOŞGELDİNİZ</h3>

        <p className={styles.text}>
          Vanca'da bir karavanla seyahat etmenin özgürlüğünü seviyoruz.
          Amacımız, insanların bir karavan veya motokaravanla seyahat etmenin
          keyfini ve eğlencesini kendi hızlarında paylaşmalarını sağlamaktır.
          Çünkü güzel ülkemizi keşfetmenin daha iyi bir yolu olmadığını
          düşünüyoruz. Türkiyedeki bir sonraki seyahatinizi bir karavanla
          karşılaştırın ve tasarruf edin.
        </p>

        <div className={styles.icons}>
          <div className={styles.secondIconContainer}>
            <GiCaravan className={styles.icon} />
            <span className={styles.stepNumber}>Adım 1</span>
            <p className={styles.stepText}>
              Mükemmel karavanı arayın, karşılaştırın ve bulun
            </p>
          </div>
          <div className={styles.secondIconContainer}>
            <FaCreditCard className={styles.icon} />
            <span className={styles.stepNumber}>Adım 2</span>
            <p className={styles.stepText}>Rezervasyon yapın</p>
          </div>
          <div className={styles.secondIconContainer}>
            <GiCampingTent className={styles.icon} />
            <span className={styles.stepNumber}>Adım 3</span>
            <p className={styles.stepText}>Seyehatinizin tadını çıkarın</p>
          </div>
        </div>
      </div>
      <div className={styles.thirdSection}>
        <h3 className={styles.thirdSectionTitle}>Karavan Blog</h3>
        <span className={styles.dec}>
          VANCA ekibinden ve kullanıcılarımızdan paylaşılan blog yazılarımız.
        </span>

        <div className={styles.blogs}>
          <Swiper
            slidesPerView={3}
            spaceBetween={-24}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[FreeMode, Pagination, Navigation]}
            className='mySwiper'
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                <Blog blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={styles.aiContainer} onClick={handleClick}>
        <div className={styles.ai}>
          <img src='/images/logo.jpg' alt='' />
        </div>
        <div className={styles.aiTitle}>VANCA AI</div>
      </div>
      {click && <ViewPage handleClose={handleClose} />}
    </div>
  );
};

export default Home;
