import styles from "./Link.module.scss";
import arrowImg from '../../../assets/arrow.svg'

interface LinkProps {
  children: React.ReactNode;
  imgName?: string;
  to?: string;
}


const Link = ({ children, imgName, to }: LinkProps) => {
const linkImg = imgName === undefined ? arrowImg : imgName
// const linkImg = imgName ?? arrowImg

  return (
    <a href={to} className={styles.link}>
      <img src={linkImg} />
      {children}
    </a>
  );
};

export default Link;
