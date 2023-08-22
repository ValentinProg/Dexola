import styles from "./FeaturesSection.module.scss";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import Card from "../../UI/Card/Card";
import cardImg1 from "../../../assets/cardImg1.png";
import cardImg2 from "../../../assets/cardImg2.png";
import cardImg3 from "../../../assets/cardImg3.png";

const FeauturesSection = () => {
  return (
    <>
      <SectionTitle sectionTitleNumber={"01"}>Features</SectionTitle>
      <section className={styles.feautures}>
        <div className={styles.featuresInfo}>
          <h2 className={styles.featuresInfoTitle}>About StarRunner</h2>
          <div className={styles.featuresInfoContent}>
            The StarRunner Blockchain Ecosystem isn't
            <br />a mere playground; it's a living, evolving entity
            <br />
            that adapts to the desires and creativity of its players.
          </div>
        </div>
        <div className={styles.feautureCards}>
          <Card
            cardImgName={cardImg1}
            cardTitleNumber="01"
            cardTitle="STRU Token sale"
          >
            The StarRunner Token the exclusive crypto currency fueling the
            adventure of the Play-to-Earn sensation.
          </Card>
          <Card cardImgName={cardImg2} cardTitleNumber="02" cardTitle="Staking">
            Join a thriving community <br /> of stakers, united by their passion
            for exploration, strategy, and gaming.
          </Card>
          <Card
            cardImgName={cardImg3}
            cardTitleNumber="03"
            cardTitle="NFT minting"
          >
            Every StarRunner NFT tells <br />a story - YOUR story. This NFT
            encapsulates the essence of your journey like never before.
          </Card>
        </div>
      </section>
    </>
  );
};

export default FeauturesSection;
