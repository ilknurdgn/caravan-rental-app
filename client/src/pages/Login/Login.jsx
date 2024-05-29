import React, { useContext, useRef, useState, useEffect } from 'react';
import styles from './login.module.css';
import { Context } from '../../context/Contex';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RiErrorWarningLine } from 'react-icons/ri';

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showErrors, setShowErrors] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    setEmailError('');
    setPasswordError('');
    setShowErrors(true);
    try {
      const res = await axios.post('/auth/login', {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      console.log('giriş yaptın');
      navigate('/');
    } catch (err) {
      if (err.response && err.response.status === 400) {
        const errorMessage = err.response.data;
        if (errorMessage === 'There is no such email!') {
          setEmailError(
            ' Böyle bir kullanıcı bulunamadı. Emaili kontol ediniz!'
          );
        } else if (errorMessage === 'Password not matched!') {
          setPasswordError('Geçersiz şifre!');
        }
      } else {
        setEmailError('Böyle bir kullanıcı bulunamadı');
      }
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowErrors(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [emailError, passwordError]);

  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <span className={styles.loginTitle}>GİRİŞ YAP</span>
        <span className={styles.loginText}>LUX'a Hoş geldin</span>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Email'
            className={`${styles.loginInput} ${
              showErrors && emailError && styles.errorInput
            }`}
            ref={userRef}
          />

          <input
            type='password'
            placeholder='Şifre'
            className={`${styles.loginInput} ${
              showErrors && passwordError && styles.errorInput
            }`}
            ref={passwordRef}
          />

          <button className={styles.loginButton} type='submit'>
            Devam et
          </button>
        </form>

        <p className={styles.registerText}>
          Eğer bir hesabın yoksa,
          <Link to='/register' className={styles.registerLink}>
            {' '}
            Kayıt ol
          </Link>
        </p>
        {showErrors && emailError && (
          <p className={styles.errorText}>
            {' '}
            <RiErrorWarningLine className={styles.errorIcon} /> {emailError}
          </p>
        )}
        {showErrors && passwordError && (
          <p className={styles.errorText}>
            <RiErrorWarningLine className={styles.errorIcon} /> {passwordError}
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
