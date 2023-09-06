import styles from "./FeaturesSection.module.scss";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import Card from "../../UI/Card/Card";
import { cardsArr } from "../../../constants/constants";

const FeauturesSection = () => {
  return (
    <>
      <p className={styles.heroTextMobile}>
        Prepare to be transported beyond the boundaries of traditional gaming
        with the StarRunner Ecosystem - the beating heart that drives the
        adrenaline-charged galactic P2E odyssey of 'StarRunner.'
      </p>
      <SectionTitle sectionTitleNumber={"01"}>
        Features
      </SectionTitle>
      <section className={styles.feautures}>
        <div className={styles.featuresInfo}>
          <h3 className={styles.featuresInfoTitle}>About StarRunner</h3>
          <p className={styles.featuresInfoContent}>
            The StarRunner Blockchain Ecosystem isn't
            <br />
            a mere playground; it's a living, evolving entity <br />
            that adapts to the desires and creativity of its players.
          </p>
          <p
            className={`${styles.featuresInfoContent} ${styles.featuresInfoContentMobile}`}
          >
            The StarRunner Blockchain Ecosystem isn't a mere playground; it's a
            living, evolving entity that adapts to the desires and creativity of
            its players.
          </p>
        </div>
        <div className={styles.feautureCards}>
          {cardsArr.map((card, i:number) => {
            const {cardImg, cardTitle, cardText, cardTitleNumber} = card;

            return (
              <Card
                key={i}
                cardImgName={cardImg}
                cardTitle={cardTitle}
                cardTitleNumber={cardTitleNumber}
                cardText={cardText}
              />
            )
          })}
        </div>
      </section>
    </>
  );
};

export default FeauturesSection;
