import styles from "./Link.module.scss";
import arrowImg from "../../../assets/arrow.svg";

interface LinkProps {
  imgName?: string;
  to?: string;
  linkContent: string;
}

const Link = ({ imgName, to, linkContent }: LinkProps) => {
  const linkImg = imgName === undefined ? arrowImg : imgName;

  return (
    <a href={to} className={styles.link}>
      <img src={linkImg} />
      {linkContent}
    </a>
  );
};

export default Link;
