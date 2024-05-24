import styles from './navbar.module.css';
import { TfiWorld } from 'react-icons/tfi';
import { FaHeart } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { useState } from 'react';
import { MdOutlineAccountBox } from 'react-icons/md';
import { IoIosLogOut } from 'react-icons/io';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <h1>
            <a href='/'>VANCA</a>
          </h1>
        </div>

        <div>
          <ul className={styles['nav-center']}>
            <li>
              <a href='/how-to-rent'>Nasıl Kiralanır?</a>
            </li>
            <li>
              <a href='/blogs'>Blog</a>
            </li>
            <li className={styles.fav}>
              <FaHeart className={styles.heart} />
              <a href='/favorites'>Favorilerim</a>
            </li>
          </ul>
        </div>

        <div className={styles['nav-end-container']}>
          <ul className={styles['nav-end']}>
            <li className={styles.world}>
              <TfiWorld />
            </li>
            <div
              className={styles.user}
              onClick={() => {
                setIsModalOpen(!isModalOpen);
              }}
            >
              <li>
                <BsThreeDots className={styles.dots} />
              </li>
              <li>
                <FaUserCircle className={styles.circle} />
              </li>
            </div>
          </ul>
          {isModalOpen && (
            <div className={styles.modal}>
              <div className={styles.modalItem}>
                <MdOutlineAccountBox className={styles.icon} />
                <a href='/profile'>Hesabım</a>
              </div>
              <div className={styles.modalItem}>
                <IoIosLogOut className={styles.icon} />
                Çıkış Yap
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
