import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import Link from "../UI/Link/Link";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} />
      <Link to="#">Join Now</Link>
    </header>
  );
};

export default Header;
