import React from 'react';
import { TfiWorld } from 'react-icons/tfi';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import styles from './footer.module.css';
import About from '../../pages/About/About';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.infos}>
        <ul>
          <li className={styles.content}>VANCA</li>
          <a href='/about'>
            <li>Hakkımızda</li>
          </a>
          <li>İletişim</li>
          <li>Hukuk Politikası</li>
          <li>KVKK </li>
          <li>KVKK Formu</li>
        </ul>

        <ul>
          <li className={styles.content}>Sık Sorulan Sorular</li>
          <a href='/blogs'>
            <li>Karavan Blog</li>
          </a>
          <a href='/how-to-rent'>
            <li>Nasıl Kiralanır?</li>
          </a>
        </ul>

        <ul>
          <li className={styles.content}>Karavanlar</li>
          <a href='/caravans'>
            <li>Tüm Karavanlar</li>
          </a>
        </ul>

        <ul>
          <li className={styles.content}>Destek</li>
          <li>Yardım Merkezi</li>
        </ul>
      </div>
      <div className={styles['footer-credits']}>
        <ul className={styles['left-side']}>
          <li>© 2024 VANCA</li>
          <li>Tüm Hakları Saklıdır | v1.0.0</li>
        </ul>

        <ul className={styles['right-side']}>
          <li>
            <TfiWorld className={styles.languages} />
            Türkçe(TR)
          </li>

          <li>₺ TRY</li>
          <li className={styles.icons}>
            <FaFacebookSquare className={styles.icon} />
            <FaSquareXTwitter className={styles.icon} />
            <FaInstagramSquare className={styles.icon} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
