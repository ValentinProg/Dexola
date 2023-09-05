import ImageAnimation from "../../UI/ImageAnimation/ImageAnimation";
import styles from "./HeroSection.module.scss";
import { imgArrayFirsrtBlock } from "../../../constants/constants";
import { imgArraySecondBlock } from "../../../constants/constants";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSectionContent}>
        <div className={styles.heroText}>
          Prepare to be transported beyond the boundaries of traditional gaming
          with the StarRunner Ecosystem - the beating heart that drives the
          adrenaline-charged galactic P2E odyssey of 'StarRunner.'
        </div>
        <div className={styles.heroImages}>
          <ImageAnimation
            animationInterval={3000}
            imgArray={imgArrayFirsrtBlock}
          />
          <ImageAnimation
            animationInterval={3300}
            imgArray={imgArraySecondBlock}
          />
        </div>
      </div>
      <div className={styles.heroTitle}>
        <div>
          <h1 className={styles.runningLine}>dexola camp</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
