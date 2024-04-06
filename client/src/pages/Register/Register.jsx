import styles from './register.module.css';
const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
          />
          <input
            type='password'
            placeholder='Soyad'
            className={styles.registerInput}
          />
          <input type='date' className={styles.registerInput} />
          <input
            type='email'
            placeholder='test@test.com'
            className={styles.registerInput}
          />
          <input
            type='password'
            placeholder='Şifre'
            className={styles.registerInput}
          />

          <button className={styles.registerButton} type='submit'>
            Devam et
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
