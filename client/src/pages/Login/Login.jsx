import React from "react";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <span className={styles.loginTitle}>LOGIN</span>
        <span className={styles.loginText}>Welcome to LUX</span>
        <form className={styles.form}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username..."
            className={styles.loginInput}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password..."
            className={styles.loginInput}
          />

          <button className={styles.loginButton} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
