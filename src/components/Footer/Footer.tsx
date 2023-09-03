import styles from "./Footer.module.scss";
import { links } from "../../constants/constants";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Designed by Dexola - 2023</span>
      <nav className={styles.dexolaContacts}>
        {links.map((item) => {
          const { to, imgPath, id, name } = item;

          return (
            <a href={to} key={id} >
              <img src={imgPath} alt={name} className={styles.contactsImg}/>
            </a>
          );
        })}
      </nav>
      <span>© All rights reserved</span>
    </footer>
  );
};

export default Footer;
