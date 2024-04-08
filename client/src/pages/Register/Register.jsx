import { useState } from 'react';
import styles from './register.module.css';
import { MdError } from 'react-icons/md';
import axios from 'axios';
const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('/auth/register', {
        firstName,
        lastName,
        birthday,
        email,
        password,
      });
      console.log(res);
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true);
      console.log(err);

      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className={styles.register}>
      <div className={styles.registerContainer}>
        <span className={styles.registerTitle}>KAYIT OL</span>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Ad'
            className={styles.registerInput}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Soyad'
            className={styles.registerInput}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type='date'
            className={styles.registerInput}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <input
            type='email'
            placeholder='test@test.com'
            className={styles.registerInput}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Şifre'
            className={styles.registerInput}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className={styles.registerButton} type='submit'>
            Devam et
          </button>
        </form>
        {error && (
          <span className={styles.error}>
            <MdError className={styles.errorIcon} />
            <span>Hatalı ya da eksik bilgi girildi.</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Register;
