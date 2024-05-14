import React from 'react';
import styles from './profile.module.css';
import { TbUserEdit } from 'react-icons/tb';
import { FaRegCreditCard } from 'react-icons/fa6';
import { FaRegPaste } from 'react-icons/fa6';
import { FaRegAddressCard } from 'react-icons/fa6';

const pageInfos = [
  {
    id: 1,
    icon: <TbUserEdit className={styles.icon} />,
    title: 'Kişisel Bilgiler',
    text: 'Kişisel bilgilerinizi ve size nasıl ulaşabileceğimizi seçin',
  },
  {
    id: 2,
    icon: <FaRegCreditCard className={styles.icon} />,
    title: 'Kayıtlı Kartlar',
    text: 'Kaydettiğiniz kartları bu kısımda bulabilirsiniz.',
  },
  {
    id: 1,
    icon: <FaRegPaste className={styles.icon} />,
    title: 'Kiralama Geçmişi',
    text: 'Kiralama bilgilerinize burdan ulaşabilirsiniz.',
  },
  {
    id: 1,
    icon: <FaRegAddressCard className={styles.icon} />,
    title: 'Ehliyet Bilgileri',
    text: 'Ehliyet bilgilerinizi yükleyiniz.',
  },
];

const Profile = () => {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.userName}>Test Test </span>
        <span className={styles.email}>test@test.com</span>
      </div>
      <div>
        <h2 className={styles.title}>Hesap</h2>
      </div>

      <div className={styles.cards}>
        {pageInfos.map((item) => {
          return (
            <div className={styles.card}>
              <div>{item.icon}</div>
              <div className={styles.cardTitle}>
                <h4>{item.title}</h4>
              </div>
              <div className={styles.text}>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;