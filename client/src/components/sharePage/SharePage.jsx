import styles from './sharePage.module.css';
import { FaWhatsapp } from 'react-icons/fa';
import { IoCopy } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';
import { useState } from 'react';

const SharePage = () => {
  const [linkCopied, setLinkCopied] = useState(false);

  const handleTwitterShare = () => {
    const twitterUrl = 'https://twitter.com/messages/compose';
    window.open(twitterUrl, '_blank');
  };

  const handleWhatsappShare = (message) => {
    const currentPageUrl = window.location.href;
    const whatsappMessage = `whatsapp://send?text=${encodeURIComponent(
      currentPageUrl
    )}`;
    window.open(whatsappMessage, '_blank');
  };

  const handleInstagramShare = () => {
    const instagramUrl = 'https://www.instagram.com/direct/inbox/';
    window.open(instagramUrl, '_blank');
  };

  const handleCopyLink = () => {
    const currentPageUrl = window.location.href;
    navigator.clipboard.writeText(currentPageUrl);
    setLinkCopied(true);

    setTimeout(() => {
      setLinkCopied(false);
    }, 3000);
  };

  return (
    <div className={styles.shareContainer}>
      <span className={styles.title}>Bu karavanı paylaşın</span>
      <div>
        <ul className={styles.social}>
          <li onClick={handleCopyLink}>
            <IoCopy /> Bağlantıyı Kopyala
          </li>

          <li onClick={handleWhatsappShare}>
            <FaWhatsapp /> Whatsapp
          </li>
        </ul>
        <ul className={styles.social}>
          <li onClick={handleTwitterShare}>
            <FaXTwitter /> Twitter
          </li>
          <li onClick={handleInstagramShare}>
            <FaXTwitter /> Instagram
          </li>
        </ul>
        {linkCopied && (
          <span className={styles.linkCopied}>Bağlantı kopyalandı!</span>
        )}
      </div>
    </div>
  );
};

export default SharePage;
