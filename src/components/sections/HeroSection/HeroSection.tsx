import styles from "./HeroSection.module.scss";
// import img5 from "../../../assets/5.png";
// import b1Img1 from "../../../assets/b1i1.png";
// import b1Img2 from "../../../assets/b1i2.png";
// import b1Img3 from "../../../assets/b1i3.png";
// import b1Img4 from "../../../assets/b1i4.png";
// import b1Img5 from "../../../assets/b1i5.png";

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
          <div className={styles.firstBlockImg}>
            {/*             
              <img src={b1Img1} />
              <img src={b1Img2} /
              <img src={b1Img3} />
              <img src={b1Img4} />
              <img src={b1Img5} /> */}
          </div>
          <div className={styles.secondBlockImg}></div>
        </div>
      </div>
      <div className={styles.heroTitle}>
        <div>
          <h1 className={styles.runningLine}>dexola camp</h1>
        </div>
      </div>
      <div className={`${styles.heroText} ${styles.heroTextMobile} `}>
        Prepare to be transported beyond the boundaries of traditional gaming
        with the StarRunner Ecosystem - the beating heart that drives the
        adrenaline-charged galactic P2E odyssey of 'StarRunner.'
      </div>
    </section>
  );
};

export default HeroSection;
