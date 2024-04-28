import { IoMdShare } from 'react-icons/io';
import { FaRegHeart } from 'react-icons/fa6';
import { RiCaravanLine } from 'react-icons/ri';
import { PiGasPump } from 'react-icons/pi';
import { IoSettingsOutline } from 'react-icons/io5';
import { GoPeople } from 'react-icons/go';
import { IoMdStar } from 'react-icons/io';
import React, { useState } from 'react';
import styles from './singleCaravan.module.css';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // ana css dosyası
import 'react-date-range/dist/theme/default.css'; // tema css dosyası
import { addDays } from 'date-fns';
import Comments from '../../components/comments/Comments';
import { MdExpandMore } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';

const SingleCaravan = () => {
  const [guest, setGuest] = useState('1');
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: 'selection',
    },
  ]);

  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className={styles['single-container']}>
      <div className={styles['caravan-info']}>
        <span className={styles['caravan-title']}>Motocaravan - Antalya</span>
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

      {/* DESCRIPTION SECTION */}
      <div className={styles['description-section']}>
        <div className={styles['caravan-left-side']}>
          <span>2023 Yapımı 4+ Kişilik, Kiralık Motokaravan</span>
          <ul className={styles.features}>
            <li>
              <RiCaravanLine /> <p>Motokaravan</p>
            </li>
            <li>
              <PiGasPump /> <p>Dizel</p>
            </li>
            <li>
              <IoSettingsOutline /> <p>Manuel</p>
            </li>
            <li>
              <GoPeople /> <p> 4 Kişilik</p>
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
            <div className={styles.owner}> Karavan Sahibi: Işınnur Günay</div>
          </div>

          <div className={styles.line}></div>

          <div className={styles.description}>
            <span>AÇIKLAMA</span>
            <p>
              Antalya, Döşemealtı bölgesinde bulunan Kiralık Motokaravan; <br />
              <ul>
                <li className={styles.mn}>2016 modeldir.</li>
                <li> 2023 yılında karavan yapılmıştır.</li>
                <li>
                  Dizel yakıt kullanılır ve Manuel vites özelliği bulunur.
                </li>
                <li>Karavanımız toplam 4 kişiliktir.</li>
                <li>Sigara kullanımına uygun değildir.</li>
                <li>Evcil hayvan kabul edilmemektedir.</li>
                <li>Kiralık karavanımızın kiralama kaskosu bulunmaktadır.</li>
                <li> Karavanımız B tipi ehliyet ile kullanılabilmektedir.</li>
              </ul>
            </p>
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
                3.000₺<span>gece</span>
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
                    <span>GİRİŞ</span>
                    <span>8/5/2023</span>
                  </div>
                  <div className={styles.checkout}>
                    <span>ÇIKIŞ</span>
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
                <div className={styles['total-price-info']}>$3000 x 3 gece</div>
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
