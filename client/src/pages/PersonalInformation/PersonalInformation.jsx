import React, { useState } from 'react';
import styles from './personalInformation.module.css';
import { differenceInDays } from 'date-fns';

const PersonalInformation = () => {
  const [isActiveName, setIsActiveName] = useState(false);
  const [isActiveMail, setIsActiveMail] = useState(false);
  const [isActivePhone, setIsActivePhone] = useState(false);
  const [isActivePassword, setIsActivePassword] = useState(false);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleChangeName = (e) => {
    if (isActiveName === false) {
      setIsActiveName(true);
    } else {
      setIsActiveName(false);
    }
  };

  const handleChangeMail = (e) => {
    if (isActiveMail === false) {
      setIsActiveMail(true);
    } else {
      setIsActiveMail(false);
    }
  };

  const handleChangePhone = (e) => {
    if (isActivePhone === false) {
      setIsActivePhone(true);
    } else {
      setIsActivePhone(false);
    }
  };

  const handleChangePassword = (e) => {
    if (isActivePassword === false) {
      setIsActivePassword(true);
    } else {
      setIsActivePassword(false);
    }
  };

  console.log('name:', name);
  console.log('surnamename:', surname);

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
            <button className={styles.button} onClick={handleChangeName}>
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
              <div className={styles.saveButton}>Kaydedin</div>
            </div>
          ) : (
            <span className={styles.content}>Test Test</span>
          )}
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <span>E-posta adresi</span>
            <button className={styles.button} onClick={handleChangeMail}>
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
                  <input type='text' />
                </div>
              </div>

              <div className={styles.saveButton}>Kaydedin</div>
            </div>
          ) : (
            <span className={styles.content}>t*****t@gmail.com</span>
          )}
        </div>

        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <span>Telefon Numarası</span>
            <button className={styles.button} onClick={handleChangePhone}>
              {isActivePhone ? `İptal Et` : `Düzenle`}
            </button>
          </div>
          {isActivePhone ? (
            <div>
              <div className={styles.content}>Numaranızı girin.</div>
              <div className={styles.inputContainer}>
                <div className={styles.inputContent}>
                  <div className={styles.ad}>Telefon Numarası</div>
                  <input type='text' />
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
            <button className={styles.button} onClick={handleChangePassword}>
              {isActivePassword ? `İptal Et` : `Güncelle`}
            </button>
          </div>
          {isActivePassword ? (
            <div>
              <div className={styles.content}>Güçlü bir parola oluşturun.</div>
              <div className={styles.passwordInputContainer}>
                <div className={styles.passwordInput}>
                  <div>Mevcut Parola</div>
                  <div className={styles.inputContent}>
                    <input type='text' />
                  </div>
                </div>

                <div>
                  <div>Yeni Parola</div>
                  <div className={styles.inputContent}>
                    <input type='text' />
                  </div>
                </div>

                <div>
                  <div>Parolayı Onaylayın</div>
                  <div className={styles.inputContent}>
                    <input type='text' />
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
