import { useEffect, useState } from 'react';
import styles from './register.module.css';
import { RiErrorWarningLine } from 'react-icons/ri';
import axios from 'axios';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Boş değer kontrolü
    if (!firstName || !lastName || !birthday || !email || !password) {
      setErrorMessage('Lütfen tüm alanları doldurun.');
      setError(true);
      return;
    }

    // Şifre uzunluğu ve karmaşıklık kontrolü
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{10,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        'Şifreniz en az 10 karakter olmalı, en az 1 büyük harf, en az 1 küçük harf ve en az 1 rakam içermelidir.'
      );
      setError(true);
      return;
    }
    console.log(passwordRegex.test(password));
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
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setError(false);
      setErrorMessage('');
    }, 3000);

    return () => clearTimeout(timer);
  }, [error]); // error durumuna bağlı olarak yeniden render edilecek

  return (
    <div className={styles.register}>
      <div className={styles.registerContainer}>
        <span className={styles.registerTitle}>KAYIT OL</span>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Ad'
            className={styles.registerInput}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Soyad'
            className={styles.registerInput}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type='date'
            className={styles.registerInput}
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <input
            type='email'
            placeholder='test@test.com'
            className={styles.registerInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Şifre'
            className={styles.registerInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className={styles.registerButton} type='submit'>
            Devam et
          </button>
        </form>
        {error && (
          <span className={styles.error}>
            <RiErrorWarningLine className={styles.errorIcon} />
            <span>{errorMessage}</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Register;
