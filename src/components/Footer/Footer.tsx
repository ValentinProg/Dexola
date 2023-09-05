import styles from "./Footer.module.scss";
import { links } from "../../constants/constants";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerFirstblockInfo}>
        <div>Designed by Dexola - 2023</div>
        <div>© All rights reserved</div>
      </div>
      <nav className={styles.dexolaContacts}>
        {links.map((item) => {
          const { to, imgPath, id, name } = item;

          return (
            <a href={to} key={id}>
              <img src={imgPath} alt={name} className={styles.contactsImg} />
            </a>
          );
        })}
      </nav>
      <div className={styles.footerSecondblockInfo}>© All rights reserved</div>
    </footer>
  );
};

export default Footer;
