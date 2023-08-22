import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import styles from './JoinUsSection.module.scss'



const JoinUsSection = () => {
    return (
    <>
    <SectionTitle sectionTitleNumber='03'>Join Us</SectionTitle>
     <div className={styles.JoinUsSectionSection}> 
        <div><h1>Animations</h1></div>
        <span><h1>Dexola</h1></span>
     </div>
     </>
    );
  };
  
  export default JoinUsSection;