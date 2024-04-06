import React, { useState } from "react";
import styles from "./login.module.css";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <span className={styles.loginTitle}>GİRİŞ YAP</span>
        <span className={styles.loginText}>LUX'a Hoş geldin</span>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            className={styles.loginInput}
          />
          <input
            type="password"
            placeholder="Şifre"
            className={styles.loginInput}
          />

          <button className={styles.loginButton} type="submit">
            Devam et
          </button>
        </form>
        <p className={styles.registerText}>
          Eğer bir hesabın yoksa,
          <span> Kayıt ol</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
