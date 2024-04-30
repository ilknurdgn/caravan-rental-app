import styles from './blog.module.css';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

const Blog = () => {
  return (
    <div className={styles['blog-container']}>
      <span className={styles.title}>Neden VANCA?</span>
      <img
        className={styles.image}
        src='https://plus.unsplash.com/premium_photo-1681884705028-fe0dc759406a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt=''
      />
      <p className={styles['blog-text']}>
        Herkesin hayatta farklı amaçları, hedefleri ve tutkuları vardır. Bu
        farklılıklar, insanları benzersiz kılar ve her birimizin yaşam
        yolculuğunda farklı yönler aramasına yol açar. Peki, bu farklı
        nedenlerin temelinde yatan gerçek nedir? Her insanın yaşamında kendine
        özgü deneyimler, değerler ve inançlar vardır. Bu deneyimler, insanların
        neye değer verdiğini, hangi hedeflere yönlendiklerini ve neden bu
        hedeflere ulaşmak istediklerini belirler. Kimi insanlar ailelerini mutlu
        etmek için çabalar, kimi insanlar kendi kişisel başarılarını arar, kimi
        insanlar ise topluma hizmet etmek için çalışır. Herkesin nedenleri
        farklıdır çünkü herkesin yaşamı farklıdır. Bazıları için mutluluk, maddi
        zenginlikte, kariyer başarısında veya sosyal ilişkilerde bulunabilirken,
        diğerleri için mutluluk, iç huzurda, ruhsal denge de olabilir. Herkesin
        nedenleri farklıdır çünkü mutluluk kavramı herkes için farklıdır. Bir
        kişi için mutluluk, bir diğeri için önemsiz olabilir ve bu tamamen
        kişisel tercihlere, değerlere ve deneyimlere bağlıdır. Sonuç olarak,
        herkesin nedenleri farklıdır çünkü her insanın yaşamı benzersizdir.
        Hayatta neyi başarmak istediğimiz, neye değer verdiğimiz ve neden bu
        hedeflere ulaşmak istediğimiz kişisel deneyimlerimiz, değerlerimiz ve
        inançlarımız tarafından belirlenir. Bu nedenle, herkesin nedenleri
        farklıdır, ancak önemli olan her birimizin kendi nedenlerimizi anlamak
        ve onlara sadık kalmaktır.
      </p>
      <div className={styles['down-section']}>
        <span>13 Mayıs 2023</span>

        <Link to='/blog/:id' className={styles.more}>
          DEVAMI <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
};

export default Blog;
