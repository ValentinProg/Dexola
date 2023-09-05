import styles from "./FeaturesSection.module.scss";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import Card from "../../UI/Card/Card";
import cardImg1 from "../../../assets/CardImgs/cardImg1.png";
import cardImg2 from "../../../assets/CardImgs/cardImg2.png";
import cardImg3 from "../../../assets/CardImgs/cardImg3.png";

const FeauturesSection = () => {
  return (
    <>
      <div className={styles.heroTextMobile}>
        Prepare to be transported beyond the boundaries of traditional gaming
        with the StarRunner Ecosystem - the beating heart that drives the
        adrenaline-charged galactic P2E odyssey of 'StarRunner.'
      </div>
      <SectionTitle sectionTitleNumber={"01"}>Features</SectionTitle>
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
          <Card
            cardImgName={cardImg1}
            cardTitleNumber="01"
            cardTitle="STRU Token sale"
          >
            The StarRunner Token the exclusive crypto currency fueling the
            adventure of the Play-to-Earn sensation.
          </Card>
          <Card cardImgName={cardImg2} cardTitleNumber="02" cardTitle="Staking">
            Join a thriving community of stakers, united by their passion for
            exploration, strategy, and gaming.
          </Card>
          <Card
            cardImgName={cardImg3}
            cardTitleNumber="03"
            cardTitle="NFT minting"
          >
            Every StarRunner NFT tells a story - YOUR story. This NFT
            encapsulates the essence of your journey like never before.
          </Card>
        </div>
      </section>
    </>
  );
};

export default FeauturesSection;
