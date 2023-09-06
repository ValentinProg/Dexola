import styles from "./Card.module.scss";
import Link from "../Link/Link";

interface CardProps {
  cardText: string,
  cardImgName: string;
  cardTitle: string;
  cardTitleNumber: string;
}

const Card = ({
  cardText,
  cardImgName,
  cardTitle,
  cardTitleNumber,
}: CardProps) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContentWrapper}>
        <div className={styles.imgContainer}>
          <img src={cardImgName} className={styles.cardImg} />
        </div>
        <div className={styles.cardContent}>
          <h3>
            <div className={styles.cardTitleNumber}>{cardTitleNumber}</div>
            <div>{cardTitle}</div>
          </h3>
          <p className={styles.cardText}>{cardText}</p>
        </div>
      </div>
      <div className={styles.cardLink}>
        <Link to="" linkContent="DISCOVER NOW"/>
      </div>
    </div>
  );
};

export default Card;
