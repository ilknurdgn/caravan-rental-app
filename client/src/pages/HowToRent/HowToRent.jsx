import styles from './howToRent.module.css';

const HowToRent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nasıl Kiralanır?</h1>
      <p>
        LUX olarak siz değerli misafirlerimizin konforu ve memnuniyeti için
        buradayız. Karavan deneyiminizi en iyi şekilde yaşamınızı sağlamakiçin
        sürekli çalışıyor ve size en kaliteli hizmeti sunmayı amaçlıyoruz.
      </p>
      <div className={styles.info}>
        <img className={styles.img} src='/images/how-to-rent-1.jpg' alt='' />
        <p className={styles.text}>
          <h2 className={styles.subtitle}>Garantili Rezervasyon ve Ödeme</h2>
          Garantili Rezervasyon ile, Lux’un onayladığı sigortalı araçlarımızı
          güvenli ödeme sistemleri ile kolayca kiralayabilirsiniz. Ödemenizi
          yaptıktan sonra, rezervasyonunuzu istediğiniz zaman iptal
          edebilirsiniz.
        </p>
      </div>

      <p>
        Üyelik bedeli veya ek hizmet bedeli gibi ekstralarla uğraşmak
        istemiyoruz. Lux olarak, size en uygun fiyatlarla kaliteli hizmet
        sunmayı amaçlıyoruz.
      </p>

      <div className={styles.info}>
        <p className={styles.text}>
          <h2 className={styles.subtitle}>
            İptal Politikası ve Müşteri Desteği
          </h2>
          Garantili rezervasyon ile ödemenizi yaptıktan sonra, iptal
          politikasına uygun olarak dilediğiniz zaman rezervasyonunu iptal
          edebilirsiniz ve iptal politikamız çerçevesinde paranızı geri
          alabilirsiniz. Rezervasyon dökümündeki şartları dikkatli incelemeyi
          unutmayın. Karavan sahipleri, kiralama ile ilgili olarak sizden bazı
          ek bilgiler talep edebilirler, iletişim kanallarını açık tutmaya
          gayret edin.
        </p>
        <img className={styles.img} src='/images/how-to-rent-2.jpg' alt='' />
      </div>

      <div className={styles.info}>
        <img className={styles.img} src='/images/how-to-rent-3.jpg' alt='' />
        <p className={styles.text}>
          <h2 className={styles.subtitle}>Nelere Dikkat Etmeliyim?</h2>
          <ul className={styles.list}>
            <li>
              Ödemenizi yaptıktan sonra, karavan sahibine varsa sorularınızı
              iletebilirsiniz.
            </li>
            <li>
              Rezervasyon günü yanınıza almanız gereken malzemeleri önceden
              belirleyerek bir liste oluşturun.
            </li>
            <li>
              Karavanı teslim alırken depozito ödemenizi unutmayın, yanınızda
              nakit veya kredi kartı bulundurun.
            </li>
          </ul>
        </p>
      </div>
      <p className={styles['result-text']}>
        Bizlere her zaman iletişim adreslerimizden ulaşabilirsiniz, sormak
        istediğiniz birşey olursa size yardım için buradayız.
      </p>
    </div>
  );
};

export default HowToRent;
