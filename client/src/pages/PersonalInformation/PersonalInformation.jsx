import React, { useState, useEffect, useContext } from 'react';
import styles from './personalInformation.module.css';
import { differenceInDays } from 'date-fns';
import { Context } from './../../context/Contex';
import axios from 'axios';

const user = {
  _id: '1',
  firstName: 'ufuk can',
  lastName: 'kurt',
  email: 'ufuk',
  password: '1234',
};

const PersonalInformation = () => {
  const [isActiveName, setIsActiveName] = useState(false);
  const [isActiveMail, setIsActiveMail] = useState(false);
  const [isActivePhone, setIsActivePhone] = useState(false);
  const [isActivePassword, setIsActivePassword] = useState(false);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordAgain, setNewPasswordAgain] = useState('');

  const { user } = useContext(Context);

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`/user/${user._id}`);
      setUserData(res.data);
      setName(res.data.firstName);
      setSurname(res.data.lastName);
      setEmail(res.data.email);
      console.log(res.data);
    };
    getUser();
  }, []);

  const handleSubmitName = async () => {
    try {
      await axios.put('/user/update', {
        firstName: name,
        lastName: surname,
      });
      setUserData({ name, surname });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    setIsActiveName(false);
  };

  const handleSubmitEmail = async () => {
    try {
      await axios.put('/user/update', {
        email: email,
      });
      setUserData({ email });
    } catch (error) {
      console.log(error);
    }
    setIsActiveMail(false);
  };

  const handleVisibleName = (e) => {
    if (isActiveName === false) {
      setIsActiveName(true);
    } else {
      setIsActiveName(false);
    }
  };

  const handleVisibleMail = (e) => {
    if (isActiveMail === false) {
      setIsActiveMail(true);
    } else {
      setIsActiveMail(false);
    }
  };

  const handleVisiblePhone = (e) => {
    if (isActivePhone === false) {
      setIsActivePhone(true);
    } else {
      setIsActivePhone(false);
    }
  };

  const handleVisiblePassword = (e) => {
    if (isActivePassword === false) {
      setIsActivePassword(true);
    } else {
      setIsActivePassword(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.navigationPath}>
        <a href='/profile'>Hesap</a>
        <span>&gt;</span>
        <span>Kişisel Bilgiler</span>
      </div>
      <span className={styles.title}>Kişisel Bilgiler</span>
      <div className={styles.infos}>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <span>Ad Soyad</span>
            <button className={styles.button} onClick={handleVisibleName}>
              {isActiveName ? `İptal Et` : `Düzenle`}
            </button>
          </div>

          {isActiveName ? (
            <div>
              <div className={styles.content}>
                Resmî kimliğinizdeki adla eşleşmesine dikkat edin.
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputContent}>
                  <div className={styles.ad}>Ad</div>
                  <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className={styles.inputContent}>
                  <div className={styles.ad}>Soyad</div>
                  <input
                    type='text'
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>
              </div>
              <div className={styles.saveButton} onClick={handleSubmitName}>
                Kaydedin
              </div>
            </div>
          ) : (
            <span className={styles.content}>
              {userData.firstName} {userData.lastName}
            </span>
          )}
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <span>E-posta adresi</span>
            <button className={styles.button} onClick={handleVisibleMail}>
              {isActiveMail ? `İptal Et` : `Düzenle`}
            </button>
          </div>
          {isActiveMail ? (
            <div>
              <div className={styles.content}>
                Her zaman erişebileceğiniz bir adres kullanın.
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputContent}>
                  <div className={styles.ad}>E-posta Adresi</div>
                  <input
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.saveButton} onClick={handleSubmitEmail}>
                Kaydedin
              </div>
            </div>
          ) : (
            <span className={styles.content}>{userData.email}</span>
          )}
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <span>Telefon Numarası</span>
            <button className={styles.button} onClick={handleVisiblePhone}>
              {isActivePhone ? `İptal Et` : `Düzenle`}
            </button>
          </div>
          {isActivePhone ? (
            <div>
              <div className={styles.content}>Numaranızı girin.</div>
              <div className={styles.inputContainer}>
                <div className={styles.inputContent}>
                  <div className={styles.ad}>Telefon Numarası</div>
                  <input
                    type='text'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.saveButton}>Kaydedin</div>
            </div>
          ) : (
            <span className={styles.content}>---</span>
          )}
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <span>Parola</span>
            <button className={styles.button} onClick={handleVisiblePassword}>
              {isActivePassword ? `İptal Et` : `Güncelle`}
            </button>
          </div>
          {isActivePassword ? (
            <div>
              <div className={styles.content}>Güçlü bir parola oluşturun.</div>
              <div className={styles.passwordInputContainer}>
                {/* <div className={styles.passwordInput}>
                  <div>Mevcut Parola</div>
                  <div className={styles.inputContent}>
                    <input
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div> */}

                <div>
                  <div>Yeni Parola</div>
                  <div className={styles.inputContent}>
                    <input
                      type='text'
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <div>Parolayı Onaylayın</div>
                  <div className={styles.inputContent}>
                    <input
                      type='text'
                      value={newPasswordAgain}
                      onChange={(e) => setNewPasswordAgain(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.passworSaveButton}>
                Parolayı Güncelleyin
              </div>
            </div>
          ) : (
            <span className={styles.content}>****</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
