import React, { useContext, useRef, useState } from 'react';
import styles from './login.module.css';
import { Context } from '../../context/Contex';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };
  console.log(user);
  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <span className={styles.loginTitle}>GİRİŞ YAP</span>
        <span className={styles.loginText}>LUX'a Hoş geldin</span>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Email'
            className={styles.loginInput}
            ref={userRef}
          />
          <input
            type='password'
            placeholder='Şifre'
            className={styles.loginInput}
            ref={passwordRef}
          />

          <button className={styles.loginButton} type='submit'>
            Devam et
          </button>
        </form>
        <p className={styles.registerText}>
          Eğer bir hesabın yoksa,
          <Link className={styles.registerLink}> Kayıt ol</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
