import styles from "./Link.module.scss";
import arrowImg from '../../../assets/arrow.svg'

interface LinkProps {
  children: React.ReactNode;
  imgName?: string;
  anchor: string;
}



const Link = ({ children, imgName, anchor }: LinkProps) => {
const linkImg = imgName === undefined ? arrowImg : imgName
  return (
    <a href={anchor} className={styles.link}>
      <img src={linkImg} />
      {children}
    </a>
  );
};

export default Link;
