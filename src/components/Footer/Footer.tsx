import styles from "./Footer.module.scss";
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import discord from '../../assets/discord.svg'
import telegram from '../../assets/telegram.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Designed by Dexola - 2023</span>
      <nav className={styles.dexolaContacts}>
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={instagram} alt="instagram" />
        </a>

        <a href="https://discord.com/">
          <img src={discord} alt="discord" />
        </a>
        <a href="https://telegram.org/">
          <img src={telegram} alt="telegram" />
        </a>
      </nav>
      <span>© All rights reserved</span>
    </footer>
  );
};

export default Footer;
