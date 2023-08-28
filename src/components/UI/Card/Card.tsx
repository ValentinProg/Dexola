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
      
      <div className={styles.imgContainer}>
        <img src={cardImgName} className={styles.cardImg} />
      </div>
      <div className={styles.cardContent}>
        <h3>
          <span className={styles.cardTitleNumber}>{cardTitleNumber}</span>
          <span>{cardTitle}</span>
        </h3>
        <div className={styles.cardText}>{children}</div>
       
      </div>
      <div className={styles.cardTextLink}>
      <Link to="">DISCOVER NOW</Link>
      </div>
    </div>
  );
};

export default Card;
