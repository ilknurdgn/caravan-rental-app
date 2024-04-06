import React, { useState } from "react";
import styles from "./login.module.css";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <span className={styles.loginTitle}>LOGIN</span>
        <span className={styles.loginText}>Welcome to LUX</span>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            className={styles.loginInput}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.loginInput}
          />

          <button className={styles.loginButton} type="submit">
            Continue
          </button>
        </form>
        <p className={styles.registerText}>
          If you don’t have an account,
          <span> Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
