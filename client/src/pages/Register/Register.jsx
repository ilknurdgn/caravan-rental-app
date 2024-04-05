import styles from "./register.module.css";
const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.register}>
      <div className={styles.registerContainer}>
        <span className={styles.registerTitle}>REGISTER</span>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First name"
            className={styles.registerInput}
          />
          <input
            type="password"
            placeholder="Last name"
            className={styles.registerInput}
          />
          <input
            type="date"
            placeholder="birthday"
            className={styles.registerInput}
          />
          <input
            type="email"
            placeholder="hello@hello.com"
            className={styles.registerInput}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.registerInput}
          />

          <button className={styles.registerButton} type="submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
