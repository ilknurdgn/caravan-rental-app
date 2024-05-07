import React, { useEffect, useState } from 'react';
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
import { addDays } from 'date-fns';
import styles from './singleCaravan.module.css';
import { useParams } from 'react-router-dom';

const SingleCaravan = () => {
  const { id } = useParams();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: 'selection',
    },
  ]);
  const [isFavorited, setIsFavorited] = useState(false);
  const [caravanData, setCaravanData] = useState(null);

  useEffect(() => {
    const getSingleCaravan = async () => {
      try {
        const res = await axios.get(`/caravan/${id}`);
        setCaravanData(res.data);
      } catch (error) {
        console.error('Error fetching caravan data: ', error);
      }
    };
    getSingleCaravan();
  }, []);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className={styles['single-container']}>
      <div className={styles['caravan-info']}>
        <div className={styles.icons}>
          <div className={styles['right-side']}>
            <IoMdShare className={styles.shareIcon} />
            <p>Paylaş</p>
          </div>
          <div className={styles['right-side']}>
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
          {[1, 2, 3, 4].map((index) => (
            <img
              key={index}
              className={styles['images']}
              src='https://images.unsplash.com/photo-1592351763700-b9b35a6465ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt=''
            />
          ))}
        </div>
      </div>

      <div className={styles['description-section']}>
        <div className={styles['caravan-left-side']}>
          <span>{caravanData?.title}</span>
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

          <ul className={styles.review}>
            <li>
              <IoMdStar className={styles['star-icon']} /> 4,83 · 1,800
              değerlendirme
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
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>

          <div className={styles.line}></div>

          <div className={styles.calendar}>
            <DateRangePicker
              className={styles.chooseDate}
              onChange={(item) => setState([item.selection])}
              showSelectionPreview={true}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction='horizontal'
            />
          </div>
        </div>

        <div className={styles['caravan-right-side']}>
          <div>
            <div className={styles['total-info']}>
              <p className={styles.price}>
                {caravanData?.dailyPrice}₺<span>gün</span>
              </p>
              <p className={styles['total-rating']}>
                <IoMdStar className={styles.icon} />
                4.83 · 1,800 değerlendirme
              </p>
            </div>
            <div className={styles['check-container']}>
              <div className={styles.reservation}>
                <div className={styles.check}>
                  <div className={styles.checkin}>
                    <span>BAŞLANGIÇ</span>
                    <span>8/5/2023</span>
                  </div>
                  <div className={styles.checkout}>
                    <span>BİTİŞ</span>
                    <span>12/5/2023</span>
                  </div>
                </div>
                <div className={styles.guest}>
                  <div className={styles['select-guests']}>
                    <span>MİSAFİR</span>
                    <span>1 misafir</span>
                  </div>
                  <div className={styles.moreIcon}>
                    {' '}
                    <MdExpandMore className={styles.moreIcon} />{' '}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <button className={styles['reservation-button']} type='submit'>
                Devam et
              </button>
              <span>Henüz ücretlendirilmeyeceksiniz</span>
            </div>
            <div className={styles['caravan-payment']}>
              <div className={styles['payment-info']}>
                <div className={styles['total-price-info']}>
                  {caravanData?.dailyPrice}₺ x 3 gün
                </div>
                <div className={styles['total-price']}>$9000</div>
              </div>
              <div className={styles['payment-line']}></div>
              <div className={styles['before-tax']}>
                <div className={styles['total-price-info']}>
                  Vergi̇ öncesi̇ toplam
                </div>
                <div className={styles['total-price']}>$300</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.line}></div>
      {/* COMMENT SECTION */}
      <Comments />
    </div>
  );
};

export default SingleCaravan;
