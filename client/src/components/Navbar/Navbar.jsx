import styles from './navbar.module.css';
import { TfiWorld } from 'react-icons/tfi';
import { FaHeart } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { MdOutlineAccountBox } from 'react-icons/md';
import { IoIosLogOut } from 'react-icons/io';
import React, { useState, useRef, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/Contex';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(Context);

  const [userInfo, setUserInfo] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`/user/${user._id}`);
        setUserInfo(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const handleLogout = () => {
    // Tarayıcıdaki token'ı silme
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    // localStorage'daki kullanıcıyı silme
    localStorage.removeItem('user');
    // Kullanıcı durumunu güncelleme
    dispatch({ type: 'LOGOUT' });
    // Giriş sayfasına yönlendirme
    navigate('/login');
    window.location.reload();
    setIsModalOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

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
            {!user || !user._id ? (
              <div>
                <a href='login' className={styles.login}>
                  Login
                </a>
              </div>
            ) : (
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
            )}
          </ul>
          {isModalOpen && (
            <div className={styles.modal} ref={modalRef}>
              <div className={styles.modalItem} ref={buttonRef}>
                <MdOutlineAccountBox className={styles.icon} />
                <a href='/profile'>Hesabım</a>
              </div>
              <div
                className={styles.modalItem}
                ref={buttonRef}
                onClick={handleLogout}
              >
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
