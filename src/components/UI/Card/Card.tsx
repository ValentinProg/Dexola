import styles from "./Card.module.scss";
import Link from "../Link/Link";

interface CardProps {
  children: React.ReactNode;
  cardImgName: string;
  cardTitle: string;
  cardTitleNumber: string;
}

const Card = ({
  children,
  cardImgName,
  cardTitle,
  cardTitleNumber,
}: CardProps) => {
  return (
    <div className={styles.cardWrapper}>
      <img src={cardImgName} className={styles.cardImg} />
      <div className={styles.cardContent}>
        <h3>
          <span className={styles.cardTitleNumber}>{cardTitleNumber}</span>
          <span>{cardTitle}</span>
        </h3>
        <div className={styles.cardText}>{children}</div>
        <Link to="">DISCOVER NOW</Link>
      </div>
    </div>
  );
};

export default Card;
