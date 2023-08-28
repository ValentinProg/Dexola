import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import styles from "./JoinUsSection.module.scss";
import arrowLine from "../../../assets/arrowLine.svg";
import Form from "../../UI/Form/Form";

const JoinUsSection = () => {
  return (
    <>
      <SectionTitle sectionTitleNumber="03">Join Us</SectionTitle>
      <section className={styles.joinUs}>
        <div className={styles.joinUsInfo}>
          <h3>Experience the Power of StarRunner</h3>
          <div className={styles.joinUsInfoContent}>
            Join Our Community and Embark on a Journey of Opportunities.
            Discover the full range of our services that cater to your needs.
            We've got you covered with top-notch solutions.
          </div>
          <img src={arrowLine} alt="arrowLine" />
        </div>
        <Form />
      </section>
    </>
  );
};

export default JoinUsSection;
