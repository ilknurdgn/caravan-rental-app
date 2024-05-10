import styles from './home.module.css';
import { IoSearchCircleSharp } from 'react-icons/io5';
import { GiCaravan } from 'react-icons/gi';
import { FaCreditCard } from 'react-icons/fa6';
import { GiCampingTent } from 'react-icons/gi';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <div className={styles.search}>
          <div className={styles.selecterContent}>
            <div className={styles.item}>
              <h3 className={styles.searchTitles}>Konum</h3>
              <input
                className={styles.input}
                type='text'
                placeholder='Nereye gidiyorsun?'
              />
            </div>
            <div className={styles.item}>
              <h3 className={styles.searchTitles}>Alış Tarihi</h3>
              <input
                className={styles.input}
                type='text'
                placeholder='Tarih ekle'
              />
            </div>
            <div className={styles.item}>
              <h3 className={styles.searchTitles}>Teslim Tarihi</h3>
              <input
                className={styles.input}
                type='text'
                placeholder='Tarih ekle'
              />
            </div>
            <div className={styles.item}>
              <h3 className={styles.searchTitles}>Kişi Sayısı</h3>
              <input
                className={styles.input}
                type='text'
                placeholder='Kişi sayısı ekle'
              />
            </div>
          </div>
          <div className={styles.iconContainer}>
            <IoSearchCircleSharp />
          </div>
        </div>
      </div>

      <div className={styles.secondSection}>
        <h3 className={styles.secondSectionTitle}>VANCA'YA HOŞGELDİNİZ</h3>

        <p className={styles.text}>
          Vanca'da bir karavanla seyahat etmenin özgürlüğünü seviyoruz.
          Amacımız, insanların bir karavan veya motokaravanla seyahat etmenin
          keyfini ve eğlencesini kendi hızlarında paylaşmalarını sağlamaktır.
          Çünkü güzel ülkemizi keşfetmenin daha iyi bir yolu olmadığını
          düşünüyoruz. Türkiyedeki bir sonraki seyahatinizi bir karavanla
          karşılaştırın ve tasarruf edin.
        </p>

        <div className={styles.icons}>
          <div className={styles.secondIconContainer}>
            <GiCaravan className={styles.icon} />
            <span className={styles.stepNumber}>Adım 1</span>
            <p className={styles.stepText}>
              Mükemmel karavanı arayın, karşılaştırın ve bulun
            </p>
          </div>
          <div className={styles.secondIconContainer}>
            <FaCreditCard className={styles.icon} />
            <span className={styles.stepNumber}>Adım 2</span>
            <p className={styles.stepText}>Rezervasyon yapın</p>
          </div>
          <div className={styles.secondIconContainer}>
            <GiCampingTent className={styles.icon} />
            <span className={styles.stepNumber}>Adım 3</span>
            <p className={styles.stepText}>Seyehatinizin tadını çıkarın</p>
          </div>
        </div>
      </div>
      <div className={styles.thirdSection}>
        <h3 className={styles.thirdSectionTitle}>Karavan Blog</h3>
      </div>
    </div>
  );
};

export default Home;
