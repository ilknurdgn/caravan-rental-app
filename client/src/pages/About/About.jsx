import styles from './about.module.css';
const About = () => {
  return (
    <div className={styles.about}>
      <h1 className={styles.title}>Hakkımızda</h1>
      <p>
        VANCA, doğa severlerin, macera tutkunlarının ve özgürlüğün peşinde
        koşanların buluşma noktasıdır. Modern yaşamın getirdiği karmaşadan
        uzaklaşmak isteyenler için tasarlanmış bir uygulamadır. Biz, karavan
        kültürünü ve seyahat özgürlüğünü tutkuyla benimsemiş bir ekibiz. VANCA,
        kullanıcılarına unutulmaz seyahat deneyimleri planlama ve gerçekleştirme
        imkanı sunar.
      </p>
      <div className={styles.info}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src='/images/about-1.jpg' alt='' />
        </div>

        <p className={styles.text}>
          Uygulamamız, kullanıcı dostu arayüzü ile karavan sahiplerine ve
          karavan hayali kuranlara hizmet eder. Karavan rotaları, kamp alanları,
          teknik destek noktaları ve kullanıcıların birbirleriyle deneyimlerini
          paylaşabilecekleri bir platform sunuyoruz. Amacımız, karavan kültürünü
          daha erişilebilir ve keyifli hale getirmek.
        </p>
      </div>

      <div className={styles.info}>
        <p className={styles.text}>
          Doğa, her kararımızın ve her adımımızın merkezinde yer alıyor. Yeşilin
          ve doğanın korunması, bizim için sadece bir tutku değil, aynı zamanda
          bir sorumluluktur. VANCA olarak, doğayı koruma ve sürdürülebilir
          yaşamı destekleme misyonumuzu her zaman ön planda tutuyoruz.Maceradan
          maceraya koşarken, doğanın içinde huzuru ve özgürlüğü yaşamak isteyen
          herkesi davet ediyoruz.
        </p>
        <img className={styles.img} src='/images/about-2.jpg' alt='' />
      </div>

      <div className={styles.info}>
        <img className={styles.img} src='/images/about-3.jpg' alt='' />
        <p className={styles.text}>
          Yolculuk, bizim için keşfetmenin ve öğrenmenin anahtarıdır. Her
          seyahat, bize yeni hikayeler, yeni arkadaşlıklar ve unutulmaz anılar
          sunar. Her seyahat, sadece gözlerimize hitap eden manzaralar değil,
          aynı zamanda kalplerimize dokunan anlarla doludur.
        </p>
      </div>
      <p className={styles['result-text']}>
        Haydi, doğanın çağrısına kulak verin ve VANCA ile yepyeni bir serüvene
        yelken açın. Çünkü biz, her kilometrede yeni bir hikaye, her durakta
        yeni bir dostluk vaat ediyoruz. VANCA ile yolculuğunuz, unutulmaz
        anılarla dolu bir maceraya dönüşecek. Her adımda, yeni keşiflerle dolu
        bir dünya sizi bekliyor olacak. Özgürlüğün kanatları altında, doğanın
        büyüsüne kapılın ve hayatın tüm renklerini deneyimleyin.
      </p>
    </div>
  );
};

export default About;
