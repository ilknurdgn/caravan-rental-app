import { CiShare2 } from 'react-icons/ci';
import { FaRegHeart } from 'react-icons/fa6';
import { RiCaravanLine } from 'react-icons/ri';
import { PiGasPump } from 'react-icons/pi';
import { IoSettingsOutline } from 'react-icons/io5';
import { GoPeople } from 'react-icons/go';
import { IoMdStar } from 'react-icons/io';
import styles from './singleCaravan.module.css';
import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // ana css dosyası
import 'react-date-range/dist/theme/default.css'; // tema css dosyası
import { addDays } from 'date-fns';
import { createTheme } from '@mui/material/styles';
import Comments from '../../components/comments/Comments';

const SingleCaravan = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: 'selection',
    },
  ]);

  return (
    <div className={styles['single-container']}>
      <div className={styles['caravan-info']}>
        <span className={styles['caravan-title']}>Motocaravan - Antalya</span>
        <div className={styles.icons}>
          <div className={styles['right-side']}>
            <CiShare2 className={styles.icon} />
            <p>Paylaş</p>
          </div>
          <div className={styles['right-side']}>
            <FaRegHeart className={styles.icon} />
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
        <div className={styles['caravan-right-side']}>300tl</div>
      </div>

      {/* COMMENT SECTION */}
      <Comments />
    </div>
  );
};

export default SingleCaravan;
