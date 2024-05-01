import { useState } from 'react';
import styles from './singleBlog.module.css';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { BsTrash3 } from 'react-icons/bs';
import { CiEdit } from 'react-icons/ci';
const SingleBlog = () => {
  const [updateMode, setUpdateMode] = useState(false);
  return (
    <div className={styles['single-blog']}>
      <span className={styles.title}>Neden VANCA?</span>
      <div className={styles.update}>
        <span className={styles.edit}>
          <CiEdit />
        </span>
        <span className={styles.delete}>
          <BsTrash3 />
        </span>
      </div>
      <div className={styles['blog-container']}>
        <img
          className={styles.image}
          src="https://plus.unsplash.com/premium_photo-1681884705028-fe0dc759406a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
          alt=''
        />

        <div className={styles.items}>
          <span className={styles.item}>
            <MdOutlineRemoveRedEye />
            1996
          </span>
          <span className={styles.item}>
            <FaRegCalendarAlt />
            13 Mayıs 2023
          </span>
        </div>

        <div className={styles['blog-content']}>
          <span className={styles.subtitle}>
            Neden LUX’dan karavan kiralamalısınız?
          </span>
          <p className={styles['blog-entry']}>
            Karavan seyahati, özgürlük, macera ve keyif dolu anlarla dolu bir
            deneyim sunar. Ancak, seyahat deneyiminizi unutulmaz kılmak için
            doğru ekipmana sahip olmanız önemlidir. İşte bu noktada, LUX Karavan
            Kiralama hizmeti devreye giriyor ve size unutulmaz bir karavan
            macerası sunuyor. Peki, neden LUX'dan karavan kiralamanız
            gerektiğini merak ediyor musunuz? İşte cevabı:
            <br /> Kalite ve Konfor <br /> LUX, kaliteli ve konforlu karavanlar
            sunar. Her detay özenle düşünülerek tasarlanmıştır ve
            karavanlarımızda ihtiyacınız olan her şeyi bulabilirsiniz. Rahat
            yataklar, mutfak ekipmanları, temiz banyo olanakları ve daha
            fazlasıyla donatılmış karavanlarımızla konforlu bir seyahat deneyimi
            yaşarsınız. <br /> Çeşitlilik ve Seçenekler <br /> LUX, farklı
            ihtiyaçlara ve tercihlere hitap eden geniş bir karavan filosuna
            sahiptir. Tek kişilik gezilerden aile tatillerine kadar her türlü
            seyahat için uygun karavan seçenekleri mevcuttur. Size en uygun
            olanı seçme özgürlüğüne sahipsiniz. <br /> Güvenlik ve Bakım <br />{' '}
            LUX, müşterilerinin güvenliğini ve memnuniyetini ön planda tutar.
            Karavanlarımız düzenli olarak bakım ve temizlikten geçer, böylece
            güvenli ve sağlıklı bir seyahat deneyimi yaşamanızı sağlarız.
            Ayrıca, herhangi bir sorunla karşılaştığınızda 7/24 müşteri desteği
            sunarız. <br /> Esneklik ve Özgürlük <br /> LUX karavan kiralama
            hizmeti, size seyahat planlarınızda esneklik ve özgürlük sunar.
            Kendi hızınızda ve istediğiniz rotada seyahat edebilir, dilediğiniz
            zaman durup dinlenebilir veya yeni yerler keşfedebilirsiniz.
            Karavanınızı istediğiniz gibi kişiselleştirebilir ve kendi eviniz
            gibi hissedebilirsiniz. <br /> Uygun Fiyatlar
            <br /> LUX, kaliteli bir karavan deneyimi sunarken uygun fiyatlarla
            hizmet verir. Karavan kiralama ücretleri, seyahat süresine ve tercih
            ettiğiniz karavan modeline göre değişebilir, ancak genel olarak
            uygun ve rekabetçi fiyatlar sunarız. Sonuç olarak, LUX'dan karavan
            kiralamanız size unutulmaz bir seyahat deneyimi sunar. Kaliteli ve
            konforlu karavanlarımız, geniş seçeneklerimiz, güvenliğimiz ve uygun
            fiyatlarımızla size mükemmel bir karavan macerası yaşatmak için
            buradayız. Şimdi, hayalinizdeki karavan tatiline bir adım daha
            yakınsınız. LUX ile bugün rezervasyon yapın ve unutulmaz bir
            maceraya adım atın!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
