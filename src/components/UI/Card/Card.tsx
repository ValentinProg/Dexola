import styles from "./Card.module.scss";
import Link from "../Link/Link";

interface CardProps {
  children: React.ReactNode;
  cardImgName: string;
  cardTitle: string;
  cardTitleNumber: string;
}

const Card = ({
  // remove children change to text
  children,
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
        {/* <div className={styles.cardContent}>
        <h3>
          <span className={styles.cardTitleNumber}>{cardTitleNumber}</span>
          <span>{cardTitle}</span>
        </h3>
          <p className={styles.cardText}>
            {children}
          </p>
          <Link to="" linkContent="DISCOVER NOW"/>
        </div> */}

        <div className={styles.cardContent}>
          <h3>
            <div className={styles.cardTitleNumber}>{cardTitleNumber}</div>
            <div>{cardTitle}</div>
          </h3>
          <p className={styles.cardText}>{children}</p>
        </div>
      </div>
      <div className={styles.cardLink}>
        <Link to="" linkContent="DISCOVER NOW" />
      </div>
    </div>
  );
};

export default Card;
